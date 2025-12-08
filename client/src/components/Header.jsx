import { Link, useLocation } from "wouter";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "@/assets/cdc_logo.png";
import { trackEvent } from "@/analytics";
import { trackPhoneClick } from "@/utils/trackConversion";

export default function Header() {
  const location = useLocation()[0];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProgramsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      label: "Our Programs",
      subItems: [
        { path: "/programs/map", label: "Milestone Accelerator Program (MAP)" },
        { path: "/programs/cwp", label: "Continuous Wellbeing Program (CWP)" },
      ],
    },
    { path: "/centers", label: "Centers" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img src={logo} alt="Kiddicove Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.path || item.label}
                className="relative"
                ref={item.subItems ? dropdownRef : null}
              >
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => {
                        setIsProgramsOpen(!isProgramsOpen);
                        trackEvent("menu_dropdown_toggle", {
                          menu: "Our Programs",
                          state: !isProgramsOpen ? "open" : "close",
                        });
                      }}
                      className="flex items-center px-3 py-2 text-[15px] font-medium text-gray-600 hover:text-blue-600 transition"
                    >
                      {item.label}
                      {isProgramsOpen ? (
                        <ChevronUp className="ml-1 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>

                    {isProgramsOpen && (
                      <div className="absolute left-0 mt-3 w-80 rounded-xl shadow-xl bg-white ring-1 ring-gray-200">
                        <div className="py-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              href={subItem.path}
                              onClick={() => {
                                trackEvent("program_click", {
                                  program: subItem.label,
                                });
                                setIsProgramsOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition rounded-lg"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() =>
                      trackEvent("nav_click", { label: item.label })
                    }
                    className="px-3 py-2 text-[15px] font-medium transition"
                    style={{
                      color: isActive(item.path) ? "#2563eb" : "#6B7280",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* 📞 DESKTOP CALL BUTTON */}
            {/* <a
              href="tel:+918595078224"
              onClick={() =>
                trackEvent("call_click_desktop", { source: "header" })
              }
              className="flex items-center justify-center bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
              style={{ width: "154px", height: "50px" }}
            >
              Call Now
            </a> */}
            <a
              href="tel:+918595078224"
              onClick={() => {
                trackPhoneClick("+918595078224");
              }}
              className="flex items-center justify-center bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
              style={{ width: "154px", height: "50px" }}
            >
              Call Now
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 transition"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                trackEvent("mobile_menu_toggle", {
                  state: !isMobileMenuOpen ? "open" : "close",
                });
              }}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg pb-4 px-3">
            {/* 📱 MOBILE CALL BUTTON */}
            {/* <a
              href="tel:+918595078224"
              onClick={() =>
                trackEvent("call_click_mobile", { source: "header_mobile" })
              }
              className="block w-full text-center bg-blue-600 text-white py-3 mt-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Call Now
            </a> */}
            <a
              href="tel:+918595078224"
              onClick={() => {
                trackPhoneClick("+918595078224");
              }}
              className="block w-full text-center bg-blue-600 text-white py-3 mt-3 rounded-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Call Now
            </a>

            {navItems.map((item) => (
              <div key={item.path || item.label} className="w-full mt-2">
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => {
                        setIsProgramsOpen(!isProgramsOpen);
                        trackEvent("mobile_menu_dropdown_toggle", {
                          menu: "Our Programs",
                          state: !isProgramsOpen ? "open" : "close",
                        });
                      }}
                      className="w-full flex justify-between items-center px-3 py-2 text-gray-700 font-medium"
                    >
                      {item.label}
                      {isProgramsOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>

                    {isProgramsOpen && (
                      <div className="pl-4 mt-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            href={subItem.path}
                            onClick={() => {
                              trackEvent("program_click_mobile", {
                                program: subItem.label,
                              });
                              setIsMobileMenuOpen(false);
                              setIsProgramsOpen(false);
                            }}
                            className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    onClick={() => {
                      trackEvent("nav_click_mobile", { label: item.label });
                      setIsMobileMenuOpen(false);
                      setIsProgramsOpen(false);
                    }}
                    className="block px-3 py-2 text-gray-700 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
