import { motion } from 'framer-motion'

const timelineData = [
  {
    year: '2022',
    title: 'Full Stack Developer',
    desc: 'Desenvolvimento de APIs RESTful de alta disponibilidade e interfaces reativas.',
  },
  {
    year: '2024',
    title: 'Tech Lead @ InovaSoft',
    desc: 'Responsável pela arquitetura do novo sistema financeiro e mentoria de desenvolvedores júnior/pleno.',
  },
  {
    year: '2026',
    title: 'Senior Software Engineer @ TechCorp',
    desc: 'Liderança de squad focado em modernização de legado e implementação de arquitetura de microsserviços.',
  },
]

const Timeline = () => {
  return (
    <section
      id="jornada"
      className="py-24 px-4 bg-slate-50 dark:bg-[#131c31] overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center text-slate-900 dark:text-white"
        >
          Minha Jornada
        </motion.h2>

        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-20 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 -translate-x-1/2 md:translate-x-0 z-0"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`relative flex flex-col md:grid md:grid-cols-12 items-center mb-12`}
          >
            <div className="z-10 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-4 border-slate-50 dark:border-[#131c31] absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{ transformOrigin: index % 2 !== 0 ? 'right' : 'left' }}
              className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-[200px] ${
                index % 2 !== 0
                  ? 'right-1/2 bg-blue-500'
                  : 'left-1/2 bg-blue-500'
              } z-0`}
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ x: index % 2 !== 0 ? -200 : 200 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 ${
                index % 2 !== 0 ? 'right-1/2' : 'left-1/2'
              } z-0`}
            />
            <div
              className={`relative z-10 w-full pl-12 ${
                index % 2 !== 0
                  ? 'md:col-start-1 md:col-end-6 md:pr-16 md:text-right'
                  : 'md:col-start-8 md:col-end-13 md:pl-16 md:text-left'
              }`}
            >
              <div
                className={`bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md border-l-4 ${
                  index % 2 !== 0 ? 'md:border-l-0 md:border-r-4' : ''
                } border-blue-500 dark:border dark:border-gray-700 hover:dark:border-cyan-500/50 transition-colors`}
              >
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
