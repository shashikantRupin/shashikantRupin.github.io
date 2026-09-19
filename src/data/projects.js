export default function getProjects() {
  return [
    {
      id: 1,
      image: "blogApp.png",
      projectTitle: "MERN Blog App",
      projectInfo:
        "A full-stack blogging platform built with the MERN stack. Users can create, read, update, and manage blog posts with secure authentication and protected routes. The app provides a clean and responsive interface with a smooth experience for managing and exploring blog content.",
      techUsed: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      projectLinkHosted: "https://mern-blog-app.pages.dev/",
      projectLinkGithub: "https://github.com/shashikantRupin/mern-blog-app",
    },
    {
      id: 2,
      image: "chat.png",
      projectTitle: "Mern-Chat-App",
      projectInfo:
        "Experience seamless real-time communication with our MERN-based online chat app. Powered by Socket.io, our application delivers instant messaging in a beautifully designed interface. Connect, chat, and stay in sync with friends effortlessly, making communication a delightful experience",
      techUsed: [
        "react",
        "redux",
        "tailwind",
        "Node",
        "Express",
        "Socket.io",
        "MongoDB",
      ],
      projectLinkHosted: "https://chat-app-prod-9abu.onrender.com/",
      projectLinkGithub: "https://github.com/shashikantRupin/mern-chat-app",
    },
    {
      id: 3,
      image: "vetcarePic.png",
      projectTitle: "Veterinary Appointment Booking System",
      projectInfo:
        "It is a online veternarian booking system where you can book veternarian for your pets",
      techUsed: ["HTML", "CSS", "JavaScript", "Node", "Express", "MongoDB"],
      projectLinkHosted: "https://cool-elf-0374a9.netlify.app/",
      projectLinkGithub:
        "https://github.com/shashikantRupin/Veterinary-apponitment-booking",
    },
    {
      id: 4,
      projectTitle: "Mine Wine",
      image: "myWine.png",
      projectInfo:
        "It's a clone of Mine-Wine app created using HTML, CSS, Javascript",
      techUsed: ["HTML", "CSS", "Javascript"],
      projectLinkHosted:
        "https://655e1490fd1a4138593e6c56--capable-eclair-1ae3b7.netlify.app/",
      projectLinkGithub: "https://github.com/shashikantRupin/Wine-project",
    },
    {
      id: 5,
      projectTitle: "My portfolio",
      image: "portfolio_img.png",
      projectInfo:
        "My portfolio is a testament to my skills, passion, and dedication. Within these pages, you'll find a collection of projects that I've carefully crafted, each representing a unique blend of creativity and expertise.",
      techUsed: ["React", "HTML", "CSS"],
      projectLinkHosted: "https://github.com/shashikantRupin",
      projectLinkGithub:
        "https://github.com/shashikantRupin/shashikantRupin.github.io",
    },
  ];
}
