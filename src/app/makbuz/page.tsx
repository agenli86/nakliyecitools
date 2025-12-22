'use client';

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import LogoUpload from '@/components/LogoUpload';
import { Download, Printer, Receipt, Building2, User, Banknote } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const tutarYazi = (sayi: number): string => {
  const birler = ['', 'bir', 'iki', 'üç', 'dört', 'beş', 'altı', 'yedi', 'sekiz', 'dokuz'];
  const onlar = ['', 'on', 'yirmi', 'otuz', 'kırk', 'elli', 'altmış', 'yetmiş', 'seksen', 'doksan'];
  if (sayi === 0) return 'sıfır';
  if (sayi < 0) return 'eksi ' + tutarYazi(-sayi);
  let sonuc = '';
  if (sayi >= 1000000) {
    const milyon = Math.floor(sayi / 1000000);
    sonuc += (milyon === 1 ? '' : tutarYazi(milyon) + ' ') + 'milyon ';
    sayi %= 1000000;
  }
  if (sayi >= 1000) {
    const bin = Math.floor(sayi / 1000);
    sonuc += (bin === 1 ? '' : tutarYazi(bin) + ' ') + 'bin ';
    sayi %= 1000;
  }
  if (sayi >= 100) {
    const yuz = Math.floor(sayi / 100);
    sonuc += (yuz === 1 ? '' : birler[yuz] + ' ') + 'yüz ';
    sayi %= 100;
  }
  if (sayi >= 10) {
    sonuc += onlar[Math.floor(sayi / 10)] + ' ';
    sayi %= 10;
  }
  if (sayi > 0) sonuc += birler[sayi] + ' ';
  return sonuc.trim();
};

