import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 max-w-4xl mx-auto px-6"
    >
      <h3 className="text-3xl font-bold mb-6">À propos de moi</h3>
      <p>
        Développeuse Full-Stack junior formée en React et Laravel, motivée et prête à apprendre dans un environnement professionnel.
      </p>
    </motion.section>
  );
}
