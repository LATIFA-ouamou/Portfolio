import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Portfolio</h1>
        <div className="flex items-center gap-4">
          <a href="#projects" className="hover:text-blue-500">Projets</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
