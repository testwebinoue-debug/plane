import imgSept3TypographyImg from "figma:asset/4c7b9b4d83514316b5c0654b555988839b58e31b.png";
import imgSept3ResponseImg from "figma:asset/792b6420d451eea18c9f1550d9f67be1a8770c4c.png";
import imgSept3FeelingImg from "figma:asset/9cd2758507eb6df8272185842c484d87da3a7b4d.png";
import imgSept3ThoughtsImg from "figma:asset/0523c1769aab7662ac612ffce3acd6f77fca2cfb.png";
import imgSept3FaceImg from "figma:asset/d347335d093280eb724bf6c25fa6a70e4e23fa2d.png";

function HeaderHome() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_home">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">HOME</p>
    </div>
  );
}

function HeaderAbout() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_about">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">ABOUT</p>
    </div>
  );
}

function HeaderCompany() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_company">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">COMPANY INFO</p>
    </div>
  );
}

function HeaderPhilosophy() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="header_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </button>
  );
}

function HeaderWorks() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="header_works">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">WORKS</p>
    </button>
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
    <div className="absolute box-border content-stretch flex gap-[50px] items-center justify-end overflow-clip px-[100px] py-[50px] right-0 top-0 w-[1440px]" data-name="header">
      <HeaderHome />
      <HeaderAbout />
      <HeaderCompany />
      <HeaderPhilosophy />
      <HeaderWorks />
      <HeaderContact />
    </div>
  );
}

function HeaderFrame() {
  return (
    <div className="absolute h-[123px] left-0 top-0 w-[1440px]" data-name="header_frame">
      <Header />
    </div>
  );
}

function MainFrame4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[10px] items-start justify-center left-0 overflow-clip px-[270px] py-0 top-[249px] w-[1440px]" data-name="main_frame1-2">
      <div className="h-[853px] relative shrink-0 w-[1000px]" data-name="sept3_typography_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3TypographyImg} />
      </div>
    </div>
  );
}

function TextFrame() {
  return (
    <div className="content-stretch flex gap-[10px] items-start overflow-clip relative shrink-0" data-name="text_frame1">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[59px] not-italic relative shrink-0 text-[42px] text-black text-nowrap tracking-[21px] whitespace-pre">PHILOSOPHY</p>
    </div>
  );
}

function MainFrame3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-1/2 px-[100px] py-[60px] top-0 translate-x-[-50%] w-[1440px]" data-name="main_frame1-1">
      <TextFrame />
    </div>
  );
}

function PhilosophyFrame() {
  return (
    <div className="h-[1150px] relative shrink-0 w-full" data-name="philosophy_frame">
      <MainFrame4 />
      <MainFrame3 />
    </div>
  );
}

function TextFrame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="text_frame2">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">sept.3 には、個性を尊重し、心がつながる仕組みがあります。</p>
        <p className="mb-0">私たちは自分たちの仕事を取り巻くさまざまな環境を見つめ直し、</p>
        <p className="mb-0">暮らしや文化、そして企業を支えているのは「人」であり、</p>
        <p className="mb-0">その原動力は「心のエネルギー」であると考えています。</p>
        <p className="mb-0">sept.3 は、それぞれが同じ軌道・同じリズムで回り続けるプラネッツのような存在です。</p>
        <p>バランスを保ちながら輝き続け、その中心には常に「心のエネルギー」があります。</p>
      </div>
    </div>
  );
}

function MainFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[340px] relative shrink-0 w-full" data-name="main_frame2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] h-[340px] items-start px-[100px] py-[50px] relative w-full">
          <TextFrame1 />
        </div>
      </div>
    </div>
  );
}

function Sept3ResponseTextFrame2() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[10px] items-center justify-center ml-[2px] mt-[51px] relative" data-name="sept3_response_text_frame2">
      <div className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">動揺を導くデザインを</p>
        <p>摸索することからはじめます</p>
      </div>
    </div>
  );
}

function Sept3ResponseTextFrame1() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[10px] items-center justify-center ml-0 mt-0 relative" data-name="sept3_response_text_frame1">
      <p className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c20000] text-[28px] text-nowrap whitespace-pre">心を慥かめる</p>
    </div>
  );
}

function Sept3ResponseText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="sept3_response_text">
      <Sept3ResponseTextFrame2 />
      <Sept3ResponseTextFrame1 />
    </div>
  );
}

