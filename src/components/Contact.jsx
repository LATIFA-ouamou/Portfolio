export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h3 className="text-3xl font-bold mb-4">Contact</h3>
      <p className="mb-6">Intéressé(e) par mon profil ? N’hésitez pas à me contacter.</p>
      <div className="space-y-2">
        <p>📧 ton@email.com</p>
        <p>💼 <a href="#" className="text-blue-500 hover:underline">LinkedIn</a></p>
        <p>💻 <a href="#" className="text-blue-500 hover:underline">GitHub</a></p>
      </div>
    </section>
  );
}
