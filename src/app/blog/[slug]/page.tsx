import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import { Calendar, Clock, Share2, FileText } from 'lucide-react';

const blogIcerikleri: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}> = {
  'nakliyat-sozlesmesi-neden-onemli': {
    title: 'Nakliyat Sözleşmesi Neden Önemli?',
    date: '2024-12-20',
    readTime: '5 dk',
    category: 'Rehber',
    content: `Nakliyat sözleşmesi, taşınma işlemi sırasında nakliyeci firma ile müşteri arasında yapılan resmi bir anlaşmadır. Bu sözleşme, her iki tarafın hak ve sorumluluklarını belirler ve olası anlaşmazlıklarda hukuki bir dayanak oluşturur.

Neden Sözleşme Yapmalısınız?

1. Hukuki Güvence: Sözleşme olmadan yapılan taşıma işlemlerinde herhangi bir hasar veya kayıp durumunda hakkınızı aramanız zorlaşır. Yazılı bir sözleşme, yasal süreçlerde size güçlü bir dayanak sağlar.

2. Fiyat Netliği: Sözleşmede belirlenen fiyat, taşıma günü ekstra ücret talep edilmesini önler. Ara toplam, KDV ve kapora miktarı net olarak belirtilmelidir.

3. Hizmet Kapsamı: Hangi hizmetlerin dahil olduğu (paketleme, demontaj, montaj vb.) sözleşmede açıkça yazılmalıdır.

4. Sigorta ve Tazminat: Eşyalarınızın sigorta kapsamında olup olmadığı ve hasar durumunda tazminat koşulları belirlenmelidir.

Sözleşmede Bulunması Gereken Maddeler:

• Tarafların bilgileri (firma adı, adres, telefon, vergi numarası)
• Müşteri bilgileri (ad soyad, T.C. kimlik no, iletişim bilgileri)
• Taşıma adresleri (çıkış ve varış adresleri detaylı olarak)
• Tarih ve saat (teslim alma ve teslim etme zamanları)
• Ücret detayları (toplam tutar, kapora, ödeme şekli)
• Özel şartlar (iptal koşulları, hasar tazminatı, garanti)

Sitemizde yer alan Sözleşme Oluştur aracını kullanarak profesyonel bir nakliyat sözleşmesi hazırlayabilirsiniz. Logo ekleyebilir, PDF olarak indirebilir veya doğrudan yazdırabilirsiniz.`
  },
  'tasima-oncesi-yapilacaklar': {
    title: 'Taşınma Öncesi Yapılması Gerekenler',
    date: '2024-12-18',
    readTime: '7 dk',
    category: 'Rehber',
    content: `Başarılı bir taşınma, iyi bir planlama ile başlar. İşte taşınmadan önce yapmanız gereken adımlar:

4-6 Hafta Önce Yapılacaklar:

Nakliye Firması Seçimi:
• En az 3 farklı firmadan teklif alın
• Referansları kontrol edin
• Sigorta durumunu sorun
• Sözleşme şartlarını inceleyin

Bütçe Planlaması:
• Nakliye ücreti
• Paketleme malzemeleri
• Temizlik masrafları
• Beklenmedik giderler için rezerv

2-3 Hafta Önce Yapılacaklar:

Eşya Listesi Hazırlama:
• Taşınacak eşyaları listeleyin
• Satılacak/bağışlanacak eşyaları ayırın
• Değerli eşyaları not edin

Paketleme Malzemeleri:
• Koliler (farklı boyutlarda)
• Koli bandı
• Kabarcıklı naylon
• Gazete kağıdı
• Etiketler ve kalemler

1 Hafta Önce Yapılacaklar:

• Her odayı ayrı ayrı paketleyin
• Kolileri oda adıyla etiketleyin
• Kırılacak eşyaları özel işaretleyin

Taşınma Günü:

• Erken kalkın
• Hafif kahvaltı yapın
• Değerli eşyaları yanınızda taşıyın
• Sözleşmeyi kontrol edin
• Eşya listesini teyit edin

Sitemizde yer alan Araçlar bölümündeki Taşınma Checklist'i kullanarak hiçbir adımı atlamayın!`
  },
  'nakliye-fiyatlari-nasil-belirlenir': {
    title: 'Nakliye Fiyatları Nasıl Belirlenir?',
    date: '2024-12-15',
    readTime: '6 dk',
    category: 'Bilgi',
    content: `Nakliye fiyatları birçok değişkene bağlı olarak belirlenir. İşte fiyatı etkileyen ana faktörler:

1. Eşya Miktarı (Hacim)

Nakliye fiyatlarının temel belirleyicisi eşya hacmidir. Genellikle metreküp (m³) üzerinden hesaplanır.

• 1+1 daire: 8-12 m³
• 2+1 daire: 15-20 m³
• 3+1 daire: 25-35 m³
• 4+1 daire: 35-50 m³

2. Mesafe

Şehir İçi Taşıma:
• Genellikle sabit fiyat veya m³ başına ücret
• 0-50 km arası standart fiyat

Şehirler Arası Taşıma:
• Kilometre başına ek ücret
• Dönüş yükü durumu fiyatı etkiler

3. Kat ve Asansör Durumu

Asansör Varsa: Ek ücret genellikle alınmaz
Asansör Yoksa: Her kat için ek ücret (%5-10)

4. Ek Hizmetler

• Profesyonel paketleme: +%20-30
• Demontaj/Montaj: Parça başına ücret
• Sigorta: Eşya değerine göre

5. Dönemsel Faktörler

Yoğun Dönemler (Pahalı): Yaz ayları, ay sonları, hafta sonları
Sakin Dönemler (Uygun): Kış ayları, hafta içi, ay ortaları

Örnek Fiyat Aralıkları (2024):

• 1+1 Şehir içi: 3.000-5.000 ₺
• 2+1 Şehir içi: 5.000-8.000 ₺
• 3+1 Şehir içi: 8.000-12.000 ₺
• Şehirler arası (500km): 15.000-25.000 ₺

Teklif Alırken Dikkat Edilecekler:
1. Yazılı teklif isteyin
2. KDV dahil mi sorun
3. Ekstra ücretleri öğrenin
4. Sigorta kapsamını kontrol edin
5. İptal koşullarını sorun`
  },
  'esya-paketleme-teknikleri': {
    title: 'Profesyonel Eşya Paketleme Teknikleri',
    date: '2024-12-10',
    readTime: '8 dk',
    category: 'Rehber',
    content: `Doğru paketleme teknikleri, eşyalarınızın taşınma sırasında hasar görmesini önler. İşte profesyonellerin kullandığı teknikler:

Gerekli Malzemeler:

Temel Malzemeler:
• Farklı boyutlarda koliler
• Güçlü koli bandı
• Kabarcıklı naylon
• Paketleme kağıdı
• Köpük dolgular
• Etiketler ve kalıcı kalem

Özel Malzemeler:
• Gardırop kolisi (kıyafetler için)
• Tabak ayırıcıları
• Çerçeve koruyucuları
• Yatak poşetleri

Oda Bazında Paketleme:

MUTFAK (En zor alan):
• Tabaklar: Dikey olarak, aralarına kağıt koyarak
• Bardaklar: Her birini ayrı ayrı sarın
• Tencereler: İç içe koyun, araya kağıt yerleştirin
• Bıçaklar: Karton kılıf yapın

YATAK ODASI:
• Kıyafetler: Gardırop kolisinde askıda
• Yatak: Yatak poşeti ile sarın
• Aynalar: Çapraz bant + köpük koruma

OTURMA ODASI:
• TV: Orijinal kutusu varsa kullanın
• Kitaplar: Küçük kolilere yatay olarak
• Dekoratif eşyalar: Kabarcıklı naylonla sarın

Paketleme Teknikleri:

Sarma Tekniği:
1. Eşyayı kağıt/naylonun ortasına koyun
2. Köşelerden içe doğru katlayın
3. Rulo yaparak sarın
4. Bantla sabitleyin

Koli Doldurma:
1. Alt: Ağır eşyalar
2. Orta: Orta ağırlık
3. Üst: Hafif eşyalar
4. Boşluklar: Kağıt veya köpükle doldurun

Yapmayın:
• Kolileri aşırı doldurmak
• Ağır eşyaları büyük kolilere koymak
• Etiketlemeyi atlamak

Yapın:
• Kolileri 20-25 kg ile sınırlayın
• Her koliyi test edin (sallayın)
• Fotoğraf çekin
• Değerli eşyaları kendiniz taşıyın`
  }
};

