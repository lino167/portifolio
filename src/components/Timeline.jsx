import { motion } from 'framer-motion';

const timelineData = [
  {
    year: "2022",
    title: "Full Stack Developer",
    desc: "Desenvolvimento de APIs RESTful de alta disponibilidade e interfaces reativas."
  },
  {
    year: "2024",
    title: "Tech Lead @ InovaSoft",
    desc: "Responsável pela arquitetura do novo sistema financeiro e mentoria de desenvolvedores júnior/pleno."
  },
  {
    year: "2026",
    title: "Senior Software Engineer @ TechCorp",
    desc: "Liderança de squad focado em modernização de legado e implementação de arquitetura de microsserviços."
  }
];

const Timeline = () => {
  return (
    <section id="jornada" className="py-24 px-4 bg-slate-50 dark:bg-[#131c31] overflow-hidden">
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
            <div className="absolute left-4 md:left-1/2 top-20 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 -translate-x-1/2 md:translate-x-0"></div>

            {timelineData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`flex flex-col md:flex-row${index % 2 !== 0 ? '-reverse' : ''} items-center justify-between mb-12`}
                >
                    <div className="hidden md:block w-5/12"></div>
                    <div className="z-10 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-4 border-slate-50 dark:border-[#131c31] absolute left-4 md:left-1/2 -translate-x-1/2 shadow-lg"></div>
                    <div className={`w-full md:w-5/12 pl-12 ${index % 2 !== 0 ? 'md:pl-0 md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                        <div className={`bg-white dark:bg-brand-cardDark p-6 rounded-xl shadow-md border-l-4 ${index % 2 !== 0 ? 'md:border-l-0 md:border-r-4' : ''} border-blue-500 hover:shadow-xl transition-shadow`}>
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">{item.year}</span>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  );
};

export default Timeline;
