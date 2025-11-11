import imgSept3CorporateLogoImg from "figma:asset/9906cc6bdd385df5fa11fcaed881d972152e3706.png";
import imgSept3TypographyImg from "figma:asset/d03c8f616b9db27e808ea003ce375eea78825e34.png";
import { Layout } from './components/Layout';

function HeroSection() {
  return (
    <div id="home_frame" className="hero-section">
      {/* Desktop/Tablet */}
      <div className="hero-desktop">
        <div className="hero-bg-image">
          <img alt="" className="hero-bg-img" src={imgSept3TypographyImg} />
        </div>
        <div className="hero-logo-container">
          <div className="hero-logo">
            <img alt="" className="hero-bg-img" src={imgSept3CorporateLogoImg} />
          </div>
        </div>
        <div className="hero-text-container">
          <div className="hero-text">
            <p className="mb-0">株式会社 sept.3 は、広告制作会社です。</p>
            <p className="mb-0">グラフィックデザインを中心に、</p>
            <p>さまざまな広告制作を行っています。</p>
          </div>
        </div>
      </div>

      {/* Mobile Only */}
      <div className="hero-mobile">
        <div className="hero-bg-image">
          <img alt="" className="hero-bg-img" src={imgSept3TypographyImg} />
        </div>
        <div className="hero-logo-container">
          <div className="hero-logo">
            <img alt="" className="hero-bg-img" src={imgSept3CorporateLogoImg} />
          </div>
        </div>
        <div className="hero-text-container">
          <div className="hero-text">
            <p className="mb-0">株式会社 sept.3 は、広告制作会社です。</p>
            <p className="mb-0">グラフィックデザインを中心に、</p>
            <p>さまざまな広告制作を行っています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div id="text2" className="about-section">
      <div className="about-inner">
        <div>
          <p className="about-title">
            ABOUT
          </p>
        </div>
        <div className="about-content">
          {/* Desktop/Tablet */}
          <div className="about-text-desktop">
            <p className="mb-0">株式会社 sept.3 は、</p>
            <p className="mb-0">商業広告制作への意志と技術を持ったデザイナーが集まり、</p>
            <p className="mb-0">アルティザンを目指して、2003年に設立されたデザインプロダクションです。</p>
            <p className="mb-0">ポスター、パンフレット、紙媒体を中心に、新聞、WEB、サイネージなど、</p>
            <p>幅広い広告制作を行っています。</p>
          </div>

          {/* Mobile */}
          <div className="about-text-mobile">
            <p className="mb-0">株式会社 sept.3 は、</p>
            <p className="mb-0">商業広告制作への意志と技術を持った</p>
            <p className="mb-0">デザイナーが集まり、</p>
            <p className="mb-0">アルティザンを目指して、2003年に設立された</p>
            <p className="mb-0">デザインプロダクションです。</p>
            <p className="mb-0">ポスター、パンフレット、紙媒体を</p>
            <p className="mb-0">中心に、新聞、WEB、サイネージなど、</p>
            <p>幅広い広告制作を行っています。</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanySection() {
  return (
    <div id="text4" className="company-section">
      <p className="company-title">
        COMPANY INFO
      </p>
      
      <div className="company-content">
        {/* Labels */}
        <div className="company-labels" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          <p className="mb-0">会社名 </p>
          <p className="mb-0">所在地 </p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0">設立</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">代表</p>
          <p className="mb-0">事業内容</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p>取引銀行 </p>
        </div>

        {/* Values */}
        <div className="company-values">
          {/* Desktop/Tablet */}
          <div className="company-values-desktop">
            <p className="mb-0">株式会社セプト・スリー</p>
            <p className="mb-0">大阪市北区芝田1-12-7 大栄ビル新館N1003</p>
            <p className="mb-0">2003年7月</p>
            <p className="mb-0">2006年9月 法人化</p>
            <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>代表取締役　鳥飼  久志</p>
            <p className="mb-0">商業広告企画・制作</p>
            <p className="mb-0">交通媒体ポスター、パンフレット、販促物のデザイン</p>
            <p className="mb-0">新聞、WEB、サイネージなどの広告企画・制作</p>
            <p>大阪���ティ信用金庫</p>
          </div>

          {/* Mobile */}
          <div className="company-values-mobile">
            <p className="mb-0">株式会社セプト・スリー</p>
            <p className="mb-0">大阪市北区芝田1-12-7 </p>
            <p className="mb-0">大栄ビル新館N1003</p>
            <p className="mb-0">2003年7月</p>
            <p className="mb-0">2006年9月 法人化</p>
            <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>代表取締役　鳥飼  久志</p>
            <p className="mb-0">商業広告企画・制作</p>
            <p className="mb-0">交通媒体ポスター、</p>
            <p className="mb-0">パンフレット、</p>
            <p className="mb-0">販促物のデザイン</p>
            <p className="mb-0">新聞、WEB、サイネージなどの広告企画・制作</p>
            <p>大阪シティ信用金庫</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index({ onNavigate }: { onNavigate: (path: string, hash?: string) => void }) {
  return (
    <Layout onNavigate={onNavigate}>
      <div className="main-content">
        <div className="main-inner">
          <HeroSection />
          <AboutSection />
          <CompanySection />
        </div>
      </div>
    </Layout>
  );
}
