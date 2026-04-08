import { NextResponse } from "next/server"
import OpenAI from "openai"
import { z } from "zod"
import { mockAnalysis } from "@/lib/mock-analysis"

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
  confidenceNote: z.string()
})

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const { text } = bodySchema.parse(json)

    // Always return mock data in development
    if (process.env.NODE_ENV === 'development' || !process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        ...mockAnalysis,
        headline: text.slice(0, 90)
      })
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
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
5. lists unanswered investigative questions
6. includes a confidence note emphasizing uncertainty and evidence-seeking

Rules:
- Be sharp, intelligent, skeptical, and measured
- Do not make defamatory factual claims
- Do not present speculation as proven fact
- Use neutral language like "may", "could", "might", "one possible explanation is"
- Return only valid JSON matching this exact schema:
{
  "headline": "string",
  "dominantNarrative": "string",
  "missingContext": ["string"],
  "alternativeTheories": ["string"],
  "incentives": ["string"],
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

    const parsed = resultSchema.parse(JSON.parse(outputText))
    return NextResponse.json(parsed)
  } catch {
    return NextResponse.json(mockAnalysis)
  }
}
