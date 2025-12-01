import { CommunityItemProps } from "./components/ui/CommunityItem";

export const communities: CommunityItemProps[] = [
  {
    avatar: "/communityProfile.svg",
    name: "Cybergogs",
    lastMessage: "i went home last night",
    author: "Mansa",
    time: "11:00 am",
    unreadCount: 5,
  },
  {
    avatar: "/communityProfile.svg",
    name: "Cybergogs",
    lastMessage: "i went home last night",
    author: "Mansa",
    time: "11:00 am",
    unreadCount: 19,
  },
  {
    avatar: "/communityProfile.svg",
    name: "Cybergogs",
    lastMessage: "i went home last night",
    author: "Mansa",
    time: "11:00 am",
    unreadCount: 5,
  },
];

export const courses: Array<{
  image: string;
  lessonNumber: number;
  lessonsRemaining: number;
  title: string;
  progress: number;
  lastWatched: string;
  accentColor: "purple" | "blue" | "red";
}> = [
  {
    image: "/courses-placeholder-2.svg",
    lessonNumber: 6,
    lessonsRemaining: 56,
    title: "How to pusha cyber levels",
    progress: 30,
    lastWatched: "yesterday",
    accentColor: "purple",
  },
  {
    image: "/courses-placeholder.svg",
    lessonNumber: 5,
    lessonsRemaining: 56,
    title: "How to pusha cyber levels",
    progress: 30,
    lastWatched: "yesterday",
    accentColor: "blue",
  },
  {
    image: "/courses-placeholder-1.svg",
    lessonNumber: 5,
    lessonsRemaining: 56,
    title: "How to pusha cyber levels",
    progress: 30,
    lastWatched: "yesterday",
    accentColor: "red",
  },
];
