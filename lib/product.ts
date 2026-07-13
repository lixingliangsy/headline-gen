export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "HeadlineGen",
  slug: "headline-gen",
  tagline: "10 scroll-stopping headlines",
  description: "Give a topic and an angle and get 10 ready-to-test headlines - benefit, curiosity, list, how-to, or story. For writers, founders, and marketers who need a hook fast.",
  toolTitle: "Generate headlines",
  resultLabel: "Your headlines",
  ctaLabel: "Generate headlines",
  features: [
  "10 per run",
  "5 angles",
  "Platform-agnostic",
  "Copy-ready"
],
  inputs: [
  {
    "key": "topic",
    "label": "Topic / Product",
    "type": "input",
    "placeholder": "e.g. a productivity app for remote teams"
  },
  {
    "key": "angle",
    "label": "Angle",
    "type": "select",
    "options": [
      "Benefit",
      "Curiosity",
      "List",
      "How-to",
      "Story"
    ]
  }
] as InputField[],
  systemPrompt: "You are a copy chief. Given a topic and angle, write 10 distinct, click-worthy headlines in that angle style. Be specific; no clickbait that lies.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "Unlimited"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "Angle + A/B variants"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "Brand voice, API"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const topic = inputs['topic'] || 'your product'
  const angle = inputs['angle'] || 'Benefit'
  const base = [
    'The easiest way to ' + topic,
    'Why ' + topic + ' is harder than it should be',
    '7 things nobody tells you about ' + topic,
    'How to master ' + topic + ' in a weekend',
    'I tried ' + topic + ' for 30 days - here is what changed',
    'The ' + topic + ' mistake costing you time',
    'A simple system for ' + topic,
    'What top teams get right about ' + topic,
    'Stop struggling with ' + topic + ' - do this instead',
    'The honest truth about ' + topic
  ]
  return 'HEADLINES for "' + topic + '" (' + angle + ' angle)\n\n' + base.map((h,i)=> (i+1)+'. '+h).join('\n') + '\n\n--- (Mock set. Add OPENAI_API_KEY for angle-tuned, platform-specific headlines.)'
}
}
