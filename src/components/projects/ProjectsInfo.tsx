

export interface Project {
    title: string;
    image?: string;
    id?: number;
    description: string;
    tags: string[];
    githubLink: string;
    liveLink: string;
}

const projects: Project[]= [
    {
      title: "Mars Mission",
      description: "A web application based on one of NASA's APIs",
      tags: ["React", "Node.js", "Typescript"],
      githubLink: "https://github.com/MartaTavera/Mars-Mission",
      liveLink: "https://MartaTavera.github.io/Mars-Mission/"
    },
    {
      title: "Whale Spoting",
      description: "Real-time  application using WebSocket",
      tags: ["React", "Socket.io", "Express"],
      githubLink: "https://github.com/MartaTavera/Whalespotting",
      liveLink: "https://whalespotting.onrender.com"
    },
    {
      title: "BusBoard",
      description: "Real-time  application using WebSocket",
      tags: ["Node", "Socket.io", "Express", "JavaScript"],
      githubLink: "https://github.com/MartaTavera/Busboard/",
      liveLink: "https://busboard.onrender.com"
      //liveLink: "https://whalespotting.onrender.com"
    }
  ];
export default projects