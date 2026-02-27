import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-[#2b160d] via-[#1a0f08] to-[#0f0704] text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* TEXTE */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Bonjour, je suis <br />
            <span className="text-amber-500">LATIFA OUAMOU</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-amber-300 font-semibold">
            Développeuse Full-Stack Junior
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-xl">
            Passionnée par le développement web full-stack, je conçois des
            applications modernes et performantes avec React et Laravel.
            Je maîtrise la création d’API, la gestion de bases de données
            et la conception d’interfaces interactives et responsives.
            Mon objectif est de renforcer mes compétences à travers des
            projets concrets et d’évoluer en tant que développeuse
            professionnelle.
          </p>

        
           

           

          

          {/* BUTTONS */}
          <div className="flex gap-4 pt-6">
            <a
              href="#contact"
              className="bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-xl font-semibold transition"
            >
              Me contacter
            </a>

            <a
              href="#projects"
              className="border border-amber-500 px-6 py-3 rounded-xl font-semibold text-amber-400 hover:bg-amber-500/10 transition"
            >
              Voir mes projets
            </a>
          </div>
        </div>

        {/* IMAGE (inchangée) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 border border-amber-500/30 rounded-3xl"></div>
            <img
              src={profile}
              alt="Latifa"
              className="relative w-80 h-96 object-cover rounded-3xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}