function Sept3ResponseTextFrame() {
  return (
    <div className="absolute box-border content-stretch flex gap-[25px] items-start left-[23px] px-0 py-[5px] top-[225.6px]" data-name="sept3_response_text_frame">
      <Sept3ResponseText />
    </div>
  );
}

function Sept3ResponseFrame() {
  return (
    <div className="absolute h-[365px] left-[calc(50%+27px)] top-0 translate-x-[-50%] w-[308px]" data-name="sept3_response_frame">
      <div className="absolute left-[27px] size-[200px] top-[26px]" data-name="sept3_response_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3ResponseImg} />
      </div>
      <Sept3ResponseTextFrame />
    </div>
  );
}

function Sept3FeelingText2() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[10px] items-center justify-center ml-[2px] mt-[51px] relative" data-name="sept3_feeling_text2">
      <div className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">共鳴する周波数を</p>
        <p>見つけだすための戦略を探ります</p>
      </div>
    </div>
  );
}

function Sept3FeelingText1() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[10px] items-center justify-center ml-0 mt-0 relative" data-name="sept3_feeling_text1">
      <p className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c20000] text-[28px] text-nowrap whitespace-pre">心を掻き乱す</p>
    </div>
  );
}

function Sept3FeelingText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="sept3_feeling_text">
      <Sept3FeelingText2 />
      <Sept3FeelingText1 />
    </div>
  );
}

function Sept3FeelingTextFrame() {
  return (
    <div className="absolute box-border content-stretch flex gap-[25px] items-start left-[23px] px-0 py-[5px] top-[225.6px]" data-name="sept3_feeling_text_frame">
      <Sept3FeelingText />
    </div>
  );
}

function Sept3FeelingFrame() {
  return (
    <div className="absolute h-[365px] left-[calc(50%+27px)] top-[415px] translate-x-[-50%] w-[308px]" data-name="sept3_feeling_frame">
      <div className="absolute left-[27px] size-[200px] top-[26px]" data-name="sept3_feeling_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3FeelingImg} />
      </div>
      <Sept3FeelingTextFrame />
    </div>
  );
}

function Sept3ThoughtsTextFrame2() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[10px] items-center justify-center ml-[2px] mt-[51px] relative" data-name="sept3_thoughts_text_frame2">
      <div className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">欲求を充たすをデザインする</p>
        <p>その表現力を追求します</p>
      </div>
    </div>
  );
}

function Sept3ThoughtsTextFrame1() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] box-border content-stretch flex gap-[10px] items-center justify-center ml-0 mt-0 relative" data-name="sept3_thoughts_text_frame1">
      <p className="font-['Zen_Old_Mincho:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#c20000] text-[28px] text-nowrap whitespace-pre">心を捉える</p>
    </div>
  );
}

function Sept3ThoughtsText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="sept3_thoughts_text">
      <Sept3ThoughtsTextFrame2 />
      <Sept3ThoughtsTextFrame1 />
    </div>
  );
}

function Sept3ThoughtsTextFrame() {
  return (
    <div className="absolute box-border content-stretch flex gap-[25px] items-start left-[23px] px-0 py-[5px] top-[225.6px]" data-name="sept3_thoughts_text_frame">
      <Sept3ThoughtsText />
    </div>
  );
}

function Sept3ThoughtsFrame() {
  return (
    <div className="absolute h-[365px] left-[calc(50%+27px)] top-[830px] translate-x-[-50%] w-[308px]" data-name="sept3_thoughts_frame">
      <div className="absolute left-[20px] size-[200px] top-[26px]" data-name="sept3_thoughts_img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3ThoughtsImg} />
      </div>
      <Sept3ThoughtsTextFrame />
    </div>
  );
}

function MainFrame1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[1195px] overflow-clip relative shrink-0 w-full" data-name="main_frame3">
      <Sept3ResponseFrame />
      <Sept3FeelingFrame />
      <Sept3ThoughtsFrame />
    </div>
  );
}

function Main1Sept3Face() {
  return (
    <div className="absolute content-stretch flex h-[975px] items-start justify-center left-1/2 top-[-89px] translate-x-[-50%]" data-name="main1_sept3_face">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[1131px] relative w-[1440px]" data-name="sept3_face_img">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3FaceImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainFrame2() {
  return (
    <div className="aspect-[1240/718] bg-[rgba(255,255,255,0)] overflow-clip relative size-full" data-name="main_frame4">
      <Main1Sept3Face />
    </div>
  );
}

function MainFrame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="main_frame3-1">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[59px] not-italic relative shrink-0 text-[42px] text-black text-nowrap tracking-[21px] whitespace-pre">WORKS</p>
    </div>
  );
}

