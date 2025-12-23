import { Link } from "wouter";
import { Instagram, Linkedin, Youtube } from "lucide-react";
export default function Footer() {
    return (<footer className="bg-kiddi-gray text-white py-8">
      {" "}
      {/* Reduced py-12 to py-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {" "}
          {/* Reduced gap-12 to gap-8 */}
          <div className="lg:pr-8">
            {" "}
            {/* Reduced lg:pr-10 to lg:pr-8 */}
            <h3 className="text-xl font-bold mb-2">Kiddicove</h3>{" "}
            {/* Reduced text-2xl to text-xl */}
            <p className="text-xs text-gray-300 mb-1">
              by Deep Connection
            </p>{" "}
            {/* Reduced text-sm to text-xs, mb-2 to mb-1 */}
            <p className="text-gray-300 mb-3 leading-relaxed text-xs">
              {" "}
              {/* Reduced text-sm to text-xs, mb-4 to mb-3 */}
              Deep Connection Innovation Pvt. Ltd. is an integrated health-tech
              platform dedicated to providing guilt-free parenting solutions for
              parents with children aged 0-18.
            </p>
            <p className="text-gray-300 text-xs mb-4">
              {" "}
              {/* Reduced text-sm to text-xs, mb-6 to mb-4 */}
              Empowering children and families through comprehensive
              developmental support, evidence-based therapies, and personalized
              care plans that nurture growth and potential.
            </p>
            <div className="flex space-x-3">
              {" "}
              {/* Reduced space-x-4 to space-x-3 */}
              <a href="https://www.youtube.com/@MakeaDeepConnection" target="_blank" rel="noopener noreferrer" className="bg-kiddi-pink hover:bg-pink-500 p-2 rounded-full transition-colors duration-200" // Reduced p-3 to p-2
    >
                <Youtube size={14}/> {/* Reduced size={16} to size={14} */}
              </a>
              <a href="https://www.instagram.com/makeadeepconnection/in" target="_blank" rel="noopener noreferrer" className="bg-kiddi-pink hover:bg-pink-500 p-2 rounded-full transition-colors duration-200" // Reduced p-3 to p-2
    >
                <Instagram size={14}/> {/* Reduced size={16} to size={14} */}
              </a>
              <a href="https://www.linkedin.com/company/deep-connection-innovation" target="_blank" rel="noopener noreferrer" className="bg-kiddi-blue hover:bg-blue-600 p-2 rounded-full transition-colors duration-200" // Reduced p-3 to p-2
    >
                <Linkedin size={14}/> {/* Reduced size={16} to size={14} */}
              </a>
            </div>
          </div>
          <div className="lg:px-3">
            {" "}
            {/* Reduced lg:px-4 to lg:px-3 */}
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>{" "}
            {/* Reduced text-lg to text-base, mb-6 to mb-4 */}
            <ul className="space-y-2 text-gray-300 text-xs">
              {" "}
              {/* Reduced space-y-3 to space-y-2, text-sm to text-xs */}
              <li>
                <Link href="/" className="hover:text-kiddi-blue transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-kiddi-blue transition-colors duration-200">
                  About Us
                </Link>
              </li>
                <li>
                <Link href="/internship" className="hover:text-kiddi-blue transition-colors duration-200">
                  Internship
                </Link>
              </li>
                <li>
                <Link href="/programs/map" className="hover:text-kiddi-blue transition-colors duration-200">
                  MAP
                </Link>
              </li>
                <li>
                <Link href="/programs/cwp" className="hover:text-kiddi-blue transition-colors duration-200">
                  CWP
                </Link>
              </li>
              <li>
                <Link href="/centers" className="hover:text-kiddi-blue transition-colors duration-200">
                  Centers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-kiddi-blue transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:px-3">
            {" "}
            {/* Reduced lg:px-4 to lg:px-3 */}
            <h4 className="text-base font-semibold mb-4">Contact Info</h4>{" "}
            {/* Reduced text-lg to text-base, mb-6 to mb-4 */}
            <div className="space-y-3 text-gray-300 text-xs">
              {" "}
              {/* Reduced space-y-4 to space-y-3, text-sm to text-xs */}
              <div>
                <h5 className="font-semibold mb-1">Gurugram</h5>
                <p>
                  1109, Ocus Quantum, Sector 51,
                  <br />
                  Gurugram, Haryana, 122003
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Dehradun</h5>
                <p>
                  Vishnupuram Lane 1, Mothrowala,
                  <br />
                  Banjarawala, Dehradun, Uttarakhand
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Contact</h5>
                <p>
                  Phone: +91 9650450094
                  <br />
                  Email: admin@deepconnection.life
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pl-5">
            {" "}
            {/* Reduced lg:pl-6 to lg:pl-5 */}
            <h4 className="text-base font-semibold mb-4">Legal</h4>{" "}
            {/* Reduced text-lg to text-base, mb-6 to mb-4 */}
            <ul className="space-y-2 text-gray-300 text-xs">
              {" "}
              {/* Reduced space-y-3 to space-y-2, text-sm to text-xs */}
              <li>
                <a href="privacy-policy" className="hover:text-kiddi-blue transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="T&C" className="hover:text-kiddi-blue transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-300">
          {" "}
          {/* Reduced mt-12 to mt-8, text-sm to text-xs */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6">
            {" "}
            {/* Reduced pt-8 to pt-6 */}
            <p>© 2025 Deep Connection | All Rights Reserved</p>
            <p className="mt-3 md:mt-0">
              {" "}
              {/* Reduced mt-4 to mt-3 */}
              Licensed Child Development Center • Dehradun & Gurugram
            </p>
          </div>
        </div>
      </div>
    </footer>);
}
