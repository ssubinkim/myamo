import imgGeminiGeneratedImageP54Spgp54Spgp54SPhotoroom1 from "../../imports/Main/4ba3b44c84e8e44f27d67ef9b60261e638b9b489.png";
import imgImagePhotoroom1 from "../../imports/Main/e5443ea52cb820c74f295b57067cb66a138d4637.png";
import imgCat1Photoroom2 from "../../imports/Main/ea5ef1446dd46742d0aa633c734303fd05c3d41e.png";
import imgImg from "../../imports/Main/0f2acf139d862e139f4cbc7da0d3fc7cd06d500b.png";
import imgBox1 from "../../imports/box1.png";
import imgBox2 from "../../imports/box2.png";
import imgBox3 from "../../imports/box3.png";
import imgBox4 from "../../imports/box4.png";

interface MainContentProps {
  onProfileClick: () => void;
  onFarmClick: () => void;
  userName: string;
  catName: string;
  memoCount: number;
}

function Fix() {
  return <div className="bg-[rgba(204,204,204,0.8)] h-[36px] rounded-[999px] shrink-0 w-[127px]" data-name="fix" />;
}

function FixBar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[10px] relative shrink-0 w-[390px]" data-name="fix_bar">
      <Fix />
    </div>
  );
}

function P({ memoCount }: { memoCount: number }) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="p">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[14px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#1e293b] text-[14px] text-center whitespace-nowrap">{memoCount} / 100</p>
        </div>
      </div>
    </div>
  );
}

function Li({ memoCount }: { memoCount: number }) {
  return (
    <div className="absolute h-[22px] left-[60px] rounded-br-[8px] rounded-tr-[8px] top-[22px] w-[90px]" data-name="li">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <P memoCount={memoCount} />
      </div>
      <div aria-hidden="true" className="absolute border-[#1e293b] border-[0.8px] border-solid inset-[-0.4px] pointer-events-none rounded-br-[8.4px] rounded-tr-[8.4px]" />
    </div>
  );
}

const getOrangeImage = (memoCount: number) => {
  if (memoCount === 0) return imgBox1;
  if (memoCount <= 10) return imgBox2;
  if (memoCount <= 20) return imgBox3;
  return imgBox4;
};

function Score({ memoCount, onFarmClick }: { memoCount: number; onFarmClick: () => void }) {
  const orangeImage = getOrangeImage(memoCount);
  
  return (
    <div className="content-stretch flex items-center justify-center pr-[21px] relative shrink-0" data-name="score">
      <Li memoCount={memoCount} />
      <button onClick={onFarmClick} className="content-stretch flex h-[65px] items-center mr-[-21px] relative shrink-0 w-[84px]" data-name="orange_box">
        <img alt="" className="w-full h-full object-contain" src={orangeImage} />
      </button>
    </div>
  );
}

function Myname({ userName }: { userName: string }) {
  return (
    <div className="bg-white h-[22px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-full" data-name="myname">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center pr-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">{userName || '슈빈'}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#1e293b] border-[0.8px] border-solid inset-[-0.4px] pointer-events-none rounded-bl-[8.4px] rounded-tl-[8.4px]" />
    </div>
  );
}

function Catname({ catName }: { catName: string }) {
  return (
    <div className="bg-white h-[18px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[70px]" data-name="catname">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip pr-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#1e293b] text-[12px] whitespace-nowrap">{catName || '고영희'}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#1e293b] border-[0.8px] border-solid inset-[-0.4px] pointer-events-none rounded-bl-[8.4px] rounded-tl-[8.4px]" />
    </div>
  );
}

function Frame({ userName, catName }: { userName: string; catName: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end justify-end mr-[-15px] relative shrink-0 w-[76px]">
      <Myname userName={userName} />
      <Catname catName={catName} />
    </div>
  );
}

function Me() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[46px]" data-name="me">
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image-Photoroom 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[134.62%] left-[-44.75%] max-w-none top-[-17.75%] w-[187.03%]" src={imgImagePhotoroom1} />
        </div>
      </div>
    </div>
  );
}

function Btn({ onProfileClick }: { onProfileClick: () => void }) {
  return (
    <button onClick={onProfileClick} className="bg-white content-stretch flex items-center justify-center mr-[-15px] relative rounded-[50px] shrink-0 size-[62px]" data-name="btn">
      <div aria-hidden="true" className="absolute border-[#1e293b] border-[0.8px] border-solid inset-[-0.4px] pointer-events-none rounded-[50.4px]" />
      <Me />
    </button>
  );
}

function Profile({ onProfileClick, userName, catName }: { onProfileClick: () => void; userName: string; catName: string }) {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-center pb-[2px] pr-[15px] relative shrink-0" data-name="profile">
      <Frame userName={userName} catName={catName} />
      <Btn onProfileClick={onProfileClick} />
    </div>
  );
}

function Header({ memoCount, onProfileClick, onFarmClick, userName, catName }: { memoCount: number; onProfileClick: () => void; onFarmClick: () => void; userName: string; catName: string }) {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[10px] px-[20px] relative size-full">
          <Score memoCount={memoCount} onFarmClick={onFarmClick} />
          <Profile onProfileClick={onProfileClick} userName={userName} catName={catName} />
          <div className="absolute content-stretch flex h-[30px] items-center left-[344px] top-[42px] w-[24px]" data-name="cheesecat">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="cat1-Photoroom 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCat1Photoroom2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="content-stretch flex flex-col h-[400px] items-start relative shrink-0 w-full" data-name="background">
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="img">
        <div className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute h-[181%] left-[-8.85%] max-w-none top-[-50%] w-[111.23%]" src={imgImg} />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[18px] relative size-full">
          <Background />
        </div>
      </div>
    </div>
  );
}

export function MainContent({ onProfileClick, onFarmClick, userName, catName, memoCount }: MainContentProps) {
  return (
    <div className="bg-[#fffbf2] content-stretch flex flex-col gap-[8px] items-center overflow-clip relative rounded-[49px] size-full" data-name="main">
      <FixBar />
      <Header memoCount={memoCount} onProfileClick={onProfileClick} onFarmClick={onFarmClick} userName={userName} catName={catName} />
      <Container />
      <div className="absolute content-stretch flex items-center left-[153px] size-[84px] top-[483px]" data-name="cheesecat">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="cat1-Photoroom 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCat1Photoroom2} />
        </div>
      </div>
    </div>
  );
}
