import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

interface MuralKitProps {
  logoSvg: string;
  brandmarkSvg: string;
  brandkitUrl: string;
  onCopyLogo?: () => void;
  onCopyBrandmark?: () => void;
  onDownloadBrandkit?: () => void;
  children?: ReactNode;
}

const CodeXmlIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 13.3333L18.3333 10L15 6.66668M5 6.66668L1.66666 10L5 13.3333M12.0833 3.33334L7.91666 16.6667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const DownloadIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5M5.83333 8.33333L10 12.5M10 12.5L14.1667 8.33333M10 12.5V2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const MenuItem: React.FC<{
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  isFirst?: boolean;
}> = ({ icon, text, onClick, isFirst }) => (
  <button
    className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 ${
      isFirst ? 'rounded-t-md' : ''
    }`}
    onClick={onClick}
  >
    <span className="text-gray-400 mr-3 flex items-center justify-center">{icon}</span>
    <span className="text-gray-400 text-[16px]">{text}</span>
  </button>
);

const MuralKit: React.FC<MuralKitProps> = ({
  logoSvg,
  brandmarkSvg,
  brandkitUrl,
  onCopyLogo,
  onCopyBrandmark,
  onDownloadBrandkit,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    setPosition({ x, y });
    setIsOpen(true);
  };

  const copyToClipboard = async (svg: string, message: string) => {
    try {
      await navigator.clipboard.writeText(svg);
      toast.success(message);
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const handleCopyLogo = () => {
    copyToClipboard(logoSvg, 'Logo copied to clipboard');
    onCopyLogo?.();
    setIsOpen(false);
  };

  const handleCopyBrandmark = () => {
    copyToClipboard(brandmarkSvg, 'Brandmark copied to clipboard');
    onCopyBrandmark?.();
    setIsOpen(false);
  };

  const handleDownloadBrandkit = () => {
    window.open(brandkitUrl, '_blank');
    onDownloadBrandkit?.();
    setIsOpen(false);
  };

  const BrandmarkIcon = () => {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(brandmarkSvg, 'image/svg+xml');
    const svgElement = svgDoc.documentElement;

    // Set width and height
    svgElement.setAttribute('width', '20');
    svgElement.setAttribute('height', '20');

    // Remove any fill attributes and set stroke
    const elementsWithStrokeOrFill = svgElement.querySelectorAll('[stroke], [fill]');
    elementsWithStrokeOrFill.forEach(el => {
      el.removeAttribute('fill');
      el.setAttribute('stroke', 'currentColor');
      el.setAttribute('fill', 'none');
    });

    // If there are no stroke or fill attributes, add them to the SVG element itself
    if (elementsWithStrokeOrFill.length === 0) {
      svgElement.setAttribute('stroke', 'currentColor');
      svgElement.setAttribute('fill', 'none');
    }

    const modifiedSvg = svgElement.outerHTML;

    return (
      <span 
        className="inline-block w-5 h-5 text-gray-400"
        dangerouslySetInnerHTML={{ __html: modifiedSvg }}
      />
    );
  };

  return (
    <div className="relative w-full h-full" onContextMenu={handleContextMenu}>
      {children}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed w-64 bg-white rounded-md shadow-lg z-10 border border-gray-100 overflow-hidden"
          style={{
            left: `${Math.min(position.x, window.innerWidth - 268)}px`,
            top: `${Math.min(position.y, window.innerHeight - 150)}px`,
            boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.02), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
          }}
        >
          <MenuItem
            icon={<CodeXmlIcon />}
            text="Copy logo as SVG"
            onClick={handleCopyLogo}
            isFirst={true}
          />
          <MenuItem
            icon={<BrandmarkIcon />}
            text="Copy brandmark as SVG"
            onClick={handleCopyBrandmark}
          />
          <MenuItem
            icon={<DownloadIcon />}
            text="Download BrandKit"
            onClick={handleDownloadBrandkit}
          />
        </div>
      )}
    </div>
  );
};

export default MuralKit;