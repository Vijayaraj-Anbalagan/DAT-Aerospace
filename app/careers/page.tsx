'use client';
import { useEffect } from 'react';
import { Raleway } from 'next/font/google';
import Particles from '@/components/ui/particles';
import Image from 'next/image';

const raleway = Raleway({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Career() {
  useEffect(() => {
    // Add FormFacade script dynamically in useEffect to prevent server/client mismatch
    const script = document.createElement('script');
    script.src =
      'https://formfacade.com/include/107387721992845998376/form/1FAIpQLSdSgSz_ecDQKy2HTw4V_7h79p-LxaAfmB91fpeZvVEzxrl8lA/bootstrap.js?div=ff-compose';
    script.async = true;
    script.defer = true;
    document.getElementById('ff-compose')?.appendChild(script);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-black text-white ${raleway.className}`}>
      <Particles className="absolute inset-0" quantity={80} ease={80} color="ffffff" refresh />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-lg py-5 px-8 lg:px-12 shadow-md">
        <div className="max-w-[85rem] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4" onClick={() => window.location.href = '/'}>
            <Image src="/logo.png" alt="Dashagriv Logo" width={200} height={200} className="cursor-pointer" />
          </div>
          <h3 className="text-xl font-semibold text-teal-400 hidden sm:block">Careers at Dashagriv</h3>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen pt-36 px-4 sm:px-10 md:px-20 lg:px-32 py-16 flex flex-col items-center text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Join Our Team</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          At Dashagriv Aerospace Technology, we are constantly innovating to push the boundaries of aerospace technology. We’re looking for talented individuals to join us in various roles, from internships to full-time positions.
        </p>
        
        {/* Image Placeholder */}
        <div className="w-1/2 mx-auto">
          <Image src="/bg1career.jpg" alt="Careers at Dashagriv" width={800} height={500} className="rounded-lg" />
        </div>

        {/* Google Form Embed */}
        <div className="container" id="ff-compose"></div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 mb-6">
            For further inquiries, feel free to reach out to us at{' '}
            <a href="mailto:info@dashagriv.in" className="text-cyan-400 hover:underline">info@dashagriv.in</a>.
          </p>
          <p className="text-gray-400 text-sm">
            Dashagriv Aerospace Technology Pvt. Ltd.<br />
            KCG College of Technology, Chennai - 600097, OMR, Karapakkam, India
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black bg-opacity-90 py-8 mt-8 text-center text-gray-500 border-t border-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} Dashagriv Aerospace Technology. All Rights Reserved.</p>
        <p className="mt-2">
          <a href="https://www.dashagriv.in" className="text-cyan-400 hover:underline">
            www.dashagriv.in
          </a>
        </p>
      </footer>
    </div>
  );
}
