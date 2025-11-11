import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
  onNavigate: (path: string, hash?: string) => void;
}

export function Layout({ children, onNavigate }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="layout-container">
      <div className="layout-wrapper">
        <Header onNavigate={onNavigate} />
        {children}
        <Footer onNavigate={onNavigate} />
      </div>
    </div>
  );
}
