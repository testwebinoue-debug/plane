import imgSept3TypographyImg from "figma:asset/4c7b9b4d83514316b5c0654b555988839b58e31b.png";
import imgSept3ResponseImg from "figma:asset/792b6420d451eea18c9f1550d9f67be1a8770c4c.png";
import imgSept3FeelingImg from "figma:asset/9cd2758507eb6df8272185842c484d87da3a7b4d.png";
import imgSept3ThoughtsImg from "figma:asset/0523c1769aab7662ac612ffce3acd6f77fca2cfb.png";
import imgSept3FaceImg from "figma:asset/d347335d093280eb724bf6c25fa6a70e4e23fa2d.png";
import { Layout } from './components/Layout';

function PhilosophySection() {
  return (
    <div id="philosophy_text" className="philosophy-section">
      {/* Background Image */}
      <div className="philosophy-bg">
        <div className="philosophy-bg-inner">
          <img alt="" className="hero-bg-img" src={imgSept3TypographyImg} />
        </div>
      </div>
      
      {/* Title */}
      <div className="philosophy-title-wrapper">
        <div className="philosophy-title-inner">
          <p className="philosophy-title">
            PHILOSOPHY
          </p>
        </div>
      </div>
    </div>
  );
}

function IntroductionSection() {
  return (
    <div className="introduction-section">
      <div className="introduction-content">
        {/* Desktop/Tablet */}
        <div className="introduction-text-desktop">
          <p className="mb-0">sept.3 には、個性を尊重し、心がつながる仕組みがあります。</p>
          <p className="mb-0">私たちは自分たちの仕事を取り巻くさまざまな環境を見つめ直し、</p>
          <p className="mb-0">暮らしや文化、そして企業を支えているのは「人」であり、</p>
          <p className="mb-0">その原動力は「心のエネルギー」であると考えています。</p>
          <p className="mb-0">sept.3 は、それぞれが同じ軌道・同じリズムで回り続けるプラネッツのような存在です。</p>
          <p>バランスを保ちながら輝き続け、その中心には常に「心のエネルギー」があります。</p>
        </div>

        {/* Mobile */}
        <div className="introduction-text-mobile">
          <p className="mb-0">sept.3 には、個性を尊重し、</p>
          <p className="mb-0">心がつながる仕組みがあります。</p>
          <p className="mb-0">私たちは自分たちの仕事を取り巻く</p>
          <p className="mb-0">さまざまな環境を見つめ直し、</p>
          <p className="mb-0">暮らしや文化、そして企業を支えているのは</p>
          <p className="mb-0">「人」であり、</p>
          <p className="mb-0">その原動力は「心のエネルギー」であると</p>
          <p className="mb-0">考えています。</p>
          <p className="mb-0">sept.3 は、それぞれが同じ軌道・同じリズムで</p>
          <p className="mb-0">回り続けるプラネッツのような存在です。</p>
          <p className="mb-0">バランスを保ちながら輝き続け、その中心には</p>
          <p>常に「心のエネルギー」があります。</p>
        </div>
      </div>
    </div>
  );
}

