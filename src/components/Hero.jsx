import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Développeuse Full-Stack Junior
        </h2>
        <p className="text-blue-500 mb-6">React • Laravel • MySQL</p>
        <p className="max-w-xl mx-auto mb-8">
          Passionnée par le développement web, je conçois des applications modernes et fonctionnelles.
          À la recherche d’un stage avec objectif emploi junior.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Voir mes projets</a>
          <a href="#contact" className="px-6 py-3 border rounded-lg">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}
