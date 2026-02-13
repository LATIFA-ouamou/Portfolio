// import { motion } from "framer-motion";

// export default function Projects() {
//   const projects = [
//     {
//       title: "BookTrack – Gestion de bibliothèque",
//       description: "Application web permettant la gestion des livres, des emprunts et des utilisateurs.",
//       tech: "React • Laravel • MySQL"
//     },
//     {
//       title: "Projet académique",
//       description: "Application web pour pratiquer le Full-Stack",
//       tech: "React • Laravel"
//     }
//   ];

//   return (
//     <section id="projects" className="py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         <h3 className="text-3xl font-bold text-center mb-10">Projets</h3>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid md:grid-cols-2 gap-8"
//         >
//           {projects.map((project,i)=>(
//             <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
//               <h4 className="font-semibold text-xl mb-2">{project.title}</h4>
//               <p className="mb-2">{project.description}</p>
//               <span className="text-sm text-blue-500">{project.tech}</span>
//               <div className="flex gap-4 mt-3">
//                 <a href="#" className="text-blue-500 hover:underline">GitHub</a>
//                 <a href="#" className="text-blue-500 hover:underline">Demo</a>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }



export default function Projects() {
  const projects = Array(6).fill("Projet");

  return (
    <section id="projects" className="py-24 bg-slate-800">
      <h2 className="text-center text-3xl font-bold mb-12">MES PROJETS</h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-slate-700 rounded-xl overflow-hidden shadow-lg">
            <div className="h-40 bg-slate-600" />

            <div className="p-5">
              <h3 className="font-semibold mb-3">Projet {i + 1}</h3>

              <button className="bg-amber-400 text-black px-4 py-2 rounded">
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
