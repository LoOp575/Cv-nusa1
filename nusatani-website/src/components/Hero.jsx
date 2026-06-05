import { motion } from 'framer-motion';
import { ArrowRight, Sprout, Wheat, Leaf } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-nusa-dark via-nusa-green to-nusa-earth"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-nusa-leaf rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-nusa-brown rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sprout size={18} className="text-nusa-leaf" />
              <span className="text-white/90 text-sm font-medium">Agribisnis Lokal Terpercaya</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              NusaTani
              <br />
              <span className="text-nusa-leaf">Trading & Agribusiness</span>
            </h1>

            <p className="text-xl text-white/80 mb-4 font-medium">
              Pemasok komoditas pertanian lokal dari petani menuju pasar yang lebih luas.
            </p>

            <p className="text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Kami membantu petani lokal menyalurkan hasil panen seperti jagung, jahe, kencur, kunyit, lada, 
              dan komoditas musiman kepada distributor dan mitra pembeli secara lebih tertata, transparan, 
              dan berkelanjutan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#commodities"
                className="group flex items-center justify-center space-x-2 bg-nusa-leaf hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span>Lihat Komoditas</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border border-white/30 transition-all duration-300 hover:scale-105"
              >
                <span>Hubungi NusaTani</span>
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div variants={itemVariants} className="hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <motion.div
                initial={{ rotate: -5, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Wheat, name: 'Jagung', color: 'bg-yellow-400' },
                    { icon: Leaf, name: 'Jahe', color: 'bg-amber-600' },
                    { icon: Sprout, name: 'Kencur', color: 'bg-orange-400' },
                    { icon: Leaf, name: 'Kunyit', color: 'bg-orange-500' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                      className={`${item.color} bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:scale-105 transition-transform cursor-pointer`}
                    >
                      <item.icon size={32} className="text-white mx-auto mb-2" />
                      <span className="text-white font-medium">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-nusa-leaf rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <div className="text-center">
                  <span className="block text-3xl font-bold text-white">100%</span>
                  <span className="text-white/80 text-sm">Produk Lokal</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
