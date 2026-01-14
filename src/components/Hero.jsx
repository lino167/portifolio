import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { animate } from 'animejs'

const Hero = () => {
  const shape1Ref = useRef(null)
  const shape2Ref = useRef(null)
  const ctaRef = useRef(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
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

  useEffect(() => {
    if (shape1Ref.current) {
      animate(shape1Ref.current, {
        scale: [0.9, 1.1],
        translateX: [-10, 10],
        duration: 4000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
      })
    }
    if (shape2Ref.current) {
      animate(shape2Ref.current, {
        translateY: [-8, 8],
        rotate: [35, 55],
        duration: 5000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
      })
    }
    if (ctaRef.current) {
      const el = ctaRef.current
      const onEnter = () => {
        animate(el, { scale: [1, 1.05], duration: 200, easing: 'easeOutQuad' })
      }
      const onLeave = () => {
        animate(el, { scale: 1, duration: 200, easing: 'easeOutQuad' })
      }
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      }
    }
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Background Gradients/Shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent -z-10"></div>
      <div
        ref={shape1Ref}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-float-slow -z-10"
      ></div>
      <div
        ref={shape2Ref}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-blue-500/50 rotate-45 animate-spin-slow -z-10"
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Animated Greeting */}
        <motion.p
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="text-brand-primary font-semibold tracking-wide mb-4 overflow-hidden inline-flex flex-wrap justify-center gap-[1px]"
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

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white"
          >
            De Mecânico Industrial a <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Engenheiro de Software Full Stack
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            Unindo a precisão da indústria com a inovação do código.
            Especialista em resolver problemas complexos.
          </motion.p>

          <motion.a
            variants={item}
            href="#projetos"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
            ref={ctaRef}
          >
            Ver Projetos
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
