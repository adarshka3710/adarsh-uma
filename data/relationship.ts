export type TimelineYear = {
  year: number;
  label: string;
  date: string;
  story: string;
  funnyCaption: string;
  emotionalMemory: string;
  image: string;
};

export type CoupleFact = {
  question: string;
  adarsh: number;
  uma: number;
  verdict: string;
};

export const relationship = {
  names: {
    boyfriend: "Adarsh",
    girlfriend: "Uma",
  },
  anniversary: {
    displayDate: "23 September",
    startDate: "2021-09-23",
    years: 5,
  },
  distance: {
    kilometers: 847,
    adarshPlace: "Adarsh's city",
    umaPlace: "Uma's city",
  },
  audio: {
    src: "/audio/our-song.mp3",
    title: "Our Song",
  },
  timeline: [
    {
      year: 1,
      label: "Where it all started",
      date: "23 September 2021",
      story:
        "The beginning was awkward, exciting, and somehow already felt important.",
      funnyCaption: "Two people pretending to be completely normal about each other.",
      emotionalMemory:
        "I didn't know this would become my favorite story. I only knew I wanted another day with you.",
      image: "/memories/04_1.jpg",
    },
    {
      year: 2,
      label: "We were getting serious…",
      date: "September 2022",
      story:
        "We learned each other's moods, silences, snack orders, and suspiciously specific ways of saying “nothing.”",
      funnyCaption: "Still flirting. Now with scheduled arguments.",
      emotionalMemory:
        "Somewhere in the ordinary days, you stopped feeling like a chapter and started feeling like home.",
      image: "/memories/03_1.jpg",
    },
    {
      year: 3,
      label: "Definitely stuck with each other",
      date: "September 2023",
      story:
        "By now we had traditions, inside jokes, legendary fights, and stories nobody else could translate.",
      funnyCaption: "No refunds. Terms and conditions were never provided.",
      emotionalMemory:
        "You knew versions of me that were difficult to love, and you stayed long enough to know the softer ones too.",
      image: "/memories/14_1.jpg",
    },
    {
      year: 4,
      label: "Distance entered the chat",
      date: "September 2024",
      story:
        "Calls replaced walks. Screenshots replaced photographs. Missing you became part of the routine.",
      funnyCaption: "Romance, now available in unstable network quality.",
      emotionalMemory:
        "Distance changed the shape of us, but never the direction.",
      image: "/memories/23_1.jpg",
    },
    {
      year: 5,
      label: "Still you. Still us.",
      date: "23 September 2026",
      story:
        "Five years later, after every laugh, pause, fight, call, and comeback—here we are.",
      funnyCaption: "Plot twist: we still like each other.",
      emotionalMemory:
        "If I had to choose again, knowing every difficult part, I would still choose you.",
      image: "/memories/19_1.jpg",
    },
  ] satisfies TimelineYear[],
  facts: [
    {
      question: "Who is more dramatic?",
      adarsh: 37,
      uma: 63,
      verdict: "Scientific research confirms Uma wins. Obviously.",
    },
    {
      question: "Who apologizes first?",
      adarsh: 68,
      uma: 32,
      verdict: "Adarsh, because peace is a beautiful thing.",
    },
    {
      question: "Who says \"I'm fine\" while clearly not fine?",
      adarsh: 21,
      uma: 79,
      verdict: "The data was collected during a very brave interview.",
    },
    {
      question: "Who is secretly more obsessed?",
      adarsh: 52,
      uma: 48,
      verdict: "Too close to call. Both suspects remain under observation.",
    },
  ] satisfies CoupleFact[],
  insideJokes: [
    {
      title: "That one conversation…",
      text: "We still quote it with a straight face, and somehow it still makes sense only to us.",
      tape: "wine",
    },
    {
      title: "The legendary fight",
      text: "Nobody remembers how it started. Everyone remembers who made the first joke afterward.",
      tape: "gold",
    },
    {
      title: "Our accidental nickname",
      text: "It was never supposed to stick. Five years later, it still answers to us.",
      tape: "blush",
    },
    {
      title: "The joke that refuses to die",
      text: "We've told it approximately 4,000 times. It still gets a reaction. Science cannot explain this.",
      tape: "peach",
    },
  ],
  chat: [
    { sender: "Adarsh", text: "Did you eat?" },
    { sender: "Uma", text: "Yes." },
    { sender: "Adarsh", text: "What did you eat?" },
    { sender: "Uma", text: "Why?" },
    { sender: "Adarsh", text: "Just asking…" },
  ],
  loveReasons: [
    "I love the way you laugh when you stop trying to be quiet.",
    "I love how you annoy me and make me smile in the same breath.",
    "I love how you care about details everyone else misses.",
    "I love talking to you when we have absolutely nothing to say.",
    "I love that your voice can make an unfamiliar place feel less lonely.",
    "I love your dramatic “nothing” that has never once meant nothing.",
    "I love how we can be ridiculous and serious five seconds apart.",
    "I love the life in your eyes when you talk about something you care about.",
    "I love that after five years, you're still my favorite notification.",
    "I love every version of us that fought its way here.",
    "I love that distance has never made you feel less present.",
    "I love that I still discover new reasons to choose you.",
  ],
  letter: [
    "Dear Uma,",
    "Five years.",
    "Honestly, I don't know how we got here so quickly.",
    "We've laughed. We've fought. We've annoyed each other. We've missed each other. We've forgiven each other. We've grown together.",
    "There were easy days, and days when loving each other meant deciding not to walk away. There were calls that fixed everything, and silences that taught us how to listen better.",
    "Being far from you has made me understand something simple: your place in my life was never measured in kilometers.",
    "Through every version of us—messy, silly, stubborn, soft—there has always been one thing I could come back to.",
    "It's still you.",
    "Happy fifth anniversary, Uma. Thank you for staying, growing, laughing, and dreaming with me.",
    "Love,\nAdarsh",
  ],
  futureCards: [
    { title: "Future trip", note: "A window seat and nowhere to rush." },
    { title: "Future date", note: "No screens between us." },
    { title: "Future home", note: "Our ordinary days, finally shared." },
    { title: "Future adventures", note: "Wrong turns included." },
    { title: "Future memories", note: "Space intentionally left for us." },
    { title: "Future us", note: "Still choosing. Still becoming." },
  ],
  missYouMessages: [
    "I miss you too. Ridiculously much.",
    "Distance is annoying. You are worth it.",
    "Come here already, please.",
    "One day we'll laugh about all these kilometers.",
    "Consider this a long-distance hug.",
  ],
  secretMessages: [
    "Psst…",
    "You found the secret.",
    "Adarsh loves you more than he admits.",
    "Okay, fine… A LOT more.",
  ],
} as const;
