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

function ContactFrame1() {
  return (
    <div className="absolute box-border content-stretch flex items-start left-0 px-[25px] py-0 top-0 w-[393px]" data-name="contact_frame3-1">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#3f3d3d] text-[26px] text-nowrap tracking-[13px] whitespace-pre">CONTACT</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] gap-[25px] items-start leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] w-full">
      <p className="h-[32px] relative shrink-0 text-[18px] w-full">お問い合わせ内容を入力</p>
      <p className="h-[32.082px] relative shrink-0 text-[16px] w-full">＊は必須項目です</p>
    </div>
  );
}

function RadioButtonDefault() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="radio_button_default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="radio_button_default">
          <circle cx="9" cy="9" fill="var(--fill-0, #D9D9D9)" id="Ellipse2" r="9" />
        </g>
      </svg>
    </div>
  );
}

function RadioButtonSelect() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-[60px]" data-name="radio_button_select">
      <RadioButtonDefault />
      <div className="flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">新規お取引のご相談</p>
      </div>
    </div>
  );
}

function RadioButtonDefault1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="radio_button_default">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="radio_button_default">
          <circle cx="9" cy="9" fill="var(--fill-0, #D9D9D9)" id="Ellipse2" r="9" />
        </g>
      </svg>
    </div>
  );
}

function RadioButtonSelect1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0" data-name="radio_button_select">
      <RadioButtonDefault1 />
      <div className="flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">その他</p>
      </div>
    </div>
  );
}

function InquiryFrame() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="inquiry_frame">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[28px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-[204.304px]">お問い合わせの内容＊</p>
      <RadioButtonSelect />
      <RadioButtonSelect1 />
    </div>
  );
}

function InquiryFrame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="inquiry_frame2">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[71px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-[343px]">入力いただいた内容は、お問い合わせへの回答のみに使用いたします。</p>
    </div>
  );
}

function InputText() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text1">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[48px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="[grid-area:1_/_1_/_auto_/_auto] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[27.106px] leading-[28px] ml-[12.857px] mt-[10.649px] not-italic relative text-[#9a9a9a] text-[18px] w-[70.286px]">会社名</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[28px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-full">会社名</p>
      <InputText />
    </div>
  );
}

function InputText7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text1">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[48px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="[grid-area:1_/_1_/_auto_/_auto] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[27.106px] leading-[28px] ml-[12.857px] mt-[10.649px] not-italic relative text-[#9a9a9a] text-[18px] w-[70.286px]">姓</p>
    </div>
  );
}

function InputText1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text2">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[48px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="[grid-area:1_/_1_/_auto_/_auto] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[27.106px] leading-[28px] ml-[10.714px] mt-[10.649px] not-italic relative text-[#9a9a9a] text-[18px] w-[58.571px]">名</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[28px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-full">お名前※</p>
      <InputText7 />
      <InputText1 />
    </div>
  );
}

function InputText2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text3">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[48px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="[grid-area:1_/_1_/_auto_/_auto] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[27.106px] leading-[28px] ml-[12.857px] mt-[10.649px] not-italic relative text-[#9a9a9a] text-[18px] w-[70.286px]">セイ</p>
    </div>
  );
}

function InputText3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text4">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[48px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="[grid-area:1_/_1_/_auto_/_auto] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[27.106px] leading-[28px] ml-[10.714px] mt-[10.649px] not-italic relative text-[#9a9a9a] text-[18px] w-[58.571px]">メイ</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[28px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-full">フリガナ※</p>
      <InputText2 />
      <InputText3 />
    </div>
  );
}

function InputText4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text5">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[48px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[28px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-full">電話番号※</p>
      <InputText4 />
    </div>
  );
}

function InputText5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text6">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[48px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[28px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-full">メールアドレス※</p>
      <InputText5 />
    </div>
  );
}

function InputText6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="input_text7">
      <div className="[grid-area:1_/_1_/_auto_/_auto] bg-white h-[290px] ml-0 mt-0 relative w-[343px]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[343px]">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[28px] leading-[28px] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] w-full">内容※</p>
      <InputText6 />
    </div>
  );
}

function ContactFrame3() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] h-[1366.16px] items-center relative shrink-0 w-full" data-name="contact_frame3-3">
      <Frame6 />
      <InquiryFrame />
      <InquiryFrame1 />
      <Frame5 />
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[36px] relative shrink-0 w-[250px]" data-name="button">
      <div className="absolute bg-[#3f3d3d] inset-0" />
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[10.83%_41.7%_13.88%_38.8%] leading-[28px] not-italic text-[18px] text-center text-white">送信</p>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[10.83%_1.5%_13.88%_92%] leading-[28px] not-italic text-[16px] text-white">〉</p>
    </div>
  );
}

function ContactFrame2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[60px] items-center left-0 px-[25px] py-0 top-[90px]" data-name="contact_frame3-2">
      <ContactFrame3 />
      <Button />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[1552.16px] relative shrink-0 w-[393px]">
      <ContactFrame1 />
      <ContactFrame2 />
    </div>
  );
}

function ContactFrame() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[50px] items-center px-0 py-[60px] relative shrink-0 w-full" data-name="contact_frame">
      <Frame7 />
    </div>
  );
}

function FooterHome() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_home">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">HOME</p>
    </div>
  );
}

function FooterAbout() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_about">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">ABOUT</p>
    </div>
  );
}

function FooterCompany() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_company">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">COMPANY INFO</p>
    </div>
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
    <button className="box-border content-stretch cursor-pointer flex gap-[50px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </button>
  );
}

function Footer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="footer">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-start flex flex-wrap gap-[25px] items-start justify-center px-[25px] py-[15px] relative size-full">
          <FooterHome />
          <FooterAbout />
          <FooterCompany />
          <FooterPhilosophy />
          <FooterWorks />
          <FooterContact />
        </div>
      </div>
    </div>
  );
}

function FooterText() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="footer_text">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex items-start justify-center px-[25px] py-[4px] relative size-full">
          <div className="font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">
            <p className="mb-0">{`〒530-0012  大阪市北区芝田1-12-7`}</p>
            <p className="mb-0">{`大栄ビル新館N1003 `}</p>
            <p className="mb-0">{`TEL.06-6376-0903  FAX.06-6376-0913`}</p>
            <p>Copyright sept.3 Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterFrame() {
  return (
    <div className="bg-[#f9f9f9] h-[211.985px] relative shrink-0 w-full" data-name="footer_frame">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[15px] h-[211.985px] items-center px-[25px] py-[15px] relative w-full">
          <Footer />
          <FooterText />
        </div>
      </div>
    </div>
  );
}

export default function ContactMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="contact_mobile">
      <MobileHeader />
      <ContactFrame />
      <FooterFrame />
    </div>
  );
}