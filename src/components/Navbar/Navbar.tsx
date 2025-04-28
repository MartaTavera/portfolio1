
import './Navbar.css';


const Navbar = () => {
    return (
      <nav className="navbar">
        <a id="pageTitle" href="/portfolio1">Marta Tavera</a>
        <div className="nav-links">
          <a href="/portfolio1">Home</a>
          <a href="#tools">Tools</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
    