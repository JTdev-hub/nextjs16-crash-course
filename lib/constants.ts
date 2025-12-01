export interface EventItems {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: EventItems[] = [
  {
    image: "/images/event1.png",
    title: "Tech Innovation Summit 2025",
    slug: "tech-innovation-summit-2025",
    location: "Manila Convention Center, Philippines",
    date: "January 15, 2026",
    time: "9:00 AM - 5:00 PM",
  },
  {
    image: "/images/event2.png",
    title: "Full-Stack Web Development Workshop",
    slug: "full-stack-web-dev-workshop",
    location: "Makati Business Hub, Quezon City",
    date: "February 20, 2026",
    time: "2:00 PM - 6:00 PM",
  },
  {
    image: "/images/event3.png",
    title: "Startup Founders Networking Night",
    slug: "startup-founders-networking",
    location: "BGC Coworking Space, Taguig",
    date: "March 8, 2026",
    time: "6:30 PM - 9:30 PM",
  },
  {
    image: "/images/event4.png",
    title: "AI & Blockchain Technology Expo",
    slug: "ai-blockchain-tech-expo",
    location: "SMX Convention Center, Pasay",
    date: "April 12, 2026",
    time: "10:00 AM - 7:00 PM",
  },
  {
    image: "/images/event5.png",
    title: "Design Thinking for Product Managers",
    slug: "design-thinking-workshop",
    location: "Innovation Hub, Ortigas Center",
    date: "May 5, 2026",
    time: "1:00 PM - 5:00 PM",
  },
];
