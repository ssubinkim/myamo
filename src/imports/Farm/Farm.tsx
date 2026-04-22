import svgPaths from "./svg-31pvp1xye8";
import imgBell1 from "./7b28644c182a0d74ea5981876b0670c2a275a5fd.png";
import imgTree from "./1a3505b49465bb9c4bf256238088b7336258d9ec.png";
import imgCalendar from "./fe366c9a084584fd1807e1a2faf56ad2cbdef12a.png";
import imgPencil1 from "./1f319363e649c5324a56c04542d9ec8632dfef35.png";
import imgHome1 from "./be7abaa5618478279c2675e88d6e9acf59518a6c.png";
import imgShop from "./1ae31fc4343b04de571e86121deb24224f6c66a0.png";
import imgDairy1 from "./ccab501880a2fee15f9025884b3fd44918cc3d9b.png";
import imgOrange11 from "./f09c5af308b73c48641aee180262f44f925f694c.png";

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

function Icon() {
  return (
    <div className="h-[38px] relative shrink-0 w-[42px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 38">
        <g id="Icon">
          <path d={svgPaths.p1e72880} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[22369600px] shrink-0" data-name="Button">
      <Icon />
    </div>
  );
}

function TopbtnBox() {
  return (
    <div className="content-stretch flex items-center justify-between px-[20px] relative shrink-0 w-[390px]" data-name="topbtn_box2">
      <Button />
      <div className="content-stretch flex h-[30px] items-center relative shrink-0 w-[26px]" data-name="icon">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bell 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[196.91%] left-[-112.47%] max-w-none top-[-44.8%] w-[324.73%]" src={imgBell1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="img">
      <div className="aspect-[1024/1024] flex-[1_0_0] min-w-px relative" data-name="tree">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTree} />
      </div>
    </div>
  );
}

function TreeBackground() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-[390px]" data-name="tree_background">
      <Img />
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex items-center justify-between p-[30px] relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-[390px]" data-name="ul">
      <div className="content-stretch flex items-center relative shrink-0 size-[50px]" data-name="Component 8">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="calendar">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[188.93%] left-[-46.05%] max-w-none top-[-43.36%] w-[192.48%]" src={imgCalendar} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 size-[50px]" data-name="Component 10">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="pencil 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[178.4%] left-[-40.6%] max-w-none top-[-30.66%] w-[181.56%]" src={imgPencil1} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 size-[50px]" data-name="Component 11">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="home 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[199.22%] left-[-37.76%] max-w-none top-[-42.41%] w-[174.15%]" src={imgHome1} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 size-[50px]" data-name="Component 12">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="shop">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[196.92%] left-[-77.67%] max-w-none top-[-41.73%] w-[256%]" src={imgShop} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 size-[50px]" data-name="Component 9">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="dairy 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[196.55%] left-[-52.32%] max-w-none top-[-46.83%] w-[197.68%]" src={imgDairy1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Farm() {
  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[49px] size-full" data-name="farm">
      <FixBar />
      <TopbtnBox />
      <TreeBackground />
      <Ul />
      <div className="absolute content-stretch flex flex-col h-[27px] items-start left-[131px] top-[320px] w-[29px]" data-name="oranges">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="orange1 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[400%] left-[-137.74%] max-w-none top-[-151%] w-[377.36%]" src={imgOrange11} />
          </div>
        </div>
      </div>
    </div>
  );
}