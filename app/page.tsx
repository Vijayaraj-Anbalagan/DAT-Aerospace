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
import { FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import Footer from '@/components/ui/footer';
import Particles from '@/components/ui/particles';

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

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const sections = [
      { ref: homeRef, name: 'Home' },
      { ref: aboutRef, name: 'About Us' },
      { ref: goalsRef, name: 'Goals' },
      { ref: foundersRef, name: 'Our Team' },
      { ref: incubationRef, name: 'Incubation' },
      { ref: contactUsRef, name: 'Contact us' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setActiveSection(section.name);
            }
          }
        });
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set isScrolled to true if user scrolled past a certain point (e.g., 100px)
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine whether to show or hide the navbar based on scroll direction
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNavbar(scrollPosition > currentScroll || currentScroll < 10);
      setScrollPosition(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

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
      
      <style jsx>{`
        html {
          scroll-behavior: smooth; /* This enables smooth scrolling */
        }
      `}</style>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={'ffffff'}
        refresh
      />
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ease-in-out ${
          isScrolled
        ? 'bg-black bg-opacity-80 backdrop-blur-lg'
        : 'bg-transparent'
        } py-4 px-6 lg:px-12`}
      >
        <nav className="max-w-[85rem] w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
        className="flex items-center cursor-pointer"
        onClick={() => scrollToSection(homeRef)}
          >
        <Image
          loading="lazy"
          src="/logo.png"
          alt="Dashagriv Logo"
          width={150}
          height={150}
          className="block"
        />
          </div>

          {/* Hamburger Button for Mobile Menu */}
          <div className="sm:hidden ml-auto">
        <button
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
          }}
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
            >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
            </svg>
          ) : (
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
          )}
        </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 right-4 bg-black bg-opacity-90 z-50 p-6 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out">
          <ul className="space-y-4 text-center">
            {[
          'Home',
          'About Us',
          'Goals',
          'Our Team',
          'Incubation',
          'Contact Us',
            ].map((item) => (
          <li key={item}>
            <button
              onClick={() => {
            if (item === 'Home') scrollToSection(homeRef);
            if (item === 'About Us') scrollToSection(aboutRef);
            if (item === 'Goals') scrollToSection(goalsRef);
            if (item === 'Our Team') scrollToSection(foundersRef);
            if (item === 'Incubation')
              scrollToSection(incubationRef);
            if (item === 'Contact Us')
              scrollToSection(contactUsRef);
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
              }}
              className="text-white text-lg font-medium hover:text-cyan-400 transition-transform transform hover:scale-105"
            >
              {item}
            </button>
          </li>
            ))}
          </ul>
        <li className='list-none'>
          <a
            href="tel:+919125338298"
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors mt-6"
          >
            <FaPhoneAlt className="mr-2" />
            Talk to Us
          </a>
        </li>
        </div>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden lg:block px-4 py-2 rounded-full border border-gray-700">
        <ul className="flex space-x-6">
          {[
            'Home',
            'About Us',
            'Goals',
            'Our Team',
            'Incubation',
            'Contact Us',
          ].map((item) => (
            <li key={item}>
          <button
            onClick={() => {
              if (item === 'Home') scrollToSection(homeRef);
              if (item === 'About Us') scrollToSection(aboutRef);
              if (item === 'Goals') scrollToSection(goalsRef);
              if (item === 'Our Team') scrollToSection(foundersRef);
              if (item === 'Incubation') scrollToSection(incubationRef);
              if (item === 'Contact Us') scrollToSection(contactUsRef);
            }}
            className={`transition-colors ${
              activeSection === item
            ? 'text-cyan-400 font-bold'
            : 'hover:text-cyan-400'
            }`}
          >
            {item}
          </button>
            </li>
          ))}
        </ul>

        {/* Talk to Us Button for Mobile */}
        <a href="tel:+91682497619">
          <ShinyButton className="block lg:hidden bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors mt-6">
            Talk to us
          </ShinyButton>
        </a>
  </nav>

  {/* Talk to Us Button for Desktop */}
  <a href="tel:+91682497619">
    <ShinyButton className="hidden lg:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
      Talk to us
    </ShinyButton>
  </a>
</nav>
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
            <span className="text-teal-400 mt-1">HAPS Technology</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl mb-12 text-gray-300">
            We are pioneering the development of high-altitude platform systems
            designed for Intelligence Surveillance and Reconnaissance (ISR) and
            near-space applications. Our solutions provide sustainable,
            cost-effective alternatives for defense, research and commercial
            enterprises.
          </p>
          <RainbowButton onClick={() => scrollToSection(goalsRef)}>Explore Our Solutions 🡖</RainbowButton>
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
                  About{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                    US
                  </span>
                </h1>
                <div className="space-y-6 text-gray-300">
                  <div className="mt-10">
                    <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-300">
                      To be a global leader in space technology, pioneering
                      high-altitude platforms and near-space solutions that
                      enhance security, enable scientific research and promote
                      sustainability.
                    </p>
                    <h2 className="text-4xl font-bold mt-8 mb-4">
                      Our Mission
                    </h2>
                    <p className="text-lg text-gray-300">
                      We develop and deploy cutting-edge, solar-powered,
                      autonomous HAPS platforms and offer innovative near-space
                      launch services. Our solutions empower governments,
                      commercial enterprises, and research institutions to
                      explore and utilize the stratosphere effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-[90%] md:h-[400px] animate-fade-in">
                  <Image
                    src="/spacecraft.jpg"
                    alt="3D Robot mascot"
                    layout="fill"
                    loading="lazy"
                    style={{ objectFit: 'cover' }}
                    className="filter rounded-lg"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Goals */}
      <div
        id="goals"
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
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Our{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  Goals
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
                We strive to lead the aerospace sector by providing
                state-of-the-art, high-altitude technology that is sustainable,
                effective, and innovative. Our primary goal is to redefine
                aerospace capabilities in defense and commercial sectors through
                cutting-edge advancements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <ShineBorder
                  className="relative bg-black border-slate-900 border-2 p-6 rounded-lg"
                  color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Innovation and Excellence
                  </h3>
                  <p className="text-gray-300">
                    Redefining aerospace technologies by pushing the boundaries
                    of innovation and delivering state-of-the-art solutions for
                    high-altitude operations.
                  </p>
                </ShineBorder>
                <ShineBorder
                  className="relative bg-black border-slate-900 border-2 p-6 rounded-lg"
                  color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Sustainability and Cost-Effectiveness
                  </h3>
                  <p className="text-gray-300">
                    Providing sustainable and cost-effective technologies that
                    offer significant value for defense, research, and
                    commercial enterprises.
                  </p>
                </ShineBorder>
                <ShineBorder
                  className="relative bg-black border-slate-900 border-2 p-6 rounded-lg"
                  color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                >
                  <h3 className="text-xl font-bold text-white mb-4">
                    Collaboration and Growth
                  </h3>
                  <p className="text-gray-300">
                    Collaborating with global institutions and research bodies
                    to foster growth and innovation in the aerospace industry.
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
              {/* Main Team Heading */}
              <h2 className="text-5xl md:text-6xl font-bold mb-12">
                Meet the{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  Team
                </span>
              </h2>

              {/* Founders Section */}
              <h3 className="text-4xl font-bold mb-10 text-teal-400">
                Founders
              </h3>
              <div className="flex flex-wrap justify-center gap-16 mb-16">
                {/* Founder Cards */}
                {[
                  {
                    name: 'Logeshwaran M',
                    role: 'Founder & CEO',
                    bio: 'Aerospace Engineer, KCG Alumnus',
                    image: '/founder2.jpg',
                    linkedin:
                      'https://www.linkedin.com/in/logeshwaran-mahendran-ba27572b7/',
                  },
                  {
                    name: 'Jayashree B',
                    role: 'Founder & COO',
                    bio: 'Masters in Aerospace Engineering, Coventry University, UK',
                    image: '/jayashree.jpg',
                    linkedin:
                      'https://www.linkedin.com/in/jayashree-b-67950621a/',
                  },
                  {
                    name: 'Hariharan R',
                    role: 'Founder & CTO',
                    bio: 'Masters in Aerospace Engineering, MIT Campus',
                    image: '/founder1.jpg',
                    linkedin:
                      'https://www.linkedin.com/in/hariharan-r-4a9a3b20b/',
                  },
                ].map((founder, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group relative w-64"
                  >
                    <div className="w-48 h-48 mb-4 relative">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        loading="lazy"
                        width={292}
                        height={292}
                        className="rounded-full object-cover transition-all duration-300 group-hover:blur-[2px]"
                      />
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="bg-cyan-500 p-3 rounded-full">
                          <FaLinkedin className="h-6 w-6 text-white" />
                        </div>
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className="text-gray-400 mt-2">
                      {founder.role}
                      <br />
                      {founder.bio}
                    </p>
                  </div>
                ))}
              </div>

              {/* Core Team Section */}
              <h3 className="text-4xl font-bold mb-10 text-teal-400">
                Core Team
              </h3>
              <div className="flex flex-wrap justify-center gap-16">
                {/* Core Team Cards */}
                {[
                  {
                    name: 'Srikanth R',
                    role: 'Aerospace Engineer (Space Vehicle Dynamics)',
                    bio: 'Masters in Aerospace Engineering, Coventry University, UK',
                    image: '/srikanth.jpg',
                    linkedin:
                      'https://www.linkedin.com/in/srikanth-r-9974b521a/',
                  },
                  {
                    name: 'Srinivasan A',
                    role: 'Aerospace Engineer (Structural and Material Design)',
                    bio: '',
                    image: '/srinivasan.jpg',
                    linkedin:
                      'https://www.linkedin.com/in/a-srinivasan-8a64a9297',
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group relative w-64"
                  >
                    <div className="w-48 h-48 mb-4 relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        width={192}
                        height={192}
                        className="rounded-full object-cover transition-all duration-300 group-hover:blur-[2px]"
                      />
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="bg-cyan-500 p-3 rounded-full">
                          <FaLinkedin className="h-6 w-6 text-white" />
                        </div>
                      </a>
                    </div>
                    <h4 className="text-2xl font-bold">{member.name}</h4>
                    <p className="text-gray-400 mt-2">
                      {member.role}
                      {member.bio && (
                        <>
                          <br />
                          {member.bio}
                        </>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Incubation Section */}
      <div
        ref={incubationRef}
        className="bg-gradient-to-b from-gray-900 to-black text-white px-4 py-16 w-full"
      >
        <div className="container mx-auto text-center flex flex-col items-center">
          <Image
            src="/kcg_logo.png"
            alt="KCG College of Technology Incubation Center Logo"
            width={240}
            height={240}
            className="mb-8 rounded-lg shadow-lg"
          />
          <p className="text-xl font-light text-gray-400 mb-16">
            Incubated at KCG Innovation Incubation and Entrepreneurship Center
          </p>
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto py-12 px-8 bg-opacity-70 rounded-lg shadow-md flex items-center gap-6">
          <img
            src="/apj-abdul-kalam.png"
            alt="APJ Abdul Kalam"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <div>
            <blockquote className="mb-4">
              <p className="text-2xl font-semibold text-cyan-400 leading-relaxed">
                "All Birds find shelter during a rain, But Eagle avoids rain by
                flying above the Clouds."
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <section
        ref={contactUsRef}
        className="bg-gradient-to-br from-gray-900 to-black text-white px-6 py-20 sm:py-28 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
            {/* Contact Form Section */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-5xl md:text-4xl font-bold mb-6 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Get In Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-cyan-400"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-cyan-400"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-cyan-400"
                  >
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
              <div className="w-full h-72 lg:h-80 rounded-xl overflow-hidden">
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
                Dashagriv Aerospace Technology (DAT), KCG College of Technology,
                Chennai - 600098, OMR, Karapakkam
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer scrollToSection={scrollToSection} homeRef={homeRef} aboutusRef={aboutRef} goalsRef={goalsRef} contactusRef={contactUsRef} />
    </div>
  );
}
