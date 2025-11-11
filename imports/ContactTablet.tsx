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

function ContactFrame1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-center px-0 py-[30px] relative shrink-0 w-full" data-name="contact_frame3-1">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[59px] not-italic relative shrink-0 text-[42px] text-black text-nowrap tracking-[21px] whitespace-pre">CONTACT</p>
    </div>
  );
}

function InquiryFrame() {
  return (
    <div className="absolute h-[71.5px] left-0 top-[122.5px] w-[643px]" data-name="inquiry_frame">
      <p className="absolute bottom-[60.84%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[63.99%] text-[#3f3d3d] text-[18px] top-0">お問い合わせの内容※</p>
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
    <div className="absolute content-stretch flex gap-[10px] items-center left-[240px] top-[167px]" data-name="radio_button_select">
      <RadioButtonDefault />
      <div className="flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">その他</p>
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
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-[167px]" data-name="radio_button_select">
      <RadioButtonDefault1 />
      <div className="flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f3d3d] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">新規お取引のご相談</p>
      </div>
    </div>
  );
}

function InputText() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[-0.14%] top-[43.18%]" data-name="input_text1">
      <div className="absolute bg-white bottom-0 left-0 right-[-0.14%] top-[43.18%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[55.82%_80.77%_12.1%_1.64%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">会社名</p>
    </div>
  );
}

function CompanyFrame() {
  return (
    <div className="absolute h-[88px] left-0 top-[312px] w-[733px]" data-name="company_frame">
      <p className="absolute bottom-[68.18%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[72.99%] text-[#3f3d3d] text-[18px] top-0">会社名</p>
      <InputText />
    </div>
  );
}

function InputText7() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[51.7%] top-[43.18%]" data-name="input_text1">
      <div className="absolute bg-white bottom-0 left-0 right-[51.7%] top-[43.18%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[55.82%_89.88%_12.1%_1.64%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">姓</p>
    </div>
  );
}

function InputText1() {
  return (
    <div className="absolute bottom-0 contents left-[51.7%] right-0 top-[43.18%]" data-name="input_text2">
      <div className="absolute bg-white bottom-0 left-[51.7%] right-0 top-[43.18%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[55.71%_37.27%_12.47%_53.34%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">名</p>
    </div>
  );
}

function NameFrame() {
  return (
    <div className="absolute h-[88px] left-0 top-[445px] w-[733px]" data-name="name_frame">
      <p className="absolute bottom-[68.18%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[73.03%] text-[#3f3d3d] text-[18px] top-0">お名前※</p>
      <InputText7 />
      <InputText1 />
    </div>
  );
}

function InputText2() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[51.7%] top-[43.18%]" data-name="input_text3">
      <div className="absolute bg-white bottom-0 left-0 right-[51.7%] top-[43.18%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[55.68%_87.05%_12.5%_1.64%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">セイ</p>
    </div>
  );
}

function InputText3() {
  return (
    <div className="absolute bottom-0 contents left-[51.64%] right-[0.07%] top-[43.18%]" data-name="input_text4">
      <div className="absolute bg-white bottom-0 left-[51.64%] right-[0.07%] top-[43.18%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] inset-[55.68%_37.23%_12.5%_53.34%] leading-[28px] not-italic text-[#9a9a9a] text-[18px]">メイ</p>
    </div>
  );
}

function PhoneticReadingFrame() {
  return (
    <div className="absolute h-[88px] left-0 top-[578px] w-[733px]" data-name="phonetic_reading_frame">
      <p className="absolute bottom-[68.18%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[73.03%] text-[#3f3d3d] text-[18px] top-0">フリガナ※</p>
      <InputText2 />
      <InputText3 />
    </div>
  );
}

