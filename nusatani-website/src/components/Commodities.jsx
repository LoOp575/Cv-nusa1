import { motion } from 'framer-motion';
import { Wheat, Leaf, Sprout, Package } from 'lucide-react';

const Commodities = () => {
  const commodities = [
    {
      name: 'Jagung Pakan',
      description: 'Jagung kristal kering pipil kualitas premium untuk pakan ternak',
      buyers: 'Pabrik pakan, peternak, toko pakan',
      icon: Wheat,
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      name: 'Jahe',
      description: 'Jahe segar dan kering dengan kadar minyak atsiri tinggi',
      buyers: 'Industri rempah, jamu, ekspor',
      icon: Leaf,
      color: 'from-amber-500 to-amber-700',
      bgColor: 'bg-amber-50',
    },
    {
      name: 'Kencur',
      description: 'Kencur pilihan untuk bahan baku industri dan tradisional',
      buyers: 'UMKM herbal, industri jamu',
      icon: Sprout,
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'Kunyit',
      description: 'Kunyit lokal dengan kurkumin tinggi untuk berbagai kebutuhan',
      buyers: 'Industri makanan, jamu, kosmetik',
      icon: Leaf,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'Lada',
      description: 'Lada hitam dan putih kualitas ekspor',
      buyers: 'Distributor rempah, industri makanan',
      icon: Package,
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50',
    },
    {
      name: 'Komoditas Musiman',
      description: 'Berbagai hasil pertanian musiman lainnya sesuai permintaan',
      buyers: 'Fleksibel sesuai kebutuhan pasar',
      icon: Sprout,
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section id="commodities" className="py-20 bg-white">
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
            Produk Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nusa-dark mb-4">
            Komoditas Unggulan
          </h2>
          <p className="text-nusa-green/80 max-w-2xl mx-auto">
            Kami menyediakan berbagai komoditas pertanian berkualitas dari petani lokal 
            untuk memenuhi kebutuhan pasar yang beragam.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commodities.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className={`${item.bgColor} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-nusa-cream`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                <item.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-nusa-dark mb-2">{item.name}</h3>
              <p className="text-nusa-green/70 mb-4 text-sm leading-relaxed">{item.description}</p>
              
              {/* Buyers */}
              <div className="border-t border-nusa-green/10 pt-4">
                <span className="text-xs font-semibold text-nusa-dark uppercase tracking-wide">Target Pembeli</span>
                <p className="text-sm text-nusa-green/80 mt-1">{item.buyers}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commodities;
