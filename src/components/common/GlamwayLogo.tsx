import React from 'react';

export interface GlamwayLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  alt?: string;
  priority?: boolean;
}

/**
 * Centralized Glamway Official Logo Component
 * 
 * Embeds the final, authoritative Glamway Beauty Salon metallic-gold logo with
 * crown, female profile, flowing hair, blush floral accent, and Charlotte, NC mark.
 * Respects Vite BASE_URL, supports light and dark background variants, and includes
 * responsive sizing presets.
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

  // Sizing presets strictly conforming to Section 6:
  // Desktop header: ~110-140px
  // Mobile header: ~85-105px
  // Footer: ~180-240px
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      // Mobile header or compact interfaces (~85-105px)
      sizeClasses = 'w-[88px] sm:w-[102px] max-w-full h-auto';
      break;
    case 'md':
      // Desktop header (~110-140px)
      sizeClasses = 'w-[110px] sm:w-[125px] md:w-[136px] max-w-full h-auto';
      break;
    case 'lg':
      // Footer & modal titles (~180-240px)
      sizeClasses = 'w-[180px] sm:w-[210px] md:w-[230px] max-w-full h-auto';
      break;
    case 'xl':
      // Showcase, About hero, splash branding (~280-340px)
      sizeClasses = 'w-[260px] sm:w-[320px] max-w-full h-auto';
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
