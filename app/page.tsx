'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Inter, Poppins } from 'next/font/google';
import About from '@/assets/about';
import BentoGrid from '@/assets/bentogrid';
import ContactUs from '@/assets/contactus';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const goalsRef = useRef(null);
  const contactUsRef = useRef(null);

  // Scroll to the referenced section
  const scrollToSection = (ref: any) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b text-white ${poppins.className}`}
    >
      <header className="flex justify-between items-center py-6 fixed z-40 w-screen">
        <div className="flex items-center">
          <Image
            src=""
            alt="phunk logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className={`text-2xl font-bold ${poppins.className}`}>DAT</span>
        </div>
        <nav className="hidden md:block px-4 py-2 bg-black rounded-full border">
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
                  className="hover:text-gray-300 transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
          Talk to us
        </button>
      </header>
      <div
        ref={homeRef}
        className="min-h-screen relative z-10 flex justify-center items-center"
        style={{
          backgroundImage: 'linear-gradient(to top, black 0%, #0b2b87 200%)',
        }}
      >
        <main className="text-center ">
          <h1 className={`text-6xl font-bold mb-6 ${poppins.className}`}>
            Pioneering the Future of{' '}
            <span className="text-teal-400">Space Technology</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl mb-12 text-gray-300">
            Innovative High-Altitude Platforms and Near-Space Solutions for
            Defense, Commercial, and Research Applications.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Explore Our Solutions
          </button>
        </main>

        <svg
          className="absolute inset-0 z-20 w-full h-full"
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

      {/* ABout */}
      <div
        ref={aboutRef}
        className="text-white overflow-hidden py-10 w-screen"
        style={{
          backgroundImage:
            'linear-gradient(to top left, #0b2b87 0%, black 20%)',
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <main className="container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  About {''}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                    US
                  </span>
                  <br />
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
                <div className="relative w-64 h-64 md:w-[90%] md:h-[400px]">
                  <Image
                    src="/spaceCraft.jpg"
                    alt="3D Robot mascot"
                    layout="fill"
                    style={{ objectFit: 'cover' }}
                    className="filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className="w-screen">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-center w-screen mt-5">
            Discover our
          </h1>

          <span
            className="w-full relative p-8 border-[0.5px] border-gray-500 shadow-xl rounded flex"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, black 0%, #0b2b87 200%)',
            }}
          >
            <span className="flex flex-col w-1/2">
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                Vision
              </h1>
              <p className="mt-2 text-lg">
                To be a global leader in space technology, pioneering the
                development of high-altitude platforms and near-space solutions
                that enhance security, enable scientific research, and promote
                sustainability.
              </p>
            </span>

            <Image src={'/29013797_7450220-removebg-preview.png'} alt="3d image" width={500} height={200} />

            <svg
              className="absolute inset-0 z-20 w-full h-full"
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
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#grid)"
              ></rect>
            </svg>
          </span>

          <span
            className="w-full relative p-8 border-[0.5px] border-gray-500 shadow-xl rounded flex flex-col"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, black 0%, #0b2b87 200%)',
            }}
          >
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Mission
            </h1>
            <p className="mt-2 text-lg">
              To develop and deploy cutting-edge solar-powered autonomous
              airships and provide innovative near-space launch services,
              empowering governments, commercial enterprises, and research
              institutions to explore and utilize the stratosphere effectively.
            </p>

            {/* <svg
              className="absolute inset-0 z-20 w-full h-full"
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
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#grid)"
              ></rect>
            </svg> */}
          </span>
        </div>
      </div>

      {/* Bento GRid */}
      <main
        ref={goalsRef}
        className=""
        style={{
          backgroundImage: 'linear-gradient(to top right, black 80%, #0b2b87)',
        }}
      >
        <h1 className="relative text-7xl md:text-5xl font-bold mx-auto text-center mb-10">
          Our{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            Products & Services
          </span>
          <p className="text-lg font-normal px-20 mt-4">
            We provide a comprehensive range of space technology solutions, from
            high-altitude ISR platforms to near-space launch services. Explore
            our offerings and discover how we are transforming the aerospace
            industry.
          </p>
        </h1>
        <div className=" lg:px-16 max-lg:px-8 grid lg:grid-cols-2  gap-8 sm:grid-cols-1 ">
          {/* Container 1 */}
          <div className="bg-[#141414] p-8 rounded-[25px] ">
            {/* Number and Title */}
            <div className="max-w-3xl mx-auto text-center md:text-left">
              <div className="relative">
                <div className="h-50">
                  <h1 className="text-[50px] font-bold text-transparent outline-text">
                    01
                  </h1>
                </div>
                <h2 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  StratoSense ISR Platform
                </h2>
              </div>

              {/* Description */}
              <ul className="mt-4">
                <li>
                  <strong>Solar-Powered Propulsion:</strong> High-efficiency
                  solar panels and energy storage systems for continuous
                  operation.
                </li>
                <li>
                  <strong>AI-Driven Autonomy:</strong> Autonomous navigation and
                  real-time decision-making capabilities.
                </li>
                <li>
                  <strong>High-Altitude Operation:</strong> Capable of
                  stratospheric flight at altitudes above 20,000 meters.
                </li>
                <li>
                  <strong>Advanced Surveillance Systems:</strong> Multispectral
                  imaging and real-time data transmission for comprehensive
                  monitoring.
                </li>
                <li>
                  <strong>Stealth Capabilities:</strong> Low radar cross-section
                  design for enhanced survivability.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="mt-8 max-w-md mx-auto md:max-w-lg bg-black">
              <Image
                src={'/sample.jpg'}
                width={200}
                height={100}
                alt="Web Design Image"
                className="rounded-xl"
                layout="responsive"
              />
            </div>
          </div>

          {/* Container 2 */}
          <div className="bg-[#141414] p-8 rounded-[25px] ">
            {/* Number and Title */}
            <div className="max-w-3xl mx-auto text-center md:text-left">
              <div className="relative">
                <div className="h-50">
                  <h1 className="text-[50px] font-bold text-transparent outline-text">
                    02
                  </h1>
                </div>
                <h2 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  Near-Space Launch Services
                </h2>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-300">
                We provide end-to-end solutions for small satellite deployment,
                Platform-as-a-Service (PaaS) for scientific and commercial
                experiments, and in-orbit testing, all conducted in a controlled
                stratospheric environment.
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-8 max-w-md mx-auto md:max-w-lg bg-black ">
              <Image
                src={'/sample.jpg'}
                width={200}
                height={100}
                alt="Web Design Image"
                className="rounded-xl"
                layout="responsive"
              />
            </div>
          </div>

          {/* Container 3 */}
          <div className="bg-[#141414] p-8 rounded-[25px]  lg:col-span-2 lg:flex">
            <div className="max-w-2xl  text-center md:text-left">
              <div className="relative">
                <div className="h-50">
                  <h1 className="text-[50px] font-bold text-transparent outline-text">
                    03
                  </h1>
                </div>
                <h2 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                  Applications of High-Altitude Platforms
                </h2>
              </div>

              {/* Description */}
              <ul className="mt-4">
                <li>
                  <strong>• Defense: </strong> Border and maritime surveillance,
                  disaster management, strategic reconnaissance.
                </li>
                <li>
                  <strong>• Civilian: </strong> Climate observation, precision
                  farming, infrastructure monitoring.
                </li>
                <li>
                  <strong>• Space Technology: </strong> Satellite deployment,
                  in-orbit testing, scientific research in near-space
                  conditions.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="mt-8 max-w-md mx-auto md:max-w-lg bg-black">
              <Image
                src={'/sample.jpg'}
                width={500}
                height={100}
                alt="Web Design Image"
                className="rounded-xl"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Contact Us */}
      <section ref={contactUsRef} className="bg-black text-white px-4 py-12">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-[80px] md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
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
              className="w-full py-3 px-6 rounded-md bg-cyan-500 text-white font-bold hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
