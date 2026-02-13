export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6">
        <h1 className="text-xl font-bold text-amber-400">LUCDEV</h1>

        <ul className="flex gap-8 text-slate-300">
          <li><a href="#home" className="hover:text-amber-400">Accueil</a></li>
          <li><a href="#about" className="hover:text-amber-400">À propos</a></li>
          <li><a href="#projects" className="hover:text-amber-400">Projets</a></li>
        </ul>
      </div>
    </nav>
  );
}
