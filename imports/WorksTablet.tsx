import imgSept3TypographyImg from "figma:asset/4c7b9b4d83514316b5c0654b555988839b58e31b.png";
import imgSept3ResponseImg from "figma:asset/792b6420d451eea18c9f1550d9f67be1a8770c4c.png";
import imgSept3FeelingImg from "figma:asset/9cd2758507eb6df8272185842c484d87da3a7b4d.png";
import imgSept3ThoughtsImg from "figma:asset/0523c1769aab7662ac612ffce3acd6f77fca2cfb.png";
import imgSept3FaceImg from "figma:asset/d347335d093280eb724bf6c25fa6a70e4e23fa2d.png";

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

function TabletHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="tablet_header">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-end px-[50px] py-[45px] relative w-full">
          <Hamburgermenu />
        </div>
      </div>
    </div>
  );
}

function MainFrame4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[10px] items-start justify-center left-1/2 overflow-clip px-[50px] py-0 top-[200px] translate-x-[-50%] w-[834px]" data-name="main_frame1-2">
      <div className="h-[641px] relative shrink-0 w-[734px]" data-name="sept3_typography_img">
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
    <div className="absolute box-border content-stretch flex items-start left-1/2 px-[50px] py-[30px] top-0 translate-x-[-50%] w-[834px]" data-name="main_frame1-1">
      <TextFrame />
    </div>
  );
}

function PhilosophyFrame() {
  return (
    <div className="h-[900px] relative shrink-0 w-[834px]" data-name="philosophy_frame">
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
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col gap-[25px] h-[300px] items-start overflow-clip px-[50px] py-[25px] relative shrink-0 w-[834px]" data-name="main_frame2">
      <TextFrame1 />
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
    <div className="bg-[rgba(255,255,255,0)] h-[1195px] overflow-clip relative shrink-0 w-[834px]" data-name="main_frame3">
      <Sept3ResponseFrame />
      <Sept3FeelingFrame />
      <Sept3ThoughtsFrame />
    </div>
  );
}

function Main1Sept3Face() {
  return (
    <div className="absolute content-stretch flex h-[564.688px] items-start justify-center left-1/2 top-[-51.55px] translate-x-[-50%]" data-name="main1_sept3_face">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[655.286px] relative w-[834px]" data-name="sept3_face_img">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSept3FaceImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

function MainFrame2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[483px] overflow-clip relative w-[834px]" data-name="main_frame4">
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
    <div className="content-stretch flex gap-[10px] h-[567px] items-start relative shrink-0" data-name="main_frame3-3-1">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular','Noto_Sans:Regular',sans-serif] h-[640px] leading-[40px] relative shrink-0 text-[18px] text-black w-[130px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        <p className="mb-0 whitespace-pre-wrap">{`ADVERTISING   `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0 whitespace-pre-wrap">{`BROCHURES    `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">&nbsp;</p>
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
    <div className="content-stretch flex gap-[10px] h-[567px] items-start relative shrink-0 w-[554px]" data-name="main_frame3-3-2">
      <div className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[640px] leading-[40px] not-italic relative shrink-0 text-[18px] text-black w-[554px]">
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
    </div>
  );
}

function MainFrame7() {
  return (
    <div className="content-stretch flex gap-[50px] h-[666px] items-start relative shrink-0 w-full" data-name="main_frame3-3">
      <MainFrame8 />
      <MainFrame9 />
    </div>
  );
}

function WorksFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col gap-[50px] h-[1006px] items-start overflow-clip p-[50px] relative shrink-0 w-[834px]" data-name="works_frame">
      <MainFrame5 />
      <MainFrame6 />
      <MainFrame7 />
    </div>
  );
}

function FooterHome() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_home">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">HOME</p>
    </div>
  );
}

function FooterAbout() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_about">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">ABOUT</p>
    </div>
  );
}

function FooterCompany() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_company">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">COMPANY INFO</p>
    </div>
  );
}

function FooterPhilosophy() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[50px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </button>
  );
}

function FooterWorks() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[50px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_works">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">WORKS</p>
    </button>
  );
}

function FooterContact() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="box-border content-start flex flex-wrap gap-[50px] items-start justify-center overflow-clip px-[50px] py-[10px] relative shrink-0" data-name="footer">
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
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="footer_text">
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
    <div className="bg-[#f9f9f9] h-[140px] relative shrink-0 w-full" data-name="footer_frame">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[25px] h-[140px] items-center pb-[25px] pt-[15px] px-[50px] relative w-full">
          <Footer />
          <FooterText />
        </div>
      </div>
    </div>
  );
}

function WorksTablet() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[60px] h-[4359px] items-start overflow-clip px-0 py-[35px] relative shrink-0 w-full" data-name="works_tablet">
      <PhilosophyFrame />
      <MainFrame />
      <MainFrame1 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <MainFrame2 />
        </div>
      </div>
      <WorksFrame />
      <FooterFrame />
    </div>
  );
}

export default function WorksTablet1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="works_tablet">
      <TabletHeader />
      <WorksTablet />
    </div>
  );
}