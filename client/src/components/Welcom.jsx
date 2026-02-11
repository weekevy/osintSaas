import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import NeoBlob from './NeonBlob'
const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center p-3 px-6 
                      bg-black/80 fixed top-0 left-0 z-50 
                      border-b border-white/10">
        
        {/* Logo */}
        <h1 className="text-white text-2xl font-robot tracking-tight z-50">
          OsintWeekeyv
        </h1>

        {/* Desktop Navigation Links - MIDDLE */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.path)}
              className={`relative text-sm font-medium transition-colors duration-300 font-inter
                ${location.pathname === item.path 
                  ? 'text-white' 
                  : 'text-white/70 hover:text-white'
                }
              `}
            >
              {item.name}
              {location.pathname === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 text-white/80 font-robot hover:text-white transition-colors duration-300" 
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-6 py-2 text-black bg-white border-2 border-white  
                hover:bg-transparent hover:text-white transition-all 
                duration-300 font-inter text-sm font-medium cursor-pointer rounded-md"
          >
            Get Started
          </button>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Toggle menu"
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-200 ease-out origin-center
              ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-200 ease-out
              ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all duration-200 ease-out origin-center
              ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-250
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-screen w-80 bg-black/90 backdrop-blur-2xl 
                    border-l border-white/10 z-40 md:hidden transition-transform duration-300 ease-out
                    shadow-2xl shadow-black/50
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6 mb-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`relative text-left text-2xl font-medium transition-all duration-300 font-inter
                  ${location.pathname === item.path 
                    ? 'text-white translate-x-2' 
                    : 'text-white/70 hover:text-white hover:translate-x-2'
                  }
                `}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-4 mt-auto mb-12">
            <button
              onClick={() => {
                navigate("/login");
                setIsMenuOpen(false);
              }}
              className="w-full px-6 py-3 text-white/80 font-robot hover:text-white 
                         transition-colors duration-300 text-center border border-white/20 
                         rounded-md hover:bg-white/5" 
            >
              Login
            </button>
            <button
              onClick={() => {
                navigate("/signup");
                setIsMenuOpen(false);
              }}
              className="w-full px-6 py-3 text-black bg-white border-2 border-white  
                  hover:bg-transparent hover:text-white transition-all 
                  duration-300 font-inter text-sm font-medium cursor-pointer rounded-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col pt-20 pt-34 px-6 pl-110">
        <h2 className="font-rubik text-white text-5xl text-meduim md:text-6xl text-medium mb-4">
          Start Doing a Professional <br/> osint break down Scammers
        </h2>
        <div className="">
            <button
                onClick={() => navigate("/signup")}
                className="font-robot text-left border border-white p-3 w-[110px] 
                rounded-md bg-white text-black"
            >
                Get Started
            </button>
            <button
                onClick={() => navigate("/signup")}
                className="text-white font-robot text-left border border-white p-3 w-[90px] 
                rounded-md ml-4"
            >
                About us
            </button>
        </div>
        <p className="text-white w-lg mt-10">
           Osint came from constantly diggint through 
           linked or any job requitment check for any suspicious
           information about the company, using efficient technology
           with scale to how much this recuitment
        </p>
        <div className="absolute right-200 top-40">
            <NeoBlob/>
        </div>

      </div>
    </div>
  );
};

export default Welcome;
