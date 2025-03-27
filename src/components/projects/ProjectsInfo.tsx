
import MarsMissionImg from "../../assets/Mars-Mission.png"
import WhaleSpottingImg from "../../assets/WhaleSpotting.png"
import BusBoardImg from "../../assets/BusBoard.png"
import TimesTablesImg from "../../assets/TimesTables.png"

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
      image: MarsMissionImg,
      description: "A web application based on one of NASA's APIs",
      tags: ["React", "Node.js", "Typescript"],
      githubLink: "https://github.com/MartaTavera/Mars-Mission",
      liveLink: "https://MartaTavera.github.io/Mars-Mission/"
    },
    {
      title: "Whale Spotting",
      image: WhaleSpottingImg,
      description: "Real-time  application using WebSocket",
      tags: ["React", "Socket.io", "Express"],
      githubLink: "https://github.com/MartaTavera/Whalespotting",
      liveLink: "https://whalespotting.onrender.com"
    },
    {
      title: "BusBoard",
      image:BusBoardImg,
      description: "Real-time  application using WebSocket",
      tags: ["Node", "Socket.io", "Express", "JavaScript"],
      githubLink: "https://github.com/MartaTavera/Busboard/",
      liveLink: "https://busboard.onrender.com"
      //liveLink: "https://whalespotting.onrender.com"
    },
    {
      title:"TimesTables",
      image:TimesTablesImg,

      description: "React applicaition that gives random multiplication questions",
      tags:["React", "TypeScript"],
      githubLink: "https://github.com/MartaTavera/TimesTables",
      liveLink:"https://MartaTavera.github.io/TimesTables/"
    }
  ];
export default projects