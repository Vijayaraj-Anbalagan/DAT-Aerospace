import Link from 'next/link';
import SparklesText from '@/components/ui/sparkles-text';

export default function Footer({
  scrollToSection,
  homeRef,
  aboutusRef,
  goalsRef,
  contactusRef,
}: {
  scrollToSection: (section: React.RefObject<HTMLElement>) => any;
  homeRef: React.RefObject<HTMLElement>;
  aboutusRef: React.RefObject<HTMLElement>;
  goalsRef: React.RefObject<HTMLElement>;
  contactusRef: React.RefObject<HTMLElement>;
}) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-12 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Dashagriv Aerospace Technology
          </h3>
          <p className="text-gray-400">
            Dashagriv Aerospace Technology Private Limited (DAT) is dedicated to
            advancing aerospace technology for near-space applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection(homeRef)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutusRef)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                About us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(goalsRef)}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Goals
              </button>
            </li>
            <button
              onClick={() => scrollToSection(contactusRef)}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Contact us
            </button>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Socials</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/company/dashagriv-aerospace-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/dashagriv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dashagriv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-sm">Made with ❤ by</p>
          <SparklesText text="SocialSync" className="text-4xl" />
          <p className="text-gray-500 text-xs mt-2">
            &copy; 2024 Dashagriv Aerospace Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
