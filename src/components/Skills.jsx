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

export default function Skills() {
  const skills = ["HTML", "CSS", "JS", "React", "Laravel", "Tailwind"];

  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold mb-10">COMPÉTENCES</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((s, i) => (
          <div key={i}
            className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