function MainFrame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="main_frame3-2">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre">
        <p className="mb-0">出会った瞬間に心奪われる、音楽、風景、笑顔、デザイン。</p>
        <p>デザインのチカラで心を動かす、感極まるデザインを追求します。</p>
      </div>
    </div>
  );
}

function MainFrame8() {
  return (
    <div className="content-stretch flex gap-[10px] h-[556px] items-start relative shrink-0" data-name="main_frame3-3-1">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular','Noto_Sans:Regular',sans-serif] h-[556px] leading-[40px] relative shrink-0 text-[18px] text-black w-[130px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0 whitespace-pre-wrap">{`ADVERTISING   `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 whitespace-pre-wrap">{`BROCHURES    `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">CATALOGS</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 whitespace-pre-wrap">{`CD JACKET  `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 whitespace-pre-wrap">{`PACKAGING  `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">MENU</p>
        <p className="mb-0">&nbsp;</p>
        <p className="whitespace-pre-wrap">{`WEB  DESIGN`}</p>
      </div>
    </div>
  );
}

function MainFrame9() {
  return (
    <div className="content-stretch flex gap-[10px] h-[556px] items-start relative shrink-0" data-name="main_frame3-3-2">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[556px] leading-[40px] not-italic relative shrink-0 text-[18px] text-black w-[1018px]">
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
    </div>
  );
}

function MainFrame7() {
  return (
    <div className="content-stretch flex gap-[50px] h-[556px] items-start relative shrink-0 w-full" data-name="main_frame3-3">
      <MainFrame8 />
      <MainFrame9 />
    </div>
  );
}

function WorksFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[896px] relative shrink-0 w-full" data-name="works_frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] h-[896px] items-start px-[100px] py-[50px] relative w-full">
          <MainFrame5 />
          <MainFrame6 />
          <MainFrame7 />
        </div>
      </div>
    </div>
  );
}

function FooterText() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start justify-center left-[calc(50%+-28.5px)] top-[100px] translate-x-[-50%]" data-name="footer_text">
      <div className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">
        <p className="mb-0">{`〒530-0012  大阪市北区芝田1-12-7 大栄ビル新館N1003 `}</p>
        <p className="mb-0">{`TEL.06-6376-0903  FAX.06-6376-0913`}</p>
        <p>Copyright sept.3 Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}

function FooterHome() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="footer_home">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">HOME</p>
    </div>
  );
}

function FooterAbout() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="footer_about">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">ABOUT</p>
    </div>
  );
}

function FooterCompany() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="footer_company">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">COMPANY INFO</p>
    </div>
  );
}

function FooterPhilosophy() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </button>
  );
}

function FooterWorks() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_works">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">WORKS</p>
    </button>
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
    <div className="absolute box-border content-stretch flex gap-[75px] items-center justify-center overflow-clip px-[50px] py-[25px] right-0 top-[27px] w-[1440px]" data-name="footer">
      <FooterHome />
      <FooterAbout />
      <FooterCompany />
      <FooterPhilosophy />
      <FooterWorks />
      <FooterContact />
    </div>
  );
}

function FooterFrame() {
  return (
    <div className="basis-0 grow min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="footer_frame">
      <div className="absolute bg-[#f9f9f9] h-[200px] left-1/2 top-0 translate-x-[-50%] w-[2500px]" data-name="back_coler" />
      <FooterText />
      <Footer />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[90px] h-[5065px] items-center left-0 top-[200px] w-[1440px]">
      <PhilosophyFrame />
      <MainFrame />
      <MainFrame1 />
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <MainFrame2 />
        </div>
      </div>
      <WorksFrame />
      <FooterFrame />
    </div>
  );
}

function WorksDesktop() {
  return (
    <div className="bg-white h-[5260px] relative shrink-0 w-[1440px]" data-name="works_desktop">
      <HeaderFrame />
      <Frame />
    </div>
  );
}

export default function WorksDesktop1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="works_desktop">
      <WorksDesktop />
    </div>
  );
}