import './Portfolio.css';
import GithubIcon from '../../assets/GitHub.png';
import LinkedinIcon from '../../assets/Linkedin.png';
import EmailIcon from '../../assets/EmailIcon.png';
import projects from '../projects/ProjectsInfo';


const Portfolio = () => {
  const personalInfo = {
    name: "Marta Tavera",
    title: "Software Developer",
    description: "I'm a passionate developer focused on creating impactful web applications.",
    email: "martatatvera@gmail.com",
    github: "https://github.com/MartaTavera",
    linkedin: "https://www.linkedin.com/in/marta-tavera-3421a823/"
  };

  

  return (
    <div className="portfolio">
      <header className= "header">
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <p>{personalInfo.description}</p>
        
        <div className="social-links">
          <a href={personalInfo.github}   target="_blank" rel="noopener noreferrer"><img className="icon" src={GithubIcon} alt="Github icon"/>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"><img className="icon" src={LinkedinIcon} alt="Linkedin icon"/>
          </a>
          <a href={`mailto:${personalInfo.email}` }target="_blank" rel="noopener noreferrer"><img className="icon" src={EmailIcon} alt="Email icon"/>
          </a>
        </div>
      </header>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;