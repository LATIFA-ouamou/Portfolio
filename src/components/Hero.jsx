// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center text-center px-6">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">
//           Développeuse Full-Stack Junior
//         </h2>
//         <p className="text-blue-500 mb-6">React • Laravel • MySQL</p>
//         <p className="max-w-xl mx-auto mb-8">
//           Passionnée par le développement web, je conçois des applications modernes et fonctionnelles.
//           À la recherche d’un stage avec objectif emploi junior.
//         </p>
//         <div className="flex gap-4 justify-center flex-wrap">
//           <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Voir mes projets</a>
//           <a href="#contact" className="px-6 py-3 border rounded-lg">Contact</a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        <div className="space-y-6">
          <h2 className="text-5xl font-bold">
            Bonjour,<br />
            je suis <span className="text-amber-400">Latifa</span>
          </h2>

          <p className="text-slate-300">
            Développeuse Full-Stack spécialisée React & Laravel.
            Je crée des applications modernes et performantes.
          </p>

          <button className="bg-amber-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Contactez-moi
          </button>
        </div>

        <div className="flex justify-center">
          <div className="p-2 bg-amber-400 rounded-[40%]">
            <img
              src={profile}
              className="w-80 h-80 object-cover rounded-[40%]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
