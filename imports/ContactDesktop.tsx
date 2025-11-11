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
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </div>
  );
}

function HeaderWorks() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_works">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">WORKS</p>
    </div>
  );
}

function HeaderContact() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="header_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </button>
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

function ContactFrame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[60px] relative shrink-0" data-name="contact_frame3-1">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[59px] not-italic relative shrink-0 text-[42px] text-black text-nowrap tracking-[21px] whitespace-pre">CONTACT</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] h-[73px] leading-[28px] ml-0 mt-0 not-italic relative text-[#3f3d3d] w-[431.348px]">
      <p className="absolute bottom-[61.64%] left-0 right-[20.88%] text-[18px] top-0">お問い合わせ内容を入力</p>
      <p className="absolute bottom-0 left-[20.88%] right-0 text-[16px] top-[61.64%]">※は必須項目です</p>
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
    <div className="absolute content-stretch flex gap-[10px] items-center left-[310px] top-1/2 translate-y-[-50%]" data-name="radio_button_select">
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
    <div className="absolute content-stretch flex gap-[10px] items-center left-[550px] top-1/2 translate-y-[-50%]" data-name="radio_button_select">
      <RadioButtonDefault1 />
      <div className="flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">その他</p>
      </div>
    </div>
  );
}

function InquiryFrame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[28px] ml-[102.959px] mt-[118px] relative w-[912.917px]" data-name="inquiry_frame">
      <p className="absolute bottom-0 font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[78.29%] text-[#3f3d3d] text-[18px] top-0">お問い合わせの内容※</p>
      <RadioButtonSelect />
      <RadioButtonSelect1 />
    </div>
  );
}

function InputText1() {
  return (
    <div className="absolute bottom-0 contents left-[27.27%] right-[37.55%] top-0" data-name="input_text1">
      <div className="absolute bg-white bottom-0 left-[27.27%] right-[37.55%] top-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[22%_62.99%_22%_28.76%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">姓</p>
    </div>
  );
}

function InputText2() {
  return (
    <div className="absolute bottom-0 contents left-[64.65%] right-[0.17%] top-0" data-name="input_text2">
      <div className="absolute bg-white bottom-0 left-[64.65%] right-[0.17%] top-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[22%_27.16%_22%_65.97%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">名</p>
    </div>
  );
}

function NameFrame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[50px] ml-[103px] mt-[364px] relative w-[1136.92px]" data-name="name_frame">
      <p className="absolute bottom-[22%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[82.57%] text-[#3f3d3d] text-[18px] top-[22%]">お名前※</p>
      <InputText1 />
      <InputText2 />
    </div>
  );
}

function InputText() {
  return (
    <div className="absolute bottom-0 right-[1.96px] top-0 w-[825px]" data-name="input_text">
      <div className="absolute bg-white inset-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[22%_74.51%_22%_2.06%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">会社名</p>
    </div>
  );
}

function CompanyFrame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[50px] ml-[103px] mt-[264px] relative w-[1136.92px]" data-name="company_frame">
      <p className="absolute bottom-[22%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[82.57%] text-[#3f3d3d] text-[18px] top-[22%]">会社名</p>
      <InputText />
    </div>
  );
}

function InputText3() {
  return (
    <div className="absolute bottom-0 contents left-[27.27%] right-[37.53%] top-0" data-name="input_text3">
      <div className="absolute bg-white bottom-0 left-[27.27%] right-[37.53%] top-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[22%_62.98%_22%_28.77%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">セイ</p>
    </div>
  );
}

function InputText4() {
  return (
    <div className="absolute bottom-0 contents left-[64.67%] right-[0.14%] top-0" data-name="input_text4">
      <div className="absolute bg-white bottom-0 left-[64.67%] right-[0.14%] top-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[22%_27.14%_22%_65.99%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">メイ</p>
    </div>
  );
}

