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
    "Welcome to my website where you'll learn a bit about me! For starters, I'm a data analyst with an interest in statistics, machine learning and big data. My technical skills extends to technologies like Apache Spark and Kafka for big data processing, TensorFlow for building and deploying machine learning models, and PostgreSQL for database design and management. I also have some experience in cloud computing platforms, including AWS and Google Cloud, which are integral to managing scalable solutions. My favourite programming language is Python because of it's extensive capabilities and continued support within the community.",
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
    ],
  },
  education: [
    {
      school: "Boston Univerisy, USA",
      degree: "Master's Degree in Applied Data Analytics",
      start: "2022",
      end: "2024",
      coursework: [
        "Data Science with Python,",
        "Advanced Machine Learning,",
        "Big Data Analytics,",
        "Data Mining,",
        "Analysis of Algorithms",
      ],
    },
    {
      school: "University of Exeter, UK",
      degree: "Bachelor's Degree in Medical Sciences",
      start: "2016",
      end: "2020",
      coursework: [
        "Health Economics,",
        "Bioinformatics,",
        "Medical Science Literature Review",
      ],
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
    "HTML",
    "CSS",
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
        "ResNet50 deep learning implementation for a 71% test accuracy on fer-2013 dataset",
      logo: ConsultlyLogo,
      link: {
        label: "emotion",
        href: "https://github.com/juan-28/Emotion-Recognition-Keras",
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
        "Music recommendation system using collaborative and content based filtering",
      link: {
        label: "music rec",
        href: "https://github.com/juan-28/MusicRecSystem",
      },
    },
    {
      title: "Big Data Visualization",
      techStack: [
        "Apache Spark",
        "Apache Zeppelin",
        "EMR",
        "Plotly",
        "Folium",
        "SQL",
        "Python",
      ],
      description:
        "Visualization of extensive NYC taxi dataset using Spark, Zeppelin, Plotly and Folium",
      link: {
        label: "nyc_bigdata",
        href: "https://github.com/juan-28/nyc_bigdata_viz",
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
        href: "",
      },
    },
  ],
} as const;
