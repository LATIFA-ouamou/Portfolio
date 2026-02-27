// export default function Skills() {
//   const skills = [
//     {title: "Front-End", items:["HTML5","CSS3","JavaScript","React","Tailwind/Bootstrap"]},
//     {title: "Back-End", items:["PHP","Laravel","API REST"]},
//     {title: "Base de données", items:["MySQL"]},
//     {title: "Outils", items:["Git & GitHub","Figma","VS Code","Postman"]}
//   ];

//   return (
//     <section className="py-20 bg-slate-100 dark:bg-slate-800">
//       <div className="max-w-6xl mx-auto px-6">
//         <h3 className="text-3xl font-bold text-center mb-10">Compétences</h3>
//         <div className="grid md:grid-cols-4 gap-6">
//           {skills.map((skill,i)=>(
//             <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
//               <h4 className="font-semibold text-blue-500 mb-3">{skill.title}</h4>
//               <ul className="text-sm space-y-1">
//                 {skill.items.map((item,index)=>(<li key={index}>• {item}</li>))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// export default function Skills() {
//   const skills = ["HTML", "CSS", "JS", "React", "Laravel", "Tailwind"];

//   return (
//     <section className="py-20">
//       <h2 className="text-center text-3xl font-bold mb-10">COMPÉTENCES</h2>

//       <div className="flex flex-wrap justify-center gap-6">
//         {skills.map((s, i) => (
//           <div key={i}
//             className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
//             {s}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,

  SiTailwindcss,
  SiPhp,
  SiLaravel,

  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  
} from "react-icons/si";

export default function Skills() {
  const technicalSkills = [
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
   
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
    { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
    
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
  ];

  const tools = [
    { name: "Git", icon: <SiGit />, color: "text-orange-600" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
    
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-[#1a0f08] to-[#0f0704] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-3">Mes Compétences</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400">
            Technologies et outils que j’utilise au quotidien
          </p>
        </div>

        {/* Technical Skills */}
        <h3 className="text-2xl font-semibold mb-8 text-amber-400">
          Compétences Techniques
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#2a1a12] rounded-2xl p-6 text-center border border-amber-900/20 hover:scale-105 transition duration-300"
            >
              <div className={`text-5xl mb-4 ${skill.color}`}>
                {skill.icon}
              </div>
              <p className="text-gray-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-2xl font-semibold mb-8 text-amber-400">
          Outils
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#2a1a12] rounded-2xl p-6 text-center border border-amber-900/20 hover:scale-105 transition duration-300"
            >
              <div className={`text-5xl mb-4 ${tool.color}`}>
                {tool.icon}
              </div>
              <p className="text-gray-300">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
