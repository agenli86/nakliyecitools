import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { Shield } from 'lucide-react';

export default function GizlilikPolitikasi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Gizlilik Politikası' }]} />
          
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Gizlilik Politikası</h1>
            </div>

            <p className="text-sm text-gray-500 mb-8">Son güncelleme: 22 Aralık 2024</p>

            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Giriş</h2>
              <p className="text-gray-600 mb-4">
                Nakliyeci Araçları olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. 
                Bu gizlilik politikası, web sitemizi kullanırken hangi bilgilerin toplandığını, 
                nasıl kullanıldığını ve korunduğunu açıklamaktadır.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Toplanan Bilgiler</h2>
              <p className="text-gray-600 mb-4">
                Web sitemizde belge oluşturma araçlarımızı kullanırken girdiğiniz bilgiler 
                (firma adı, adres, telefon vb.) yalnızca tarayıcınızda işlenir ve sunucularımıza 
                gönderilmez. Bu bilgiler:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Sözleşme, teklif ve makbuz oluştururken girdiğiniz firma ve müşteri bilgileri</li>
                <li>Yüklediğiniz logo dosyaları</li>
                <li>Hesaplama araçlarına girdiğiniz veriler</li>
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>Önemli:</strong> Bu bilgiler sunucularımızda saklanmaz. Tüm işlemler 
                tarayıcınızda gerçekleşir.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Çerezler</h2>
              <p className="text-gray-600 mb-4">
                Web sitemiz, deneyiminizi iyileştirmek için çerezler kullanabilir. 
                Çerezler hakkında detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Üçüncü Taraf Hizmetler</h2>
              <p className="text-gray-600 mb-4">
                Web sitemizde Google AdSense reklamları gösterilebilir. Google, 
                ilgi alanlarınıza göre reklam göstermek için çerezler kullanabilir.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Veri Güvenliği</h2>
              <p className="text-gray-600 mb-4">
                Girdiğiniz bilgiler tarayıcınızda işlenir ve sunucularımıza gönderilmez. 
                Oluşturduğunuz PDF dosyaları doğrudan cihazınıza indirilir.
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Haklarınız</h2>
              <p className="text-gray-600 mb-4">
                KVKK kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse bilgi talep etme</li>
                <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              </ul>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. İletişim</h2>
              <p className="text-gray-600 mb-4">
                Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
              </p>
              <p className="text-gray-600">
                E-posta: info@nakliyeciaraclari.com
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Değişiklikler</h2>
              <p className="text-gray-600 mb-4">
                Bu gizlilik politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlanacaktır.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
