import { NextResponse } from "next/server"
import OpenAI from "openai"
import { z } from "zod"
import { mockAnalysis } from "@/lib/mock-analysis"
import type { AnalysisResponse } from "@/lib/types"

const bodySchema = z.object({
  text: z.string().min(20)
})

const resultSchema = z.object({
  headline: z.string(),
  dominantNarrative: z.string(),
  missingContext: z.array(z.string()),
  alternativeTheories: z.array(z.string()),
  incentives: z.array(z.string()),
  unansweredQuestions: z.array(z.string()),
  confidenceNote: z.string(),
  keyAssumptions: z.array(z.string()),
  potentialBiases: z.array(z.string()),
  counterpoints: z.array(z.string())
})

function mergeWithMock(partial: Partial<AnalysisResponse>, fallbackHeadline: string): AnalysisResponse {
  return {
    headline:
      typeof partial.headline === "string" && partial.headline.trim().length > 0
        ? partial.headline.trim()
        : fallbackHeadline,
    dominantNarrative: partial.dominantNarrative ?? mockAnalysis.dominantNarrative,
    missingContext: partial.missingContext ?? mockAnalysis.missingContext,
    alternativeTheories: partial.alternativeTheories ?? mockAnalysis.alternativeTheories,
    incentives: partial.incentives ?? mockAnalysis.incentives,
    unansweredQuestions: partial.unansweredQuestions ?? mockAnalysis.unansweredQuestions,
    confidenceNote: partial.confidenceNote ?? mockAnalysis.confidenceNote,
    keyAssumptions: partial.keyAssumptions ?? mockAnalysis.keyAssumptions,
    potentialBiases: partial.potentialBiases ?? mockAnalysis.potentialBiases,
    counterpoints: partial.counterpoints ?? mockAnalysis.counterpoints
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const { text } = bodySchema.parse(json)
    const headline = text.slice(0, 90)

    if (process.env.NODE_ENV === "development" || !process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        ...mockAnalysis,
        headline
      })
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || "",
      timeout: 30000
    })

    const prompt = `
You are an analytical news deconstruction engine for a product called Cxntradict.

Your job:
Given a news excerpt or summary, produce a structured analysis that:
1. identifies the dominant narrative
2. lists missing context
3. offers alternative theories or explanations without claiming certainty
4. explains likely incentives and power structures involved
5. lists key assumptions the dominant narrative may be relying on
6. notes potential biases in sourcing, framing, or emphasis (without accusing individuals of bad faith)
7. states measured counterpoints to speculative alternatives
8. lists unanswered investigative questions
9. includes a confidence note emphasizing uncertainty and evidence-seeking

Rules:
- Be sharp, intelligent, skeptical, and measured
- Do not make defamatory factual claims
- Do not present speculation as proven fact
- Use neutral language like "may", "could", "might", "one possible explanation is"
- Return only valid JSON matching this exact schema (no markdown, no commentary):
{
  "headline": "string (short label derived from the input)",
  "dominantNarrative": "string",
  "missingContext": ["string"],
  "alternativeTheories": ["string"],
  "incentives": ["string"],
  "keyAssumptions": ["string"],
  "potentialBiases": ["string"],
  "counterpoints": ["string"],
  "unansweredQuestions": ["string"],
  "confidenceNote": "string"
}

Analyze this text:
${text}
`

    const response = await client.responses.create({
      model: "gpt-5",
      input: prompt
    })

    const outputText =
      response.output_text && response.output_text.trim().length > 0
        ? response.output_text
        : JSON.stringify(mockAnalysis)

    let parsedJson: unknown
    try {
      parsedJson = JSON.parse(outputText)
    } catch {
      return NextResponse.json(mergeWithMock({}, headline))
    }

    const parsed = resultSchema.safeParse(parsedJson)
    if (parsed.success) {
      return NextResponse.json(parsed.data)
    }

    const partial = resultSchema.partial().safeParse(parsedJson)
    if (partial.success) {
      return NextResponse.json(mergeWithMock(partial.data, headline))
    }

    return NextResponse.json({ ...mockAnalysis, headline })
  } catch {
    return NextResponse.json(mockAnalysis)
  }
}
