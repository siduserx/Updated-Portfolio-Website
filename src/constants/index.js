const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Journey",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
  name: "Download Resume",
  link: "/siddhesh_resume.pdf",
  download: true,
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Major Projects" },
  { value: 1, suffix: "+", label: "Live Website" },
  { value: 7, suffix: "+", label: "Skills & Technologies" },
  { value: 100, suffix: "%", label: "Passion for Learning 😄" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Pixel-Perfect Vibes",
    desc: "I make websites that look good AND feel good—no boring layouts allowed.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Bug Hunter in Training",
    desc: "If something breaks, I won’t sleep until it's fixed. (Okay maybe a little.)",
  },
  {
    imgPath: "/images/time.png",
    title: "Powered by Chai & Curiosity",
    desc: "Learning new tech one cup at a time. ☕",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.4,
    rotation: [0, 0, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 0.5,
    rotation: [0, 0, 0],
  },

  {
    name: "Database Management",
    modelPath: "/models/sql.glb",
    scale: 0.7,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.02,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.02,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
    {
    review: "That first ugly webpage started everything. Design may fail, but learning never does.",
    logoPath: "/images/logo1.png",
    title: "Started with HTML & CSS",
    highlights: [
      "Made my first webpage… it was simple, slightly ugly, and the layout cried on mobile 😄",
      "But it worked, and that moment sparked my interest in web development.",
      "learned how structure and styling come together to create something real on the screen.",
    ],
  },
  {
    review: "Reusable components = less chaos React made me feel like a REAL developer.",
    logoPath: "/images/logo2.png",
    title: "Discovered JavaScript",
    highlights: [
      "Things started moving 🎉",
      "Buttons clicked, text changed, and suddenly websites felt alive.",
      "This is where I realized how powerful logic and interactivity can be, and I started enjoying solving small problems through code.",
    ],
  },
  {
    review: "Every project helps me grow—one feature, one bug, one idea at a time.",
    logoPath: "/images/logo3.png",
    title: "React Phase",
    highlights: [
      "Learning components, props, and hooks—slowly becoming friends 😆",
      "Understanding how modern websites are built with reusable pieces made development feel smarter and more exciting.",
      "Built my first real-world project using React, and watching it work felt amazing.",
    ],
  },
   {
    review: "Building with code, guided by data. That’s real power 📊⚡",
    logoPath: "/images/logo4.png",
    title: "Future Boss Plan",
    highlights: [
      "Full-stack developer loading… ⏳🔥",
      "Currently exploring Python and MySQL to understand the backend world and how data flows behind the scenes.",
      "My stock market analysis project sparked a new interest in data analytics—digging into data, finding patterns, and turning numbers into insights 📊",
      "Looking forward to growing in data analysis alongside web development and expanding my career opportunities."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/siddhesh-nimodiya-60692a212/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};    
