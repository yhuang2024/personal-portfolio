import React from "react"
import { Link } from 'react-router-dom'
import '../styles/writing.css'

const WritingPage: React.FC = () => {
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
              <a href="/Assets/Documents/Huang_Yuyuan_Resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div id="writing-body">
        <div id="writing-content">
          <h2 className="poetry-title">Poetry</h2>

          <h3 className="2022-title">2022</h3>

          <blockquote>
            <a
              href="https://drive.google.com/file/d/1VZqlF52ObvnDaUgZiLBWUpNDIr-6WVPh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              14 memory lane
            </a>
            , <em>CHINCHILLA LIT</em> (November)
            <br />

            <a
              href="https://drive.google.com/file/d/1VZqlF52ObvnDaUgZiLBWUpNDIr-6WVPh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              self portrait as a gutted fish
            </a>
            , <em>CHINCHILLA LIT</em> (November)
            <br />
          </blockquote>

          <h3 className="2023-title">2023</h3>

          <blockquote>
            <a
              href="https://www.icelollyreview.com/_files/ugd/784684_107b16b1e68f41a39e9e46dda7575a82.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apex Predator
            </a>
            , <em>Ice Lolly Review</em> (January)
            <br />

            <a
              href="https://bluemarblereview.com/thoughts-and-prayers/"
              target="_blank"
              rel="noopener noreferrer"
            >
              thoughts and prayers
            </a>
            , <em>Blue Marble Review; Glass Mountain Review</em> (June)
            <br />

            <a
              href="https://www.calameo.com/read/006629503cf17ae6b78c6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haze
            </a>
            , <em>Paper Crane Journal</em> (October)
            <br />
          </blockquote>

          <h3 className="2024-title">2024</h3>

          <blockquote>
            <a
              href="https://www.inflectionism.com/18-yuyuan-huang-smoke-signal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smoke Signals
            </a>
            , <em>Inflectionist Review</em> (February)
            <br />

            <a
              href="https://www.inflectionism.com/18-yuyuan-huang-snake-lips"
              target="_blank"
              rel="noopener noreferrer"
            >
              snake lips
            </a>
            , <em>Inflectionist Review</em> (February)
            <br />

            <a
              href="https://www.amazon.com/dp/B0D5V2GHDB?ref_=pe_93986420_774957520"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swallow
            </a>
            , <em>self-published</em> (May)
            <br />
          </blockquote>

          <h3 className="2025-title">2025</h3>

          <blockquote>
            <a
              href="https://www.thimblelitmag.com/2025/01/28/fossil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fossil
            </a>
            , <em>Thimble Literary Magazine</em> (January)
            <br />
          </blockquote>

          <h2 className="academic-title">Academic</h2>

          <blockquote>
            <a
              href="https://docs.google.com/document/d/10mzFSeeb2C0HMVw39HPptAJCWxQa15Y2/edit?usp=sharing&ouid=113381762479866801465&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Poetic Politics of Forugh Farrokhzad and Simin Behbahani
            </a>
            , <em>The Concord Review</em> (December 2023)
            <br />

            <a
              href="/Assets/Documents/guanyin.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guanyin: Savior, Mentor, Model Buddhist
            </a>
            , <em>Journal of Chinese Overseas</em> (January 2025)
            <br />
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default WritingPage