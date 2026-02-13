const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 md:px-10 lg:px-16 border-t border-white/10">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 text-sm">
            © 2026 OsintWeekeyv. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors duration-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
