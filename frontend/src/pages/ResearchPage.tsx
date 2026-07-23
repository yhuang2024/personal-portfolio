import React, { useState } from "react"
import '../styles/research.css'
import NavBar from '../components/NavBar'

const ResearchPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)
  const slides = [
    {
      title: "Sextortion",
      content: (
        <>
          <blockquote>
            An analysis of youth-facilitated digital sexual violence and sextortion.
          </blockquote>
        </>
      ),
    },
    {
      title: "Wearables",
      content: (
        <>
          <blockquote>
            An environment analysis of the privacy and sociological risks of using AI wearables for 
            adolescent psychosocial support.
          </blockquote>
        </>
      ),
    },
    {
      title: "Lessons From Auditing AI Companions for Older Adults",
      content: (
        <>
          <blockquote>
            An audit of behavior, privacy, and security concerns in AI companions for older adults. Accepted
            at USENIX Security 2027.
          </blockquote>
        </>
      ),
    },
    {
      title: "Detect, Don't Treat, Don't Abandon: The Trilemma of AI Chatbots and the Need for Human Handoff",
      content: (
        <>
          <blockquote>
            An analysis applying product liability and negligence doctrines to the use of AI chatbots
            in mental health contexts. 
          </blockquote>
        </>
      ),
    },
    {
      title: "AI Usage For Therapeutic Support and its Landscape of Accountability",
      content: (
        <>
          <blockquote>
            A technical and ethical study of college students' perceptions of the use of 
            general-purpose AI chatbots in therapeutic settings and the legal and corporate 
            accountability frameworks for such agents in situations of harm. Presented at the
            2026 Annual Boston Security Usability Research Day Conference at Tufts University and
            Brown University's 11th Annual Undergraduate Computer Science Research Symposium.
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
                  "/Assets/Documents/AI_Accountability_Paper.pdf",
                  "_blank"
                )
              }}
            >
              Paper preprint
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Low-Resource Language Models for Kurdish and Narragansett",
      content: (
        <>
          <blockquote>
            Developed low-resource language models for Kurdish and Narragansett
            using BERT and HuggingFace in Python, contributing to more
            inclusive natural language processing technology for 1,800+ people
            in underserved linguistic communities across Rhode Island. Focused
            on equitable language model training, bias detection, and linguistic
            preservation.
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
                window.open("https://airesbrown.wixsite.com/mysite", "_blank")
              }}
            >
              Research Group Website
            </button>

            <button
              className="buttons"
              onClick={(event) => {
                event.stopPropagation()
                window.open("https://github.com/jinholee17/airesNLP", "_blank")
              }}
            >
              Github
            </button>
          </div>
        </>
      ),
    },
    {
      title: "Urban Air Quality Analysis in Chinatown",
      content: (
        <>
          <blockquote>
            Built a Python tool integrating web scraping and generative AI to
            streamline literature reviews on PubMed, reducing manual search
            time by 25%. Analyzed urban air quality disparities in
            disadvantaged Boston neighborhoods using Python, R, and Excel.
            Presented findings to 200+ community members at Tufts Medical
            Center and Boston Chinatown Neighborhood Center to inform advocacy
            efforts.
          </blockquote>
        </>
      ),
    },
    {
      title: "Direct Air Capture via Metal-Organic Supercontainers",
      image: "/Assets/Images/mosc.png",
      content: (
        <>
          <blockquote>
            Conducted experiments in direct air carbon capture and drug
            delivery. Applied computational and statistical tools for data
            interpretation in Python, R, and Microsoft Excel. Conducted
            literature reviews, authored and edited grant proposals,
            graduate-level theses, and research papers. Presented findings at
            American Chemical Society Regional Conferences (2022, 2023).
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
                  "https://usd.technologypublisher.com/tech/Metal-Organic_Super-Containers",
                  "_blank"
                )
              }}
            >
              Learn More
            </button>
          </div>
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

      <div id="research-body">
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

              const handleBackClick = (
                event: React.MouseEvent<HTMLDivElement>
              ) => {
                const target = event.target as HTMLElement

                if (target.closest("button, a")) {
                  return
                }

                flipCard()
              }

              return (
                <div
                  key={index}
                  className="project-slide"
                  style={{ minWidth: "100%" }}
                >
                  <div
                    className={`research-card ${isFlipped ? "is-flipped" : ""}`}
                    onKeyDown={handleKeyDown}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isFlipped}
                    aria-label={`Flip ${slide.title} research card`}
                  >
                    <div className="research-card-inner">
                      <div
                        className={`research-card-face research-card-front ${
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
                          <span className="flip-hint">Click to view research</span>
                        </div>
                      </div>

                      <div
                        className="research-card-face research-card-back"
                        onClick={handleBackClick}
                      >
                        {slide.content}
                        <span className="flip-hint">Click to flip back</span>
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

export default ResearchPage