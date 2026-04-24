export default function Home() {
  return (
    <main className="bg-[#0F172A] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-yellow-500 font-bold">MSQ Co.</h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Kanakrieh Standardization & Quality Consultancy
        </h1>

        <p className="text-gray-300 mb-4 max-w-2xl">
          Supporting governments, regulatory authorities, and organizations in building strong,
          compliant, and internationally recognized systems in standardization, metrology,
          certification, and accreditation.
        </p>

        <p className="text-yellow-500 mb-6">
          ISO | IEC | BIPM | OIML | ILAC
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:scale-105 transition">
            Request Consultation
          </button>

          <a href="#services" className="border border-gray-500 px-6 py-3 rounded-lg">
            View Services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto p-10">

        <h2 className="text-3xl text-center mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-gray-700 p-6 rounded-xl hover:border-yellow-500 hover:scale-105 transition">
            <h3 className="text-yellow-500 text-xl mb-2">Standardization</h3>
            <p className="text-gray-400">
              Drafting, reviewing, and aligning standards with ISO and IEC frameworks,
              supporting the development of national and sector-specific standardization systems.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl hover:border-yellow-500 hover:scale-105 transition">
            <h3 className="text-yellow-500 text-xl mb-2">Metrology</h3>
            <p className="text-gray-400">
              Expertise in legal and industrial metrology, ensuring measurement traceability,
              accuracy, and compliance with international systems such as BIPM and OIML.
            </p>
          </div>

          <div className="border border-gray-700 p-6 rounded-xl hover:border-yellow-500 hover:scale-105 transition">
            <h3 className="text-yellow-500 text-xl mb-2">Certification & Accreditation</h3>
            <p className="text-gray-400">
              Supporting conformity assessment systems and ISO/IEC accreditation readiness,
              aligned with ILAC and international best practices.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto p-10 text-center">
        <h2 className="text-3xl mb-6">Experience</h2>

        <ul className="space-y-3 text-gray-400">
          <li>Head of Metrology Division – GCC Standardization Organization (GSO)</li>
          <li>Executive Secretary – GULFMET (Regional Metrology Organization)</li>
          <li>Over 30 Years of Experience in Quality Infrastructure</li>
          <li>Development of GCC Metrology Laws and Regulatory Frameworks</li>
          <li>Regional and International Projects in Standardization and Metrology</li>
        </ul>
      </section>

      {/* VALUE */}
      <section className="text-center p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4">Our Value</h2>

        <p className="text-gray-400">
          We bridge the gap between international standards and practical implementation,
          delivering reliable, compliant, and scalable systems that enhance regulatory confidence,
          market access, and organizational performance.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center p-10">
        <h2 className="text-3xl mb-4">Get in Touch</h2>

        <p className="text-gray-400 mb-2">📧 0kanakrieh02@hotmail.com</p>
        <p className="text-gray-400 mb-4">📞 +962 785166620</p>

        <a
          href="https://wa.me/962785166620"
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Contact via WhatsApp
        </a>
      </section>

    </main>
  );
}