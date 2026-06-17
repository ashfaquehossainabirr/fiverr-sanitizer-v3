// grammarSuggestions.js

export function getGrammarSuggestions(text) {
  if (!text) return [];

  const rules = [
    {
      test: /\bpls\b|\bplz\b/i,
      message: 'Use "please" instead of informal abbreviations.',
      fix: (t) => t.replace(/\bpls\b|\bplz\b/gi, "please")
    },
    {
      test: /\bcan you\b/i,
      message: 'For a professional tone, use "Could you".',
      fix: (t) => t.replace(/\bcan you\b/gi, "Could you")
    },
    {
      test: /\bvery\s+(good|bad|nice)\b/i,
      message: 'Avoid "very". Try a stronger word.',
      fix: (t) =>
        t.replace(/\bvery\s+good\b/gi, "excellent")
         .replace(/\bvery\s+bad\b/gi, "terrible")
    },
    {
      test: /\b(\w+)\s+\1\b/i,
      message: "Repeated word detected.",
      fix: (t) => t.replace(/\b(\w+)\s+\1\b/gi, "$1")
    }
  ];

  return rules
    .filter(rule => rule.test.test(text))
    .map(rule => ({
      message: rule.message,
      fixedText: rule.fix(text)
    }));
}