export type AnalysisResponse = {
  headline: string
  dominantNarrative: string
  missingContext: string[]
  alternativeTheories: string[]
  incentives: string[]
  unansweredQuestions: string[]
  confidenceNote: string
}
