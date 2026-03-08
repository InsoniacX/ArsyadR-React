export interface Project {
  imgSrc: string;
  title: string;
  description: string;
  githubURL: string;
  demoURL: string;
}

export const projects: Project[] = [
  {
    title: "HTML Bootstrap Portfolio",
    description:
      "This is a simple portfolio website made with HTML, CSS, and Bootstrap. It is a responsive website that showcases my projects and skills. The website features a clean and modern design, with smooth animations and a contact form.",
    imgSrc: "Portfolio.png",
    githubURL: "https://github.com/InsoniacX/ArsyadR",
    demoURL: "https://insoniacx.github.io/ArsyadR/",
  },
  {
    title: "Her Fallacy",
    description:
      "This is My First Video Game Project Made with Unity and C#. It is a 2D Puzzle Platformer Game where you play as a girl trapped in a surreal world, trying to escape by solving puzzles and overcoming obstacles. The game features hand-drawn art and a haunting soundtrack.",
    imgSrc: "/Her-Fallacy.png",
    githubURL: "https://github.com/InsoniacX/GameSEED_2025",
    demoURL: "https://vulcanova-team.itch.io/her-fallacy",
  },
  {
    title: "G-Project",
    description:
      "This is website project made with HTML, CSS, and Vanilla JavaScript. It is a company profile website to showcase their services and products. The website features a clean and modern design, with smooth animations and responsive layout.",
    imgSrc: "/G-Project.png",
    githubURL: "https://github.com/InsoniacX/itw2023_project2_233040075",
    demoURL: "https://insoniacx.github.io/itw2023_project2_233040075/",
  },
  {
    title: "Samafitro",
    description:
      "This is website project made with Laravel. It is a website for a local business. The website features a colorful and vibrant design, with a product catalog and an online ordering system.",
    imgSrc: "/Samafitro.png",
    githubURL: "https://github.com/Daffarob/ProjectWebKP",
    demoURL: "",
  },
  {
    title: "To-Do App",
    description:
      "This is website project made with React and Go. It is a simple to-do list application where users can add, edit, and delete tasks. The app features a minimalist design and uses local storage to save tasks.",
    imgSrc: "/Todo-App.png",
    githubURL: "https://github.com/InsoniacX/todo-app-go-react",
    demoURL: "https://todo-app-go-react-production.up.railway.app/",
  },
  {
    title: "MIKCONF",
    description:
      "This is website project made with Laravel. The Project is still on Development. It is a website for Configuring Mikrotik Devices. The website features a professional design, with a schedule of events, speaker profiles, and a registration form.",
    imgSrc: "/MIKCONF.png",
    githubURL: "https://github.com/InsoniacX/mikrotik-configuration-web",
    demoURL: "",
  },
];
