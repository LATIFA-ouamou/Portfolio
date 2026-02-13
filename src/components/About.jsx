// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="py-20 max-w-4xl mx-auto px-6"
//     >
//       <h3 className="text-3xl font-bold mb-6">À propos de moi</h3>
//       <p>
//         Développeuse Full-Stack junior formée en React et Laravel, motivée et prête à apprendre dans un environnement professionnel.
//       </p>
//     </motion.section>
//   );
// }



export default function About() {
  const items = [
    "Développeur Frontend React",
    "Développeur Backend Laravel",
    "Passionnée UI/UX"
  ];

  return (
    <section id="about" className="py-24 bg-slate-800">
      <h2 className="text-center text-3xl font-bold mb-12">À PROPOS</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-slate-700 p-6 rounded-xl shadow-lg hover:scale-105 transition">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
