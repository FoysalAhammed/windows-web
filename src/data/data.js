import {
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  CPlain,
  MysqlOriginalWordmark,
  PhotoshopOriginal,
  FigmaOriginal,
} from "devicons-react";

// Constants
const githubLink = "https://github.com/FoysalAhammed";

// Profile Description
export const profileDescription = [
  "Hello, I'm Foysal Ahammed, an experienced front-end web developer specializing in crafting seamless and dynamic user experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I bring innovative designs to life and ensure they perform flawlessly across all devices. Let's create exceptional web experiences together!",
];

// Work Experience Template
export const workExperienceTemplate = [
  {
    key: 1,
    company: "", // Add company name here
    description: [
      "", // Add description points here
    ],
    duration: "", // Add duration here
    designation: "", // Add designation here
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [
  {
    name: "Portfolio",
    techUsed: ["Next.js", "TailwindCSS"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/DevPortfolio`,
    liveURL: "https://foysal-portfolio.vercel.app",
  },
  {
    name: "Medical Appointment",
    techUsed: ["React", "TailwindCSS"],
    description:
      "Medical Appointment system will offer you a online medical facility, offering single and local multiplayer modes, responsive design, and captivating animations.",
    githubLink: `${githubLink}/Medical-Doctor-Appointment-MERN`,
    liveURL: "https://doctor-appointmentbd.netlify.app",
  },
  {
    name: "Cashbook ",
    techUsed: ["Next.js","TailwindCSS"],
    description:
      "Cashbook open-world adventure.unlock exclusive Feuaters Of Business Handling.No Option To Loss Cash From Cashbook All Everyhing is one app and gear up for the thrill!",
    githubLink: `${githubLink}/Cashbook-Landing-Page`,
    liveURL: `https://cashbook-gamma.vercel.app`,
  },
  {
    name: "Invoice Manager",
    techUsed: ["React", "TailwindCSS"],
    description:
      "Invoice Manager is a sleek Website Blocker that empowers users to block distracting websites for set durations, promoting productivity and focus.",
    githubLink: `${githubLink}`,
    liveURL: `https://invoice-manager-foysal.vercel.app`,
  },
];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Bangladesh University",
    graduation: "May 2026",
    degree: "Computer Science",
    type: "education",
  },
  {
    key: 2,
    institution: "Litles School",
    graduation: "Aug 2021",
    degree: "X",
    type: "education",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  // {
  //   key: 1,
  //   name: "Python",
  //   type: "language",
  //   icon: PythonOriginal ? (
  //     <PythonOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: JavascriptOriginal ? (
      <JavascriptOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: Html5Original ? (
      <Html5Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: Css3Original ? (
      <Css3Original className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: ReactOriginal ? (
      <ReactOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 6,
    name: "Next.js",
    type: "framework",
    icon: NextjsOriginal ? (
      <NextjsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: TailwindcssOriginal ? (
      <TailwindcssOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 8,
    name: "Bootstrap",
    type: "framework",
    icon: BootstrapPlain ? (
      <BootstrapPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 9,
    name: "Node.JS",
    type: "framework",
    icon: NodejsOriginal ? (
      <NodejsOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 10,
    name: "MongoDB",
    type: "database",
    icon: MongodbPlain ? (
      <MongodbPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 11,
    name: "Postman",
    type: "tool",
    icon: PostmanPlain ? (
      <PostmanPlain className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 12,
    name: "C",
    type: "language",
    icon: CPlain ? <CPlain className={iconClass} size={iconSize} /> : null,
  },
  {
    key: 13,
    name: "Express",
    type: "framework",
    icon: ExpressOriginal ? (
      <ExpressOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  // {
  //   key: 14,
  //   name: "Django",
  //   type: "framework",
  //   icon: DjangoPlain ? (
  //     <DjangoPlain className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  {
    key: 15,
    name: "MySQL",
    type: "database",
    icon: MysqlOriginalWordmark ? (
      <MysqlOriginalWordmark className={iconClass} size={iconSize} />
    ) : null,
  },
  // {
  //   key: 16,
  //   name: "PostgreSQL",
  //   type: "database",
  //   icon: PostgresqlOriginal ? (
  //     <PostgresqlOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  // {
  //   key: 17,
  //   name: "Blender",
  //   type: "tool",
  //   icon: BlenderOriginal ? (
  //     <BlenderOriginal className={iconClass} size={iconSize} />
  //   ) : null,
  // },
  {
    key: 18,
    name: "Photoshop",
    type: "tool",
    icon: PhotoshopOriginal ? (
      <PhotoshopOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
  {
    key: 19,
    name: "Figma",
    type: "tool",
    icon: FigmaOriginal ? (
      <FigmaOriginal className={iconClass} size={iconSize} />
    ) : null,
  },
];

const appsData = [
  {
    id: 1,
    name: "Google Chrome",
    icon: "/images/apps/chrome.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 2,
    name: "About Me",
    icon: "/images/apps/folder.png",
    action: "explorer",
    size: "w-11 h-11",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "/images/apps/recyclebin.png",
    action: "recycle",
    size: "w-11 h-11",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "/images/apps/edge.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "/images/apps/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
  {
    id: 7,
    name: "Emoji TicTacToe",
    icon: "https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico",
    action: "app",
    subAction: "emoji",
    size: "w-10 h-10",
  },
  {
    id: 8,
    name: "Spotify",
    icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    action: "app",
    subAction: "spotify",
    size: "w-10 h-10",
  },
];

// Export default data
export default appsData;

// Social Media Links
export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/foysal-ahammedcse/",
  github: githubLink,
};
