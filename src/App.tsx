
import './index.css'
import Navbar from './components/Navbar/Navbar.tsx'
import Contact from './components/contact/Contact.tsx';
import About from './components/about/About.tsx';
import Home from './components/home/home.tsx';
import Projects from './components/projects/Projects.tsx';
import Tools from './components/tools/tools.tsx';
import ContactForm from './components/contact/ContactForm.tsx';

const App: React.FC = () => {

  return (
    <div>
     <Navbar />     
       <div className="LinksContainer">
      <Home/>
      <Tools/>
      <About/>
      <Projects/>
      <Contact/>
      <ContactForm/>
      </div>  
    </div>
  );
}

export default App
