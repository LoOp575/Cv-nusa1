import { motion } from 'framer-motion';
import { CheckCircle, Leaf, Handshake } from 'lucide-react';

const About = () => {
  const features = [
    'Pengecekan kualitas produk',
    'Penimbangan yang akurat',
    'Pencatatan stok terstruktur',
    'Hubungan jangka panjang dengan mitra',
  ];

  return (
    <section id="about" className="py-20 bg-nusa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block bg-nusa-green text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Tentang Kami
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-nusa-dark mb-6">
                Membangun Rantai Pasok Pertanian yang Lebih Baik
              </h2>
              
              <p className="text-nusa-green/80 mb-6 leading-relaxed text-lg">
                NusaTani adalah usaha agribisnis lokal yang berfokus pada pengumpulan dan distribusi 
                komoditas pertanian dari petani ke distributor dan buyer.
              </p>
              
              <p className="text-nusa-green/80 mb-8 leading-relaxed">
                Kami membangun rantai pasok yang lebih rapi melalui pengecekan kualitas, penimbangan, 
                pencatatan stok, dan hubungan jangka panjang dengan mitra.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle size={20} className="text-nusa-leaf flex-shrink-0" />
                    <span className="text-nusa-dark">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-nusa-dark to-nusa-green rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <Leaf size={40} className="text-nusa-leaf mx-auto mb-3" />
                  <span className="text-white font-medium block">Produk Alami</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <Handshake size={40} className="text-nusa-leaf mx-auto mb-3" />
                  <span className="text-white font-medium block">Mitra Terpercaya</span>
                </motion.div>
              </div>
              
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 text-center italic">
                  "Dari petani lokal untuk pasar yang lebih luas"
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-nusa-leaf rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-nusa-brown rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
