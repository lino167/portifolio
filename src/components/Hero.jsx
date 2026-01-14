import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'
import MagneticButton from './ui/MagneticButton'

const Hero = () => {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  }

  const letterAnimation = {
    hidden: { y: '1.1em', opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  }

  const greeting = 'Olá, sou Zacarias Ramos'
  const letters = Array.from(greeting)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`
  const maskSpotlight = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.95), transparent 70%)`

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden bg-slate-950"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: spotlight,
          backgroundColor: 'rgb(2, 6, 23)',
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10 opacity-80"
        style={{
          backgroundImage: "url('/grid-pattern.svg')",
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: '40px 40px',
          WebkitMaskImage: maskSpotlight,
          maskImage: maskSpotlight,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.p
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="text-cyan-400 font-semibold tracking-wide mb-4 overflow-hidden inline-flex flex-wrap justify-center gap-[1px]"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              className="inline-block whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
          >
            Arquitetando o Futuro Digital com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 animate-text-shimmer bg-[length:200%_auto]">
              Soluções Escaláveis.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            Engenheiro de Software especializado em transformar necessidades de
            negócio em sistemas de alta performance, seguros e prontos para o
            crescimento.
          </motion.p>

          <motion.div variants={itemVariants}>
            <MagneticButton
              onClick={() =>
                document
                  .getElementById('projetos')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver Projetos
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