function ThreeHeartsSection() {
  return (
    <div className="three-hearts-section">
      {/* 心を慥かめる */}
      <div className="heart-item first">
        <div className="heart-image-wrapper">
          <img alt="" className="heart-image" src={imgSept3ResponseImg} />
        </div>
        <div className="heart-text-wrapper">
          <div className="heart-text-grid">
            <div className="heart-text-description">
              <div className="heart-text-description-content">
                <p className="mb-0">動揺を導くデザインを</p>
                <p>摸索することからはじめます</p>
              </div>
            </div>
            <div className="heart-text-title">
              <p className="heart-text-title-content">心を慥かめる</p>
            </div>
          </div>
        </div>
      </div>

      {/* 心を掻き乱す */}
      <div className="heart-item second">
        <div className="heart-image-wrapper second-third">
          <img alt="" className="heart-image" src={imgSept3FeelingImg} />
        </div>
        <div className="heart-text-wrapper">
          <div className="heart-text-grid">
            <div className="heart-text-description">
              <div className="heart-text-description-content">
                <p className="mb-0">共鳴する周波数を</p>
                <p>見つけだすための戦略を探ります</p>
              </div>
            </div>
            <div className="heart-text-title">
              <p className="heart-text-title-content">心を掻き乱す</p>
            </div>
          </div>
        </div>
      </div>

      {/* 心を捉える */}
      <div className="heart-item third">
        <div className="heart-image-wrapper third-special">
          <img alt="" className="heart-image" src={imgSept3ThoughtsImg} />
        </div>
        <div className="heart-text-wrapper">
          <div className="heart-text-grid">
            <div className="heart-text-description">
              <div className="heart-text-description-content">
                <p className="mb-0">欲求を充たすをデザインする</p>
                <p>その表現力を追求します</p>
              </div>
            </div>
            <div className="heart-text-title">
              <p className="heart-text-title-content">心を捉える</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaceSection() {
  return (
    <div className="face-section">
      <div className="face-flip-container">
        <div className="face-bg">
          <div className="face-image-wrapper">
            <div className="face-image-inner">
              <div className="face-image-flip">
                <div className="face-image-content">
                  <img alt="" className="face-image" src={imgSept3FaceImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorksSection() {
  return (
    <div id="main_frame3-1_text" className="works-section">
      {/* Title */}
      <div className="works-title-wrapper">
        <p className="works-title">
          WORKS
        </p>
      </div>

      {/* Description */}
      <div className="works-description">
        {/* Desktop/Tablet */}
        <div className="works-text-desktop">
          <p className="mb-0">出会った瞬間に心奪われる、音楽、風景、笑顔、デザイン。</p>
          <p>デザインのチカラで心を動かす、感極まるデザインを追求します。</p>
        </div>

        {/* Mobile */}
        <div className="works-text-mobile">
          <p className="mb-0">出会った瞬間に心奪われる、音楽、風景、</p>
          <p className="mb-0">笑顔、デザイン。</p>
          <p className="mb-0">デザインのチカラで心を動かす、</p>
          <p>感極まるデザインを追求します。</p>
        </div>
      </div>

      {/* Services List */}
      <div className="works-services">
        {/* Labels */}
        <div className="works-services-labels" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>ADVERTISING{'\u00A0\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>BROCHURES{'\u00A0\u00A0\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0">CATALOGS</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0 md-hidden">&nbsp;</p>
          <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>CD JACKET{'\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>PACKAGING{'\u00A0\u00A0'}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">MENU</p>
          <p className="mb-0">&nbsp;</p>
          <p style={{ whiteSpace: 'pre-wrap' }}>WEB{'\u00A0\u00A0'}DESIGN</p>
        </div>

        {/* Values */}
        <div className="works-services-values">
          {/* Desktop */}
          <div className="works-values-desktop">
            <p className="mb-0">駅貼りポスター・車内吊りポスター・チラシ・サイネージ・新聞・雑誌</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">旅行パンフレット・情報誌・ガイドマップ・会社案内・学校案内・自治体広報紙・インバウンド向けツール（翻訳業務）</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">展示会作品集・総合カタログ・販促ツール</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">音楽CDアルバム・ジャケット</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">化粧品・サプリメント</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">飲食店・美容理容・雑貨</p>
            <p className="mb-0">&nbsp;</p>
            <p>旅行・イベント告知　etc.</p>
          </div>

          {/* Tablet */}
          <div className="works-values-tablet">
            <p className="mb-0">駅貼りポスター・車内吊りポスター・チラシ</p>
            <p className="mb-0">サイネージ・新聞・雑誌</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">旅行パンフレット・情報誌・ガイドマップ</p>
            <p className="mb-0">会社案内・学校案内・自治体広報紙</p>
            <p className="mb-0">インバウンド向けツール（翻訳業務）</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">展示会作品集・総合カタログ・販促ツール</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">音楽CDアルバム・ジャケット</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">化粧品・サプリメント</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">飲食店・美容理容・雑貨</p>
            <p className="mb-0">&nbsp;</p>
            <p>旅行・イベント告知　etc.</p>
          </div>

          {/* Mobile */}
          <div className="works-values-mobile">
            <p className="mb-0">駅貼りポスター・</p>
            <p className="mb-0">車内吊りポスター・チラシ</p>
            <p className="mb-0">サイネージ・新聞・雑誌</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">旅行パンフレット・情報誌・</p>
            <p className="mb-0">ガイドマップ</p>
            <p className="mb-0">会社案内・学校案内・</p>
            <p className="mb-0">自治体広報紙</p>
            <p className="mb-0">インバウン向けツール</p>
            <p className="mb-0">（翻訳業務）</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">展示会作品集・</p>
            <p className="mb-0">総合カタログ・販促ツール</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">音楽CDアルバム・ジャケット</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">化粧品・サプリメント</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">飲食店・美容理容・雑貨</p>
            <p className="mb-0">&nbsp;</p>
            <p>旅行・イベント告知　etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Works({ onNavigate }: { onNavigate: (path: string, hash?: string) => void }) {
  return (
    <Layout onNavigate={onNavigate}>
      <div className="works-main">
        <div className="works-inner">
          <PhilosophySection />
          <IntroductionSection />
          <ThreeHeartsSection />
          <FaceSection />
          <WorksSection />
        </div>
      </div>
    </Layout>
  );
}
