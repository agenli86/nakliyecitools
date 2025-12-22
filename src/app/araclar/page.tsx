'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import AdBanner from '@/components/AdBanner';
import { 
  Wrench, 
  Box, 
  Calculator, 
  Truck, 
  Package,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// M³ Hesaplama
function MetrekupHesaplama() {
  const [items, setItems] = useState([
    { id: 1, ad: '', en: '', boy: '', yukseklik: '', adet: 1 }
  ]);

  const addItem = () => {
    setItems([...items, { id: Date.now(), ad: '', en: '', boy: '', yukseklik: '', adet: 1 }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: string, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const en = parseFloat(item.en) || 0;
      const boy = parseFloat(item.boy) || 0;
      const yukseklik = parseFloat(item.yukseklik) || 0;
      const adet = item.adet || 1;
      return total + ((en * boy * yukseklik) / 1000000) * adet;
    }, 0);
  };

  const getAracOnerisi = (hacim: number) => {
    if (hacim <= 5) return { arac: 'Minivan / Panelvan', renk: 'bg-green-100 text-green-700' };
    if (hacim <= 15) return { arac: 'Kamyonet', renk: 'bg-blue-100 text-blue-700' };
    if (hacim <= 35) return { arac: 'Küçük Kamyon', renk: 'bg-yellow-100 text-yellow-700' };
    return { arac: 'Büyük Kamyon / TIR', renk: 'bg-red-100 text-red-700' };
  };

  const oneri = getAracOnerisi(calculateTotal());

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Eşyalarınızın toplam hacmini hesaplayın (cm cinsinden girin)</p>
      
      {items.map((item, index) => (
        <div key={item.id} className="p-4 bg-gray-50 rounded-lg border">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-gray-700">Eşya {index + 1}</span>
            {items.length > 1 && (
              <button onClick={() => removeItem(item.id)} className="text-red-500 text-sm hover:text-red-700">Sil</button>
            )}
          </div>
          <div className="grid grid-cols-5 gap-2">
            <input
              type="text"
              placeholder="Eşya Adı"
              value={item.ad}
              onChange={(e) => updateItem(item.id, 'ad', e.target.value)}
              className="form-input text-sm"
            />
            <input
              type="number"
              placeholder="En (cm)"
              value={item.en}
              onChange={(e) => updateItem(item.id, 'en', e.target.value)}
              className="form-input text-sm"
            />
            <input
              type="number"
              placeholder="Boy (cm)"
              value={item.boy}
              onChange={(e) => updateItem(item.id, 'boy', e.target.value)}
              className="form-input text-sm"
            />
            <input
              type="number"
              placeholder="Yük. (cm)"
              value={item.yukseklik}
              onChange={(e) => updateItem(item.id, 'yukseklik', e.target.value)}
              className="form-input text-sm"
            />
            <input
              type="number"
              placeholder="Adet"
              value={item.adet}
              onChange={(e) => updateItem(item.id, 'adet', parseInt(e.target.value) || 1)}
              className="form-input text-sm"
              min="1"
            />
          </div>
        </div>
      ))}
      
      <button onClick={addItem} className="btn btn-outline text-sm py-2">+ Eşya Ekle</button>
      
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-2xl font-bold text-blue-700">
          Toplam Hacim: {calculateTotal().toFixed(2)} m³
        </p>
        <p className={`text-sm mt-2 inline-block px-3 py-1 rounded-full font-medium ${oneri.renk}`}>
          Önerilen Araç: {oneri.arac}
        </p>
      </div>
    </div>
  );
}

