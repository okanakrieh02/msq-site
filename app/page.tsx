"use client";

import { useEffect, useState } from "react";

/* COUNTER */
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}+</span>;
}

export default function Home() {
  return (
    <main className="bg-[#0F172A] text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-[#0F172A]/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-yellow-500 font-bold">AMRA Co.</h1>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#book">Consultation</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#book" className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AMRA for Management & Training
        </h1>

        <p className="text-gray-300 mb-4 max-w-2xl">
          Helping organizations achieve ISO certification, regulatory compliance,
          and operational excellence.
        </p>

        <p className="text-yellow-500 mb-6">
          25+ Years Experience | 50+ Certifications | 1200+ Professionals Trained
        </p>

        <a href="#book" className="bg-yellow-500 text-black px-6 py-3 rounded-lg">
          Request a Consultation
        </a>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl mb-6 font-bold">About Us</h2>

        <p className="text-gray-400 leading-7">
          AMRA for Management and Training Co. provides specialized consulting
          services in quality management, standardization, and metrology.
          With over 25 years of experience, we support organizations in achieving
          compliance, operational excellence, and international recognition.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-[#1E293B] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-500 mb-3">
              ISO Certification & Compliance
            </h3>
            <p className="text-gray-400 text-sm">
              We support organizations in achieving ISO certification through
              gap analysis, system implementation, internal audits, and full compliance alignment.
            </p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-500 mb-3">
              Quality Management Systems (QMS)
            </h3>
            <p className="text-gray-400 text-sm">
              Design and improve quality management systems to enhance performance,
              ensure compliance, and drive continuous improvement.
            </p>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-xl">
            <h3 className="text-xl font-bold text-yellow-500 mb-3">
              Professional Training & Capacity Building
            </h3>
            <p className="text-gray-400 text-sm">
              Deliver specialized training programs for auditors, engineers,
              and management teams in ISO standards and auditing practices.
            </p>
          </div>

        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="py-20 bg-[#0B1A2B] text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">
              <Counter target={25} />
            </h3>
            <p className="text-gray-400 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">
              <Counter target={50} />
            </h3>
            <p className="text-gray-400 mt-2">Organizations Certified</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-500">
              <Counter target={1200} />
            </h3>
            <p className="text-gray-400 mt-2">Professionals Trained</p>
          </div>

        </div>
      </section>

      {/* BOOK CONSULTATION */}
      <section id="book" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Request a Consultation</h2>

        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Tell us about your needs and one of our experts will contact you within 24 hours
          to discuss how we can support your organization.
        </p>

        <form className="max-w-xl mx-auto space-y-4 text-left">

          <input type="text" placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-[#1E293B] border border-gray-700" />

          <input type="email" placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#1E293B] border border-gray-700" />

          <input type="tel" placeholder="Phone"
            className="w-full p-3 rounded-lg bg-[#1E293B] border border-gray-700" />

          <select className="w-full p-3 rounded-lg bg-[#1E293B] border border-gray-700">
            <option>Select Service</option>
            <option>ISO Certification</option>
            <option>QMS Consulting</option>
            <option>Training</option>
          </select>

          <textarea placeholder="Message"
            className="w-full p-3 rounded-lg bg-[#1E293B] border border-gray-700"></textarea>

          <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:scale-105 transition">
            Request a Consultation
          </button>

        </form>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center p-10">
        <h2 className="text-3xl mb-4">Contact</h2>

        <p className="text-gray-400">okanakrieh02@hotmail.com</p>
        <p className="text-gray-400 mb-4">+962 785166620</p>

        <a href="https://wa.me/962785166620"
          target="_blank"
          className="bg-green-500 px-6 py-3 rounded-lg inline-block">
          WhatsApp
        </a>
      </section>

    </main>
  );
}