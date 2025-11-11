import imgSept3CorporateLogoImg from "figma:asset/9906cc6bdd385df5fa11fcaed881d972152e3706.png";
import imgSept3TypographyImg from "figma:asset/d03c8f616b9db27e808ea003ce375eea78825e34.png";

function Group() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60px]">
      <div className="absolute bottom-[-2.5%] left-0 right-0 top-[-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 21">
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

function Hamburgermenu() {
  return (
    <div className="basis-0 content-stretch flex grow h-[30px] items-center justify-end min-h-px min-w-px overflow-clip relative shrink-0" data-name="hamburgermenu">
      <Group />
    </div>
  );
}

function MobileHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="mobile_header">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-end px-[25px] py-[45px] relative w-full">
          <Hamburgermenu />
        </div>
      </div>
    </div>
  );
}

function LogoFrame() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-[25px] top-[248px]" data-name="logo_frame">
      <div className="h-[48px] relative shrink-0 w-[250px]" data-name="sept3_corporate_logo_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3CorporateLogoImg} />
      </div>
    </div>
  );
}

function TextFrame() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[25px] top-[321px]" data-name="text_frame1">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">株式会社 sept.3 は、広告制作会社です。</p>
        <p className="mb-0">グラフィックデザインを中心に、</p>
        <p>さまざまな広告制作を行っています。</p>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[627px] overflow-clip relative shrink-0 w-[393px]" data-name="main1">
      <div className="absolute h-[623px] left-[calc(50%+0.5px)] top-[4px] translate-x-[-50%] w-[530px]" data-name="sept3_typography_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3TypographyImg} />
      </div>
      <LogoFrame />
      <TextFrame />
    </div>
  );
}

function HomeFrame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[627px] items-start justify-center px-[25px] py-0 relative shrink-0 w-[393px]" data-name="home_frame">
      <Main />
    </div>
  );
}

function TextFrame2() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-[65px] w-[343px]" data-name="text_frame3">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[35px] not-italic relative shrink-0 text-[16px] text-black w-[343px]">
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
  );
}

function TextFrame1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-0 overflow-clip top-0" data-name="text_frame2">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[26px] text-black text-nowrap tracking-[13px] whitespace-pre">ABOUT</p>
    </div>
  );
}

function MainFrame() {
  return (
    <div className="h-[359px] relative shrink-0 w-full" data-name="main_frame2">
      <TextFrame2 />
      <TextFrame1 />
    </div>
  );
}

function AboutFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col gap-[25px] h-[395px] items-start overflow-clip p-[25px] relative shrink-0 w-[393px]" data-name="about_frame">
      <MainFrame />
    </div>
  );
}

function TextFrame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="text_frame4">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[26px] text-black tracking-[13px] w-[343px]">COMPANY INFO</p>
    </div>
  );
}

function TextFrame5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[455px] items-start relative shrink-0 w-[80px]" data-name="text_frame5-1">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular','Noto_Sans:Regular',sans-serif] h-[455px] leading-[35px] relative shrink-0 text-[16px] text-black w-[80px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`会社名 `}</p>
        <p className="mb-0">{`所在地 `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">設立</p>
        <p className="mb-0"> </p>
        <p className="mb-0">代表</p>
        <p className="mb-0">事業内容</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`取引銀行 `}</p>
      </div>
    </div>
  );
}

function TextFrame6() {
  return (
    <div className="content-stretch flex gap-[10px] h-[455px] items-start relative shrink-0 w-[234px]" data-name="text_frame5-2">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[455px] leading-[35px] not-italic relative shrink-0 text-[16px] text-black w-[234px]">
        <p className="mb-0">株式会社セプト・スリー</p>
        <p className="mb-0">{`大阪市北区芝田1-12-7 `}</p>
        <p className="mb-0">大栄ビル新館N1003</p>
        <p className="mb-0">2003年7月</p>
        <p className="mb-0">2006年9月 法人化</p>
        <p className="mb-0 whitespace-pre-wrap">{`代表取締役　鳥飼  久志`}</p>
        <p className="mb-0">商業広告企画・制作</p>
        <p className="mb-0">交通媒体ポスター、</p>
        <p className="mb-0">パンフレット、</p>
        <p className="mb-0">販促物のデザイン</p>
        <p className="mb-0">新聞、WEB、サイネージなどの広告企画・制作</p>
        <p>大阪シティ信用金庫</p>
      </div>
    </div>
  );
}

function TextFrame4() {
  return (
    <div className="content-stretch flex gap-[25px] h-[450px] items-start relative shrink-0 w-full" data-name="text_frame5">
      <TextFrame5 />
      <TextFrame6 />
    </div>
  );
}

function CompanyFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col gap-[25px] h-[540px] items-start overflow-clip p-[25px] relative shrink-0 w-[393px]" data-name="company_frame">
      <TextFrame3 />
      <TextFrame4 />
    </div>
  );
}

function FooterHome() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[50px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_home">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">HOME</p>
    </button>
  );
}

function FooterAbout() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[50px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_about">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">ABOUT</p>
    </button>
  );
}

function FooterCompany() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[50px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_company">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">COMPANY INFO</p>
    </button>
  );
}

function FooterPhilosophy() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </div>
  );
}

function FooterWorks() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_works">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">WORKS</p>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="box-border content-start flex flex-wrap gap-[25px] h-[83px] items-start justify-center overflow-clip px-[25px] py-[15px] relative shrink-0 w-[393px]" data-name="footer">
      <FooterHome />
      <FooterAbout />
      <FooterCompany />
      <FooterPhilosophy />
      <FooterWorks />
      <FooterContact />
    </div>
  );
}

function FooterText() {
  return (
    <div className="box-border content-stretch flex items-start justify-center px-[25px] py-[4px] relative shrink-0 w-[393px]" data-name="footer_text">
      <div className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">{`〒530-0012  大阪市北区芝田1-12-7`}</p>
        <p className="mb-0">{`大栄ビル新館N1003 `}</p>
        <p className="mb-0">{`TEL.06-6376-0903  FAX.06-6376-0913`}</p>
        <p>Copyright sept.3 Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function FooterFrame() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative shrink-0 w-full" data-name="footer_frame">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] items-center pb-[35px] pt-[15px] px-[25px] relative size-full">
          <Footer />
          <FooterText />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[75px] h-[2089px] items-center left-0 pb-0 pt-[75px] px-0 top-[120px] w-[393px]">
      <HomeFrame />
      <AboutFrame />
      <CompanyFrame />
      <FooterFrame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[2209px] relative shrink-0 w-[393px]">
      <Frame />
    </div>
  );
}

export default function HomeMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="home_mobile">
      <MobileHeader />
      <Frame1 />
    </div>
  );
}