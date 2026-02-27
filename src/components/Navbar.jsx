import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-[#1a0f08]/80 backdrop-blur border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-amber-400 tracking-wide">
          LATIFA
        </h1>

        {/* MENU */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-amber-400">Accueil</a></li>
          <li><a href="#about" className="hover:text-amber-400">À propos</a></li>
          <li><a href="#projects" className="hover:text-amber-400">Projets</a></li>
          <li><a href="#skills" className="hover:text-amber-400">Compétences</a></li>
          <li><a href="#experience" className="hover:text-amber-400">Expérience</a></li>
          <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
        </ul>

        {/* DARK MODE */}
        <DarkModeToggle />

      </div>
    </nav>
  );
}