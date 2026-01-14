import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="habilidades" className="py-24 px-4 bg-slate-50 dark:bg-[#162032]">
        <div className="container mx-auto max-w-5xl">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-slate-900 dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:rounded-full"
            >
                Minhas Habilidades
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Hard Skills */}
                <motion.div
                    initial={{ opacity: 0, rotateX: -90 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-brand-cardDark p-8 rounded-2xl shadow-md"
                >
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white border-b-2 border-blue-500 inline-block pb-2">Hard Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Tailwind CSS", "Git", "Manutenção Industrial"].map(skill => (
                            <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium hover:text-blue-600 hover:border-blue-500 border border-transparent transition-all shadow-sm hover:shadow-md cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    initial={{ opacity: 0, rotateX: -90 }}
                    whileInView={{ opacity: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white dark:bg-brand-cardDark p-8 rounded-2xl shadow-md"
                >
                    <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white border-b-2 border-blue-500 inline-block pb-2">Soft Skills</h3>
                    <div className="flex flex-wrap gap-3">
                        {["Resolução de Problemas", "Liderança Técnica", "Comunicação", "Trabalho em Equipe", "Adaptabilidade"].map(skill => (
                            <span key={skill} className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium border-l-4 border-blue-500 shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
