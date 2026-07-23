import React from "react"
import '../styles/home.css'
import NavBar from '../components/NavBar'

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img
          src="/Assets/Images/headshot.jpg"
          className="headshot"
          alt="Yuyuan Huang"
        />

        <div className="pageText">
          <blockquote>
            <b>
              <u>ABOUT ME</u>
            </b>
          </blockquote>

          <blockquote>
            ╰┈➤ Hello! My name is Yuyuan Huang and I'm a student at Brown
            University.
            <br />
            ╰┈➤ Sc.B in Computer Science; B.A in International and Public Affairs (Public Policy Track)
            <br />
          </blockquote>

          <blockquote>
            At Brown, I'm a Robotics Lead for{" "}
            <a
              href="https://brownspace.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brown Space Engineering
            </a>{" "}
            and Executive Vice President of{" "}
            <a
              href="https://www.grcglobalgroup.com/brown"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brown Global Research and Consulting
            </a>
            . 
          </blockquote>

          <blockquote>
            I am primarily interested in the field of{" "}
            <b>human-computer interaction</b>. I love learning about and
            working with{" "}
            <a
              href="https://github.com/lijune-choi1/gendertracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI and NLP
            </a>
            , {" "}
            <a
              href="https://nycha-dashboard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              data visualization
            </a>
            , robotics, and{" "}
            <a
              href="https://github.com/yhuang2024/debatebase"
              target="_blank"
              rel="noopener noreferrer"
            >
              edtech
            </a>
            . Outside of class, I'm actively engaged in socially responsible
            computing research as a joint UTA-STA for a {" "}
            <a
              href="https://cs0320.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              software engineering class
            </a>
            , emphasizing safe and sustainable development practices in the CS
            curriculum at Brown. I'm also a researcher in the Human-Computer Interaction 
            Lab under Dr. Jeff Huang and the Sociotechnical Wellbeing Research Lab under
            Dr. Diana Freed. 
          </blockquote>

          <blockquote>
            My hobbies include{" "}
            <a
              href="https://www.amazon.com/dp/B0D5V2GHDB?ref_=pe_93986420_774957520"
              target="_blank"
              rel="noopener noreferrer"
            >
              writing poetry
            </a>
            , photography, knitting, language learning (currently working on Swedish and
            Spanish), and being outdoors.
          </blockquote>

          <blockquote>
            I'd love to chat anytime! Reach out to me via{" "}
            <a
              href="mailto:yuyuan_huang@brown.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
            .
          </blockquote>

          <blockquote>
            For more details on my work experience, check out my resume.
          </blockquote>

          <div className="button-container">
            <button
              className="buttons"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/yuyuan-huang/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>

            <button
              className="buttons"
              onClick={() =>
                window.open("https://github.com/yhuang2024", "_blank")
              }
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage