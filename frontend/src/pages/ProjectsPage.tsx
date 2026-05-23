import React, { useState } from "react"
import { Link } from 'react-router-dom'
import '../styles/projects.css'

const ProjectsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      title: "C@Bnet",
      titleClass: "cabnet-title",
      content: (
        <>
          <blockquote>
            Developing a Chrome extension to add integrated course ratings/warnings, 
            a complex decision tree-based recommendation system, and degree pathway 
            visualization to the current Courses@Brown website used by all Brown students 
            and professors for course registration. Source code available upon request.
          </blockquote>
        </>
      ),
    },
    {
      title: "Warning: No Service - An Analysis and Visualization of Unequal Social Service Distribution Within the New York City Housing Authority (NYCHA)",
      titleClass: "nycha-title",
      content: (
        <>
          <img
            src="/Assets/Images/nycha.png"
            alt="NYCHA Project"
          />
          
          <blockquote>
            Developed a full-stack data dashboard analyzing the relationship between 
            access to social services and economic mobility within New York City Housing 
            Authority (NYCHA) public housing developments using Python, Plotly, TypeScript 
            with React, and HTML/CSS, focusing on creative digital storytelling.
          </blockquote>

          <div className="button-container">
            <button
              className="buttons"
              onClick={() =>
                window.open("https://nycha-dashboard.vercel.app/", "_blank")
              }
            >
              Website
            </button>

            <button
              className="buttons"
              onClick={() =>
                window.open("https://github.com/yhuang2024/nycha-dashboard", "_blank")
              }
            >
              Github
            </button>
          </div>
        </>
      ),
    },
    {
      title: "iMessage Wrapped",
      titleClass: "message-title",
      content: (
        <>
          <blockquote>
            Built a full-stack animated analytics dashboard for Apple iMessage 
            group chat data using Python, Plotly, TypeScript with React, and Framer 
            Motion. Designed interactive, sequentially animated data visualizations 
            with SVG rendering, focusing on creative digital storytelling. Source code 
            available upon request.
          </blockquote>
        </>
      ),
    },
    {
      title: "Gaze-Tracking Glasses Indicator",
      titleClass: "medtronic-title",
      content: (
        <>
          <img
            src="/Assets/Images/presentation.jpg"
            alt="Medtronic Project"
          />

          <blockquote>
            Developed a real-time gaze-tracking data visualization tool for
            Medtronic's HUGO surgical robot display using QML, C++, and Python
            used daily by 200+ engineers in the Boston office, boosting system
            testing efficiency by 20% as a summer 2025 SWE intern. Integrated
            performance-critical UI elements with DDS communication network and
            implemented hardware-in-the-loop and software-in-the-loop testing to
            ensure stable operation under surgical conditions. Figma designs
            available upon request.
          </blockquote>
        </>
      ),
    },
    {
      title: "Illuminate",
      titleClass: "illuminate-title",
      content: (
        <>
          <img
            src="/Assets/Images/illuminate.png"
            alt="Illuminate Project"
          />

          <blockquote>
            Engineered an inclusive language full-stack web tool utilizing
            spaCy NLP to promote gender-neutral expression in writing,
            promoting thoughtful, bias-aware communication. Showcased at
            Hack@Brown 2025 and received positive feedback from 10+ users.
          </blockquote>

          <div className="button-container">
            <button
              className="buttons"
              onClick={() =>
                window.open("https://youtu.be/HFoPpniBW40", "_blank")
              }
            >
              Demo
            </button>

            <button
              className="buttons"
              onClick={() =>
                window.open(
                  "https://github.com/lijune-choi1/gendertracker",
                  "_blank"
                )
              }
            >
              Github
            </button>
          </div>
        </>
      ),
    },
    {
      title: "DebateBase",
      titleClass: "debatebase-title",
      content: (
        <>
          <img
            src="/Assets/Images/debatebase.png"
            alt="DebateBase Project"
          />

          <blockquote>
            Developed a full-stack user-centered educational web platform to
            support 30+ underrepresented youth debaters in the Boston area with
            accessible AI-driven learning tools, advancing equity in public
            speaking education. Employed PostgreSQL for database management,
            FastAPI and REST APIs for backend development, and Streamlit for
            frontend development. Utilized OpenAI API, Langchain, and Hugging
            Face models to analyze domain-specific knowledge and generate
            targeted feedback.
          </blockquote>

          <div className="button-container">
            <button
              className="buttons"
              onClick={() =>
                window.open(
                  "https://github.com/yhuang2024/debatebase",
                  "_blank"
                )
              }
            >
              Github
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Wordle",
      titleClass: "wordle-title",
      content: (
        <>
          <div className="image-pair">
            <img src="/Assets/Images/wordle1.png" alt="Wordle Screenshot 1" />
            <img src="/Assets/Images/wordle2.png" alt="Wordle Screenshot 2" />
          </div>

          <blockquote>
            Built an interactive JavaFX-based version of Wordle with both human
            and computer-playable modes, emphasizing intuitive, engaging, and
            accessible UI elements. Used a binary search tree to enable fast
            and accurate word validation, ensuring smooth gameplay and
            responsive interaction. Source code available upon request.
          </blockquote>

          <button
            className="buttons"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/1XX8XKnEnwEVRAnzEs3YVXwxxlqeCAWHjZvGHuB2j0Qs/edit?usp=sharing",
                "_blank"
              )
            }
          >
            User Guide
          </button>
        </>
      ),
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div>
      <div className="wrapper">
        <div className="navbar container">
          <Link id="name" className="alignable pull-left" to="/">
            ~YH~
          </Link>

          <ul id="navlist" className="alignable pull-right navbar-ul">
            <li className="alignable pull-left nav-list">
              <Link to="/projects">Projects</Link>
            </li>

            <li className="alignable pull-left nav-list">
              <Link to="/research">Research</Link>
            </li>

            <li className="alignable pull-left nav-list">
              <Link to="/writing">Writing</Link>
            </li>

            <li className="alignable pull-left nav-list">
              <a href="/Huang_Yuyuan_Resume.pdf">Resume</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="projects-body">
        <div className="gallery">
          <div
            className="gallery-track"
            style={{
              display: "flex",
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="project-slide"
                style={{
                  minWidth: "100%",
                }}
              >
                <h2 className={slide.titleClass}>{slide.title}</h2>

                {slide.content}
              </div>
            ))}
          </div>

          <button className="prev" onClick={prevSlide}>
            &laquo;
          </button>

          <button className="next" onClick={nextSlide}>
            &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage