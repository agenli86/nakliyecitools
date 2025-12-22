import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Cookie } from 'lucide-react';

export default function CerezPolitikasi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Çerez Politikası' }]} />
          
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Cookie className="text-yellow-600" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Çerez Politikası</h1>
            </div>

            <p className="text-sm text-gray-500 mb-8">Son güncelleme: 22 Aralık 2024</p>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Çerez Nedir?</h2>
              <p className="text-gray-600 mb-4">
                Çerezler, web sitelerinin tarayıcınızda depoladığı küçük metin dosyalarıdır. 
                Bu dosyalar, tercihlerinizi hatırlamak ve size daha iyi bir deneyim sunmak için kullanılır.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Kullandığımız Çerez Türleri</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Zorunlu Çerezler</h3>
              <p className="text-gray-600 mb-4">
                Web sitesinin temel işlevlerinin çalışması için gerekli çerezlerdir. 
                Bu çerezler olmadan site düzgün çalışmayabilir.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Analitik Çerezler</h3>
              <p className="text-gray-600 mb-4">
                Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir. 
                Bu bilgiler, siteyi geliştirmemize yardımcı olur.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Reklam Çerezleri</h3>
              <p className="text-gray-600 mb-4">
                Google AdSense gibi reklam ağları, ilgi alanlarınıza göre reklam göstermek 
                için çerezler kullanabilir.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Çerezleri Yönetme</h2>
              <p className="text-gray-600 mb-4">
                Tarayıcı ayarlarınızdan çerezleri kontrol edebilir veya silebilirsiniz. 
                Çerezleri devre dışı bırakırsanız, bazı site özellikleri düzgün çalışmayabilir.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Tarayıcı Ayarları</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Chrome:</strong> Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler</li>
                <li><strong>Firefox:</strong> Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
                <li><strong>Safari:</strong> Tercihler &gt; Gizlilik &gt; Çerezler</li>
                <li><strong>Edge:</strong> Ayarlar &gt; Çerezler ve site izinleri</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Üçüncü Taraf Çerezleri</h2>
              <p className="text-gray-600 mb-4">
                Web sitemizde aşağıdaki üçüncü taraf hizmetleri kullanılabilir:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Google AdSense:</strong> Reklam gösterimi için</li>
                <li><strong>Google Analytics:</strong> Site trafiğini analiz etmek için</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Değişiklikler</h2>
              <p className="text-gray-600 mb-4">
                Bu çerez politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">İletişim</h2>
              <p className="text-gray-600">
                Çerez politikamız hakkında sorularınız için: info@nakliyeciaraclari.com
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