function PhoneticReadingFrame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[50px] ml-[102.959px] mt-[464px] relative w-[1136.59px]" data-name="phonetic_reading_frame">
      <p className="absolute bottom-[22%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[82.56%] text-[#3f3d3d] text-[18px] top-[22%]">フリガナ※</p>
      <InputText3 />
      <InputText4 />
    </div>
  );
}

function InputText5() {
  return (
    <div className="absolute bottom-0 contents left-[27.27%] right-[0.14%] top-0" data-name="input_text5">
      <div className="absolute bg-white bottom-0 left-[27.27%] right-[0.14%] top-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function PhoneFrame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[50px] ml-[103px] mt-[564px] relative w-[1136.58px]" data-name="phone_frame">
      <p className="absolute bottom-[22%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[82.56%] text-[#3f3d3d] text-[18px] top-[22%]">電話番号※</p>
      <InputText5 />
    </div>
  );
}

function InputText6() {
  return (
    <div className="absolute bottom-0 contents left-[27.27%] right-[0.14%] top-0" data-name="input_text6">
      <div className="absolute bg-white bottom-0 left-[27.27%] right-[0.14%] top-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function AddressFrame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[50px] ml-[102.959px] mt-[664px] relative w-[1136.58px]" data-name="address_frame">
      <p className="absolute bottom-[22%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[82.56%] text-[#3f3d3d] text-[18px] top-[22%]">メールアドレス※</p>
      <InputText6 />
    </div>
  );
}

function InputText7() {
  return (
    <div className="absolute bottom-0 contents left-[27.27%] right-[0.14%] top-0" data-name="input_text7">
      <div className="absolute bg-white bottom-0 left-[27.27%] right-[0.14%] top-0">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[290px] ml-[103px] mt-[764px] relative w-[1136.58px]" data-name="content_frame">
      <p className="absolute bottom-[90.34%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[82.56%] text-[#3f3d3d] text-[18px] top-0">内容※</p>
      <InputText7 />
    </div>
  );
}

function InquiryFrame1() {
  return (
    <div className="[grid-area:1_/_1_/_auto_/_auto] h-[28px] ml-[102.959px] mt-[191px] relative w-[912.917px]" data-name="inquiry_frame2">
      <p className="absolute bottom-0 font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[15.11%] text-[#3f3d3d] text-[18px] top-0">入力いただいた内容は、お問い合わせへの回答のみに使用いたします。</p>
    </div>
  );
}

function ContactFrame3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="contact_frame3-3">
      <Frame />
      <InquiryFrame />
      <NameFrame />
      <CompanyFrame />
      <PhoneticReadingFrame />
      <PhoneFrame />
      <AddressFrame />
      <ContentFrame />
      <InquiryFrame1 />
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
    <div className="box-border content-stretch flex flex-col gap-[70px] items-center pb-[70px] pt-[35px] px-0 relative shrink-0 w-full" data-name="contact_frame3-2">
      <ContactFrame3 />
      <Button />
    </div>
  );
}

function ContactFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="contact_frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[70px] items-start px-[100px] py-0 relative w-full">
          <ContactFrame1 />
          <ContactFrame2 />
        </div>
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
    <button className="box-border content-stretch cursor-pointer flex gap-[20px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </button>
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
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="footer_text">
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
        <div className="box-border content-stretch flex flex-col gap-[25px] items-center pb-[35px] pt-[15px] px-[50px] relative size-full">
          <Footer />
          <FooterText />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1690px] items-start left-0 top-[200px] w-[1440px]">
      <ContactFrame />
      <FooterFrame />
    </div>
  );
}

function ContactDesktop() {
  return (
    <div className="bg-white h-[1890px] relative shrink-0 w-[1440px]" data-name="contact_desktop">
      <HeaderFrame />
      <Frame1 />
    </div>
  );
}

export default function ContactDesktop1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="contact_desktop">
      <ContactDesktop />
    </div>
  );
}