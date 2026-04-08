'use client'

import React from "react"

export function CopyInsightsButton({ data }: {
  data: {
    keyAssumptions: string[]
    potentialBiases: string[]
    counterpoints: string[]
  }
}) {
  const handleCopy = async () => {
    const insights = [
      `Key Assumptions:\n${data.keyAssumptions.join('\n')}`,
      `Potential Biases:\n${data.potentialBiases.join('\n')}`,
      `Counterpoints:\n${data.counterpoints.join('\n')}`
    ].join('\n\n');
    
    try {
      await navigator.clipboard.writeText(insights)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button 
      onClick={handleCopy}
      className="text-xs px-3 py-1 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
    >
      Copy Insights
    </button>
  )
}
