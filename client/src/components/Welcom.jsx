import { useNavigate, useLocation } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navbar */}
      <nav className="w-full flex justify-between 
                items-center p-3 px-6 bg-black/80 backdrop-blur-md fixed top-0 
                left-0 z-50 border-b">
        
        {/* Logo */}
        <h1 className="text-white text-2xl font-robot tracking-tight">
          OsintWeekeyv
        </h1>

        {/* Navigation Links - MIDDLE */}
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

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 text-white/80
                       font-robot" 
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
      </nav>

      {/* Hero content remains the same... */}

    <div className="flex flex-col justify-start pt-24 min-h-screen">

        <h2 className="font-robot text-white text-6xl text-meduim">
          Start Do a Professional Osint.
        </h2>
        <p className="text-white text-lg md:text-xl mb-8 animate-fadeIn delay-200 font-inter">
            Welcom in our website 
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="text-white font-robot text-left border-1 p-2 w-[100px]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Welcome;
