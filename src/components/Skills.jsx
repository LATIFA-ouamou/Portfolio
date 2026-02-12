export default function Skills() {
  const skills = [
    {title: "Front-End", items:["HTML5","CSS3","JavaScript","React","Tailwind/Bootstrap"]},
    {title: "Back-End", items:["PHP","Laravel","API REST"]},
    {title: "Base de données", items:["MySQL"]},
    {title: "Outils", items:["Git & GitHub","Figma","VS Code","Postman"]}
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Compétences</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill,i)=>(
            <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow">
              <h4 className="font-semibold text-blue-500 mb-3">{skill.title}</h4>
              <ul className="text-sm space-y-1">
                {skill.items.map((item,index)=>(<li key={index}>• {item}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
