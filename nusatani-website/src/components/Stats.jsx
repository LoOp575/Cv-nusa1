import { motion } from 'framer-motion';
import { Package, Users, Truck, FileText } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Package,
      title: 'Komoditas Lokal',
      description: 'Berkembang',
      color: 'bg-nusa-leaf',
    },
    {
      icon: Users,
      title: 'Petani & Supplier',
      description: 'Fleksibel',
      color: 'bg-nusa-green',
    },
    {
      icon: Truck,
      title: 'Distribusi Terarah',
      description: 'Terstruktur',
      color: 'bg-nusa-brown',
    },
    {
      icon: FileText,
      title: 'Pencatatan Transaksi',
      description: 'Berkelanjutan',
      color: 'bg-nusa-earth',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-nusa-cream rounded-2xl p-6 md:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`${stat.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon size={28} className="text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-sm md:text-base font-semibold text-nusa-dark mb-2">{stat.title}</h3>
              <p className="text-nusa-green font-medium">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
