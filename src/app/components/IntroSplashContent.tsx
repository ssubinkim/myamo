import { useEffect, useState } from 'react';
import imgGeminiGeneratedImage1 from "../../imports/IntroSplash1/95ca83fd1468857f161104896c6890a54f432add.png";
import imgGeminiGeneratedImage2 from "../../imports/IntroSplash2/4ba3b44c84e8e44f27d67ef9b60261e638b9b489.png";
import imgFullbox from "../../imports/IntroSplash3/90f9c62de916a4fb167abb3b160d27598732acdc.png";
import imgCat132 from "../../imports/IntroSplash4/3e8cfecfbcd035bb3de6a1b0b9ffca12ac85b091.png";
import imgMalBox from "../../imports/IntroSplash4/bc6534d13a7ebd3d699724e047939e52ff292143.png";
import imgOrange from "../../imports/IntroSplash4/d337a2fc69fc8b355902a29a4d150807903f9906.png";

interface IntroSplashContentProps {
  onComplete: () => void;
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

const FADE = 'absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out';

function Orange({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`} data-name="oranges">
      <img alt="" className="size-full object-contain" src={imgOrange} />
    </div>
  );
}

export function IntroSplashContent({ onComplete }: IntroSplashContentProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const holdTime = currentSlide < 3 ? 700 : 1200;
    const timer = setTimeout(() => {
      if (currentSlide < 3) {
        setCurrentSlide((prev) => prev + 1);
      } else {
        onComplete();
      }
    }, holdTime);
    return () => clearTimeout(timer);
  }, [currentSlide, onComplete]);

  return (
    <div
      className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] h-full"
      data-name="intro_splash"
    >
      <FixBar />
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="center">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[100px] relative size-full">
            <div className="relative shrink-0 size-[180px]" data-name="stage">
              <div className={`${FADE} ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-name="orange_box">
                <div className="h-[150px] w-[180px] relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[130.43%] left-[-2.22%] max-w-none top-[-20.16%] w-[104.75%]" src={imgGeminiGeneratedImage1} />
                  </div>
                </div>
              </div>
              <div className={`${FADE} ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-name="orange_box">
                <div className="h-[146px] w-[180px] relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[136.36%] left-[-0.3%] max-w-none top-[-22.54%] w-[101.59%]" src={imgGeminiGeneratedImage2} />
                  </div>
                </div>
              </div>
              <div className={`${FADE} ${currentSlide === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-name="orange_box">
                <div className="h-[150px] w-[180px] relative">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[114.81%] left-[-1.07%] max-w-none top-[-9.95%] w-[101.64%]" src={imgFullbox} />
                  </div>
                </div>
              </div>
              <div className={`${FADE} ${currentSlide === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-name="cheesecat">
                <div className="aspect-[400/400] flex-[1_0_0] min-w-px relative size-[180px]" data-name="cat1-3 2">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCat132} />
                </div>
                <Orange className="h-[23px] w-[25px] left-[75px] top-0" />
                <Orange className="h-[25px] w-[29px] left-[-8px] top-[158px]" />
                <Orange className="h-[21px] w-[23px] left-[10px] top-[166px]" />
                <Orange className="h-[26px] w-[27px] left-[134px] top-[158px]" />
                <Orange className="h-[20px] w-[26px] left-[118px] top-[167px]" />
              </div>
            </div>
            <div className={`absolute content-stretch flex flex-col items-start left-[236px] top-[310px] transition-opacity duration-500 ease-in-out ${currentSlide === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-name="mal_box">
              <div className="h-[70px] relative shrink-0 w-[106px]" data-name="img">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[165.71%] left-[-31.13%] max-w-none top-[-21.43%] w-[164.15%]" src={imgMalBox} />
                </div>
              </div>
            </div>
            <div className={`absolute content-stretch flex items-center justify-center left-[267px] top-[334px] transition-opacity duration-500 ease-in-out ${currentSlide === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} data-name="p">
              <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">Hㅏei</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
