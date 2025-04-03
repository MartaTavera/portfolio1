
import './index.css'
import Portfolio from './components/home/home.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Contact from './components/contact/Contact.tsx';
import About from './components/about/About.tsx';

const App: React.FC = () => {

  return (
    <div>
     <Navbar />     
       <div className="LinksContainer">
      <Portfolio />
      <About/>
      <Contact/>
      </div>  
    </div>
  );
}

export default App
