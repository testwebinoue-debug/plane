import { useState } from 'react';

function HamburgerIcon() {
  return (
    <div className="hamburger-icon">
      <div className="hamburger-svg-wrapper">
        <svg className="hamburger-svg" fill="none" preserveAspectRatio="none" viewBox="0 0 60 21">
          <g id="Group 7">
            <path d="M0 0.5H60" id="Vector 1" stroke="var(--stroke-0, black)" />
            <path d="M10 10.5H60" id="Vector 2" stroke="var(--stroke-0, black)" />
            <path d="M20 20.5H60" id="Vector 3" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="close-icon">
      <div className="close-svg-wrapper">
        <svg className="close-svg" fill="none" preserveAspectRatio="none" viewBox="0 0 51 26">
          <g id="Group 9">
            <path d="M0.396484 0.544922L50.6035 25.4551" id="Vector 4" stroke="var(--stroke-0, black)" />
            <path d="M0.396484 25.4551L50.6035 0.544922" id="Vector 5" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface NavigationItem {
  label: string;
  path: string;
  hash: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'HOME', path: '/', hash: 'home_frame' },
  { label: 'ABOUT', path: '/', hash: 'text2' },
  { label: 'COMPANY INFO', path: '/', hash: 'text4' },
  { label: 'PHILOSOPHY', path: '/works', hash: 'philosophy_text' },
  { label: 'WORKS', path: '/works', hash: 'main_frame3-1_text' },
  { label: 'CONTACT', path: '/contact', hash: 'main_frame3-1_text' }
];

interface NavigationItemsProps {
  isMobile?: boolean;
  onNavigate: (path: string, hash?: string) => void;
}

export function NavigationItems({ isMobile = false, onNavigate }: NavigationItemsProps) {
  return (
    <>
      {navigationItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onNavigate(item.path, item.hash)}
          className="nav-item"
        >
          <p className={`nav-item-text ${isMobile ? 'mobile' : ''}`}>
            {item.label}
          </p>
        </button>
      ))}
    </>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string, hash?: string) => void;
}

function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const handleClick = (path: string, hash?: string) => {
    onClose();
    onNavigate(path, hash);
  };

  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-header">
        <div className="mobile-menu-header-inner">
          <div className="mobile-menu-header-content">
            <button 
              onClick={onClose}
              className="mobile-menu-close-button"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mobile-menu-nav">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.path, item.hash)}
            className="mobile-menu-nav-item"
          >
            <p className="nav-item-text">
              {item.label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

interface HeaderProps {
  onNavigate: (path: string, hash?: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <div className="header-desktop">
        <div className="header-desktop-inner">
          <NavigationItems onNavigate={onNavigate} />
        </div>
      </div>

      {/* Tablet/Mobile Header */}
      <div className={`header-mobile ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="header-mobile-inner">
          <div className="header-mobile-content">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header-mobile-button"
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={onNavigate} />
    </>
  );
}
