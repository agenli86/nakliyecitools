import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { FileText } from 'lucide-react';

export default function KullanimSartlari() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Kullanım Şartları' }]} />
          
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FileText className="text-green-600" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Kullanım Şartları</h1>
            </div>

            <p className="text-sm text-gray-500 mb-8">Son güncelleme: 22 Aralık 2024</p>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Kabul</h2>
              <p className="text-gray-600 mb-4">
                Nakliyeci Araçları web sitesini kullanarak bu kullanım şartlarını kabul etmiş sayılırsınız. 
                Bu şartları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Hizmet Tanımı</h2>
              <p className="text-gray-600 mb-4">
                Nakliyeci Araçları, nakliyat firmaları için ücretsiz belge oluşturma araçları sunan bir web sitesidir. 
                Sunduğumuz hizmetler:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Nakliye sözleşmesi oluşturma</li>
                <li>Teklif mektubu hazırlama</li>
                <li>Makbuz oluşturma</li>
                <li>Hesaplama araçları (M³, KDV vb.)</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Kullanım Koşulları</h2>
              <p className="text-gray-600 mb-4">
                Sitemizi kullanırken aşağıdaki kurallara uymanız gerekmektedir:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Yasal amaçlar için kullanmak</li>
                <li>Sahte veya yanıltıcı belgeler oluşturmamak</li>
                <li>Siteye zarar verecek eylemlerden kaçınmak</li>
                <li>Diğer kullanıcıların haklarına saygı göstermek</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Sorumluluk Reddi</h2>
              <p className="text-gray-600 mb-4">
                Sitemizde oluşturulan belgeler bilgi amaçlıdır. Bu belgelerin yasal geçerliliği 
                konusunda herhangi bir garanti vermiyoruz. Hukuki konularda bir avukata danışmanızı öneririz.
              </p>
              <p className="text-gray-600 mb-4">
                Oluşturulan belgelerin kullanımından doğacak zararlardan Nakliyeci Araçları sorumlu değildir.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Fikri Mülkiyet</h2>
              <p className="text-gray-600 mb-4">
                Web sitemizdeki tüm içerik, tasarım ve kodlar Nakliyeci Araçları&apos;na aittir. 
                İzinsiz kopyalama ve dağıtım yasaktır.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Veri Güvenliği</h2>
              <p className="text-gray-600 mb-4">
                Girdiğiniz bilgiler tarayıcınızda işlenir ve sunucularımızda saklanmaz. 
                Verilerinizin güvenliği sizin sorumluluğunuzdadır.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Hizmet Değişiklikleri</h2>
              <p className="text-gray-600 mb-4">
                Nakliyeci Araçları, herhangi bir zamanda hizmetlerini değiştirme, askıya alma 
                veya sonlandırma hakkını saklı tutar.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Şartların Değiştirilmesi</h2>
              <p className="text-gray-600 mb-4">
                Bu kullanım şartları zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır. 
                Değişikliklerden sonra siteyi kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Uygulanacak Hukuk</h2>
              <p className="text-gray-600 mb-4">
                Bu kullanım şartları Türkiye Cumhuriyeti yasalarına tabidir. 
                Uyuşmazlıklarda Türkiye mahkemeleri yetkilidir.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. İletişim</h2>
              <p className="text-gray-600">
                Kullanım şartları hakkında sorularınız için: info@nakliyeciaraclari.com
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
