import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import { FileText, Receipt, FileCheck, Wrench, ArrowRight, Truck, Shield, Clock, CheckCircle } from 'lucide-react';

const tools = [
  {
    href: '/sozlesme',
    icon: FileText,
    title: 'Nakliye Sözleşmesi',
    description: 'Profesyonel nakliye sözleşmesi hazırlayın',
    color: 'bg-blue-600',
  },
  {
    href: '/teklif',
    icon: FileCheck,
    title: 'Teklif Mektubu',
    description: 'Müşterilerinize profesyonel teklif hazırlayın',
    color: 'bg-green-600',
  },
  {
    href: '/makbuz',
    icon: Receipt,
    title: 'Makbuz Oluştur',
    description: 'Kapora veya ödeme makbuzu oluşturun',
    color: 'bg-orange-500',
  },
  {
    href: '/araclar',
    icon: Wrench,
    title: 'Hesaplama Araçları',
    description: 'M³ hesaplama, KDV hesaplama ve daha fazlası',
    color: 'bg-purple-600',
  },
];

const features = [
  { icon: Truck, title: 'Nakliyeciler İçin', desc: 'Özel tasarlandı' },
  { icon: Shield, title: 'Profesyonel', desc: 'Güvenilir belgeler' },
  { icon: Clock, title: 'Hızlı', desc: 'Dakikalar içinde' },
  { icon: CheckCircle, title: 'Ücretsiz', desc: 'Tamamen bedava' },
];

const howToUse = [
  { step: '1', title: 'Araç Seçin', desc: 'Sözleşme, teklif veya makbuz' },
  { step: '2', title: 'Bilgileri Girin', desc: 'Firma ve müşteri bilgilerini doldurun' },
  { step: '3', title: 'PDF İndirin', desc: 'Belgenizi indirin veya yazdırın' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Truck size={18} />
              Nakliyeciler için profesyonel araçlar
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sözleşme, Teklif ve Makbuz
            </h1>
            <p className="text-xl text-yellow-400 font-semibold mb-6">
              Kolayca Oluşturun
            </p>
            <p className="text-black-100 max-w-xl mx-auto mb-8">
              Profesyonel görünümlü belgeler hazırlayın, logonuzu ekleyin, PDF olarak indirin. Tamamen ücretsiz!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/sozlesme" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors">
                Sözleşme Oluştur
                <ArrowRight size={18} />
              </Link>
              <Link href="/teklif" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border-2 border-white/30 transition-colors">
                Teklif Hazırla
              </Link>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="bg-white py-8 border-b">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <f.icon size={24} className="text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{f.title}</h4>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ad */}
        <section className="py-6 bg-gray-50">
          <AdBanner size="leaderboard" />
        </section>

        {/* Tools */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Araçlarımız</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 hover:shadow-md transition-all group border border-gray-200"
                >
                  <div className={`w-14 h-14 ${tool.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    <tool.icon size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                      {tool.title}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                    </h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Nasıl Kullanılır?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howToUse.map((item) => (
                <div key={item.step} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-yellow-400">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hemen Başlayın!
            </h2>
            <p className="text-gray-700 mb-6">
              Üye olmanıza gerek yok. Hemen profesyonel belgeler oluşturun.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/sozlesme" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2 transition-colors">
                <FileText size={18} />
                Sözleşme
              </Link>
              <Link href="/teklif" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2 transition-colors">
                <FileCheck size={18} />
                Teklif
              </Link>
              <Link href="/makbuz" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg inline-flex items-center gap-2 transition-colors">
                <Receipt size={18} />
                Makbuz
              </Link>
            </div>
          </div>
        </section>

        {/* Ad */}
        <section className="py-6 bg-white">
          <AdBanner size="leaderboard" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
