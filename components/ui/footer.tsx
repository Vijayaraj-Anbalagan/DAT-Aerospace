import Link from 'next/link';
import SparklesText from '@/components/ui/sparkles-text';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Dashagriv Aerospace Technology</h3>
          <p className="text-gray-400">
            Dashagriv Aerospace Technology Private Limited (DAT) is dedicated to advancing aerospace technology for near-space applications.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#home" passHref>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/#about" passHref>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/#goals" passHref>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Goals</span>
              </Link>
            </li>
            <li>
              <Link href="/#contact" passHref>
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Socials</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/company/dashagriv-aerospace"
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
