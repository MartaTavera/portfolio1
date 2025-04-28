import './Portfolio.css'
import GithubIcon from '../../assets/GitHub.png';
import LinkedinIcon from '../../assets/Linkedin.png';
import EmailIcon from '../../assets/EmailIcon.png';


const Home = () =>{

  const personalInfo = {
    name: "Marta Tavera",
    title: "Software Developer",
    description: "Former physicist and teacher turned software engineer who builds software with both analytical rigor and human-centered design.",
    email: "martatatvera@gmail.com",
    github: "https://github.com/MartaTavera",
    linkedin: "https://www.linkedin.com/in/marta-tavera-3421a823/"
  };


  return (
    <div className="portfolio" >
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
    </div>
  )
};
export default Home;