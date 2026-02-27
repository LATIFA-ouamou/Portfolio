import { FiMail, FiLinkedin, FiGithub, FiPhone, FiUser, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-[#2b160d] via-[#1a0f08] to-[#0f0704] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Contactez-moi</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded"></div>
          <p className="text-gray-400 mt-6">
            Une question ? Un projet ? N’hésitez pas à me contacter !
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* INFOS */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Restons en contact</h3>
            <p className="text-gray-400 max-w-md">
              Je suis toujours ouverte aux opportunités et collaborations.
              N’hésitez pas à me contacter !
            </p>

            <div className="space-y-4 pt-4">

              <a
                href="mailto:latifaouamou4444@gmail.com"
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300"
              >
                <FiMail /> latifaouamou4444@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/latifa-ouamou"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300"
              >
                <FiLinkedin /> linkedin.com/in/latifa-ouamou
              </a>

              <a
                href="https://github.com/LATIFA-ouamou"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300"
              >
                <FiGithub /> github.com/LATIFA-ouamou
              </a>

              <a
                href="tel:+212643444266"
                className="flex items-center gap-3 text-amber-400 hover:text-amber-300"
              >
                <FiPhone /> +212 643 444 266
              </a>

            </div>
          </div>

          {/* FORM */}
          <div className="bg-gradient-to-br from-[#2b160d] to-[#3a2116] p-8 rounded-2xl border border-amber-900/30 shadow-xl">
            <form className="space-y-6">

              <div>
                <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                  <FiUser /> Nom
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full bg-[#1a0f08] border border-amber-900/40 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                  <FiMail /> Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-[#1a0f08] border border-amber-900/40 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 flex items-center gap-2 mb-2">
                  <FiMessageSquare /> Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Votre message..."
                  className="w-full bg-[#1a0f08] border border-amber-900/40 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 py-3 rounded-xl font-semibold transition"
              >
                Envoyer le message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}