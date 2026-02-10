import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  title: string;
  currentPage: string;
  bgImage: string; // Made required for specific page customization
}

export default function BreadcrumbBanner({ 
  title, 
  currentPage, 
  bgImage 
}: BreadcrumbProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex items-center overflow-hidden">
      
      {/* BACKGROUND IMAGE WITH OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        {/* Gradient Overlay to ensure text readability while keeping it bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl">
          {/* TOP ACCENT */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-green-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
              Envopure Pest Control
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
            {title}
          </h1>

          {/* BREADCRUMB NAV */}
          <nav className="flex items-center gap-3 text-sm font-bold">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-400 hover:text-green-600 transition-colors"
            >
              <Home size={16} />
              HOME
            </Link>
            
            <ChevronRight size={14} className="text-gray-300" />
            
            <span className="text-blue-600 tracking-wide uppercase">
              {currentPage}
            </span>
          </nav>
        </div>
      </div>

      {/* DECORATIVE BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600" />
    </div>
  );
}