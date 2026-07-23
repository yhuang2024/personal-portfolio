import React, { useState } from "react"
import '../styles/projects.css'
import NavBar from '../components/NavBar'

const ProjectsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const slides = [
    {
      title: "LexFactor",
      image: "/Assets/Images/lexfactor.png",
      content: (
        <>
          <blockquote>
            Developing an AI-enabled platform in TypeScript for law students and students in Brown's
            CSCI 1400 (Generative AI and the Law) class to learn, practice, and summarize cases
            using the Socratic method. Used by 300+ students at Brown University.
          </blockquote>
        </>
      ),
    },
    {
      title: "C@Bnet",
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
      image: "/Assets/Images/nycha.png",
      content: (
        <>
          <blockquote>
            Developed a full-stack data dashboard analyzing the relationship between 
            access to social services and economic mobility within New York City Housing 
            Authority (NYCHA) public housing developments using Python, Plotly, TypeScript 
            with React, and HTML/CSS, focusing on creative digital storytelling.
          </blockquote>

          <div
            className="button-container"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <button
              className="buttons"
              onClick={(event) => {
                event.stopPropagation()
                window.open("https://nycha-dashboard.vercel.app/", "_blank")
              }
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
      image: "/Assets/Images/presentation.jpg",
      content: (
        <>
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
      image: "/Assets/Images/illuminate.png",
      content: (
        <>
          <blockquote>
            Engineered an inclusive language full-stack web tool utilizing
            spaCy NLP to promote gender-neutral expression in writing,
            promoting thoughtful, bias-aware communication. Showcased at
            Hack@Brown 2025 and received positive feedback from 10+ users.
          </blockquote>

          <div
            className="button-container"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <button
              className="buttons"
              onClick={(event) => {
                event.stopPropagation()
                window.open("https://youtu.be/HFoPpniBW40", "_blank")
              }
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
      image: "/Assets/Images/debatebase.png",
      content: (
        <>
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

          <div
            className="button-container"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <button
              className="buttons"
              onClick={(event) => {
                event.stopPropagation()
                window.open(
                  "https://github.com/yhuang2024/debatebase",
                  "_blank"
                )
              }
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
            onClick={(event) => {
              event.stopPropagation()
              window.open(
                "https://docs.google.com/document/d/1XX8XKnEnwEVRAnzEs3YVXwxxlqeCAWHjZvGHuB2j0Qs/edit?usp=sharing",
                "_blank"
              )
            }
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
      <NavBar />
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
            {slides.map((slide, index) => {
              const isFlipped = flippedIndex === index

              const flipCard = () => {
                setFlippedIndex(isFlipped ? null : index)
              }
            
              const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  flipCard()
                }
              }
            
              const handleBackClick = (event: React.MouseEvent<HTMLDivElement>) => {
                const target = event.target as HTMLElement
            
                if (target.closest("button, a")) {
                  return
                }
            
                flipCard()
              }
            
              return (
                <div
                  key={index}
                  className="projects-slide"
                  style={{ minWidth: "100%" }}
                >
                  <div
                    className={`project-card ${isFlipped ? "is-flipped" : ""}`}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    aria-label={`Flip ${slide.title} project card`}
                  >
                    <div className="project-card-inner">
                      <div
                        className={`project-card-face project-card-front ${
                          slide.image ? "has-image" : ""
                         }`}
                         
                         onClick={flipCard}
                      >
                      {slide.image && (
                        <img
                          className="front-image"
                          src={slide.image}
                          alt={slide.title}
                        />
                      )}
            
                      <div className="front-content">
                        <h2>{slide.title}</h2>
                      </div>
                    </div>
            
                    <div
                      className="project-card-face project-card-back"
                      onClick={handleBackClick}
                    >
                      {slide.content}
                    </div>
                    
                    </div>
                  </div>
                </div>
              )
            })}
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