import { useState, useEffect } from 'react'

// changes screen size by returning a width and height
export const useWindowSize = () => {
  const [size, setSize] = useState([0,0])

  useEffect(() => {
    const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight])
    }

    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize) // reset
  }, [])

  return {
    width: size[0],
    height: size[1]
  }
}