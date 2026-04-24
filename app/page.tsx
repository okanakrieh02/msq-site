export default function Home() {
  return (
    <main className="bg-[#0F172A] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-yellow-500 font-bold text-lg">
            AMRA Co.
          </h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AMRA for Management and Training
        </h1>

        <p className="text-gray-300 max-w-2xl mb-4">
          Helping organizations achieve ISO certification, regulatory compliance,
          and measurable performance improvement across industries.
        </p>

        <p className="text-yellow-500 mb-6">
          25+ Years Experience | 1200+ Professionals Trained | 50+ ISO Certifications
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="bg-yellow-500 text-black px-6 py-3 rounded-lg">
            Request Consultation
          </a>

          <a href="#services" className="border border-gray-500 px-6 py-3 rounded-lg">
            View Services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="grid md:grid-cols-3 gap-6 p-10 max-w-6xl mx-auto">

        <div className="border border-gray-800 p-6 rounded-xl hover:border-yellow-500 transition">
          <h3 className="text-yellow-500 text-lg mb-2">Standardization & Compliance</h3>
          <p className="text-gray-400 text-sm">
            Development of standards, regulatory alignment, and compliance with
            ISO, GSO, and international frameworks.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:border-yellow-500 transition">
          <h3 className="text-yellow-500 text-lg mb-2">Metrology & Calibration</h3>
          <p className="text-gray-400 text-sm">
            Implementation of metrology systems, calibration processes, and
            measurement accuracy improvement.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl hover:border-yellow-500 transition">
          <h3 className="text-yellow-500 text-lg mb-2">ISO Certification</h3>
          <p className="text-gray-400 text-sm">
            End-to-end support for ISO certification including gap analysis,
            implementation, auditing, and compliance.
          </p>
        </div>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="text-center p-10 bg-[#020617]">
        <h2 className="text-3xl mb-6">Our Impact</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div>
            <h3 className="text-3xl text-yellow-500">25+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl text-yellow-500">1200+</h3>
            <p className="text-gray-400">Professionals Trained</p>
          </div>

          <div>
            <h3 className="text-3xl text-yellow-500">50+</h3>
            <p className="text-gray-400">ISO Certifications Delivered</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl mb-6">About Us</h2>

        <p className="text-gray-400 leading-7">
          AMRA for Management and Training Co. provides specialized consulting
          services in quality management, standardization, and metrology.
          With over 25 years of experience, we support organizations in achieving
          compliance, operational excellence, and international recognition.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center p-10">
        <h2 className="text-3xl mb-4">Get in Touch</h2>

        <p className="text-gray-400 mb-2">okanakrieh02@hotmail.com</p>
        <p className="text-gray-400 mb-4">+962 785166620</p>

        <a
          href="https://wa.me/962785166620"
          target="_blank"
          className="bg-green-500 px-6 py-3 rounded-lg inline-block"
        >
          Contact via WhatsApp
        </a>
      </section>

    </main>
  );
}