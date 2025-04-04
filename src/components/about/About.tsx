import './About.css';
import ALTASEvent from '../../assets/particle-detector.png'
import Teaching from '../../assets/Teaching-moment.png'

 export default function About(){
 
    return(

        <div className="aboutContainer" id="about">
        <h2>About Me</h2>
            <section className="career-journey">
            <div className="journey-content">
                <p>My path to software development has been anything but linear. In school, my love for mathematics and physics led me to pursue a degree in Mathematical Physics, followed by 
                a <a href="https://www.librarysearch.manchester.ac.uk/permalink/44MAN_INST/bofker/alma9918222474401631" target="_blank" rel="noopener noreferrer">MSc</a> and a <a href="https://www.librarysearch.manchester.ac.uk/permalink/44MAN_INST/1r887gn/alma992990515946401631" target="_blank" rel="noopener noreferrer">PhD</a> in Particle Physics.</p>
    
                <div className="journey-highlight">
                    <img src={ALTASEvent} alt="Particle physics detector" className="journey-image" />
                    <p>It was during my doctoral research that I first encountered programming,learning C++ for data analysis, alongside Fortran, Bash, and Perl scripting to manage computational jobs. These tools were merely instruments for scientific discovery, not ends in themselves.
                      After several years in <a href="https://inspirehep.net/authors/1054726" target="_blank" rel="noopener noreferrer">physics research</a>, I pivoted to education, experiencing technology.from a completely different perspective, as a user rather than a creator.</p>
                </div>
    
                <div className="journey-highlight">
                <p>Watching various software products evolve over the years sparked a fundamental shift in my thinking. I began to see software development not simply as a tool for other disciplines, but as a fascinating field worthy of study in its own right. While homeschooling my children, I pursued online programming courses that only deepened my growing interest. Eventually, I decided to take the leap and commit fully to this new path by enrolling in a software development bootcamp, transforming what began as scientific necessity into a passionate career pursuit.</p>
                <img src={Teaching} alt="Classroom teaching" className="journey-image" />
                 </div>
    
            
            </div>
            </section>

        </div>
    )

}