function InputText4() {
  return (
    <div className="absolute bottom-0 contents left-0 right-0 top-[43.18%]" data-name="input_text5">
      <div className="absolute bg-white bottom-0 left-0 right-0 top-[43.18%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function PhoneFrame() {
  return (
    <div className="absolute h-[88px] left-0 top-[711px] w-[734px]" data-name="phone_frame">
      <p className="absolute bottom-[68.18%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[73.03%] text-[#3f3d3d] text-[18px] top-0">電話番号※</p>
      <InputText4 />
    </div>
  );
}

function InputText5() {
  return (
    <div className="absolute bottom-0 contents left-0 right-0 top-[43.17%]" data-name="input_text6">
      <div className="absolute bg-white bottom-0 left-0 right-0 top-[43.17%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function AddressFrame() {
  return (
    <div className="absolute h-[87.975px] left-0 top-[843.98px] w-[734px]" data-name="address_frame">
      <p className="absolute bottom-[68.17%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[73.03%] text-[#3f3d3d] text-[18px] top-0">メールアドレス※</p>
      <InputText5 />
    </div>
  );
}

function InputText6() {
  return (
    <div className="absolute bottom-0 contents left-0 right-0 top-[11.59%]" data-name="input_text7">
      <div className="absolute bg-white bottom-0 left-0 right-0 top-[11.59%]">
        <div aria-hidden="true" className="absolute border border-[#9a9a9a] border-solid inset-[-1px] pointer-events-none" />
      </div>
    </div>
  );
}

function ContentFrame() {
  return (
    <div className="absolute h-[328px] left-[2px] top-[976.95px] w-[734px]" data-name="content_frame">
      <p className="absolute bottom-[91.46%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[73.03%] text-[#3f3d3d] text-[18px] top-0">内容※</p>
      <InputText6 />
    </div>
  );
}

function InquiryFrame1() {
  return (
    <div className="absolute h-[28px] left-0 top-[239px] w-[736px]" data-name="inquiry_frame2">
      <p className="absolute bottom-0 font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[15.11%] text-[#3f3d3d] text-[18px] top-0">入力いただいた内容は、お問い合わせへの回答のみに使用いたします。</p>
    </div>
  );
}

function ContactFrame3() {
  return (
    <div className="h-[1306px] relative shrink-0 w-full" data-name="contact_frame3-3">
      <p className="absolute bottom-[97.53%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[53.54%] text-[#3f3d3d] text-[18px] top-0">お問い合わせ内容を入力</p>
      <p className="absolute bottom-[93.56%] font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[28px] left-0 not-italic right-[53.54%] text-[#3f3d3d] text-[16px] top-[3.97%]">※は必須項目です</p>
      <InquiryFrame />
      <RadioButtonSelect />
      <RadioButtonSelect1 />
      <CompanyFrame />
      <NameFrame />
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
    <div className="box-border content-stretch flex flex-col h-[1636px] items-start px-[50px] py-0 relative shrink-0 w-[834px]" data-name="contact_frame3">
      <ContactFrame1 />
      <ContactFrame2 />
    </div>
  );
}

function ContactTablet1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[60px] h-[1671px] items-start overflow-clip px-0 py-[35px] relative shrink-0" data-name="contact_tablet1">
      <ContactFrame />
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
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_philosophy">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">PHILOSOPHY</p>
    </div>
  );
}

function FooterWorks() {
  return (
    <div className="content-stretch flex gap-[50px] items-start relative shrink-0" data-name="footer_works">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">WORKS</p>
    </div>
  );
}

function FooterContact() {
  return (
    <button className="box-border content-stretch cursor-pointer flex gap-[50px] items-start overflow-visible p-0 relative shrink-0" data-name="footer_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </button>
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
    <div className="bg-[#f9f9f9] h-[175px] relative shrink-0 w-full" data-name="footer_frame">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[25px] h-[175px] items-center pb-[35px] pt-[15px] px-[50px] relative w-full">
          <Footer />
          <FooterText />
        </div>
      </div>
    </div>
  );
}

export default function ContactTablet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="contact_tablet">
      <TabletHeader />
      <ContactTablet1 />
      <FooterFrame />
    </div>
  );
}