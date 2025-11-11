import imgSept3CorporateLogoImg from "figma:asset/9906cc6bdd385df5fa11fcaed881d972152e3706.png";
import imgSept3TypographyImg from "figma:asset/d03c8f616b9db27e808ea003ce375eea78825e34.png";

function HeaderHome() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="header_home">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">HOME</p>
    </button>
  );
}

function HeaderAbout() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="header_about">
      <p className="font-['Zen_Maru_Gothic:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">ABOUT</p>
    </button>
  );
}

function HeaderCompany() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="header_company">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">COMPANY INFO</p>
    </button>
  );
}

function HeaderPhilosophy() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </div>
  );
}

function HeaderRecruit() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_recruit">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">WORKS</p>
    </div>
  );
}

function HeaderContact() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute box-border content-stretch flex gap-[75px] items-center justify-end overflow-clip px-[100px] py-[50px] right-0 top-0 w-[1440px]" data-name="header">
      <HeaderHome />
      <HeaderAbout />
      <HeaderCompany />
      <HeaderPhilosophy />
      <HeaderRecruit />
      <HeaderContact />
    </div>
  );
}

function HeaderFrame() {
  return (
    <div className="h-[123px] relative shrink-0 w-[1440px]" data-name="header_frame">
      <Header />
    </div>
  );
}

function LogoFrame() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-0 top-[512px]" data-name="logo_frame">
      <div className="h-[128px] relative shrink-0 w-[670px]" data-name="sept3_corporate_logo_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3CorporateLogoImg} />
      </div>
    </div>
  );
}

function TextFrame() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-0 top-[692px]" data-name="text_frame1">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">株式会社 sept.3 は、広告制作会社です。</p>
        <p className="mb-0">グラフィックデザインを中心に、</p>
        <p>さまざまな広告制作を行っています。</p>
      </div>
    </div>
  );
}

function Main1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-[100px] overflow-clip right-[100px] top-0" data-name="main1">
      <div className="absolute h-[1353px] left-1/2 top-0 translate-x-[-50%] w-[1150px]" data-name="sept3_typography_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3TypographyImg} />
      </div>
      <LogoFrame />
      <TextFrame />
    </div>
  );
}

function HomeFrame() {
  return (
    <div className="h-[1353px] relative shrink-0 w-full" data-name="home_frame">
      <Main1 />
    </div>
  );
}

function TextFrame2() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-0 top-[110px]" data-name="text_frame3">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">株式会社 sept.3 は、</p>
        <p className="mb-0">商業広告制作への意志と技術を持ったデザイナーが集まり、</p>
        <p className="mb-0">アルティザンを目指して、2003年に設立されたデザインプロダクションです。</p>
        <p className="mb-0">ポスター、パンフレット、紙媒体を中心に、新聞、WEB、サイネージなど、</p>
        <p>幅広い広告制作を行っています。</p>
      </div>
    </div>
  );
}

function TextFrame1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start left-0 overflow-clip top-0" data-name="text_frame2">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[59px] not-italic relative shrink-0 text-[42px] text-black text-nowrap tracking-[21px] whitespace-pre">ABOUT</p>
    </div>
  );
}

function MainFrame() {
  return (
    <div className="h-[310px] relative shrink-0 w-full" data-name="main_frame2">
      <TextFrame2 />
      <TextFrame1 />
    </div>
  );
}

function AboutFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[410px] relative shrink-0 w-full" data-name="about_frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] h-[410px] items-start px-[100px] py-[50px] relative w-full">
          <MainFrame />
        </div>
      </div>
    </div>
  );
}

function TextFrame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="text_frame4">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[59px] not-italic relative shrink-0 text-[42px] text-black text-nowrap tracking-[21px] whitespace-pre">COMPANY INFO</p>
    </div>
  );
}

function TextFrame5() {
  return (
    <div className="content-stretch flex gap-[10px] h-[382px] items-start relative shrink-0" data-name="text_frame5-1">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular','Noto_Sans:Regular',sans-serif] h-[354px] leading-[40px] relative shrink-0 text-[18px] text-black w-[130px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0">{`会社名 `}</p>
        <p className="mb-0">{`所在地 `}</p>
        <p className="mb-0">設立</p>
        <p className="mb-0"> </p>
        <p className="mb-0">代表</p>
        <p className="mb-0">事業内容</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`取引銀行 `}</p>
      </div>
    </div>
  );
}

function TextFrame6() {
  return (
    <div className="content-stretch flex gap-[10px] h-[382px] items-start relative shrink-0" data-name="text_frame5-2">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[382px] leading-[40px] not-italic relative shrink-0 text-[18px] text-black w-[1018px]">
        <p className="mb-0">株式会社セプト・スリー</p>
        <p className="mb-0">大阪市北区芝田1-12-7 大栄ビル新館N1003</p>
        <p className="mb-0">2003年7月</p>
        <p className="mb-0">2006年9月 法人化</p>
        <p className="mb-0 whitespace-pre-wrap">{`代表取締役　鳥飼  久志`}</p>
        <p className="mb-0">商業広告企画・制作</p>
        <p className="mb-0">交通媒体ポスター、パンフレット、販促物のデザイン</p>
        <p className="mb-0">新聞、WEB、サイネージなどの広告企画・制作</p>
        <p>大阪シティ信用金庫</p>
      </div>
    </div>
  );
}

function TextFrame4() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0 w-full" data-name="text_frame5">
      <TextFrame5 />
      <TextFrame6 />
    </div>
  );
}

function CompanyFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[581px] relative shrink-0 w-full" data-name="company_frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] h-[581px] items-start px-[100px] py-[50px] relative w-full">
          <TextFrame3 />
          <TextFrame4 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[130px] items-start relative shrink-0 w-[1440px]">
      <HomeFrame />
      <AboutFrame />
      <CompanyFrame />
    </div>
  );
}

function FooterHome() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_home">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">HOME</p>
    </button>
  );
}

function FooterAbout() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_about">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">ABOUT</p>
    </button>
  );
}

function FooterCompany() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_company">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">COMPANY INFO</p>
    </button>
  );
}

function FooterPhilosophy() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="footer_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </div>
  );
}

function FooterWorks() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="footer_works">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">WORKS</p>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="footer_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="box-border content-stretch flex gap-[75px] items-center justify-center overflow-clip px-[50px] py-[10px] relative shrink-0" data-name="footer">
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
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="footer_text">
      <div className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">{`〒530-0012  大阪市北区芝田1-12-7 大栄ビル新館N1003 `}</p>
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
        <div className="box-border content-stretch flex flex-col gap-[25px] items-center pb-[25px] pt-[15px] px-[100px] relative size-full">
          <Footer />
          <FooterText />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[130px] h-[2904px] items-center relative shrink-0 w-[1440px]" data-name="main">
      <Frame />
      <FooterFrame />
    </div>
  );
}

export default function HomeDesktop() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[132px] items-center relative size-full" data-name="home_desktop">
      <HeaderFrame />
      <Main />
    </div>
  );
}