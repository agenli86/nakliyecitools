import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import { BookOpen, Calendar, Clock, ArrowRight, FileText, Package, Truck, Shield } from 'lucide-react';

const blogYazilari = [
  {
    slug: 'nakliyat-sozlesmesi-neden-onemli',
    title: 'Nakliyat Sözleşmesi Neden Önemli?',
    excerpt: 'Ev veya ofis taşırken nakliyat sözleşmesi yapmanın önemi ve sözleşmede bulunması gereken maddeler hakkında bilmeniz gerekenler.',
    icon: FileText,
    date: '2024-12-20',
    readTime: '5 dk',
    category: 'Rehber',
    image: '/blog/sozlesme.jpg'
  },
  {
    slug: 'tasima-oncesi-yapilacaklar',
    title: 'Taşınma Öncesi Yapılması Gerekenler',
    excerpt: 'Stressiz bir taşınma deneyimi için hazırlık sürecinde dikkat etmeniz gereken adımlar ve püf noktaları.',
    icon: Package,
    date: '2024-12-18',
    readTime: '7 dk',
    category: 'Rehber',
    image: '/blog/tasima.jpg'
  },
  {
    slug: 'nakliye-fiyatlari-nasil-belirlenir',
    title: 'Nakliye Fiyatları Nasıl Belirlenir?',
    excerpt: 'Nakliye ücretlerini etkileyen faktörler, fiyat hesaplama yöntemleri ve bütçenizi planlamanız için ipuçları.',
    icon: Truck,
    date: '2024-12-15',
    readTime: '6 dk',
    category: 'Bilgi',
    image: '/blog/fiyat.jpg'
  },
  {
    slug: 'esya-paketleme-teknikleri',
    title: 'Profesyonel Eşya Paketleme Teknikleri',
    excerpt: 'Kırılacak eşyalarınızı güvenle taşımak için profesyonel paketleme teknikleri ve malzeme önerileri.',
    icon: Shield,
    date: '2024-12-10',
    readTime: '8 dk',
    category: 'Rehber',
    image: '/blog/paketleme.jpg'
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Blog' }]} />
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <BookOpen className="text-blue-600" />
              Nakliyat Blog
            </h1>
            <p className="text-gray-600 mt-2">Taşınma, nakliyat ve eşya güvenliği hakkında faydalı bilgiler</p>
          </div>

          {/* Ad Banner */}
          <div className="mb-8">
            <AdBanner size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2 space-y-6">
              {blogYazilari.map((yazi) => (
                <Link
                  key={yazi.slug}
                  href={`/blog/${yazi.slug}`}
                  className="card p-6 hover:shadow-lg transition-all block group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <yazi.icon size={28} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-medium">{yazi.category}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {new Date(yazi.date).toLocaleDateString('tr-TR')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {yazi.readTime}
                        </span>
                      </div>
                      <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {yazi.title}
                        <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h2>
                      <p className="text-gray-600 text-sm">{yazi.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>

          {/* Bottom Ad */}
          <div className="mt-8 flex justify-center">
            <AdBanner size="rectangle" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
