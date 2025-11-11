import svgPaths from "./svg-ozvxmadmll";

function Group() {
  return (
    <div className="h-[25px] relative shrink-0 w-[50px]">
      <div className="absolute inset-[-0.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 26">
          <g id="Group 9">
            <path d={svgPaths.p11d7b180} id="Vector 4" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p1c9b8600} id="Vector 5" stroke="var(--stroke-0, black)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hamburgermenu() {
  return (
    <div className="content-stretch flex gap-[10px] h-[30px] items-center justify-end relative shrink-0 w-[500px]" data-name="hamburgermenu">
      <Group />
    </div>
  );
}

function TabletHeader() {
  return (
    <div className="bg-[#f9f9f9] h-[120px] relative shrink-0 w-full" data-name="tablet_header">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[120px] items-center justify-end px-[50px] py-[45px] relative w-full">
          <Hamburgermenu />
        </div>
      </div>
    </div>
  );
}

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
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0" data-name="header_contact">
      <p className="font-['Zen_Kaku_Gothic_Antique:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">CONTACT</p>
    </div>
  );
}

function MenuFrame() {
  return (
    <div className="absolute box-border content-start flex flex-wrap gap-[50px] items-start left-0 px-[50px] py-[25px] top-0 w-[496px]" data-name="menu_frame">
      <HeaderHome />
      <HeaderAbout />
      <HeaderCompany />
      <HeaderPhilosophy />
      <HeaderWorks />
      <HeaderContact />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative shrink-0 w-full">
      <MenuFrame />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <TabletHeader />
      <Frame1 />
    </div>
  );
}

function TabletHeader1() {
  return (
    <div className="content-stretch flex flex-col h-[1200px] items-center relative shrink-0 w-full" data-name="tablet_header">
      <Frame />
    </div>
  );
}

export default function HomeTablet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="home_tablet2">
      <TabletHeader1 />
    </div>
  );
}