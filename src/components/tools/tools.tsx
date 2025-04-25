import './tools.css';

import { FaReact, FaJs,  FaNodeJs, FaSass, FaBootstrap, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql,  SiPython,  SiSqlite, SiSharp, SiMysql } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { AiFillHtml5 } from 'react-icons/ai';
import { GrGooglePlus } from 'react-icons/gr';
import { VscCode } from 'react-icons/vsc';
import { JSX } from 'react';

const Tools = () => {
  interface TechLogoProps {
    tech: string;
    size?: number;
  }
  
  const TechLogo = ({ tech, size = 40 }: TechLogoProps) => {
    const logos: Record<string, JSX.Element> = {
      react: <FaReact size={size} color="#61DAFB" />,
      javascript: <FaJs size={size} color="#F7DF1E" />,
      css: <DiCss3 size={size} color="#1572B6" />,
      html: <AiFillHtml5 size={size} color="#E34F26" />,
      postgresql: <SiPostgresql size={size} color="#336791" />,
     
      python: <SiPython size={size} color="#3776AB" />,
      
      sqlite: <SiSqlite size={size} color="#003B57" />,
      //gcp: <GrGooglePlus size={size} color="#4285F4" />,
      linux: <FaLinux size={size} color="#FCC624" />,
      csharp: <SiSharp size={size} color="#239120" />,
      mysql: <SiMysql size={size} color="#4479A1" />,
      bootstrap: <FaBootstrap size={size} color="#7952B3" />,
      nodejs: <FaNodeJs size={size} color="#339933" />,
      git: <FaGitAlt size={size} color="#F05032" />,
      sass: <FaSass size={size} color="#CC6699" />,
      vscode: <VscCode size={size} color="#007ACC" />
    };

    return logos[tech.toLowerCase()] || null;
  };

  const allTools = [
    "javascript", "css", "html", "react", "postgresql",
    "python", "sqlite",
    "linux", "csharp", "mysql", "bootstrap", "nodejs","git", "sass", "vscode"
  ];

  return (
    <div className="toolsContainer" id="tools">
      <h2>Tools</h2>
      
      <div className="tech-icons">
        {allTools.map((tech, techIndex) => (
          <div key={techIndex} className="tech-item">
            <div className="tech-logo">
              <TechLogo tech={tech} />
            </div>
            <span className="tech-name">{tech.charAt(0).toUpperCase() + tech.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;