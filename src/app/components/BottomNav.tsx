import imgCalendar from "../../imports/Main/fe366c9a084584fd1807e1a2faf56ad2cbdef12a.png";
import imgPencil1 from "../../imports/Main/1f319363e649c5324a56c04542d9ec8632dfef35.png";
import imgHome1 from "../../imports/Main/be7abaa5618478279c2675e88d6e9acf59518a6c.png";
import imgShop from "../../imports/Main/1ae31fc4343b04de571e86121deb24224f6c66a0.png";
import imgDairy1 from "../../imports/Main/ccab501880a2fee15f9025884b3fd44918cc3d9b.png";

interface BottomNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function BottomNav({ currentView, onNavigate }: BottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
      <div className="w-[390px] bg-[#fffbf2] rounded-bl-[49px] rounded-br-[48px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]">
        <div className="content-stretch flex items-center justify-between px-[30px] py-[20px]">
          <button
            onClick={() => onNavigate('calendar')}
            className="content-stretch flex items-center relative shrink-0 size-[50px]"
          >
            <div className="flex-[1_0_0] h-full min-w-px relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[188.93%] left-[-46.05%] max-w-none top-[-43.36%] w-[192.48%]" src={imgCalendar} />
              </div>
            </div>
          </button>
          <button
            onClick={() => onNavigate('write')}
            className="content-stretch flex items-center relative shrink-0 size-[50px]"
          >
            <div className="flex-[1_0_0] h-full min-w-px relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[178.4%] left-[-40.6%] max-w-none top-[-30.66%] w-[181.56%]" src={imgPencil1} />
              </div>
            </div>
          </button>
          <button
            onClick={() => onNavigate('main')}
            className="content-stretch flex flex-col items-start relative shrink-0 size-[50px]"
          >
            <div className="flex-[1_0_0] min-h-px relative w-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[199.22%] left-[-37.76%] max-w-none top-[-42.41%] w-[174.15%]" src={imgHome1} />
              </div>
            </div>
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="content-stretch flex flex-col items-start relative shrink-0 size-[50px]"
          >
            <div className="flex-[1_0_0] min-h-px relative w-full">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[196.92%] left-[-77.67%] max-w-none top-[-41.73%] w-[256%]" src={imgShop} />
              </div>
            </div>
          </button>
          <button
            onClick={() => onNavigate('diary')}
            className="content-stretch flex items-center relative shrink-0 size-[50px]"
          >
            <div className="flex-[1_0_0] h-full min-w-px relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[196.55%] left-[-52.32%] max-w-none top-[-46.83%] w-[197.68%]" src={imgDairy1} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
