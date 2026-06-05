import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-nusa-dark via-nusa-green to-nusa-earth">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
            Hubungi Kami
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Butuh Pasokan Komoditas Pertanian Lokal?
          </h2>
          
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            NusaTani terbuka untuk kerja sama pasokan, distribusi, kemitraan petani, 
            dan pengembangan jaringan agribisnis lokal.
          </p>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle size={24} />
            <span>Hubungi via WhatsApp</span>
          </motion.a>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Phone size={32} className="text-nusa-leaf mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Telepon / WhatsApp</h3>
              <p className="text-white/70 text-sm">+62 812-3456-7890</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <Mail size={32} className="text-nusa-leaf mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Email</h3>
              <p className="text-white/70 text-sm">rezahmm148@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <MapPin size={32} className="text-nusa-leaf mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-1">Lokasi</h3>
              <p className="text-white/70 text-sm">Indonesia</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
