'use client';

import { Upload, X, Image } from 'lucide-react';
import { useRef } from 'react';

interface LogoUploadProps {
  logo: string | null;
  onLogoChange: (logo: string | null) => void;
}

export default function LogoUpload({ logo, onLogoChange }: LogoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLogoChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLogoChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div
      className={`logo-upload ${logo ? 'has-logo' : ''}`}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      {logo ? (
        <div className="relative inline-block">
          <img
            src={logo}
            alt="Firma Logosu"
            className="max-h-24 max-w-full object-contain rounded"
          />
          <button
            onClick={handleRemove}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 text-[var(--text-muted)]">
          <div className="w-16 h-16 bg-[var(--border)] rounded-full flex items-center justify-center">
            <Image size={28} />
          </div>
          <div className="flex items-center gap-2">
            <Upload size={16} />
            <span className="text-sm font-medium">Logo Yükle</span>
          </div>
          <p className="text-xs">PNG, JPG veya SVG (max. 2MB)</p>
        </div>
      )}
    </div>
  );
}
