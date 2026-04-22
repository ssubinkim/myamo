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
        <div className="content-stretch flex flex-col font-['Pretendard:ExtraLight',sans-serif] gap-[6px] items-center justify-center not-italic pl-[8px] relative size-full text-black whitespace-nowrap">
          <p className="leading-none relative shrink-0 text-[22px]">만나서 반가워요</p>
          <p className="leading-[0] relative shrink-0 text-[0px]">
            <span className="font-['Pretendard:Medium',sans-serif] leading-none text-[22px]">새로운 집사</span>
            <span className="leading-none text-[22px]">{`님의 `}</span>
            <span className="font-['Pretendard:Medium',sans-serif] leading-none text-[22px]">이름</span>
            <span className="leading-none text-[22px]">은 무엇인가요?</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="input">
      <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#111] text-[20px] text-center whitespace-nowrap">수빈</p>
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

function Li() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="li">
      <Container1 />
      <InputWrap />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f65f1e] content-stretch flex flex-col h-[42px] items-center justify-center px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[100px]" data-name="button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[16px] text-white w-[30px]">완료</p>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[36px] relative size-full">
          <Li />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default function IntroName() {
  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] size-full" data-name="intro_name2">
      <FixBar />
      <Container />
    </div>
  );
}