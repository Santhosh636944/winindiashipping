import React from 'react';

interface WinindiaLogoProps {
  className?: string;
  layout?: 'stacked' | 'horizontal' | 'emblem';
  textColor?: string;
  accentColor?: string;
}

export default function WinindiaLogo({
  className = "h-12",
  layout = "horizontal",
  textColor = "text-white",
  accentColor = "#C8A96B" // Official Premium Gold Color
}: WinindiaLogoProps) {
  
  // Render only the Emblem as a PNG image for easy custom replacement
  const renderEmblem = (sizeClass = "w-16 h-16") => (
    <img
      src="/logo.png"
      alt="WININDIA Logo"
      className={`${sizeClass} object-contain shrink-0`}
      referrerPolicy="no-referrer"
    />
  );

  if (layout === "emblem") {
    return renderEmblem(className);
  }

  if (layout === "horizontal") {
    return (
      <div className={`flex items-center gap-2 sm:gap-3.5 ${className}`}>
        {/* Emblem */}
        {renderEmblem("w-9 h-9 sm:w-12 sm:h-12")}
        
        {/* Text Brand Identity */}
        <div className="flex flex-col items-start text-left">
          <span className="font-serif font-semibold text-sm sm:text-lg tracking-[0.06em] leading-none text-white">
            WININDIA
          </span>
          <span className="text-[7.5px] sm:text-[9px] font-sans font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[#C8A96B] mt-0.5 sm:mt-1 leading-none whitespace-nowrap">
            SHIPPING & LOGISTICS
          </span>
          <span className="hidden sm:block text-[7px] font-serif italic text-white/50 mt-0.5 tracking-wide leading-none">
            Beyond Borders, Beyond Expectations
          </span>
        </div>
      </div>
    );
  }

  // Stacked layout (ideal for footers, massive hero profiles, and standalone showcase branding)
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Large Emblem */}
      {renderEmblem("w-24 h-24")}
      
      {/* Text Brand Identity */}
      <div className="flex flex-col items-center mt-3">
        <h3 className="font-serif font-semibold text-2xl tracking-[0.1em] text-white leading-none">
          WININDIA
        </h3>
        <p className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-[#C8A96B] mt-2 leading-none whitespace-nowrap">
          SHIPPING & LOGISTICS
        </p>
        <p className="text-[9px] font-serif italic text-white/50 mt-1.5 tracking-widest leading-none">
          Beyond Borders, Beyond Expectations
        </p>
      </div>
    </div>
  );
}
