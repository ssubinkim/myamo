import imgCh1 from "../../imports/ch10.png";
import imgBeige1 from "../../imports/beige1.png";
import imgBlack1 from "../../imports/black1.png";
import imgWhite1 from "../../imports/white1.png";
import imgGray1 from "../../imports/gray1.png";
import imgMemBox from "../../imports/mem_box.png";
import imgAdImg from "../../imports/ad_img.png";
import imgCamera from "../../imports/camera.png";
import imgTre1 from "../../imports/tre1.png";
import imgShoe from "../../imports/shoe.png";
import imgTodo from "../../imports/todo.png";
import imgMusic from "../../imports/music.png";
import imgThem1 from "../../imports/them1.png";
import imgThem2 from "../../imports/them2.png";
import imgThem3 from "../../imports/them3.png";
import imgThem4 from "../../imports/them4.png";
import imgPur from "../../imports/pur.png";
import imgGreen from "../../imports/green.png";
import imgOran from "../../imports/oran.png";
import imgYello2 from "../../imports/yello2.png";
import imgYello1 from "../../imports/yello1.png";

interface MembershipContentProps {
  onBack: () => void;
  onSubscribe: () => void;
}

const features = [
  {
    starImg: imgPur,
    title: '다양한 고양이 캐릭터',
    desc: '다양한 고양이 캐릭터로\n기록해보세요',
    image: 'cats',
  },
  {
    starImg: imgGreen,
    title: '다양한 테마 이용',
    desc: '원하는 테마로\n자유롭게 꾸며보세요',
    image: 'theme',
  },
  {
    starImg: imgOran,
    title: '매달 귤 100개 선물',
    desc: '희귀 귤을 더 빠르고\n다양하게 모아보세요',
    image: 'box',
  },
  {
    starImg: imgYello2,
    title: '광고 제거',
    desc: '광고 없이 즐겁고\n편하게 기록하세요',
    image: 'ads',
  },
  {
    starImg: imgYello1,
    title: '더 많은 기능',
    desc: '사진기록, 걸음수, 투두 등\n10가지 이상의 기능으로\n더 편리하게 이용해보세요',
    image: 'more',
  },
];


function CatsImage() {
  const cats = [imgBeige1, imgBlack1, imgWhite1, imgGray1, imgTre1];
  return (
    <div className="flex flex-col items-center justify-center gap-[4px] w-[100px] h-[80px]">
      <div className="flex gap-[4px] justify-center">
        {cats.slice(0, 2).map((src, i) => (
          <img key={i} src={src} alt="" className="w-[32px] h-[32px] object-contain" />
        ))}
      </div>
      <div className="flex gap-[4px] justify-center">
        {cats.slice(2).map((src, i) => (
          <img key={i} src={src} alt="" className="w-[32px] h-[32px] object-contain" />
        ))}
      </div>
    </div>
  );
}

function ThemeImage() {
  return (
    <div className="relative w-[122px] h-[100px] rounded-[6px] overflow-hidden">
      <div className="flex items-center h-full">
        <img src={imgThem1} alt="" className="w-[50px] h-[100px] rounded-[4px] object-cover shrink-0" style={{ zIndex: 1 }} />
        <img src={imgThem2} alt="" className="w-[50px] h-[100px] rounded-[4px] object-cover shrink-0 -ml-[26px]" style={{ zIndex: 2 }} />
        <img src={imgThem3} alt="" className="w-[50px] h-[100px] rounded-[4px] object-cover shrink-0 -ml-[26px]" style={{ zIndex: 3 }} />
        <img src={imgThem4} alt="" className="w-[50px] h-[100px] rounded-[4px] object-cover shrink-0 -ml-[26px]" style={{ zIndex: 4 }} />
      </div>
    </div>
  );
}

function BoxImage() {
  return (
    <img src={imgMemBox} alt="" className="w-[90px] h-[80px] object-contain" />
  );
}

function AdsImage() {
  return (
    <div className="w-[80px] h-[80px] flex items-center justify-center">
      <img src={imgAdImg} alt="" className="w-[70px] h-[70px] object-contain" />
    </div>
  );
}

