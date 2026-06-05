import { motion } from 'framer-motion';
import { User, CheckCircle, Scale, Package, Truck, FileCheck } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: User,
      title: 'Petani Lokal',
      description: 'Kerjasama dengan petani lokal untuk pengumpulan hasil panen',
      color: 'bg-nusa-leaf',
    },
    {
      icon: CheckCircle,
      title: 'Cek Kualitas',
      description: 'Pemeriksaan kualitas produk secara teliti',
      color: 'bg-nusa-green',
    },
    {
      icon: Scale,
      title: 'Timbang & Sortir',
      description: 'Penimbangan akurat dan penyortiran berdasarkan grade',
      color: 'bg-nusa-dark',
    },
    {
      icon: Package,
      title: 'Pengumpulan Stok',
      description: 'Pengumpulan dan penyimpanan stok yang terorganisir',
      color: 'bg-nusa-brown',
    },
    {
      icon: Truck,
      title: 'Pengiriman ke Buyer',
      description: 'Distribusi tepat waktu ke mitra pembeli',
      color: 'bg-nusa-earth',
    },
    {
      icon: FileCheck,
      title: 'Catatan Transaksi',
      description: 'Pencatatan transaksi yang transparan dan akuntabel',
      color: 'bg-nusa-leaf',
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-nusa-cream">
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
            Proses Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nusa-dark mb-4">
            Alur Kerja NusaTani
          </h2>
          <p className="text-nusa-green/80 max-w-2xl mx-auto">
            Dari petani hingga ke tangan buyer, kami memastikan setiap tahap 
            berjalan dengan standar kualitas yang tinggi.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-nusa-leaf via-nusa-green to-nusa-earth transform -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-nusa-cream">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-nusa-dark text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`${step.color} w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <step.icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-sm md:text-base font-bold text-nusa-dark mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-nusa-green/70 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <div className="w-0.5 h-6 bg-nusa-green/30"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
