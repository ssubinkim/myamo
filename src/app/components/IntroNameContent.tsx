import { useState } from 'react';

interface IntroNameContentProps {
  onComplete: (name: string) => void;
}

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

export function IntroNameContent({ onComplete }: IntroNameContentProps) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name);
      onComplete(name);
    }
  };

  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] h-full" data-name="intro_name">
      <FixBar />
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="container">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[36px] relative size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="li">
              <div className="relative rounded-[16px] shrink-0 w-full" data-name="container">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col font-['Pretendard:ExtraLight',sans-serif] gap-[6px] items-center justify-center not-italic pl-[8px] relative size-full text-black whitespace-nowrap">
                    <p className="leading-none relative shrink-0 text-[22px]">만나서 반가워요</p>
                    <p className="leading-[0] relative shrink-0 text-[0px]">
                      <span className="font-['Pretendard:Medium',sans-serif] font-medium leading-none text-[22px]">새로운 집사</span>
                      <span className="leading-none text-[22px]">{`님의 `}</span>
                      <span className="font-['Pretendard:Medium',sans-serif] font-medium leading-none text-[22px]">이름</span>
                      <span className="leading-none text-[22px]">은 무엇인가요?</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[60px] relative rounded-[16px] shrink-0 w-full" data-name="input_wrap">
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative size-full">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="이름을 입력해주세요"
                      className="font-['Pretendard:Regular',sans-serif] leading-none not-italic text-[20px] text-center bg-transparent border-none outline-none w-full"
                      style={{ color: name ? '#111' : '#b9b9b9' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleSubmit} className="bg-[#f65f1e] content-stretch flex flex-col h-[42px] items-center justify-center px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[100px]" data-name="button">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
              <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[16px] text-white w-[30px]">완료</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}