function MoreImage() {
  return (
    <div className="w-[100px] h-[80px] flex flex-wrap gap-[4px] items-center justify-center">
      <img src={imgCamera} alt="" className="w-[42px] h-[42px] object-contain" />
      <img src={imgShoe} alt="" className="w-[42px] h-[42px] object-contain" />
      <img src={imgTodo} alt="" className="w-[42px] h-[42px] object-contain" />
      <img src={imgMusic} alt="" className="w-[42px] h-[42px] object-contain" />
    </div>
  );
}

function FeatureImage({ type }: { type: string }) {
  if (type === 'cats') return <CatsImage />;
  if (type === 'theme') return <ThemeImage />;
  if (type === 'box') return <BoxImage />;
  if (type === 'ads') return <AdsImage />;
  return <MoreImage />;
}

export function MembershipContent({ onBack, onSubscribe }: MembershipContentProps) {
  return (
    <div
      className="flex flex-col items-center size-full"
      style={{ background: '#fff9ed', borderRadius: '49px', overflow: 'hidden' }}
    >
      {/* Fix bar */}
      <div className="flex justify-center pt-[10px] pb-[2px] w-full shrink-0">
        <div className="bg-[rgba(204,204,204,0.8)] h-[36px] rounded-[999px] w-[127px]" />
      </div>

      {/* Header */}
      <div className="flex items-center w-full px-[20px] py-[8px] shrink-0">
        <button onClick={onBack} className="h-[38px] relative shrink-0 w-[42px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 38">
            <path
              d="M26 8L14 19L26 30"
              stroke="#F54900"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto w-full" style={{ scrollbarWidth: 'none' }}>
        <style>{`.membership-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div className="membership-scroll flex flex-col items-center px-[24px] pb-[24px] gap-[20px] w-full">
          {/* Cat mascot */}
          <img
            src={imgCh1}
            alt="mascot"
            className="w-[100px] h-[100px] object-contain mt-[4px]"
          />

          {/* Title */}
          <div className="flex flex-col items-center gap-[2px] text-center">
            <p
              className="text-[20px] text-[#4a3728]"
              style={{ fontFamily: "'Pretendard:ExtraLight', sans-serif", fontWeight: 200 }}
            >
              하루를 더 귀엽게 기록해보세요
            </p>
            <p
              className="text-[20px] text-[#1e293b]"
              style={{ fontFamily: "'Pretendard:Medium', sans-serif", fontWeight: 200 }}
            >
              <span style={{ fontWeight: 500 }}>프리미엄</span>으로 더 많은 순간을 남겨요
            </p>
          </div>

          {/* Feature cards */}
          <div className="flex flex-col gap-[12px] w-full">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] w-full flex flex-row items-center gap-[20px] px-[16px] py-[20px]"
                style={{
                  border: '1px solid #1e293b',
                  boxShadow: '0px 4px 6px rgba(0,0,0,0.06)',
                }}
              >
                <div className="flex flex-col gap-[10px] flex-1 min-w-0">
                  <div className="flex flex-row items-center gap-[10px] pr-0 mr-0">
                    <img src={f.starImg} alt="" className="w-[22px] h-[22px] object-contain shrink-0" />
                    <p
                      className="text-[18px] text-[#1e293b] leading-none"
                      style={{ fontFamily: "'Pretendard:Medium', sans-serif", fontWeight: 500 }}
                    >
                      {f.title}
                    </p>
                  </div>
                  <p
                    className="text-[16px] text-[#6a7282] leading-[1.4] whitespace-pre-line pl-[26px] pr-0 mr-0"
                    style={{ fontFamily: "'Pretendard:Regular', sans-serif", fontWeight: 400 }}
                  >
                    {f.desc}
                  </p>
                </div>
                <div className="shrink-0 ml-0 flex items-center justify-center">
                  <FeatureImage type={f.image} />
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe button */}
          <button
            onClick={onSubscribe}
            className="bg-[#E9642C] w-full h-[52px] rounded-full mt-[4px] flex items-center justify-center border-[2.5px] border-[#B14A1E] shadow-[4px_4px_0px_0px_#B14A1E] active:shadow-[2px_2px_0px_0px_#B14A1E] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
          >
            <p
              className="text-[#FFF7EE] text-[17px] leading-none"
              style={{ fontFamily: "'Pretendard:Bold', sans-serif", fontWeight: 700 }}
            >
              구독하러 가기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
