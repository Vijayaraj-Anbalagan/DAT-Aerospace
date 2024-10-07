'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Inter, Poppins } from 'next/font/google';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const goalsRef = useRef(null);
  const contactUsRef = useRef(null);

  // Scroll to the referenced section
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white ${poppins.className}`}
    >
      <header className="flex justify-between items-center py-6 px-6 lg:px-12 fixed z-40 w-full bg-opacity-80">
        <div className="flex items-center">
          <span className="text-2xl font-bold">DAT</span>
        </div>
        <nav className="hidden md:block px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
          <ul className="flex space-x-6">
            {['Home', 'About Us', 'Goals', 'Contact us'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    if (item === 'Home') scrollToSection(homeRef);
                    if (item === 'About Us') scrollToSection(aboutRef);
                    if (item === 'Goals') scrollToSection(goalsRef);
                    if (item === 'Contact us') scrollToSection(contactUsRef);
                  }}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden lg:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
          Talk to us
        </button>
      </header>
      <div
        ref={homeRef}
        className="min-h-screen relative z-10 flex justify-center items-center px-4 py-32 sm:py-40"
        style={{
          backgroundImage: 'linear-gradient(to top, black 0%, #0b2b87 200%)',
        }}
      >
        <main className="text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 mt-3">
            Building India’s First Stratospheric {' '}
            <br />
            <span className="text-teal-400 animate-pulse">AI-Based Autonomous Blimp</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl mb-12 text-gray-300">
            We are pioneering the development of high-altitude, autonomous airships designed for Intelligence Surveillance and Reconnaissance (ISR) and
            near-space applications. Our solutions provide sustainable, cost-effective alternatives for defense, research, and commercial enterprises.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
            Explore Our Solutions
          </button>
        </main>

        <svg
          className="absolute inset-0 z-20 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />

          {/* Curved lines */}
          <path
            d="M0,400 Q400,100 800,400 T1600,400"
            fill="none"
            stroke="rgba(79, 209, 197, 0.3)"
            strokeWidth="2"
          />
          <path
            d="M0,600 Q400,300 800,600 T1600,600"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
          />

          {/* Circles */}
          <circle cx="5%" cy="90%" r="30" fill="rgba(79, 209, 197, 0.1)" />
          <circle cx="95%" cy="80%" r="60" fill="rgba(59, 130, 246, 0.1)" />
        </svg>
      </div>

      {/* About */}
      <div
        ref={aboutRef}
        className="text-white overflow-hidden py-16 w-full"
        style={{
          backgroundColor: 'black',
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 ml-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
          About {' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            US
          </span>
            </h1>
            <div className="space-y-6 text-gray-300">
          <p>
            Founded with a mission to revolutionize space technology,
            Dashagriv Aerospace Technology Private Limited (DAT)
            specializes in developing high-altitude platforms and
            near-space launch solutions that cater to the needs of
            defense agencies, space organizations, and commercial
            enterprises.
          </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-[90%] md:h-[400px] animate-fade-in">
          <Image
            src="/spaceCraft.jpg"
            alt="3D Robot mascot"
            layout="fill"
            style={{ objectFit: 'cover' }}
            className="filter drop-shadow-2xl rounded-lg"
          />
            </div>
          </div>
        </div>
          </main>
        </div>
      </div>

      {/* Goals */}
      <div
        ref={goalsRef}
        className="text-white overflow-hidden py-16 w-full"
        style={{
          backgroundColor: 'black',
        }}
      >
        <div className="relative z-10">
          <main className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our {' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  Goals
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
                We strive to lead the aerospace sector by providing state-of-the-art, high-altitude technology that is sustainable, effective, and innovative. Our primary goal is to redefine aerospace capabilities in defense and commercial sectors through cutting-edge advancements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4">Goal 1</h3>
                  <p>Leading the aerospace sector with advanced high-altitude platforms and near-space launch solutions.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4">Goal 2</h3>
                  <p>Providing sustainable and cost-effective technologies for ISR and research purposes.</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold mb-4">Goal 3</h3>
                  <p>Collaborating with defense agencies and research institutions to further aerospace innovation.</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Contact Us */}
      <section ref={contactUsRef} className="bg-black text-white px-4 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-md bg-cyan-500 text-white font-bold hover:bg-cyan-600 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Send Message
            </button>
          </form>
          <div className="mt-10">
            <div className="w-full h-64 bg-gray-800 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.2306383894088!2d80.23911793542396!3d12.92119505790069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c8cd40b76e7%3A0x681487984b55f7bb!2sKCG%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1728322005629!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="KCG College of Technology Location"
              ></iframe>
            </div>
            <p className="mt-4 text-center text-gray-400">
              Dashagriv Aerospace Technology (DAT), KCG College of Technology, Chennai 98, OMR, Karapakkam
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DAT</h3>
            <p className="text-gray-400">
              Dashagriv Aerospace Technology Private Limited (DAT) is dedicated to advancing aerospace technology for near-space applications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#goals" className="hover:text-cyan-400 transition-colors">
                  Goals
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-cyan-400 transition-colors">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-400 text-sm">
              Made with ❤️ by SocialSync
            </p>
            <p className="text-gray-500 text-xs mt-2">
              &copy; 2024 Dashagriv Aerospace Technology. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}