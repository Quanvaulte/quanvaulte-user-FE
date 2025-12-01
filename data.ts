import { CommunityItemProps } from "./components/ui/CommunityItem";
import { BadgeCardProps } from "./components/ui/BadgeCard";
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

export const badges: BadgeCardProps[] = [
  {
    icon: "/first-step.svg",
    title: "First step",
    description: "Complete 4 lessons",
    points: 220,
    progress: 75,
    theme: "purple",
  },
  {
    icon: "/cyber-prince.svg",
    title: "Prince of Cyber",
    description: "Complete 4 lessons",
    points: 220,
    progress: 50,
    theme: "orange",
  },
  {
    icon: "/first-step.svg",
    title: "Master Achiever",
    description: "Complete 10 lessons",
    points: 500,
    progress: 100,
    theme: "blue",
  },
  {
    icon: "/cyber-prince.svg",
    title: "Rising Star",
    description: "Complete 2 lessons",
    points: 100,
    progress: 30,
    theme: "green",
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
