import Kard1 from "../assets/benefits/card-1.svg";
import Kard2 from "../assets/benefits/card-2.svg";
import Kard3 from "../assets/benefits/card-3.svg";
import Kard4 from "../assets/benefits/card-4.svg";
import Kard5 from "../assets/benefits/card-5.svg";
import Kard6 from "../assets/benefits/card-6.svg";


import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Name Fetched",
  "Clip Fetched",
  "AniListID Fetched",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Pay once and use forever ",
    price: "4.99",
    features: [
      "Almost unlimited usage (check out nerd stuff for more info)",
      "Support for me to keep the project alive and running",
      "No additional costs or hidden fees",
    ],
  },
  {
    id: "1",
    title: "Premium ",
    description: "Subscription-based model to support me , (same as basic , no extra features)",
    price: "9.99",
    features: [
      "Almost unlimited usage (check out nerd stuff for more info)",
      "Help me build in gaming pc",
      "Your name in future projects as a supporter",
    ],
  },
  {
    id: "2",
    title: "Chad",
    description: "Additional donations to support me and my work",
    price: null,
    features: [
      "Almost unlimited usage (check out nerd stuff for more info)",
      "Help me build in gaming pc",
      "Your name in future projects as a supporter",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Search Using Random Anime Pic",
    text: "Just upload the image and get the anime name and episode number. ",
    backgroundUrl: Kard1,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Image URL Support",
    text: "You can also provide the URL of the image to get the anime name and episode number",
    backgroundUrl: Kard2,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Customize Your Search",
    text: "Easily tailor your anime search by specifying genres, characters, or themes. Find the perfect anime match to suit your preferences(coming soon)",
    backgroundUrl: Kard3,
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Instant Recommendations",
    text: "Discover new anime gems with our personalized recommendation engine. Receive tailored suggestions based on your viewing history and preferences.",
    backgroundUrl: Kard4,
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Simplified Interface",
    text: "Navigate effortlessly through our user-friendly interface. Enjoy a seamless browsing experience as you explore and discover your favorite anime titles.",
    backgroundUrl: Kard5,
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Affordable Plans",
    text: "Unlock unlimited anime discovery without breaking the bank. Choose from our range of budget-friendly subscription options and enjoy all the features AnimeLens has to offer.",
    backgroundUrl: Kard6,
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.com/users/710832712486748220",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/Tanmay_Codeol",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://github.com/Tanmay-codeol",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/codeol123",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#WhoTheHellUsesFacebook",
  },
];
