import React from 'react'
import HTMLFlipBook from 'react-pageflip'
import '../styles/writing.css'

type FlipBookProps = {
  pages: React.ReactNode[]
}

const FlipBook: React.FC<FlipBookProps> = ({ pages }) => {
  return (
    <div className="flipbook">
      <HTMLFlipBook
        className="book"
        style={{ margin: '0 auto' }}
        width={400}
        height={600}
        size="stretch"
        minWidth={280}
        maxWidth={500}
        minHeight={420}
        maxHeight={750}
        startPage={0}
        drawShadow
        flippingTime={900}
        usePortrait
        startZIndex={0}
        autoSize
        maxShadowOpacity={0.35}
        showCover={false}
        mobileScrollSupport
        clickEventForward
        useMouseEvents
        swipeDistance={30}
        showPageCorners
        disableFlipByClick={false}
      >
        {pages.map((page, pageIndex) => (
          <div className="demoPage" key={pageIndex}>
            {page}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  )
}

export default FlipBook