import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Surya Pranav Sukumaran",
  initials: "S.P.S",
  location: "Boston, Massachusetts, USA",
  locationLink: "https://www.google.com/maps/place/Boston",
  about:
    "I am a recent Boston University graduate with a Master's degree in Applied Data Analytics!",
  summary:
    "My technical skills extends to robust technologies like Apache Spark and Kafka for big data processing, TensorFlow for building and deploying machine learning models, and PostgreSQL for database design and management. I am also proficient in cloud computing platforms, including AWS and Google Cloud, which are integral to managing scalable solutions. My favourite programming language is Python because of it's extensive capabilities and continued support within the community.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/55826125?s=400&u=27fb8e0d756303c3df7a2ac300a9e1c5915bed6e&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ps2pranav@gmail.com",
    tel: "+1 5035601009",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/juan-28",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/surya-pranav-s-a9064a140/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Boston Univerisy",
      degree: "Master's Degree in Applied Data Analytics",
      start: "2022",
      end: "2024",
    },
    {
      school: "University of Exeter",
      degree: "Bachelor's Degree in Medical Sciences",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Brands on Road",
      link: "https://brandsonroad.com/",
      badges: ["On-Site, Bangkok, Thailand"],
      title: "Data Analyst Intern",
      start: "May 2022",
      end: "August 2022",
      description:
        "Utilized MongoDB, SQL, Tableau, and Python (Plotly) to generate heatmaps and time-series visualizations of Bangkok taxi activity from GPS data, enhancing client advertising campaigns with strategic insights into visibility zones and peak times.",
    },
    {
      company: "KidsKreations Co. Ltd",
      link: "https://kidskreationsco.com/",
      badges: ["On-Site, Bangkok, Thailand"],
      title: "Data Analyst - Marketing",
      start: "2020",
      end: "2021",
      description:
        "Enhanced the company's data infrastructure with a PostgreSQL implementation, optimizing table structures and procedures for improved query performance; designed a normalized relational schema from an Entity-Relationship diagram for efficient data management; and extracted key marketing insights using SQL and Matplotlib visualizations, aiding targeted campaign strategies.",
    },
  ],
  skills: [
    "Python",
    "SQL",
    "R",
    "TensorFlow",
    "Keras",
    "AWS EMR",
    "Google Cloud Services",
    "Apache Spark",
    "Tableau",
  ],
  projects: [
    {
      title: "Emotion Recognition",
      techStack: [
        "Deep Learning",
        "Python",
        "TensorFlow",
        "Keras",
        "Flask",
        "Matplotlib",
      ],
      description:
        "ResNet50 deep learning implementation for a 71% test accuracy",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "MusicRec",
      techStack: [
        "Collaborative Filtering",
        "PySpark",
        "AWS",
        "Content-Based Filtering",
      ],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Big Data Visualization",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Market Analysis",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Mental Health Insights",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
  ],
} as const;
