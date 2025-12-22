import Link from 'next/link';
import { FileText, FileCheck, Receipt, Wrench, BookOpen, TrendingUp } from 'lucide-react';

const popularPosts = [
  { slug: 'nakliyat-sozlesmesi-neden-onemli', title: 'Nakliyat Sözleşmesi Neden Önemli?' },
  { slug: 'tasima-oncesi-yapilacaklar', title: 'Taşınma Öncesi Yapılacaklar' },
  { slug: 'nakliye-fiyatlari-nasil-belirlenir', title: 'Nakliye Fiyatları Nasıl Belirlenir?' },
  { slug: 'esya-paketleme-teknikleri', title: 'Eşya Paketleme Teknikleri' },
];

const tools = [
  { href: '/sozlesme', label: 'Sözleşme Oluştur', icon: FileText, color: 'bg-blue-100 text-blue-600' },
  { href: '/teklif', label: 'Teklif Mektubu', icon: FileCheck, color: 'bg-green-100 text-green-600' },
  { href: '/makbuz', label: 'Makbuz Oluştur', icon: Receipt, color: 'bg-orange-100 text-orange-600' },
  { href: '/araclar', label: 'Hesaplama Araçları', icon: Wrench, color: 'bg-purple-100 text-purple-600' },
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Araçlar */}
      <div className="card p-4">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Wrench size={18} className="text-blue-600" />
          Araçlarımız
        </h3>
        <div className="space-y-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tool.color}`}>
                <tool.icon size={16} />
              </div>
              <span className="text-sm text-gray-700 font-medium">{tool.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popüler Yazılar */}
      <div className="card p-4">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp size={18} className="text-orange-500" />
          Popüler Yazılar
        </h3>
        <div className="space-y-3">
          {popularPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-start gap-3 group"
            >
              <span className="w-6 h-6 bg-gray-100 rounded text-xs font-bold text-gray-500 flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                {post.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <h3 className="font-bold mb-2">Profesyonel Belgeler</h3>
        <p className="text-sm text-blue-100 mb-4">
          Hemen ücretsiz sözleşme, teklif veya makbuz oluşturun.
        </p>
        <Link href="/sozlesme" className="btn btn-white text-sm w-full">
          Başla
        </Link>
      </div>
    </aside>
  );
}
