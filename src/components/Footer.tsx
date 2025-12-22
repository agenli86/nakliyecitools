import Link from 'next/link';
import { Truck, FileText, Receipt, FileCheck, Wrench, BookOpen, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg">Nakliyeci Araçları</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Nakliyat firmaları için profesyonel belge oluşturma araçları. 
              Sözleşme, teklif ve makbuz hazırlayın.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail size={16} />
              <span>info@nakliyeciaraclari.com</span>
            </div>
          </div>

          {/* Araçlar */}
          <div>
            <h4 className="font-semibold text-white mb-4">Araçlar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sozlesme" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                  <FileText size={14} />
                  Sözleşme Oluştur
                </Link>
              </li>
              <li>
                <Link href="/teklif" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                  <FileCheck size={14} />
                  Teklif Mektubu
                </Link>
              </li>
              <li>
                <Link href="/makbuz" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                  <Receipt size={14} />
                  Makbuz Oluştur
                </Link>
              </li>
              <li>
                <Link href="/araclar" className="text-gray-400 hover:text-white text-sm flex items-center gap-2">
                  <Wrench size={14} />
                  Hesaplama Araçları
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="font-semibold text-white mb-4">Blog</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/nakliyat-sozlesmesi-neden-onemli" className="text-gray-400 hover:text-white text-sm">
                  Nakliyat Sözleşmesi Neden Önemli?
                </Link>
              </li>
              <li>
                <Link href="/blog/tasima-oncesi-yapilacaklar" className="text-gray-400 hover:text-white text-sm">
                  Taşınma Öncesi Yapılacaklar
                </Link>
              </li>
              <li>
                <Link href="/blog/nakliye-fiyatlari-nasil-belirlenir" className="text-gray-400 hover:text-white text-sm">
                  Nakliye Fiyatları
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-400 hover:text-blue-300 text-sm">
                  Tüm Yazılar →
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Yasal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/gizlilik-politikasi" className="text-gray-400 hover:text-white text-sm">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cerez-politikasi" className="text-gray-400 hover:text-white text-sm">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/kullanim-sartlari" className="text-gray-400 hover:text-white text-sm">
                  Kullanım Şartları
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Nakliyeci Araçları. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/gizlilik-politikasi" className="hover:text-white">Gizlilik</Link>
              <Link href="/cerez-politikasi" className="hover:text-white">Çerezler</Link>
              <Link href="/kullanim-sartlari" className="hover:text-white">Şartlar</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
