import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nusa-dark text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Nusa<span className="text-nusa-leaf">Tani</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Trading & Agribusiness
            </p>
            <p className="text-white/60 text-sm">
              Pemasok komoditas pertanian lokal dari petani menuju pasar yang lebih luas.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-nusa-leaf">Kontak</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Dadan Ramdani</li>
              <li>rezahmm148@gmail.com</li>
              <li>+62 812-3456-7890</li>
              <li>Indonesia</li>
            </ul>
          </div>

          {/* Komoditas */}
          <div>
            <h4 className="font-semibold mb-4 text-nusa-leaf">Komoditas</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Jagung Pakan</li>
              <li>Jahe</li>
              <li>Kencur</li>
              <li>Kunyit</li>
              <li>Lada</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © {currentYear} NusaTani Trading & Agribusiness. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>for Indonesian Farmers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
