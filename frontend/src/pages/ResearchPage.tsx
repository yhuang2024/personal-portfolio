import React, { useState } from "react"
import '../styles/research.css'

const ResearchPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      title: "Low-Resource Language Models for Kurdish and Narragansett",
      titleClass: "aires-title",
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

          <div className="button-container">
            <button
              className="buttons"
              onClick={() =>
                window.open(
                  "https://airesbrown.wixsite.com/mysite",
                  "_blank"
                )
              }
            >
              Research Group Website
            </button>

            <button
              className="buttons"
              onClick={() =>
                window.open(
                  "https://github.com/jinholee17/airesNLP",
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
      title: "Urban Air Quality Analysis in Chinatown",
      titleClass: "harvard-title",
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
      titleClass: "usd-title",
      content: (
        <>
          <img
            src="/Assets/Images/mosc.png"
            alt="Metal-Organic Supercontainers"
          />

          <blockquote>
            Conducted experiments in direct air carbon capture and drug
            delivery. Applied computational and statistical tools for data
            interpretation in Python, R, and Microsoft Excel. Conducted
            literature reviews, authored and edited grant proposals,
            graduate-level theses, and research papers. Presented findings at
            American Chemical Society Regional Conferences (2022, 2023).
          </blockquote>

          <div className="button-container">
            <button
              className="buttons"
              onClick={() =>
                window.open(
                  "https://usd.technologypublisher.com/tech/Metal-Organic_Super-Containers",
                  "_blank"
                )
              }
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
      <div className="wrapper">
        <div className="navbar container">
          <a id="name" className="alignable pull-left" href="/">
            ~YH~
          </a>

          <ul id="navlist" className="alignable pull-right navbar-ul">
            <li className="alignable pull-left nav-list">
              <a href="/projects">Projects</a>
            </li>

            <li className="alignable pull-left nav-list">
              <a href="/research">Research</a>
            </li>

            <li className="alignable pull-left nav-list">
              <a href="/writing">Writing</a>
            </li>

            <li className="alignable pull-left nav-list">
              <a href="/Assets/Documents/Huang_Yuyuan_Resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

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

export default ResearchPage