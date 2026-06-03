export const prompts = {
  resumeAnalysis: (resume: string) => `
Analyze this resume:

${resume}

Give:
1. Strengths
2. Weaknesses
3. Suggestions
`,
};
