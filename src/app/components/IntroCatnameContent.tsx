import { useState } from 'react';
import imgCat111 from "../../imports/IntroCatname1/0a68f9bbf59c0c2170250bcd95c688f68ffedd60.png";

interface IntroCatnameContentProps {
  onComplete: (catName: string) => void;
  userName: string;
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

export function IntroCatnameContent({ onComplete, userName }: IntroCatnameContentProps) {
  const [catName, setCatName] = useState('');

  const handleSubmit = () => {
    if (catName.trim()) {
      localStorage.setItem('catName', catName);
      onComplete(catName);
    }
  };

  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] h-full" data-name="intro_catname">
      <FixBar />
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="container">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[36px] relative size-full">
            <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="container">
              <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="container">
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[150px]" data-name="chesecat/ch2">
                  <div className="flex-[1_0_0] h-full min-w-px relative">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCat111} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col font-['Pretendard:ExtraLight',sans-serif] gap-[6px] items-start not-italic relative rounded-[16px] shrink-0 text-black text-center w-full" data-name="container">
                  <p className="leading-none relative shrink-0 text-[22px] w-full">'{userName}(는)은' 간택 당했다!</p>
                  <p className="leading-[0] relative shrink-0 text-[0px] w-full">
                    <span className="font-['Pretendard:Medium',sans-serif] font-medium leading-none text-[22px]">치즈냥이</span>
                    <span className="leading-none text-[22px]">{`의 `}</span>
                    <span className="font-['Pretendard:Medium',sans-serif] font-medium leading-none text-[22px]">이름</span>
                    <span className="leading-none text-[22px]">은 무엇인가요?</span>
                  </p>
                </div>
              </div>
              <div className="bg-white h-[60px] relative rounded-[16px] shrink-0 w-full" data-name="input_wrap">
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative size-full">
                    <input
                      type="text"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                      placeholder="이름을 입력해주세요"
                      className="font-['Pretendard:Regular',sans-serif] leading-none not-italic text-[20px] text-center bg-transparent border-none outline-none w-full"
                      style={{ color: catName ? '#111' : '#b9b9b9' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleSubmit} className="bg-[#f65f1e] content-stretch flex flex-col h-[42px] items-center justify-center px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[100px]" data-name="button">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
              <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">완료</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}