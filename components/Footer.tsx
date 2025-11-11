import { NavigationItems } from './Header';

interface FooterProps {
  onNavigate: (path: string, hash?: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <div id="footer_frame" className="footer-container">
      <div className="footer-inner">
        <div className="footer-content">
          {/* Footer Navigation */}
          <div className="footer-nav">
            <NavigationItems isMobile={true} onNavigate={onNavigate} />
          </div>

          {/* Footer Text */}
          <div className="footer-text-container">
            {/* Desktop/Tablet */}
            <div className="footer-text footer-text-desktop">
              <p className="mb-0">〒530-0012  大阪市北区芝田1-12-7 大栄ビル新館N1003 </p>
              <p className="mb-0">TEL.06-6376-0903  FAX.06-6376-0913</p>
              <p>Copyright sept.3 Inc. All Rights Reserved.</p>
            </div>

            {/* Mobile */}
            <div className="footer-text footer-text-mobile">
              <p className="mb-0">〒530-0012  大阪市北区芝田1-12-7</p>
              <p className="mb-0">大栄ビル新館N1003 </p>
              <p className="mb-0">TEL.06-6376-0903  FAX.06-6376-0913</p>
              <p>Copyright sept.3 Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
