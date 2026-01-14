import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const MagneticButton = ({ children, onClick }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 400, damping: 17 })
  const springY = useSpring(y, { stiffness: 400, damping: 17 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    const factor = 0.08
    const limit = 12
    const nx = Math.max(-limit, Math.min(limit, dx * factor))
    const ny = Math.max(-limit, Math.min(limit, dy * factor))
    x.set(nx)
    y.set(ny)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 shadow-md hover:shadow-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 transition-all duration-200"
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton

