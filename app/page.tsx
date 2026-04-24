export default function Home() {
  return (
    <main className="bg-[#0F172A] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-yellow-500 font-bold">AMRA Co.</h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="#contact"
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AMRA for Management & Training
        </h1>

        <p className="text-gray-300 mb-6 max-w-2xl">
          Supporting organizations in quality management, standardization,
          and metrology to achieve compliance and excellence.
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg">
            Request Consultation
          </button>

          <button className="border border-gray-500 px-6 py-3 rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl mb-6 font-bold">About Us</h2>

        <p className="text-gray-400 leading-7">
          AMRA for Management and Training Co. provides specialized consulting
          services in quality management, standardization, and metrology.
          With over 25 years of experience, we support organizations in achieving
          compliance, operational excellence, and international recognition.
        </p>
      </section>

      {/* OUR IMPACT */}
      <section className="py-20 bg-[#0B1A2B] text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold text-yellow-500">25+</h3>
            <p className="text-gray-400 mt-2">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">50+</h3>
            <p className="text-gray-400 mt-2">Companies Certified</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">1200+</h3>
            <p className="text-gray-400 mt-2">Professionals Trained</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>

        <p className="text-gray-400 leading-7">
          We bring decades of experience in standardization, metrology, and
          quality systems across government and private sectors. Our approach
          ensures not only compliance, but real operational excellence and
          international recognition.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center p-10">
        <h2 className="text-3xl mb-4">Get in Touch</h2>

        <p className="text-gray-400 mb-2">
          okanakrieh02@hotmail.com
        </p>

        <p className="text-gray-400 mb-4">
          +962 785166620
        </p>

        <a
          href="https://wa.me/962785166620"
          target="_blank"
          className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block"
        >
          Contact via WhatsApp
        </a>
      </section>

    </main>
  );
}