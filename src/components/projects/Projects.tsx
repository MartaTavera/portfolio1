import projects from '../projects/ProjectsInfo';
import './Projects.css';

const Projects = () => {
    return(
        <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-info">
                <h3>{project.title}</h3>
                 <div className="project-image">   
                  <img src={project.image}></img>
                  </div>
                  <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </div>
                <p>{project.description}</p>
                   <div className="tags">
                      {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag">
                        {tag}
                      </span>
                      ))}
                    </div>
              
              
                 
              </div>
            </div>
          ))}
        </div>
      </section>

  );
};

export default Projects;
    