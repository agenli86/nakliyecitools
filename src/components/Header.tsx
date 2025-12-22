'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Truck, Menu, X } from 'lucide-react';
import { useState } from 'react';

const menuItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/sozlesme', label: 'Sözleşme' },
  { href: '/teklif', label: 'Teklif' },
  { href: '/makbuz', label: 'Makbuz' },
  { href: '/araclar', label: 'Araçlar' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Nakliyeci Araçları</h1>
              <p className="text-xs text-gray-500 -mt-0.5">Profesyonel Belgeler</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-700"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
