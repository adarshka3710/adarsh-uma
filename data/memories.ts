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
    id: "late-afternoon",
    date: "[Add date]",
    title: "That late afternoon",
    description:
      "You probably don't remember what we ate. I don't remember what we talked about. I only remember being ridiculously happy because I was with you.",
    image: "/memories/memory-01.svg",
    category: "favorite",
    location: "[Add location]",
    funnyCaption: "We took 19 photos. This was the least blurry one.",
    emotionalMessage: "Some days become important quietly.",
    placeholder: true,
  },
  {
    id: "laughing-too-long",
    date: "[Add date]",
    title: "The joke that lasted two hours",
    description:
      "[Replace this with the story of a completely stupid thing that made both of you laugh much longer than it deserved.]",
    image: "/memories/memory-02.svg",
    category: "stupid",
    funnyCaption: "Zero context. Maximum happiness.",
    emotionalMessage: "I hope we never become too serious for this.",
    placeholder: true,
  },
  {
    id: "quiet-day",
    date: "[Add date]",
    title: "A quiet day I kept",
    description:
      "[Replace this with a small moment that seemed ordinary then, but means much more now.]",
    image: "/memories/memory-03.svg",
    category: "emotional",
    location: "[Add location]",
    emotionalMessage: "I didn't know I was making a memory. I was just happy.",
    placeholder: true,
  },
  {
    id: "accidental-photo",
    date: "[Add date]",
    title: "The accidental photograph",
    description:
      "[Replace this with a candid photo and the tiny story behind it.]",
    image: "/memories/memory-04.svg",
    category: "random",
    funnyCaption: "Art direction: none. Affection: excessive.",
    placeholder: true,
  },
  {
    id: "somewhere-new",
    date: "[Add date]",
    title: "Somewhere new, together",
    description:
      "[Replace this with your favorite trip, walk, cafe, station, or place that now belongs to both of you.]",
    image: "/memories/memory-05.svg",
    category: "places",
    location: "[Add location]",
    emotionalMessage: "The place was beautiful. You were the part I remember.",
    placeholder: true,
  },
  {
    id: "screen-between-us",
    date: "[Add date]",
    title: "A screen between us",
    description:
      "[Replace this with a call screenshot, a message, or one of the ordinary long-distance evenings that kept you close.]",
    image: "/memories/memory-06.svg",
    category: "distance",
    funnyCaption: "Featuring premium 240p romance.",
    emotionalMessage: "Far away, never absent.",
    placeholder: true,
  },
];
