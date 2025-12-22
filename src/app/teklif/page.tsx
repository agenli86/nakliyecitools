'use client';

import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import LogoUpload from '@/components/LogoUpload';
import { Download, Printer, FileCheck, Building2, User, Plus, Trash2, Calendar } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface HizmetKalemi {
  id: string;
  aciklama: string;
  miktar: number;
  birim: string;
  birimFiyat: number;
}

export default function TeklifPage() {
  const [logo, setLogo] = useState<string | null>(null);
  const [firmaAdi, setFirmaAdi] = useState('');
  const [firmaAdres, setFirmaAdres] = useState('');
  const [firmaTelefon, setFirmaTelefon] = useState('');
  const [firmaEmail, setFirmaEmail] = useState('');
  const [firmaVergiNo, setFirmaVergiNo] = useState('');
  const [musteriAdi, setMusteriAdi] = useState('');
  const [musteriTelefon, setMusteriTelefon] = useState('');
  const [musteriEmail, setMusteriEmail] = useState('');
  const [musteriAdres, setMusteriAdres] = useState('');
  const [teklifNo] = useState(`TKL-${Date.now().toString().slice(-6)}`);
  const [teslimAlmaTarihi, setTeslimAlmaTarihi] = useState('');
  const [teslimEtmeTarihi, setTeslimEtmeTarihi] = useState('');
  const [gecerlilikSuresi, setGecerlilikSuresi] = useState('15');
  const [kdvOrani, setKdvOrani] = useState(20);
  const [notlar, setNotlar] = useState(`• Fiyatlarımız TL bazındadır.
• Teklif geçerlilik süresi içinde kabul edilmelidir.
• Ödeme koşulları: %50 kapora, kalan iş bitiminde.
• Taşıma sigortası dahildir.`);
  
  const [hizmetler, setHizmetler] = useState<HizmetKalemi[]>([
    { id: '1', aciklama: 'Evden eve nakliye hizmeti', miktar: 1, birim: 'Adet', birimFiyat: 0 },
  ]);
  
  const printRef = useRef<HTMLDivElement>(null);

  const handleHizmetChange = (id: string, field: keyof HizmetKalemi, value: string | number) => {
    setHizmetler(prev => prev.map(h => {
      if (h.id === id) {
        if (field === 'miktar' || field === 'birimFiyat') {
          return { ...h, [field]: Number(value) || 0 };
        }
        return { ...h, [field]: value };
      }
      return h;
    }));
  };

  const addHizmet = () => {
    setHizmetler(prev => [...prev, { id: Date.now().toString(), aciklama: '', miktar: 1, birim: 'Adet', birimFiyat: 0 }]);
  };

  const removeHizmet = (id: string) => {
    if (hizmetler.length > 1) setHizmetler(prev => prev.filter(h => h.id !== id));
  };

  const formatCurrency = (value: number) => value.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formatDate = (dateStr: string) => dateStr ? new Date(dateStr).toLocaleDateString('tr-TR') : '-';

  const araToplam = hizmetler.reduce((sum, h) => sum + (h.miktar * h.birimFiyat), 0);
  const kdvTutar = araToplam * (kdvOrani / 100);
  const genelToplam = araToplam + kdvTutar;

  const handlePrint = () => window.print();

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    const canvas = await html2canvas(printRef.current, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`teklif-${teklifNo}.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Teklif Mektubu' }]} />
          
          <div className="mb-6 no-print">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FileCheck className="text-green-600" />
              Teklif Mektubu Oluştur
            </h1>
            <p className="text-gray-600 mt-1">Profesyonel teklif mektubu hazırlayın</p>
          </div>

          <div className="mb-6 no-print">
            <AdBanner size="leaderboard" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-4 no-print">
              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 size={18} className="text-green-600" />
                  Firma Logosu
                </h3>
                <LogoUpload logo={logo} onLogoChange={setLogo} />
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 size={18} className="text-green-600" />
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
                  <div>
                    <label className="form-label">E-posta</label>
                    <input type="email" value={firmaEmail} onChange={(e) => setFirmaEmail(e.target.value)} className="form-input" placeholder="E-posta" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <User size={18} className="text-green-600" />
                  Müşteri Bilgileri
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="form-label">Ad Soyad / Firma *</label>
                    <input type="text" value={musteriAdi} onChange={(e) => setMusteriAdi(e.target.value)} className="form-input" placeholder="Müşteri" />
                  </div>
                  <div>
                    <label className="form-label">Telefon</label>
                    <input type="tel" value={musteriTelefon} onChange={(e) => setMusteriTelefon(e.target.value)} className="form-input" placeholder="Telefon" />
                  </div>
                  <div>
                    <label className="form-label">E-posta</label>
                    <input type="email" value={musteriEmail} onChange={(e) => setMusteriEmail(e.target.value)} className="form-input" placeholder="E-posta" />
                  </div>
                  <div>
                    <label className="form-label">Adres</label>
                    <input type="text" value={musteriAdres} onChange={(e) => setMusteriAdres(e.target.value)} className="form-input" placeholder="Adres" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar size={18} className="text-green-600" />
                  Tarih Bilgileri
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="form-label">Teslim Alma</label>
                    <input type="date" value={teslimAlmaTarihi} onChange={(e) => setTeslimAlmaTarihi(e.target.value)} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Teslim Etme</label>
                    <input type="date" value={teslimEtmeTarihi} onChange={(e) => setTeslimEtmeTarihi(e.target.value)} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">Geçerlilik (Gün)</label>
                    <input type="number" value={gecerlilikSuresi} onChange={(e) => setGecerlilikSuresi(e.target.value)} className="form-input" min="1" />
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">Hizmet Kalemleri</h3>
                  <button onClick={addHizmet} className="btn btn-success text-sm py-1.5 px-3">
                    <Plus size={16} />
                    Ekle
                  </button>
                </div>
                
                <div className="space-y-3">
                  {hizmetler.map((hizmet, index) => (
                    <div key={hizmet.id} className="p-3 bg-gray-50 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Kalem {index + 1}</span>
                        {hizmetler.length > 1 && (
                          <button onClick={() => removeHizmet(hizmet.id)} className="text-red-500 hover:text-red-700 p-1">
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-5">
                          <input type="text" value={hizmet.aciklama} onChange={(e) => handleHizmetChange(hizmet.id, 'aciklama', e.target.value)} className="form-input text-sm" placeholder="Açıklama" />
                        </div>
                        <div className="col-span-2">
                          <input type="number" value={hizmet.miktar || ''} onChange={(e) => handleHizmetChange(hizmet.id, 'miktar', e.target.value)} className="form-input text-sm text-center" placeholder="Miktar" min="1" />
                        </div>
                        <div className="col-span-2">
                          <select value={hizmet.birim} onChange={(e) => handleHizmetChange(hizmet.id, 'birim', e.target.value)} className="form-input text-sm">
                            <option value="Adet">Adet</option>
                            <option value="Saat">Saat</option>
                            <option value="Gün">Gün</option>
                            <option value="m³">m³</option>
                            <option value="Sefer">Sefer</option>
                          </select>
                        </div>
                        <div className="col-span-3">
                          <input type="number" value={hizmet.birimFiyat || ''} onChange={(e) => handleHizmetChange(hizmet.id, 'birimFiyat', e.target.value)} className="form-input text-sm" placeholder="Birim Fiyat ₺" min="0" />
                        </div>
                      </div>
                      <div className="mt-2 text-right text-sm text-gray-600">
                        Tutar: <span className="font-semibold text-gray-900">{formatCurrency(hizmet.miktar * hizmet.birimFiyat)} ₺</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <label className="form-label mb-0">KDV Oranı:</label>
                  <select value={kdvOrani} onChange={(e) => setKdvOrani(Number(e.target.value))} className="form-input w-32">
                    <option value={0}>KDV Hariç</option>
                    <option value={1}>%1</option>
                    <option value={10}>%10</option>
                    <option value={20}>%20</option>
                  </select>
                </div>

                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ara Toplam:</span>
                      <span className="font-medium text-gray-900">{formatCurrency(araToplam)} ₺</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">KDV (%{kdvOrani}):</span>
                      <span className="font-medium text-gray-900">{formatCurrency(kdvTutar)} ₺</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-green-700 pt-2 border-t border-green-200">
                      <span>Genel Toplam:</span>
                      <span>{formatCurrency(genelToplam)} ₺</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Notlar ve Koşullar</h3>
                <textarea value={notlar} onChange={(e) => setNotlar(e.target.value)} className="form-input min-h-[100px] text-sm" />
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
                  <div className="flex justify-between items-start pb-4 mb-4" style={{ borderBottom: '3px solid #22c55e' }}>
                    <div>
                      {logo ? (
                        <img src={logo} alt="Logo" className="h-14 object-contain mb-2" />
                      ) : (
                        <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-lg mb-2">
                          {firmaAdi ? firmaAdi.charAt(0).toUpperCase() : 'T'}
                        </div>
                      )}
                      <h2 className="text-base font-bold text-gray-900">{firmaAdi || 'Firma Adı'}</h2>
                      <p className="text-gray-600 text-xs">{firmaAdres}</p>
                      <p className="text-gray-600 text-xs">Tel: {firmaTelefon} | {firmaEmail}</p>
                      {firmaVergiNo && <p className="text-gray-600 text-xs">VKN: {firmaVergiNo}</p>}
                    </div>
                    <div className="text-right">
                      <h1 className="text-xl font-bold text-green-600">TEKLİF MEKTUBU</h1>
                      <p className="text-gray-600 text-xs mt-1">No: {teklifNo}</p>
                      <p className="text-gray-600 text-xs">Tarih: {new Date().toLocaleDateString('tr-TR')}</p>
                      <p className="text-gray-600 text-xs">Geçerlilik: {gecerlilikSuresi} gün</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-3 rounded bg-green-50">
                      <p className="font-bold text-gray-800 text-sm mb-1">Sayın: {musteriAdi || '-'}</p>
                      <p className="text-gray-600 text-xs">{musteriAdres}</p>
                      <p className="text-gray-600 text-xs">Tel: {musteriTelefon}</p>
                    </div>
                    <div className="p-3 rounded bg-green-50">
                      <p className="font-bold text-gray-800 text-xs mb-1">Tarih Bilgileri</p>
                      <p className="text-gray-600 text-xs">Teslim Alma: {formatDate(teslimAlmaTarihi)}</p>
                      <p className="text-gray-600 text-xs">Teslim Etme: {formatDate(teslimEtmeTarihi)}</p>
                    </div>
                  </div>

                  <table className="w-full mb-4" style={{ fontSize: '10px', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#22c55e', color: 'white' }}>
                        <th className="p-2 text-left border" style={{ width: '5%' }}>#</th>
                        <th className="p-2 text-left border">Açıklama</th>
                        <th className="p-2 text-center border" style={{ width: '15%' }}>Miktar</th>
                        <th className="p-2 text-right border" style={{ width: '18%' }}>Birim Fiyat</th>
                        <th className="p-2 text-right border" style={{ width: '18%' }}>Tutar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hizmetler.map((h, i) => (
                        <tr key={h.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                          <td className="p-2 border">{i + 1}</td>
                          <td className="p-2 border">{h.aciklama || '-'}</td>
                          <td className="p-2 text-center border">{h.miktar} {h.birim}</td>
                          <td className="p-2 text-right border">{formatCurrency(h.birimFiyat)} ₺</td>
                          <td className="p-2 text-right border font-medium">{formatCurrency(h.miktar * h.birimFiyat)} ₺</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={4} className="p-2 text-right border font-medium">Ara Toplam:</td>
                        <td className="p-2 text-right border font-medium">{formatCurrency(araToplam)} ₺</td>
                      </tr>
                      <tr>
                        <td colSpan={4} className="p-2 text-right border font-medium">KDV (%{kdvOrani}):</td>
                        <td className="p-2 text-right border font-medium">{formatCurrency(kdvTutar)} ₺</td>
                      </tr>
                      <tr style={{ background: '#f0fdf4' }}>
                        <td colSpan={4} className="p-2 text-right border font-bold text-green-700">GENEL TOPLAM:</td>
                        <td className="p-2 text-right border font-bold text-green-700">{formatCurrency(genelToplam)} ₺</td>
                      </tr>
                    </tfoot>
                  </table>

                  {notlar && (
                    <div className="p-3 rounded mb-4 bg-gray-50">
                      <p className="font-bold text-gray-800 text-xs mb-1">Notlar:</p>
                      <div className="text-gray-600 text-xs whitespace-pre-line">{notlar}</div>
                    </div>
                  )}

                  <div className="mt-8 text-right">
                    <p className="text-gray-600 text-xs mb-6">Saygılarımızla,</p>
                    <div className="inline-block text-center border-t border-gray-400 pt-2 min-w-[150px]">
                      <p className="font-bold text-sm">{firmaAdi || 'Firma'}</p>
                      <p className="text-gray-500 text-xs">Kaşe / İmza</p>
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
