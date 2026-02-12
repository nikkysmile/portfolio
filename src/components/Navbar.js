import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur-xl bg-black/20 border-b border-white/10 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          NikkySmile
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white/90">
          <li><a href="#hero" className="hover:text-white">Home</a></li>
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#experience" className="hover:text-white">Experiences</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#projects" className="hover:text-white">Initiatives</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute right-6 top-16 bg-black/50 backdrop-blur-xl p-6 rounded-xl border border-white/10 md:hidden">
            <ul className="flex flex-col gap-4 text-white">
              <li><a href="#hero" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#experience" className="hover:text-white">Experiences</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#projects" className="hover:text-white">Initiatives</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        )}

      </nav>
    </header>
  );
}
