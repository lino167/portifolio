import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-4 bg-white dark:bg-brand-dark">
        <div className="container mx-auto max-w-5xl">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-slate-900 dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-500 after:rounded-full"
            >
                Meus Projetos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card: KRAFLO */}
                <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white dark:bg-brand-cardDark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">KRAFLO Enterprise</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                            Plataforma SaaS de Gestão de Manutenção Industrial (CMMS) com IoT integrado. Monitoramento em tempo real de ativos fabris usando arquitetura orientada a eventos.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["React", "Node.js", "MQTT", "AWS Lambda", "PostgreSQL"].map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
                            Ver detalhes <span className="ml-1 text-lg">&rarr;</span>
                        </a>
                    </div>
                </motion.article>
                {/* Project Card: Nexus FinTech Core */}
                <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white dark:bg-brand-cardDark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">Nexus FinTech Core</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                            Gateway de pagamentos distribuído capaz de processar 50k transações/segundo. Foco em segurança (PCI-DSS) e tolerância a falhas.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Go", "Kafka", "Docker", "Kubernetes", "Redis"].map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
                            Ver detalhes <span className="ml-1 text-lg">&rarr;</span>
                        </a>
                    </div>
                </motion.article>
                {/* Project Card: Vision AI Dashboard */}
                <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white dark:bg-brand-cardDark rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:-translate-y-2 transition-transform duration-300"
                >
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors">Vision AI Dashboard</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                            Dashboard analítico para processamento de dados de visão computacional, auxiliando no controle de qualidade automatizado.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Next.js", "Python", "TensorFlow", "GraphQL"].map(tag => (
                                <span key={tag} className="px-2 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href="#" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all">
                            Ver detalhes <span className="ml-1 text-lg">&rarr;</span>
                        </a>
                    </div>
                </motion.article>
            </div>
        </div>
    </section>
  );
};

export default Projects;
