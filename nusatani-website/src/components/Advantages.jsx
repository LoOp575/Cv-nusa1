import { motion } from 'framer-motion';
import { Users, Package, CheckCircle, FileText, Handshake, Truck } from 'lucide-react';

const Advantages = () => {
  const advantages = [
    {
      icon: Users,
      title: 'Akses Langsung ke Petani Lokal',
      description: 'Jaringan luas dengan petani lokal untuk pasokan yang konsisten',
      color: 'bg-nusa-leaf',
    },
    {
      icon: Package,
      title: 'Komoditas Fleksibel',
      description: 'Berbagai pilihan komoditas sesuai kebutuhan dan musim',
      color: 'bg-nusa-green',
    },
    {
      icon: CheckCircle,
      title: 'Fokus Kualitas Barang',
      description: 'Standar kualitas tinggi untuk kepuasan mitra pembeli',
      color: 'bg-nusa-dark',
    },
    {
      icon: FileText,
      title: 'Pencatatan Stok & Transaksi',
      description: 'Sistem pencatatan yang rapi dan transparan',
      color: 'bg-nusa-brown',
    },
    {
      icon: Handshake,
      title: 'Kerja Sama Jangka Panjang',
      description: 'Komitmen membangun hubungan bisnis yang berkelanjutan',
      color: 'bg-nusa-earth',
    },
    {
      icon: Truck,
      title: 'Distribusi Tertata',
      description: 'Proses distribusi yang terorganisir dan tepat waktu',
      color: 'bg-nusa-leaf',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
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
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nusa-dark mb-4">
            Mengapa Memilih NusaTani?
          </h2>
          <p className="text-nusa-green/80 max-w-2xl mx-auto">
            Kami menawarkan nilai lebih dalam setiap aspek layanan agribisnis kami.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-nusa-cream rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-nusa-dark mb-2">{item.title}</h3>
              <p className="text-nusa-green/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
