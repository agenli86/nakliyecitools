'use client';

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import LogoUpload from '@/components/LogoUpload';
import { Download, Printer, Save, FileText, Building2, User, MapPin, Banknote, Calendar } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const defaultSartlar = `1. Taşınacak eşyaların listesi sözleşme ekinde belirtilmiştir.
2. Kırılabilir ve değerli eşyalar müşteri tarafından önceden bildirilmelidir.
3. Taşıma sırasında oluşabilecek hasarlardan firma sorumludur.
4. Kapora iade edilmez. İptal durumunda %50 kesinti uygulanır.
5. Taşıma günü müşteri veya yetkili kişi hazır bulunmalıdır.`;

export default function SozlesmePage() {
  const [logo, setLogo] = useState<string | null>(null);
  const [firmaAdi, setFirmaAdi] = useState('');
  const [firmaAdres, setFirmaAdres] = useState('');
  const [firmaTelefon, setFirmaTelefon] = useState('');
  const [firmaEmail, setFirmaEmail] = useState('');
  const [firmaVergiNo, setFirmaVergiNo] = useState('');
  const [musteriAdi, setMusteriAdi] = useState('');
  const [musteriTelefon, setMusteriTelefon] = useState('');
  const [musteriEmail, setMusteriEmail] = useState('');
  const [musteriTCNo, setMusteriTCNo] = useState('');
  const [cikisAdres, setCikisAdres] = useState('');
  const [varisAdres, setVarisAdres] = useState('');
  const [teslimAlmaTarihi, setTeslimAlmaTarihi] = useState('');
  const [teslimAlmaSaati, setTeslimAlmaSaati] = useState('09:00');
  const [teslimEtmeTarihi, setTeslimEtmeTarihi] = useState('');
  const [teslimEtmeSaati, setTeslimEtmeSaati] = useState('18:00');
  const [toplamUcret, setToplamUcret] = useState('');
  const [kapora, setKapora] = useState('');
  const [odemeSekli, setOdemeSekli] = useState('nakit');
  const [ozelSartlar, setOzelSartlar] = useState(defaultSartlar);
  
  const printRef = useRef<HTMLDivElement>(null);
  const sozlesmeNo = `SZL-${Date.now().toString().slice(-8)}`;

  const formatCurrency = (value: string) => {
    const num = parseFloat(value);
    return isNaN(num) ? '0,00' : num.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '-';
    return new Date(dateStr).toLocaleDateString('tr-TR');
  };

  const kalanTutar = () => {
    const toplam = parseFloat(toplamUcret) || 0;
    const kaporaNum = parseFloat(kapora) || 0;
    return toplam - kaporaNum;
  };

  const handlePrint = () => window.print();

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    const canvas = await html2canvas(printRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`sozlesme-${musteriAdi || 'belge'}.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Sözleşme Oluştur' }]} />
          
          <div className="mb-6 no-print">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FileText className="text-blue-600" />
              Nakliye Sözleşmesi Oluştur
            </h1>
            <p className="text-gray-600 mt-1">Profesyonel nakliye sözleşmesi hazırlayın</p>
          </div>

          <div className="mb-6 no-print">
            <AdBanner size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-4 no-print">
              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 size={18} className="text-blue-600" />
                  Firma Logosu
                </h3>
                <LogoUpload logo={logo} onLogoChange={setLogo} />
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 size={18} className="text-blue-600" />
                  Firma Bilgileri
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="form-label">Firma Adı *</label>
                    <input type="text" value={firmaAdi} onChange={(e) => setFirmaAdi(e.target.value)} className="form-input" placeholder="Firma adı" />
                  </div>
                  <div>
                    <label className="form-label">Vergi No</label>
                    <input type="text" value={firmaVergiNo} onChange={(e) => setFirmaVergiNo(e.target.value)} className="form-input" placeholder="VKN" />
                  </div>
                  <div className="col-span-2">
                    <label className="form-label">Adres</label>
                    <input type="text" value={firmaAdres} onChange={(e) => setFirmaAdres(e.target.value)} className="form-input" placeholder="Adres" />
                  </div>
                  <div>
                    <label className="form-label">Telefon</label>
                    <input type="tel" value={firmaTelefon} onChange={(e) => setFirmaTelefon(e.target.value)} className="form-input" placeholder="0532 XXX XX XX" />
                  </div>
                  <div>
                    <label className="form-label">E-posta</label>
                    <input type="email" value={firmaEmail} onChange={(e) => setFirmaEmail(e.target.value)} className="form-input" placeholder="info@firma.com" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  Müşteri Bilgileri
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="form-label">Ad Soyad *</label>
                    <input type="text" value={musteriAdi} onChange={(e) => setMusteriAdi(e.target.value)} className="form-input" placeholder="Ad soyad" />
                  </div>
                  <div>
                    <label className="form-label">T.C. Kimlik No</label>
                    <input type="text" value={musteriTCNo} onChange={(e) => setMusteriTCNo(e.target.value)} className="form-input" placeholder="TC No" maxLength={11} />
                  </div>
                  <div>
                    <label className="form-label">Telefon *</label>
                    <input type="tel" value={musteriTelefon} onChange={(e) => setMusteriTelefon(e.target.value)} className="form-input" placeholder="Telefon" />
                  </div>
                  <div>
                    <label className="form-label">E-posta</label>
                    <input type="email" value={musteriEmail} onChange={(e) => setMusteriEmail(e.target.value)} className="form-input" placeholder="E-posta" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-blue-600" />
                  Taşıma Adresleri
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="form-label">Çıkış Adresi *</label>
                    <input type="text" value={cikisAdres} onChange={(e) => setCikisAdres(e.target.value)} className="form-input" placeholder="Eşyaların alınacağı adres" />
                  </div>
                  <div>
                    <label className="form-label">Varış Adresi *</label>
                    <input type="text" value={varisAdres} onChange={(e) => setVarisAdres(e.target.value)} className="form-input" placeholder="Eşyaların bırakılacağı adres" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" />
                  Tarih ve Saat
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="form-label">Teslim Alma Tarihi *</label>
                    <input type="date" value={teslimAlmaTarihi} onChange={(e) => setTeslimAlmaTarihi(e.target.value)} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Teslim Alma Saati</label>
                    <input type="time" value={teslimAlmaSaati} onChange={(e) => setTeslimAlmaSaati(e.target.value)} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Teslim Etme Tarihi</label>
                    <input type="date" value={teslimEtmeTarihi} onChange={(e) => setTeslimEtmeTarihi(e.target.value)} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Teslim Etme Saati</label>
                    <input type="time" value={teslimEtmeSaati} onChange={(e) => setTeslimEtmeSaati(e.target.value)} className="form-input" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Banknote size={18} className="text-blue-600" />
                  Ücret Bilgileri
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="form-label">Toplam Ücret (₺) *</label>
                    <input type="number" value={toplamUcret} onChange={(e) => setToplamUcret(e.target.value)} className="form-input" placeholder="0.00" />
                  </div>
                  <div>
                    <label className="form-label">Kapora (₺)</label>
                    <input type="number" value={kapora} onChange={(e) => setKapora(e.target.value)} className="form-input" placeholder="0.00" />
                  </div>
                  <div>
                    <label className="form-label">Ödeme Şekli</label>
                    <select value={odemeSekli} onChange={(e) => setOdemeSekli(e.target.value)} className="form-input">
                      <option value="nakit">Nakit</option>
                      <option value="havale">Havale/EFT</option>
                      <option value="kredikarti">Kredi Kartı</option>
                    </select>
                  </div>
                </div>
                {kapora && (
                  <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm font-medium text-yellow-800">Kalan Tutar: {formatCurrency(kalanTutar().toString())} ₺</p>
                  </div>
                )}
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Sözleşme Şartları</h3>
                <textarea value={ozelSartlar} onChange={(e) => setOzelSartlar(e.target.value)} className="form-input min-h-[120px] text-sm" />
              </div>

              <div className="flex gap-3">
                <button onClick={handleDownloadPDF} className="btn btn-primary">
                  <Download size={18} />
                  PDF İndir
                </button>
                <button onClick={handlePrint} className="btn btn-secondary">
                  <Printer size={18} />
                  Yazdır
                </button>
              </div>
            </div>

            {/* Preview */}
            <div className="lg:sticky lg:top-20 lg:self-start">
              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 no-print">Önizleme</h3>
                
                <div ref={printRef} className="print-area bg-white p-5 border rounded-lg" style={{ fontSize: '10px' }}>
                  <div className="flex justify-between items-start pb-3 mb-3" style={{ borderBottom: '3px solid #2563eb' }}>
                    <div>
                      {logo ? (
                        <img src={logo} alt="Logo" className="h-12 object-contain mb-2" />
                      ) : (
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg mb-2">
                          {firmaAdi ? firmaAdi.charAt(0).toUpperCase() : 'N'}
                        </div>
                      )}
                      <h2 className="text-sm font-bold text-gray-900">{firmaAdi || 'Firma Adı'}</h2>
                      <p className="text-gray-600">{firmaAdres}</p>
                      <p className="text-gray-600">Tel: {firmaTelefon}</p>
                    </div>
                    <div className="text-right">
                      <h1 className="text-lg font-bold text-blue-600">NAKLİYE SÖZLEŞMESİ</h1>
                      <p className="text-gray-600">Tarih: {new Date().toLocaleDateString('tr-TR')}</p>
                      <p className="text-gray-600">No: {sozlesmeNo}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-2 rounded bg-blue-50">
                      <p className="font-bold text-gray-800 mb-1 border-b border-blue-200 pb-1">NAKLİYECİ</p>
                      <p><strong>Firma:</strong> {firmaAdi || '-'}</p>
                      <p><strong>VKN:</strong> {firmaVergiNo || '-'}</p>
                      <p><strong>Tel:</strong> {firmaTelefon || '-'}</p>
                    </div>
                    <div className="p-2 rounded bg-blue-50">
                      <p className="font-bold text-gray-800 mb-1 border-b border-blue-200 pb-1">MÜŞTERİ</p>
                      <p><strong>Ad Soyad:</strong> {musteriAdi || '-'}</p>
                      <p><strong>T.C.:</strong> {musteriTCNo || '-'}</p>
                      <p><strong>Tel:</strong> {musteriTelefon || '-'}</p>
                    </div>
                  </div>

                  <div className="p-2 mb-3 border rounded">
                    <p className="font-bold text-gray-800 mb-1 border-b pb-1">TAŞIMA BİLGİLERİ</p>
                    <div className="grid grid-cols-2 gap-2">
                      <p><strong>Çıkış:</strong> {cikisAdres || '-'}</p>
                      <p><strong>Varış:</strong> {varisAdres || '-'}</p>
                      <p><strong>Teslim Alma:</strong> {formatDate(teslimAlmaTarihi)} {teslimAlmaSaati}</p>
                      <p><strong>Teslim Etme:</strong> {formatDate(teslimEtmeTarihi)} {teslimEtmeSaati}</p>
                    </div>
                  </div>

                  <div className="p-2 mb-3 rounded bg-yellow-50">
                    <p className="font-bold text-gray-800 mb-1 border-b border-yellow-200 pb-1">ÜCRET BİLGİLERİ</p>
                    <div className="grid grid-cols-2 gap-2">
                      <p><strong>Toplam:</strong> {formatCurrency(toplamUcret)} ₺</p>
                      <p><strong>Kapora:</strong> {formatCurrency(kapora)} ₺</p>
                      <p><strong>Kalan:</strong> {formatCurrency(kalanTutar().toString())} ₺</p>
                      <p><strong>Ödeme:</strong> {odemeSekli === 'nakit' ? 'Nakit' : odemeSekli === 'havale' ? 'Havale/EFT' : 'Kredi Kartı'}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="font-bold text-gray-800 mb-1 border-b pb-1">SÖZLEŞME ŞARTLARI</p>
                    <div className="whitespace-pre-line text-gray-700">{ozelSartlar}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mt-8 pt-3 border-t">
                    <div className="text-center">
                      <p className="font-bold text-gray-700 mb-10">NAKLİYECİ</p>
                      <div className="border-t border-gray-400 pt-1">
                        <p className="text-gray-600">{firmaAdi || 'Firma'}</p>
                        <p className="text-gray-500">İmza / Kaşe</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-700 mb-10">MÜŞTERİ</p>
                      <div className="border-t border-gray-400 pt-1">
                        <p className="text-gray-600">{musteriAdi || 'Ad Soyad'}</p>
                        <p className="text-gray-500">İmza</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center no-print">
            <AdBanner size="rectangle" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
