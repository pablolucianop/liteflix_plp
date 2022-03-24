import React from 'react'

const breakingPointPixelsNumber = 600

function BreakingPoint({ setminWidthReached }) {
  React.useEffect(() => {
    function handleResize() {
      //   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
      if (window.innerWidth < breakingPointPixelsNumber) {
        setminWidthReached(true)
      } else {
        setminWidthReached(false)
      }
    }

    window.addEventListener('resize', handleResize)
  })

  return <div></div>
}

export default BreakingPoint
