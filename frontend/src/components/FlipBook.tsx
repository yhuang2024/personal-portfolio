import React, { useState } from 'react'
import '../styles/writing.css'

type FlipBookProps = {
  pages: React.ReactNode[]
}

const FlipBook: React.FC<FlipBookProps> = ({ pages }) => {
  const [index, setIndex] = useState(0)
  const [anim, setAnim] = useState<'none' | 'next' | 'prev'>('none')

  const next = () => {
    if (anim !== 'none') return
    if (index + 2 >= pages.length) return

    setAnim('next')

    setTimeout(() => {
      setIndex(prev => prev + 2)
      setAnim('none')
    }, 1000)
  }

  const prev = () => {
    if (anim !== 'none') return
    if (index === 0) return

    setAnim('prev')

    setTimeout(() => {
      setIndex(prev => prev - 2)
      setAnim('none')
    }, 1000)
  }

  const left = pages[index]
  const right = pages[index + 1]

  // keep page visible underneath during page turns
  const nextRight = pages[index + 2]
  const prevLeft = pages[index - 2]

  return (
    <div className="flipbook">
      <div className="book">
        <div className="book-spine" />
        <div className="page left-page">
          {anim === 'prev' && prevLeft ? prevLeft : left}
        </div>

        {anim === 'next' && nextRight && (
          <div className="page next-page">
            {nextRight}
          </div>
        )}

        {/* page turns */}
        <div
          className={`page right-page ${
            anim === 'next'
              ? 'flip-next'
              : anim === 'prev'
              ? 'flip-prev'
              : ''
          }`}
        >
          {right}
        </div>
      </div>

      <div className="controls">
        <button
          className="pageButton"
          onClick={prev}
          disabled={index === 0 || anim !== 'none'}
        >
          Prev
        </button>

        <button
          className="pageButton"
          onClick={next}
          disabled={index + 2 >= pages.length || anim !== 'none'}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default FlipBook