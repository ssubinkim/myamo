import imgOramge31 from "./7e4ef64dd73e48d412618ff5673c55fb6fc5ddad.png";

function Fix() {
  return <div className="bg-[rgba(204,204,204,0.8)] h-[36px] rounded-[999px] shrink-0 w-[127px]" data-name="fix" />;
}

function FixBar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[10px] relative shrink-0 w-full" data-name="fix_bar">
      <Fix />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center leading-none not-italic pl-[8px] relative size-full text-[22px] text-black whitespace-nowrap">
          <p className="font-['Pretendard:ExtraLight',sans-serif] relative shrink-0">7일간 무료로 체험해 보세요 !</p>
          <p className="font-['Pretendard:Medium',sans-serif] relative shrink-0">언제든지 취소할 수 있어요</p>
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="top">
      <div className="content-stretch flex flex-col items-start relative shrink-0 size-[50px]" data-name="oranges">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="oramge3 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[279.78%] left-[-78.64%] max-w-none top-[-86.07%] w-[257.29%]" src={imgOramge31} />
          </div>
        </div>
      </div>
      <Container1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f65f1e] relative rounded-[9999px] shrink-0 size-[18px]">
      <div aria-hidden="true" className="absolute border-2 border-[#1e293b] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[10px] items-start leading-none not-italic relative shrink-0 text-center whitespace-nowrap">
      <p className="relative shrink-0 text-[#1e293b] text-[18px]">연간 구독</p>
      <p className="relative shrink-0 text-[#f65f1e] text-[16px]">첫 구독 시 7일간 무료</p>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input">
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame1 />
      <Input />
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:Regular',sans-serif] gap-[10px] items-end leading-none not-italic relative shrink-0 text-center" data-name="price">
      <p className="relative shrink-0 text-[#1e293b] text-[16px] whitespace-pre">{`연 ₩27,000  `}</p>
      <p className="relative shrink-0 text-[#b9b9b9] text-[14px] whitespace-nowrap">{`월 ₩2,250 `}</p>
    </div>
  );
}

function InputWrap() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="input_wrap">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame3 />
          <Price />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[18px]">
      <div aria-hidden="true" className="absolute border-2 border-[#1e293b] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#1e293b] text-[18px] text-center whitespace-nowrap">월간 구독</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input">
      <Frame6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <Frame5 />
      <Input1 />
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="price">
      <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#1e293b] text-[16px] text-center whitespace-pre">{`월 ₩3,900  `}</p>
    </div>
  );
}

function InputWrap1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="input_wrap">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <Frame4 />
          <Price1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <InputWrap />
      <InputWrap1 />
    </div>
  );
}

function Li() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="li">
      <Top />
      <Frame2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f65f1e] h-[42px] relative rounded-[16px] shrink-0 w-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[10px] relative size-full">
          <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[16px] text-white whitespace-nowrap">무료체험 시작하기</p>
        </div>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="p">
      <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#b9b9b9] text-[12px] text-center whitespace-nowrap">*무료 체험 종료 후 자동으로 결제가 진행됩니다.</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
      <Button />
      <P />
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="p">
      <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#918b8b] text-[16px] text-center whitespace-nowrap">건너뛰기</p>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center justify-center px-[24px] relative size-full">
          <Li />
          <Frame7 />
          <P1 />
        </div>
      </div>
    </div>
  );
}

export default function SubscribeAct() {
  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] size-full" data-name="subscribe_act3">
      <FixBar />
      <Container />
    </div>
  );
}