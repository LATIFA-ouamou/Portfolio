// // import { motion } from "framer-motion";

// // export default function Projects() {
// //   const projects = [
// //     {
// //       title: "BookTrack – Gestion de bibliothèque",
// //       description: "Application web permettant la gestion des livres, des emprunts et des utilisateurs.",
// //       tech: "React • Laravel • MySQL"
// //     },
// //     {
// //       title: "Projet académique",
// //       description: "Application web pour pratiquer le Full-Stack",
// //       tech: "React • Laravel"
// //     }
// //   ];

// //   return (
// //     <section id="projects" className="py-20">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <h3 className="text-3xl font-bold text-center mb-10">Projets</h3>
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="grid md:grid-cols-2 gap-8"
// //         >
// //           {projects.map((project,i)=>(
// //             <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
// //               <h4 className="font-semibold text-xl mb-2">{project.title}</h4>
// //               <p className="mb-2">{project.description}</p>
// //               <span className="text-sm text-blue-500">{project.tech}</span>
// //               <div className="flex gap-4 mt-3">
// //                 <a href="#" className="text-blue-500 hover:underline">GitHub</a>
// //                 <a href="#" className="text-blue-500 hover:underline">Demo</a>
// //               </div>
// //             </div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }



// export default function Projects() {
//   const projects = Array(6).fill("Projet");

//   return (
//     <section id="projects" className="py-24 bg-slate-800">
//       <h2 className="text-center text-3xl font-bold mb-12">MES PROJETS</h2>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//         {projects.map((p, i) => (
//           <div key={i} className="bg-slate-700 rounded-xl overflow-hidden shadow-lg">
//             <div className="h-40 bg-slate-600" />

//             <div className="p-5">
//               <h3 className="font-semibold mb-3">Projet {i + 1}</h3>

//               <button className="bg-amber-400 text-black px-4 py-2 rounded">
//                 Demo
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Personnel",
      description:
        "Portfolio professionnel moderne et responsive développé avec React et Vite. Présentation de mes compétences, projets et expériences avec animations fluides et mode sombre.",
      tech: ["React", "Vite", "Framer Motion", "CSS"],
      image: "/portfolio.png",
    },
    {
      title: "Gestion des Ressources Humaines",
      description:
        "Application web de gestion des ressources humaines avec Laravel, React et Keycloak. Gestion des employés, absences, présences et retards.",
      tech: ["Laravel", "React"],
      image: "/rh.png",
    },
    {
      title: "Gestion d'Hébergement",
      description:
        "Application web de gestion d'hébergement développée avec Laravel et MySQL. Automatisation des réservations, factures et suivi de disponibilité des chambres.",
      tech: ["Laravel", "MySQL", "PHP"],
      image: "/hotel.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#1a0f08] to-[#0f0704] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Mes Projets</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-[#2a1a12] rounded-2xl overflow-hidden shadow-xl border border-amber-900/20 hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-[#3a2418]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-[#3a2418] text-amber-400 border border-amber-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-6 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

