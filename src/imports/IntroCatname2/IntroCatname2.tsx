import imgCat111 from "./0a68f9bbf59c0c2170250bcd95c688f68ffedd60.png";

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

function Container3() {
  return (
    <div className="content-stretch flex flex-col font-['Pretendard:ExtraLight',sans-serif] gap-[6px] items-start not-italic relative rounded-[16px] shrink-0 text-black text-center w-full" data-name="container">
      <p className="leading-none relative shrink-0 text-[22px] w-full">‘수빈(는)은’ 간택 당했다!</p>
      <p className="leading-[0] relative shrink-0 text-[0px] w-full">
        <span className="font-['Pretendard:Medium',sans-serif] leading-none text-[22px]">치즈냥이</span>
        <span className="leading-none text-[22px]">{`의 `}</span>
        <span className="font-['Pretendard:Medium',sans-serif] leading-none text-[22px]">이름</span>
        <span className="leading-none text-[22px]">은 무엇인가요?</span>
      </p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="container">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[150px]" data-name="chesecat/ch2">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="cat1-1 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCat111} />
        </div>
      </div>
      <Container3 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input">
      <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#111] text-[20px] text-center whitespace-nowrap">고영희</p>
    </div>
  );
}

function InputWrap() {
  return (
    <div className="bg-white h-[60px] relative rounded-[16px] shrink-0 w-full" data-name="input_wrap">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative size-full">
          <Input />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="container">
      <Container2 />
      <InputWrap />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f65f1e] content-stretch flex flex-col h-[42px] items-center justify-center px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[100px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">완료</p>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[36px] relative size-full">
          <Container1 />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function IntroCatname() {
  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] size-full" data-name="intro_catname2">
      <FixBar />
      <Container />
    </div>
  );
}