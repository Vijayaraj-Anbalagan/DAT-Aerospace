'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Raleway } from 'next/font/google';
import { useRef, useState, useEffect } from 'react';
import Meteors from '@/components/ui/meteors';
import ShineBorder from '@/components/ui/shine-border';
import { RainbowButton } from '@/components/ui/rainbow-button';
import ShinyButton from '@/components/ui/shiny-button';
import SparklesText from '@/components/ui/sparkles-text';
import Particlesdemo from '@/components/ui/particles';
import Head from 'next/head';

const poppins = Raleway({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const goalsRef = useRef(null);
  const contactUsRef = useRef(null);
  const foundersRef = useRef(null);
  const incubationRef = useRef(null);

  const [activeSection, setActiveSection] = useState('Home');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [
      { ref: homeRef, name: 'Home' },
      { ref: aboutRef, name: 'About Us' },
      { ref: goalsRef, name: 'Goals' },
      { ref: foundersRef, name: 'Meet the Founders' },
      { ref: incubationRef, name: 'Incubation' },
      { ref: contactUsRef, name: 'Contact us' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((section) => section.ref.current === entry.target);
            if (section) {
              setActiveSection(section.name);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  // Scroll to the referenced section
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

    <>
    <Head>
        <title>Dashagriv Aerospace Technology - Pioneering Near-Space Innovations</title>
        <meta name="title" content="Dashagriv Aerospace Technology - Pioneering Near-Space Innovations" />
        <meta name="description" content="Dashagriv Aerospace Technology (DAT) is dedicated to advancing aerospace technology for near-space applications. We develop high-altitude platforms, providing sustainable and cost-effective solutions for defense, research, and commercial enterprises." />
        <meta name="keywords" content="Dashagriv, Aerospace Technology, Near-Space, HAPS, High-Altitude Platforms, Defense, Research, Aerospace Solutions, Incubation, ISR, Innovation" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Dashagriv Aerospace Technology" />
        <meta property="og:title" content="Dashagriv Aerospace Technology - Pioneering Near-Space Innovations" />
        <meta property="og:description" content="Advancing aerospace technology with high-altitude platforms designed for near-space applications. Sustainable solutions for defense, research, and commercial enterprises." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dashagriv Aerospace Technology - Pioneering Near-Space Innovations" />
        <meta name="twitter:description" content="We develop high-altitude platforms designed for near-space, providing sustainable aerospace solutions for various industries." />
      </Head>
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-black to-gray-900 text-white ${poppins.className}`}
    >
     <Particlesdemo className="absolute inset-0 z-0" quantity={70}/>
      <header className="flex justify-between items-center py-6 px-6 lg:px-12 fixed z-40 w-full bg-opacity-80">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Dashagriv Logo"
            width={200}
            height={200}
            className="hidden lg:block"
          />
        </div>
        <nav className="hidden md:block px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
          <ul className="flex space-x-6">
            {['Home', 'About Us', 'Goals', 'Meet the Founders', 'Incubation', 'Contact us'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    if (item === 'Home') scrollToSection(homeRef);
                    if (item === 'About Us') scrollToSection(aboutRef);
                    if (item === 'Goals') scrollToSection(goalsRef);
                    if (item === 'Meet the Founders') scrollToSection(foundersRef);
                    if (item === 'Incubation') scrollToSection(incubationRef);
                    if (item === 'Contact us') scrollToSection(contactUsRef);
                  }}
                  className={`transition-colors ${
                    activeSection === item ? 'text-cyan-400 font-bold transition-all' : 'hover:text-cyan-400'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <ShinyButton className="hidden lg:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
          Talk to us
        </ShinyButton>
            

        {/* Mobile Nav */}
<div className="lg:hidden fixed top-4 right-4 z-50">
  <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
</div>

{/* Mobile Nav Menu */}
{isMobileMenuOpen && (
  <div
    className="lg:hidden fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out"
    style={{ animation: 'fadeIn 0.3s ease-in-out forwards' }}
  >
    <ul className="space-y-6 text-center">
      {['Home', 'About Us', 'Goals', 'Meet the Founders', 'Incubation', 'Contact us'].map((item) => (
        <li key={item}>
          <button
            onClick={() => {
              if (item === 'Home') scrollToSection(homeRef);
              if (item === 'About Us') scrollToSection(aboutRef);
              if (item === 'Goals') scrollToSection(goalsRef);
              if (item === 'Meet the Founders') scrollToSection(foundersRef);
              if (item === 'Incubation') scrollToSection(incubationRef);
              if (item === 'Contact us') scrollToSection(contactUsRef);
              setIsMobileMenuOpen(false);
            }}
            className="text-white text-2xl font-bold hover:text-cyan-400 transition-transform transform hover:scale-110"
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full mt-8 transform hover:scale-105 transition-transform"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      Talk to us
    </button>
  </div>
)}

<style jsx>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`}</style>

        
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
          Redefining Near Space Access with
            <br />
            <span className="text-teal-400 mt-1">HAPS Technology
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl mb-12 text-gray-300">
            We are pioneering the development of high-altitude platform systems designed for Intelligence Surveillance and Reconnaissance (ISR) and near-space applications. Our solutions provide sustainable, cost-effective alternatives for defense, research, and commercial enterprises.
          </p>
          <RainbowButton>
            Explore Our Solutions 🡮
          </RainbowButton>
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
                  <div className="mt-10">
                    <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-300">
                      To be a global leader in space technology, pioneering high-altitude platforms and near-space solutions that enhance security, enable scientific research, and promote sustainability.
                    </p>
                    <h2 className="text-4xl font-bold mt-8 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-300">
                      We develop and deploy cutting-edge, solar-powered, autonomous HAPS platforms and offer innovative near-space launch services. Our solutions empower governments, commercial enterprises, and research institutions to explore and utilize the stratosphere effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-[90%] md:h-[400px] animate-fade-in">
                  <Image
                    src='/spacecraft.jpg'
                    alt="3D Robot mascot"
                    layout='fill'
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
        className="text-white overflow-hidden py-16 w-full relative"
        style={{
          backgroundColor: 'black',
        }}
      >
        <Meteors number={10} />
        <div className="relative z-10">
          <main className="container mx-auto px-4 py-20">
            <div className="text-center">
              <Meteors number={10} />
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
                
                <ShineBorder className="relative bg-black border-slate-900 border-2 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                  <h3 className="text-xl font-bold text-white mb-4">Innovation and Excellence</h3>
                  <p className="text-gray-300">
                    Redefining aerospace technologies by pushing the boundaries of innovation and delivering state-of-the-art solutions for high-altitude operations.
                  </p>
                </ShineBorder>
                <ShineBorder className="relative bg-black border-slate-900 border-2 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform" color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                  <h3 className="text-xl font-bold text-white mb-4">Sustainability and Cost-Effectiveness</h3>
                  <p className="text-gray-300">
                    Providing sustainable and cost-effective technologies that offer significant value for defense, research, and commercial enterprises.
                  </p>
                </ShineBorder>
                <ShineBorder className="relative bg-black border-slate-900 border-2 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                  <h3 className="text-xl font-bold text-white mb-4">Collaboration and Growth</h3>
                  <p className="text-gray-300">
                    Collaborating with global institutions and research bodies to foster growth and innovation in the aerospace industry.
                  </p>
                </ShineBorder>
            </div>
            </div>
          </main>
        </div>
      </div>

      {/* Meet the Founders */}
      <div
        ref={foundersRef}
        className="text-white overflow-hidden py-16 w-full"
        style={{
          backgroundColor: 'black',
        }}
      >
        <div className="relative z-10">
          <main className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Meet the {' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  Founders
                </span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 mb-4">
                    <Image
                      src="/founder2.jpg"
                      alt="Logeshwaran M"
                      width={192}
                      height={192}
                      className="rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Logeshwaran M</h3>
                  <p className="text-gray-400 mt-2">
                    Founder & CEO<br></br>Aerospace Engineer , KCG Alumnus
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 mb-4">
                    <Image
                      src="/founder1.jpg"
                      alt="Hariharan R"
                      width={192}
                      height={192}
                      className="rounded-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">Hariharan R</h3>
                  <p className="text-gray-400 mt-2">
                    Founder & CTO<br></br> Masters in Aerospace Engineering, MIT Campus
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

       {/* Incubation Section */}
       <div
        ref={incubationRef}
        className="bg-black text-white px-4 py-8 w-full"
      >
        <div className="container mx-auto text-center flex flex-col items-center">
          <Image
            src="/kcg_logo.png"
            alt="KCG College of Technology Incubation Center Logo"
            width={240}
            height={240}
            className="mb-4"
          />
          <p className="text-lg text-gray-300">
            Incubated at KCG Innovation Incubation and Entrepreneurship Center
          </p>
        </div>
      </div>

      {/* Contact Us */}
      <section ref={contactUsRef} className="bg-gradient-to-br from-gray-900 to-black text-white px-6 py-20 sm:py-28 relative overflow-hidden">
        <Particlesdemo className="absolute inset-0 z-0" quantity={30}/>
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
      
      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 space-y-8">
        <h2 className="text-5xl md:text-4xl font-bold mb-6 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
          Get In Touch
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-cyan-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-all duration-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-cyan-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-all duration-300"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-cyan-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-500 transition-all duration-300"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 mt-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold transform transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
        <div className="w-full h-72 lg:h-80 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1371.2306383894088!2d80.23911793542396!3d12.92119505790069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c8cd40b76e7%3A0x681487984b55f7bb!2sKCG%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1728322005629!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            title="KCG College of Technology Location"
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="text-center lg:text-left text-gray-400 text-lg">
          Dashagriv Aerospace Technology (DAT), KCG College of Technology, Chennai 98, OMR, Karapakkam
        </p>
      </div>
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
              Made with ❤️ by
            </p>
            <SparklesText text="SocialSync" className='text-4xl' />
            
            <p className="text-gray-500 text-xs mt-2">
              &copy; 2024 Dashagriv Aerospace Technology. All rights reserved.
            </p>
         
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}