export default function MakbuzPage() {
  const [logo, setLogo] = useState<string | null>(null);
  const [firmaAdi, setFirmaAdi] = useState('');
  const [firmaAdres, setFirmaAdres] = useState('');
  const [firmaTelefon, setFirmaTelefon] = useState('');
  const [firmaVergiNo, setFirmaVergiNo] = useState('');
  const [musteriAdi, setMusteriAdi] = useState('');
  const [musteriTelefon, setMusteriTelefon] = useState('');
  const [musteriTCNo, setMusteriTCNo] = useState('');
  const [makbuzNo] = useState(`MKB-${Date.now().toString().slice(-8)}`);
  const [makbuzTuru, setMakbuzTuru] = useState('kapora');
  const [tutar, setTutar] = useState('');
  const [odemeSekli, setOdemeSekli] = useState('nakit');
  const [aciklama, setAciklama] = useState('');
  
  const printRef = useRef<HTMLDivElement>(null);

  const formatCurrency = (value: string) => {
    const num = parseFloat(value);
    return isNaN(num) ? '0,00' : num.toLocaleString('tr-TR', { minimumFractionDigits: 2 });
  };

  const getTutarYazi = () => {
    const tutarNum = parseFloat(tutar) || 0;
    const tamKisim = Math.floor(tutarNum);
    const kurusKisim = Math.round((tutarNum - tamKisim) * 100);
    let sonuc = tutarYazi(tamKisim) + ' Türk Lirası';
    if (kurusKisim > 0) sonuc += ' ' + tutarYazi(kurusKisim) + ' kuruş';
    return sonuc.charAt(0).toUpperCase() + sonuc.slice(1);
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
    pdf.save(`makbuz-${makbuzNo}.pdf`);
  };

  const getMakbuzTuruText = () => {
    switch (makbuzTuru) {
      case 'kapora': return 'KAPORA MAKBUZU';
      case 'odeme': return 'ÖDEME MAKBUZU';
      case 'tahsilat': return 'TAHSİLAT MAKBUZU';
      default: return 'MAKBUZ';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Makbuz Oluştur' }]} />
          
          <div className="mb-6 no-print">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Receipt className="text-orange-600" />
              Makbuz Oluştur
            </h1>
            <p className="text-gray-600 mt-1">Kapora veya ödeme makbuzu hazırlayın</p>
          </div>

          <div className="mb-6 no-print">
            <AdBanner size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-4 no-print">
              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 size={18} className="text-orange-600" />
                  Firma Logosu
                </h3>
                <LogoUpload logo={logo} onLogoChange={setLogo} />
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 size={18} className="text-orange-600" />
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
                    <input type="tel" value={firmaTelefon} onChange={(e) => setFirmaTelefon(e.target.value)} className="form-input" placeholder="Telefon" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <User size={18} className="text-orange-600" />
                  Ödeme Yapan Bilgileri
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
                    <label className="form-label">Telefon</label>
                    <input type="tel" value={musteriTelefon} onChange={(e) => setMusteriTelefon(e.target.value)} className="form-input" placeholder="Telefon" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Banknote size={18} className="text-orange-600" />
                  Makbuz Detayları
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="form-label">Makbuz No</label>
                    <input type="text" value={makbuzNo} readOnly className="form-input bg-gray-50" />
                  </div>
                  <div>
                    <label className="form-label">Makbuz Türü</label>
                    <select value={makbuzTuru} onChange={(e) => setMakbuzTuru(e.target.value)} className="form-input">
                      <option value="kapora">Kapora Makbuzu</option>
                      <option value="odeme">Ödeme Makbuzu</option>
                      <option value="tahsilat">Tahsilat Makbuzu</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Tutar (₺) *</label>
                    <input type="number" value={tutar} onChange={(e) => setTutar(e.target.value)} className="form-input" placeholder="0.00" min="0" />
                  </div>
                  <div>
                    <label className="form-label">Ödeme Şekli</label>
                    <select value={odemeSekli} onChange={(e) => setOdemeSekli(e.target.value)} className="form-input">
                      <option value="nakit">Nakit</option>
                      <option value="havale">Havale/EFT</option>
                      <option value="kredikarti">Kredi Kartı</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="form-label">Açıklama</label>
                    <textarea value={aciklama} onChange={(e) => setAciklama(e.target.value)} className="form-input min-h-[80px]" placeholder="Ödeme açıklaması" />
                  </div>
                </div>
                
                {tutar && (
                  <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-sm font-medium text-yellow-800">Yazı ile: {getTutarYazi()}</p>
                  </div>
                )}
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
                
                <div ref={printRef} className="print-area bg-white p-6 border rounded-lg" style={{ fontSize: '11px' }}>
                  <div className="text-center pb-4 mb-4" style={{ borderBottom: '3px solid #f97316' }}>
                    <div className="flex justify-center mb-3">
                      {logo ? (
                        <img src={logo} alt="Logo" className="h-14 object-contain" />
                      ) : (
                        <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-lg">
                          {firmaAdi ? firmaAdi.charAt(0).toUpperCase() : 'M'}
                        </div>
                      )}
                    </div>
                    <h1 className="text-xl font-bold text-orange-600">{getMakbuzTuruText()}</h1>
                    <p className="text-gray-600 text-xs mt-1">No: {makbuzNo} | Tarih: {new Date().toLocaleDateString('tr-TR')}</p>
                  </div>

                  <div className="mb-4 p-3 rounded bg-orange-50">
                    <h3 className="font-bold text-gray-800 text-sm">{firmaAdi || 'Firma Adı'}</h3>
                    <p className="text-gray-600 text-xs">{firmaAdres}</p>
                    <p className="text-gray-600 text-xs">Tel: {firmaTelefon} | VKN: {firmaVergiNo}</p>
                  </div>

                  <div className="mb-4 p-3 border-2 rounded border-orange-200">
                    <p className="font-bold text-gray-800 text-xs mb-2">ÖDEME YAPAN</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <p><strong>Ad Soyad:</strong> {musteriAdi || '-'}</p>
                      <p><strong>T.C. No:</strong> {musteriTCNo || '-'}</p>
                      <p><strong>Telefon:</strong> {musteriTelefon || '-'}</p>
                      <p><strong>Ödeme Şekli:</strong> {odemeSekli === 'nakit' ? 'Nakit' : odemeSekli === 'havale' ? 'Havale/EFT' : 'Kredi Kartı'}</p>
                    </div>
                  </div>

                  <div className="mb-4 p-5 rounded text-center bg-yellow-50 border-2 border-yellow-300">
                    <p className="text-gray-600 text-xs mb-1">Alınan Tutar</p>
                    <p className="text-3xl font-bold text-orange-600">{formatCurrency(tutar)} ₺</p>
                    <p className="text-gray-700 text-xs mt-2 italic">({getTutarYazi()})</p>
                  </div>

                  {aciklama && (
                    <div className="mb-4 p-3 rounded bg-gray-50">
                      <p className="font-bold text-gray-800 text-xs mb-1">Açıklama:</p>
                      <p className="text-gray-600 text-xs">{aciklama}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-8 mt-10 pt-4 border-t-2 border-gray-200">
                    <div className="text-center">
                      <p className="font-bold text-gray-700 text-xs mb-10">ÖDEME YAPAN</p>
                      <div className="border-t border-gray-400 pt-1">
                        <p className="text-gray-600 text-xs">{musteriAdi || 'Ad Soyad'}</p>
                        <p className="text-gray-500 text-xs">İmza</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-700 text-xs mb-10">TAHSİL EDEN</p>
                      <div className="border-t border-gray-400 pt-1">
                        <p className="text-gray-600 text-xs">{firmaAdi || 'Firma'}</p>
                        <p className="text-gray-500 text-xs">Kaşe / İmza</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 text-center text-xs text-gray-500 border-t">
                    <p>Bu makbuz iki nüsha olarak düzenlenmiştir.</p>
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