export default async function BlogDetay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const yazi = blogIcerikleri[slug];

  if (!yazi) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
            <Link href="/blog" className="text-blue-600 hover:underline">
              Blog&apos;a dön
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[
            { label: 'Blog', href: '/blog' },
            { label: yazi.title }
          ]} />

          {/* Ad Banner */}
          <div className="mb-6">
            <AdBanner size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article */}
            <article className="lg:col-span-2">
              <div className="card p-8">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">{yazi.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(yazi.date).toLocaleDateString('tr-TR')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {yazi.readTime} okuma
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-gray-900 mb-6">{yazi.title}</h1>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  {yazi.content.split('\n\n').map((paragraph, i) => {
                    if (paragraph.includes(':') && paragraph.split(':')[0].length < 50 && !paragraph.startsWith('•')) {
                      const [title, ...rest] = paragraph.split(':');
                      if (rest.length === 0 || rest.join(':').trim() === '') {
                        return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4">{title}</h2>;
                      }
                    }
                    if (paragraph.startsWith('•')) {
                      const items = paragraph.split('\n').filter(line => line.startsWith('•'));
                      return (
                        <ul key={i} className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                          {items.map((item, j) => (
                            <li key={j}>{item.replace('• ', '')}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (/^\d\./.test(paragraph)) {
                      return <p key={i} className="font-semibold text-gray-800 mt-6 mb-2">{paragraph}</p>;
                    }
                    return <p key={i} className="text-gray-600 mb-4 leading-relaxed">{paragraph}</p>;
                  })}
                </div>

                {/* Share */}
                <div className="mt-8 pt-6 border-t flex items-center justify-between">
                  <p className="text-sm text-gray-500">Bu yazıyı faydalı buldunuz mu?</p>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Share2 size={18} />
                    Paylaş
                  </button>
                </div>
              </div>

              {/* Related CTA */}
              <div className="mt-6 card p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h3 className="font-bold text-lg mb-2">Profesyonel Belgeler Oluşturun</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Nakliyat sözleşmesi, teklif mektubu ve makbuz oluşturmak için araçlarımızı kullanın.
                </p>
                <div className="flex gap-3">
                  <Link href="/sozlesme" className="btn bg-yellow-500 hover:bg-yellow-400 text-gray-900 text-sm py-2">
                    <FileText size={16} />
                    Sözleşme Oluştur
                  </Link>
                  <Link href="/teklif" className="btn bg-white/20 hover:bg-white/30 text-white border border-white/50 text-sm py-2">
                    Teklif Hazırla
                  </Link>
                </div>
              </div>
            </article>

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
