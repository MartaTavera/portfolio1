
import MarsMissionImg from "../../assets/Mars-Mission.png"
import WhaleSpottingImg from "../../assets/WhaleSpotting.png"
import BusBoardImg from "../../assets/BusBoard.png"
import TimesTablesImg from "../../assets/TimesTables.png"
import PhotoR from "../../assets/PhotoR.png"
import LinePlotImg from "../../assets/LinePlotting.png"
import MemoryGameImg from "../../assets/EquationLineMemoryCard.jpg"

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
      description: "Interactive web application built with React and TypeScript that showcases NASA's Mars exploration data through their API. Built as a group project, the application features several interconnected components that allow users to explore Mars rover imagery, learn about women in space, discover fun facts about Mars, and engage with educational content about space exploration.",
      tags: ["React", "Node.js", "Typescript"],
      githubLink: "https://github.com/MartaTavera/Mars-Mission",
      liveLink: "https://MartaTavera.github.io/Mars-Mission/"
    },
    {
      title: "Whale Spotting",
      image: WhaleSpottingImg,
      description: "Real-time  application using WebSocket. This website, created as a group project, serves as a hub for whale spotting. Users can register and share their whale sightings through posts. To assist users the site provides information about various whale species. Additionally, for those planning whale spotting trips, details on prime locations, ideal seasons, and local weather conditions are available. The site also features an achievement system to reward active users..",
      tags: ["C#", "PostgreSQL", "React", "Bootstrap", "Express"],
      githubLink: "https://github.com/MartaTavera/Whalespotting",
      liveLink: "https://whalespotting.onrender.com"
    },
    {
      title: "BusBoard",
      image:BusBoardImg,
      description: "BusBoard is a command-line interface (CLI) application that provides real-time bus arrival information for locations in London using the Transport for London and Postcodes.io APIs. Users can search by postcode to find the next five buses arriving at the two closest bus stops within a 500-meter radius. The application displays bus numbers, destinations, and arrival times in minutes for each stop.",
      tags: ["Node", "WebSockets", "Express", "JavaScript", "REST API", "Xterm",],
      githubLink: "https://github.com/MartaTavera/Busboard/",
      liveLink: "https://busboard.onrender.com"
    },
    {
      title:"TimesTables",
      image:TimesTablesImg,

      description: "This interactive multiplication quiz app presents users with a sequence of randomly generated multiplication questions. The app  provides immediate feedback on their answers upon submission and displays a score summarising user perfomance.",
      tags:["React", "TypeScript", "CSS"],
      githubLink: "https://github.com/MartaTavera/TimesTables",
      liveLink:"https://MartaTavera.github.io/TimesTables/"
    },
    {
      title:"Photo Resizer",
      image:PhotoR,

      description: "A browser-based photo resizing application built with HTML5, CSS3, and JavaScript. Implements WebRTC MediaDevices API for camera capture and Canvas API for client-side image compression. Features batch processing, progressive JPEG compression, and complete privacy with zero server costs.",
      tags:["HTML", "JavaScript", "CSS"],
      githubLink: "https://github.com/MartaTavera/PhotoResizer-camera",
      liveLink:"https://MartaTavera.github.io/PhotoResizer-camera/"
    },
    {
      title:"Linear Equations",
      image:LinePlotImg,
      description: "A web-based educational application designed for GCSE Mathematics students to explore linear equations through hands-on discovery. It starts with an empty-state design to encourage student-driven exploration and provides an interactive graph with click-to-plot functionality for manual point placement, toggle controls to show/hide the line, and a side-by-side table and graph layout for immediate visual feedback.",
      tags:[" HTML5 Canvas", "JavaScript", "CSS"],
      githubLink: "https://github.com/MartaTavera/PlottingLines",
      liveLink:"https://martatavera.github.io/PlottingLines/"
    },
    {
      title:"Linear Equations Memory Game",
      image: MemoryGameImg,
      description: "An interactive educational game that helps students learn and practice matching linear equations with their corresponding graphs. Built with React and styled using Tailwind CSS, this memory-matching game combines mathematical learning with engaging gameplay.",
      tags:[" HTML5","React", "JavaScript", "Tailwind","CSS"],
      githubLink: "https://https://github.com/MartaTavera/LineEquation-React-Game",
      liveLink:"https://github.com/MartaTavera/LineEquation-React-Game"
    }

  ];
export default projects