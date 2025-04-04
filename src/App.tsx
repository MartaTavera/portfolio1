
import './index.css'
import Portfolio from './components/home/home.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Contact from './components/contact/Contact.tsx';
import About from './components/about/About.tsx';
import Home from './components/home/home.tsx';
import Projects from './components/projects/Projects.tsx';

const App: React.FC = () => {

  return (
    <div>
     <Navbar />     
       <div className="LinksContainer">
      <Home/>
      <About/>
      <Projects/>
     
      <Contact/>
      </div>  
    </div>
  );
}

export default App
