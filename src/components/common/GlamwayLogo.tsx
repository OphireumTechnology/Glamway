import React from 'react';

export interface GlamwayLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'header' | 'custom';
  alt?: string;
  priority?: boolean;
}

/**
 * Centralized Glamway Official Logo Component
 * 
 * Embeds the final, authoritative Glamway Beauty Salon metallic-gold logo with
 * crown, female profile, flowing hair, blush floral accent, and Charlotte, NC mark.
 * Respects Vite BASE_URL, supports light and dark background variants, and includes
 * responsive sizing presets conforming to the official display targets:
 * - Desktop: 64–72 px display height
 * - Tablet: 56–64 px display height
 * - Mobile: 48–56 px display height
 */
export const GlamwayLogo: React.FC<GlamwayLogoProps> = ({
  className = '',
  variant = 'auto',
  size = 'md',
  alt = 'The Glamway Beauty Salon - Charlotte, NC',
  priority = false
}) => {
  const logoPngUrl = `${import.meta.env.BASE_URL}branding/glamway-official-logo.png`;
  const logoWebpUrl = `${import.meta.env.BASE_URL}branding/glamway-official-logo.webp`;

  let sizeClasses = '';
  switch (size) {
    case 'header':
      // Header target: Mobile 48-56px, Tablet 56-64px, Desktop 64-72px
      sizeClasses = 'h-[50px] sm:h-[60px] lg:h-[68px] w-auto max-w-full';
      break;
    case 'sm':
      // Mobile header or compact interfaces (~48-54px height)
      sizeClasses = 'h-[48px] sm:h-[54px] w-auto max-w-full';
      break;
    case 'md':
      // Standard responsive presentation (fits header targets)
      sizeClasses = 'h-[52px] sm:h-[62px] lg:h-[70px] w-auto max-w-full';
      break;
    case 'lg':
      // Footer & modal titles (~80-110px height)
      sizeClasses = 'h-[80px] sm:h-[95px] lg:h-[110px] w-auto max-w-full';
      break;
    case 'xl':
      // Showcase, About hero, splash branding
      sizeClasses = 'h-[120px] sm:h-[150px] lg:h-[180px] w-auto max-w-full';
      break;
    case 'custom':
    default:
      sizeClasses = '';
      break;
  }

  // On deep espresso backgrounds (#3B2A28), wrap with a subtle Pearl Ivory backing surface
  // to ensure 100% contrast, legibility of plum text, and protection of metallic gold luster (Section 7).
  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center justify-center p-2.5 sm:p-3 bg-[#FFF9F4] border border-[#C6A667]/40 rounded-xs shadow-sm ${className}`}>
        <picture>
          <source srcSet={logoWebpUrl} type="image/webp" />
          <img
            src={logoPngUrl}
            alt={alt}
            className={`object-contain ${sizeClasses}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      </div>
    );
  }

  return (
    <picture className={`inline-block shrink-0 ${className}`}>
      <source srcSet={logoWebpUrl} type="image/webp" />
      <img
        src={logoPngUrl}
        alt={alt}
        className={`object-contain ${sizeClasses}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
};

export interface GlamwayCrownIconProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

/**
 * Simplified Crown Icon derived from the official Glamway logo (Section 3).
 * Ideal for buttons, badge headers, and compact account icons.
 */
export const GlamwayCrownIcon: React.FC<GlamwayCrownIconProps> = ({
  className = '',
  size = 32,
  alt = 'The Glamway Crown'
}) => {
  const iconUrl = `${import.meta.env.BASE_URL}branding/glamway-icon.png`;
  return (
    <img
      src={iconUrl}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain inline-block shrink-0 ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
};
