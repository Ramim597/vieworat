import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05070d] border-t border-red-500/20">
      {/* Red glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-125 h-75 bg-red-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 py-16">
          {/* Brand */}
          <div>
            <img src={logo} alt="Vieworat" className="w-32 h-auto" />

            <p className="text-gray-400 mt-2 text-sm leading-6 max-w-xs">
              Powerful tools and insights for creators to understand, grow, and
              monetize their content.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition"
              >
                Y
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition"
              >
                I
              </a>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Tools
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="youtube-money-calculator"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  YouTube Money Calculator
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Website Traffic Checker
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Reverse Calculator
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Platform Comparator
                </a>
              </li>
            </ul>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              AI Tools
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  YouTube Title Generator
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  YouTube Keyword Generator
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  YouTube Tag Generator
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  YouTube Description Generator
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Hashtag Generator
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              Platform
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Community
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Our Methodology
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Viewora. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to={"privacy-policy"}
              className="text-gray-500 hover:text-red-500 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to={"terms"}
              className="text-gray-500 hover:text-red-500 transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
