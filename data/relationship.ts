/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE TEXT LIVES HERE
 *  Change names, dates, and copy in this file only.
 * ─────────────────────────────────────────────────────────────
 */

/** Change these two names and the whole site updates. */
export const names = {
  him: "Adarsh",
  her: "Moos",
  herSurname: "Moose",


} as const;

export type PersonName = (typeof names)["him"] | (typeof names)["her"];

export const site = {
  years: 5,
  displayDate: "23 September",
  heroDate: "23 · 09 · 2026",
  ogDate: "23 · SEPTEMBER · 2026",
  startDate: "2021-09-23",
  coupleLabel: `${names.him} × ${names.her}`,
  title: `5 Years of ${names.him} & ${names.her}`,
  shortTitle: "5 Years of Us",
  description: `Five years of memories, laughter, distance, and one love—made by ${names.him} for ${names.her}.`,
  ogDescription: "A little corner of the internet where our five years live.",
  twitterDescription: "23 September. Five years down, forever to go.",
  iconInitials: `${names.him[0]}×${names.her[0]}`,
} as const;

/** Section headings, buttons, and UI strings. */
export const copy = {
  intro: {
    lines: [
      `${names.herSurname}…`,
      "I made something for you.",
      "Something I couldn't put inside a box.",
      "So I put it here instead.",
    ],
    title: "5 Years of Us",
    openLetter: "Open your letter",
    skip: "Skip intro",
  },
  hero: {
    lines: ["5 Years.", "Countless Memories.", "One Love."],
    note: ["Somehow, five years passed…", "and I still choose you."],
    cta: "Open our story",
  },
  timeline: {
    title: "Where time learned our names.",
    note: "Five frames. One story that kept moving.",
  },
  gallery: {
    title: "The moments I keep replaying.",
    note: "Irreplaceable evidence.",
    photoSoon: "Photo coming soon.",
  },
  distance: {
    titleLines: ["Different places.", "Same heart."],
    note: "Not a goodbye. Just a long way to the next hug.",
    lead: "Being far away from you isn't easy.",
    misses: [
      "We miss birthdays.",
      "We miss random hugs.",
      "We miss sitting next to each other.",
      "We miss doing absolutely nothing together.",
    ],
    quote: "But we still find ways to be part of each other's ordinary days.",
    chatStatus: "one call away",
    typing: `${names.her} is typing…`,
    punchline: "Five years later… still asking.",
    missYouButton: "Miss you",
  },
  love: {
    title: "Five years later, here's what I still love.",
    note: "A very incomplete list, in no particular order.",
  },
  letter: {
    title: `${names.her}, this one is for you.`,
    readAll: "Read it all now",
  },
  numbers: {
    title: "Our five years in numbers.",
    note: "The only math I have ever enjoyed.",
    stillCounting: "Still counting.",
    items: [
      { kind: "count" as const, value: 5, suffix: "", label: "years together" },
      { kind: "count" as const, value: 60, suffix: "", label: "months of us" },
      { kind: "count" as const, value: 1826, suffix: "+", label: "days, give or take a leap year" },
      { kind: "text" as const, value: "∞", label: "memories" },
      { kind: "text" as const, value: "too many", label: "arguments" },
      { kind: "text" as const, value: "countless", label: "Umma😘" },
    ],
  },
  movie: {
    titleLines: ["The Story", "of Us"],
    genres: "Romance · Comedy · Drama · Chaos",
    himRole: "Professional Annoyer",
    herRole: "Professional Heart Stealer",
    runtime: "Runtime: 5 years… and still ongoing.",
  },
  future: {
    title: "To be continued…",
    note: "The best part is how much we haven't seen yet.",
    promise: [
      "We already have five years of memories.",
      "Let's make the next five even better.",
    ],
  },
  finale: {
    countdown: [
      "5 years…",
      "60 months…",
      "countless calls…",
      "too many fights…",
      "way too many laughs…",
      "and one person…",
    ],
    you: "you.",
    greeting: `Hey ${names.her}…`,
    headline: "Happy 5th Anniversary.",
    body: [
      "I couldn't wrap this. I couldn't put it in a box.",
      "So I put five years of us into this.",
    ],
    quote:
      "Thank you for being my favorite person, my favorite problem, my favorite notification, and my favorite part of every day.",
    toast: "Here's to everything we've been, everything we are, and everything we're going to become.",
    closingLines: ["5 years down.", "Forever to go."],
    signature: `— ${names.him}`,
    oneLastThing: "One last thing",
  },
  surprise: {
    finalLine: "Still choosing you.",
    finalStrong: "Every single time.",
  },
  music: {
    play: "Play our song",
    pause: "Pause our song",
    playing: "Playing softly…",
    missing: "Add /public/audio/our-song.mp3",
    mute: "Mute music",
    unmute: "Unmute music",
  },
  actions: {
    oneMoreMemory: "One more memory",
    secret: "A tiny secret",
  },
} as const;

export type TimelineYear = {
  year: number;
  label: string;
  date: string;
  story: string;
  funnyCaption: string;
  emotionalMemory: string;
  image: string;
};

export const relationship = {
  names: {
    boyfriend: names.him,
    girlfriend: names.her,
  },
  anniversary: {
    displayDate: site.displayDate,
    startDate: site.startDate,
    years: site.years,
  },
  distance: {
    kilometers: 8778,
    himPlace: `${names.him}'s city`,
    herPlace: `${names.her}'s city`,
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
  chat: [
    { sender: names.him, text: "Gumng museeee🫂😘" },
    { sender: names.her, text: "1005 gumng adarsheeeiii🫂😘" },
    { sender: names.him, text: "1005😘😘" },
    { sender: names.her, text: "ntheyaarnnuuu" },
    { sender: names.him, text: "onnum cheyanilaa" },
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
    `${names.herSurname},`,
    "Five years.",
    "Honestly, I don't know how we got here so quickly.",
    "We've laughed. We've fought. We've annoyed each other. We've missed each other. We've forgiven each other. We've grown together.",
    "There were easy days, and days when loving each other meant deciding not to walk away. There were calls that fixed everything, and silences that taught us how to listen better.",
    "Being far from you has made me understand something simple: your place in my life was never measured in kilometers.",
    "Through every version of us—messy, silly, stubborn, soft—there has always been one thing I could come back to.",
    "It's still you.",
    `Happy fifth anniversary, ${names.her}. Thank you for staying, growing, laughing, and dreaming with me.`,
    `Love,\n${names.him}`,
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
    `${names.him} loves you more than he admits.`,
    "Okay, fine… A LOT more.",
  ],
} as const;
