export type MemoryCategory =
  | "favorite"
  | "stupid"
  | "emotional"
  | "random"
  | "places"
  | "distance";

export type Memory = {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
  category: MemoryCategory;
  location?: string;
  funnyCaption?: string;
  emotionalMessage?: string;
  placeholder?: boolean;
};

export const memoryCategories: {
  id: "all" | MemoryCategory;
  label: string;
  mark: string;
}[] = [
  { id: "all", label: "All our chaos", mark: "∞" },
  { id: "favorite", label: "Favorite moments", mark: "♡" },
  { id: "stupid", label: "Stupid moments", mark: "!" },
  { id: "emotional", label: "The emotional ones", mark: "·" },
  { id: "random", label: "Random memories", mark: "?" },
  { id: "places", label: "Places we've been", mark: "↗" },
  { id: "distance", label: "Long-distance days", mark: "—" },
];

export const memories: Memory[] = [
  {
    id: "carved-chairs",
    date: "A day that still feels warm",
    title: "That carved-chair selfie",
    description:
      "You probably don't remember what we ate. I don't remember what we talked about. I only remember being ridiculously happy because I was with you.",
    image: "/memories/01_1.jpg",
    category: "favorite",
    funnyCaption: "We took 19 photos. This was the least blurry one.",
    emotionalMessage: "Some days become important quietly.",
  },
  {
    id: "memory-02",
    date: "Somewhere in our story",
    title: "One of those soft days",
    description: "A quiet little frame from our five years.",
    image: "/memories/02_1.jpg",
    category: "emotional",
    emotionalMessage: "I didn't know I was making a memory. I was just happy.",
  },
  {
    id: "memory-03",
    date: "Somewhere in our story",
    title: "Caught mid-laugh",
    description: "Proof that we never ran out of reasons to smile.",
    image: "/memories/03_1.jpg",
    category: "stupid",
    funnyCaption: "Zero context. Maximum happiness.",
  },
  {
    id: "memory-04",
    date: "Somewhere in our story",
    title: "A candid we kept",
    description: "Not planned. Not perfect. Completely us.",
    image: "/memories/04_1.jpg",
    category: "random",
    funnyCaption: "Art direction: none. Affection: excessive.",
  },
  {
    id: "park-selfie",
    date: "An ordinary outdoor day",
    title: "Park day, favorite day",
    description:
      "Trees behind us, city noise somewhere far away, and you right next to me.",
    image: "/memories/05_1.jpg",
    category: "places",
    location: "Outside, together",
    funnyCaption: "The grass was doing its job. So were we.",
    emotionalMessage: "The place was beautiful. You were the part I remember.",
  },
  {
    id: "memory-06",
    date: "Somewhere in our story",
    title: "Little frame, big feeling",
    description: "One more reminder that ordinary days can feel like forever.",
    image: "/memories/06_1.jpg",
    category: "emotional",
  },
  {
    id: "memory-07",
    date: "Somewhere in our story",
    title: "That look",
    description: "If someone asked me what home looks like, I'd show them this.",
    image: "/memories/07_1.jpg",
    category: "favorite",
  },
  {
    id: "memory-08",
    date: "Somewhere in our story",
    title: "Accidentally perfect",
    description: "We weren't trying to look cute. We just were.",
    image: "/memories/08_1.jpg",
    category: "random",
  },
  {
    id: "memory-09",
    date: "Somewhere in our story",
    title: "Still my favorite notification",
    description: "Five years later, you still light up a room like this.",
    image: "/memories/09_1.jpg",
    category: "favorite",
  },
  {
    id: "close-laugh",
    date: "A soft indoor day",
    title: "When the laugh won",
    description:
      "Your laugh, my arm around you, and a whole world that suddenly felt quieter.",
    image: "/memories/10_1.jpg",
    category: "favorite",
    funnyCaption: "Sunglasses hanging. Hearts doing overtime.",
    emotionalMessage: "This is the version of us I never want to forget.",
  },
  {
    id: "memory-11",
    date: "Somewhere in our story",
    title: "Us, again",
    description: "Another day, another reason to choose you.",
    image: "/memories/11_1.jpg",
    category: "favorite",
  },
  {
    id: "memory-12",
    date: "Somewhere in our story",
    title: "Tiny chaos, big smile",
    description: "Because apparently love means being ridiculous together.",
    image: "/memories/12_1.jpg",
    category: "stupid",
    funnyCaption: "Official scientific conclusion: we are unserious people.",
  },
  {
    id: "memory-13",
    date: "Somewhere in our story",
    title: "A moment I kept",
    description: "I don't remember every detail. I remember how safe it felt.",
    image: "/memories/13_1.jpg",
    category: "emotional",
  },
  {
    id: "memory-14",
    date: "Somewhere in our story",
    title: "Random and necessary",
    description: "Not every memory needs a ceremony. Some just need to exist.",
    image: "/memories/14_1.jpg",
    category: "random",
  },
  {
    id: "blossom-cafe",
    date: "A themed little escape",
    title: "Cherry blossoms and us",
    description:
      "Pink flowers, teal walls, and the two of us pretending we weren't obsessed with each other.",
    image: "/memories/15_1.jpg",
    category: "places",
    location: "That pretty cafe",
    funnyCaption: "The tree was fake. The smile was not.",
  },
  {
    id: "memory-16",
    date: "Somewhere in our story",
    title: "Soft focus, softer feelings",
    description: "One of those frames that still slows me down.",
    image: "/memories/16_1.jpg",
    category: "emotional",
  },
  {
    id: "memory-17",
    date: "Somewhere in our story",
    title: "Favorite kind of chaos",
    description: "If this is what five years looks like, I want fifty.",
    image: "/memories/17_1.jpg",
    category: "favorite",
  },
  {
    id: "memory-18",
    date: "Somewhere in our story",
    title: "The silly one",
    description: "We were probably laughing at something that made no sense.",
    image: "/memories/18_1.jpg",
    category: "stupid",
    funnyCaption: "If you remember the joke, please remind me immediately.",
  },
  {
    id: "memory-19",
    date: "Somewhere in our story",
    title: "A place that became ours",
    description: "Wherever we stood, it somehow started belonging to us.",
    image: "/memories/19_1.jpg",
    category: "places",
  },
  {
    id: "mirror-selfie",
    date: "A quiet room day",
    title: "Mirror, phone, forever",
    description:
      "A simple mirror selfie that somehow carries a whole chapter of us.",
    image: "/memories/20_1.jpg",
    category: "random",
    funnyCaption: "Professional photographers hate this one trick.",
    emotionalMessage: "Even the ordinary days with you feel cinematic.",
  },
  {
    id: "memory-21",
    date: "Somewhere in our story",
    title: "Still choosing this",
    description: "Every version of us ends up looking like home.",
    image: "/memories/21_1.jpg",
    category: "favorite",
  },
  {
    id: "memory-22",
    date: "Somewhere in our story",
    title: "That soft smile",
    description: "I could recognize this expression in any lifetime.",
    image: "/memories/22_1.jpg",
    category: "emotional",
  },
  {
    id: "memory-23",
    date: "Somewhere in our story",
    title: "Distance-proof happiness",
    description: "Even when life gets complicated, we still find our way back here.",
    image: "/memories/23_1.jpg",
    category: "distance",
    emotionalMessage: "Far away, never absent.",
  },
  {
    id: "memory-24",
    date: "Somewhere in our story",
    title: "One more ordinary miracle",
    description: "Nothing dramatic. Just us. Which is enough.",
    image: "/memories/24_1.jpg",
    category: "random",
  },
  {
    id: "banyan-selfie",
    date: "Under the trees",
    title: "Roots and us",
    description:
      "Warm light, old trees, and the feeling that we were growing into something lasting.",
    image: "/memories/25_1.jpg",
    category: "places",
    location: "Outside, under the trees",
    emotionalMessage: "Some photos feel like promises.",
  },
  {
    id: "memory-26",
    date: "Somewhere in our story",
    title: "The one that makes me soft",
    description: "If I ever forget why I stay, this is a reminder.",
    image: "/memories/26_1.jpg",
    category: "emotional",
  },
  {
    id: "memory-27",
    date: "Somewhere in our story",
    title: "Accidentally iconic",
    description: "We didn't mean to look this much like a love story.",
    image: "/memories/27_1.jpg",
    category: "random",
  },
  {
    id: "memory-28",
    date: "Somewhere in our story",
    title: "Five years of this energy",
    description: "Same chaos. Same chemistry. Still us.",
    image: "/memories/28_1.jpg",
    category: "favorite",
  },
  {
    id: "memory-29",
    date: "Somewhere in our story",
    title: "A screen can't hold this",
    description: "Some moments survive every kilometer between us.",
    image: "/memories/29_1.jpg",
    category: "distance",
    funnyCaption: "Featuring premium real-life romance.",
  },
  {
    id: "monday-selfie",
    date: "A Monday afternoon",
    title: "Monday, 02:21 pm",
    description:
      "Proof that even a random Monday can become a forever frame.",
    image: "/memories/30_1.jpg",
    category: "emotional",
    funnyCaption: "Timestamp included. Feelings not optional.",
  },
  {
    id: "memory-31",
    date: "Somewhere in our story",
    title: "Still my favorite person",
    description: "After everything, the answer is still you.",
    image: "/memories/31_1.jpg",
    category: "favorite",
  },
  {
    id: "memory-32",
    date: "Somewhere in our story",
    title: "Long-distance courage",
    description: "Missing you never made me love you less. Only louder.",
    image: "/memories/32_1.jpg",
    category: "distance",
  },
  {
    id: "memory-33",
    date: "Somewhere in our story",
    title: "The unserious archives",
    description: "We have a whole museum of nonsense. This is one wing.",
    image: "/memories/33_1.jpg",
    category: "stupid",
  },
  {
    id: "memory-34",
    date: "Somewhere in our story",
    title: "Another place we made ours",
    description: "Wherever we went, the memory followed us home.",
    image: "/memories/34_1.jpg",
    category: "places",
  },
  {
    id: "scooter-day",
    date: "A bright outdoor day",
    title: "Scooter, sun, and us",
    description:
      "A little ride, a big smile, and the kind of day that feels like a movie still.",
    image: "/memories/35_1.jpg",
    category: "random",
    funnyCaption: "Honda approved. Heart approved.",
    emotionalMessage: "Even the in-between days belong to us.",
  },
];
