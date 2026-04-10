export type AnalysisResponse = {
  headline: string
  dominantNarrative: string
  missingContext: string[]
  alternativeTheories: string[]
  incentives: string[]
  unansweredQuestions: string[]
  confidenceNote: string
  keyAssumptions: string[]
  potentialBiases: string[]
  counterpoints: string[]
  headline: string
  dominantNarrative: string
  missingContext: string[]
  alternativeTheories: string[]
  incentives: string[]
  unansweredQuestions: string[]
  confidenceNote: string
  keyAssumptions: string[]
  potentialBiases: string[]
  counterpoints: string[]
}

export type RecentAnalysis = {
  id: string
  headline: string
  preview: string
  timestamp: number
  data: AnalysisResponse
}
