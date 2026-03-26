import { AnalysisResponse } from "@/lib/types"

export const mockAnalysis: AnalysisResponse = {
  headline: "Sample News Narrative Analysis",
  dominantNarrative:
    "The mainstream framing presents the story as a straightforward sequence of events with obvious causes and limited ambiguity.",
  missingContext: [
    "What happened in the weeks leading up to this event?",
    "Which institutions benefit from the current framing?",
    "What relevant historical precedent is being ignored?",
    "Which primary source documents are missing from coverage?"
  ],
  alternativeTheories: [
    "The event may be part of a broader strategic communication campaign.",
    "The official framing could be incomplete rather than false.",
    "Economic or political incentives may be shaping which facts are emphasized.",
    "The timing of the coverage itself may be part of the story."
  ],
  incentives: [
    "Political actors may benefit from consolidating public opinion quickly.",
    "Media organizations benefit from simplified narratives that drive engagement.",
    "Corporate stakeholders may prefer explanations that minimize systemic scrutiny."
  ],
  unansweredQuestions: [
    "Who had the strongest incentive to shape the first narrative?",
    "What evidence has not yet been independently verified?",
    "Which experts or witnesses are not being quoted?",
    "What would disconfirm the dominant narrative?"
  ],
  confidenceNote:
    "This output is an exploratory analytical framework, not a claim of factual certainty. It should be used to generate better questions, not replace evidence."
}
