import { motion } from 'framer-motion';
import { Building, Store, Factory, Leaf, Users, Briefcase } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      icon: Building,
      title: 'Distributor Komoditas',
      description: 'Jaringan distribusi luas untuk jangkauan pasar lebih besar',
    },
    {
      icon: Store,
      title: 'Pedagang Besar',
      description: 'Pasokan rutin untuk kebutuhan perdagangan skala besar',
    },
    {
      icon: Store,
      title: 'Toko Pakan',
      description: 'Supplier jagung dan bahan pakan ternak berkualitas',
    },
    {
      icon: Factory,
      title: 'Pabrik Pakan Ternak',
      description: 'Bahan baku jagung untuk industri pakan',
    },
    {
      icon: Leaf,
      title: 'Industri Rempah & Jamu',
      description: 'Jahe, kencur, kunyit, dan lada untuk produksi',
    },
    {
      icon: Briefcase,
      title: 'UMKM Herbal',
      description: 'Dukungan bahan baku untuk usaha herbal lokal',
    },
    {
      icon: Users,
      title: 'Peternak',
      description: 'Pasokan pakan untuk peternakan ayam, sapi, dan ikan',
    },
    {
      icon: Handshake,
      title: 'Mitra Agribisnis Lokal',
      description: 'Kemitraan strategis untuk pengembangan bersama',
    },
  ];

  return (
    <section id="partners" className="py-20 bg-nusa-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-nusa-green text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Target Mitra
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nusa-dark mb-4">
            Siapa yang Bisa Bermitra?
          </h2>
          <p className="text-nusa-green/80 max-w-2xl mx-auto">
            Kami terbuka untuk berbagai jenis kemitraan dalam ekosistem agribisnis.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-nusa-cream"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-nusa-dark to-nusa-green rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <partner.icon size={32} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-nusa-dark mb-2">{partner.title}</h3>
              <p className="text-nusa-green/70 text-sm leading-relaxed">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