// KDV Hesaplama
function KDVHesaplama() {
  const [tutar, setTutar] = useState('');
  const [kdvOrani, setKdvOrani] = useState('20');
  const [kdvDahil, setKdvDahil] = useState(false);

  const hesapla = () => {
    const tutarNum = parseFloat(tutar) || 0;
    const oran = parseFloat(kdvOrani) / 100;

    if (kdvDahil) {
      const kdvsiz = tutarNum / (1 + oran);
      const kdv = tutarNum - kdvsiz;
      return { kdvsiz, kdv, toplam: tutarNum };
    } else {
      const kdv = tutarNum * oran;
      return { kdvsiz: tutarNum, kdv, toplam: tutarNum + kdv };
    }
  };

  const sonuc = hesapla();

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">KDV hesaplaması yapın</p>
      
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="form-label">Tutar (₺)</label>
          <input
            type="number"
            value={tutar}
            onChange={(e) => setTutar(e.target.value)}
            className="form-input"
            placeholder="0.00"
          />
        </div>
        <div>
          <label className="form-label">KDV Oranı</label>
          <select value={kdvOrani} onChange={(e) => setKdvOrani(e.target.value)} className="form-input">
            <option value="1">%1</option>
            <option value="10">%10</option>
            <option value="20">%20</option>
          </select>
        </div>
        <div className="flex items-end pb-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={kdvDahil}
              onChange={(e) => setKdvDahil(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded"
            />
            <span className="text-sm text-gray-700">KDV Dahil mi?</span>
          </label>
        </div>
      </div>
      
      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">KDV Hariç:</span>
          <span className="font-medium text-gray-900">{sonuc.kdvsiz.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">KDV (%{kdvOrani}):</span>
          <span className="font-medium text-gray-900">{sonuc.kdv.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-blue-700 pt-2 border-t border-yellow-200">
          <span>Toplam:</span>
          <span>{sonuc.toplam.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} ₺</span>
        </div>
      </div>
    </div>
  );
}

// Araç Kapasitesi
function AracKapasitesi() {
  const araclar = [
    { ad: 'Minivan / Panelvan', hacim: '3-5 m³', agirlik: '500-800 kg', aciklama: '1+1, bekâr evi', renk: 'bg-green-50 border-green-200' },
    { ad: 'Küçük Kamyonet', hacim: '8-12 m³', agirlik: '1-2 ton', aciklama: '2+1 daire', renk: 'bg-blue-50 border-blue-200' },
    { ad: 'Orta Kamyonet', hacim: '15-20 m³', agirlik: '2-3 ton', aciklama: '3+1 daire', renk: 'bg-yellow-50 border-yellow-200' },
    { ad: 'Büyük Kamyon', hacim: '30-40 m³', agirlik: '5-8 ton', aciklama: '4+1 veya dublex', renk: 'bg-orange-50 border-orange-200' },
    { ad: 'TIR', hacim: '80-100 m³', agirlik: '20-25 ton', aciklama: 'Villa, fabrika', renk: 'bg-red-50 border-red-200' },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Hangi araç size uygun?</p>
      
      <div className="space-y-2">
        {araclar.map((arac, i) => (
          <div key={i} className={`p-4 rounded-lg border ${arac.renk}`}>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-900">{arac.ad}</p>
                <p className="text-sm text-gray-600">{arac.aciklama}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{arac.hacim}</p>
                <p className="text-xs text-gray-500">{arac.agirlik}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Taşıma Checklist
function TasimaChecklist() {
  const [items, setItems] = useState([
    { id: 1, text: 'Taşıma tarihi belirlendi', done: false },
    { id: 2, text: 'Nakliye firması ile anlaşıldı', done: false },
    { id: 3, text: 'Kapora ödendi', done: false },
    { id: 4, text: 'Eşya listesi hazırlandı', done: false },
    { id: 5, text: 'Kırılacak eşyalar işaretlendi', done: false },
    { id: 6, text: 'Paketleme malzemeleri alındı', done: false },
    { id: 7, text: 'Elektrik/su/doğalgaz kapatıldı', done: false },
    { id: 8, text: 'Yeni eve anahtar alındı', done: false },
    { id: 9, text: 'Adres değişikliği yapıldı', done: false },
    { id: 10, text: 'Komşulara haber verildi', done: false },
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const tamamlanan = items.filter(i => i.done).length;
  const yuzde = (tamamlanan / items.length) * 100;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-600">Taşınma hazırlık listesi</p>
        <span className="font-semibold text-blue-600">{tamamlanan}/{items.length}</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${yuzde}%` }}
        />
      </div>
      
      <div className="space-y-2 max-h-[350px] overflow-y-auto">
        {items.map(item => (
          <label key={item.id} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors border ${item.done ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleItem(item.id)}
              className="w-5 h-5 text-blue-600 rounded"
            />
            <span className={`${item.done ? 'line-through text-gray-400' : 'text-gray-700'}`}>{item.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

// Tool Card
function ToolCard({ 
  icon: Icon, 
  title, 
  color, 
  children,
  defaultOpen = false
}: { 
  icon: React.ElementType; 
  title: string; 
  color: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center`}>
            <Icon size={20} className="text-white" />
          </div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 border-t animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function AraclarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <Breadcrumb items={[{ label: 'Araçlar' }]} />
          
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Wrench className="text-blue-600" />
              Yararlı Araçlar
            </h1>
            <p className="text-gray-600 mt-1">Nakliyeciler için hesaplama ve yardımcı araçlar</p>
          </div>

          {/* Ad Banner */}
          <div className="mb-6">
            <AdBanner size="leaderboard" />
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <ToolCard icon={Box} title="M³ (Metreküp) Hesaplama" color="bg-blue-500" defaultOpen={true}>
                <MetrekupHesaplama />
              </ToolCard>

              <ToolCard icon={Calculator} title="KDV Hesaplama" color="bg-yellow-500">
                <KDVHesaplama />
              </ToolCard>
            </div>

            <div className="space-y-4">
              <ToolCard icon={Truck} title="Araç Kapasiteleri" color="bg-green-500">
                <AracKapasitesi />
              </ToolCard>

              <ToolCard icon={Package} title="Taşınma Checklist" color="bg-purple-500">
                <TasimaChecklist />
              </ToolCard>

              {/* Ad */}
              <div className="flex justify-center">
                <AdBanner size="rectangle" />
              </div>
            </div>
          </div>

          {/* Bottom Ad */}
          <div className="mt-8 flex justify-center">
            <AdBanner size="leaderboard" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
