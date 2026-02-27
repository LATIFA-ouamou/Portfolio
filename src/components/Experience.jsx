import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      date: "Juil. 2025 – Janv. 2026",
      title: "Développement Web Full-Stack",
      company: "Simplon Maghreb · Casablanca (Hybride)",
      description:
        "Spécialisation en PHP/Laravel (backend) et React.js (frontend). Réalisation d’applications web complètes : gestion de bases de données, API REST, interfaces interactives et responsives.",
    },
    {
      date: "Mai 2022 – Juin 2022",
      title: "Stage de fin d’études",
      company:
        "Sous-Direction Régionale de la Justice · Ouarzazate",
      description:
        "Développement d’un système de gestion de stock pour optimiser la gestion des fournitures administratives internes avec Laravel.",
    },
    {
      date: "Avr. 2021",
      title: "Consultant Informatique (Stage)",
      company:
        "ORMVAO · Office Régional de Mise en Valeur Agricole · Ouarzazate",
      description:
        "Participation à des activités de découverte du fonctionnement d’un établissement public dans le domaine agricole et hydrique.",
    },
  ];

  const education = [
    {
      date: "2021 – 2022",
      title: "BTS Développement des Systèmes Informatiques",
      school: "Brevet de Technicien Supérieur (BTS DSI)",
      description:
        "Formation en développement informatique avec spécialisation en PHP et MySQL.",
    },
    {
      date: "2019 – 2020",
      title:
        "Baccalauréat Technique – Sciences et Technologies Électriques",
      school: "Lycée Technique Ibn Al Haitam · Ouarzazate",
      description:
        "Formation technique en systèmes électriques et technologies industrielles.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a0f08] to-[#0f0704] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-3">
            Expérience & Formation
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* EXPERIENCE */}
          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-10 flex items-center gap-2">
              <Briefcase size={20} />
              Expérience Professionnelle
            </h3>

            <div className="relative border-l border-amber-800 pl-8 space-y-12">
              {experiences.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative"
                >
                  <span className="absolute -left-4 top-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-black text-sm font-bold">
                    •
                  </span>

                  <div className="bg-[#2a1a12] p-6 rounded-2xl border border-amber-900/20 shadow-lg">
                    <p className="text-sm text-amber-400 mb-2">
                      {item.date}
                    </p>
                    <h4 className="font-semibold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.company}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FORMATION */}
          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-10 flex items-center gap-2">
              <GraduationCap size={20} />
              Formation
            </h3>

            <div className="relative border-l border-amber-800 pl-8 space-y-12">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative"
                >
                  <span className="absolute -left-4 top-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-black text-sm font-bold">
                    •
                  </span>

                  <div className="bg-[#2a1a12] p-6 rounded-2xl border border-amber-900/20 shadow-lg">
                    <p className="text-sm text-amber-400 mb-2">
                      {item.date}
                    </p>
                    <h4 className="font-semibold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.school}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
