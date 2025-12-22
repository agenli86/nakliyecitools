import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-blue-600 -mx-4 px-4 py-3 mb-6 no-print">
      <div className="max-w-6xl mx-auto">
        <nav className="flex items-center justify-center gap-2 text-sm text-white">
          <Link href="/" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
            <Home size={16} />
            <span>Ana Sayfa</span>
          </Link>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-300" />
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-200 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="font-semibold">{item.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
