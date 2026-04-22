import imgCat132 from "./3e8cfecfbcd035bb3de6a1b0b9ffca12ac85b091.png";
import imgImg from "./bc6534d13a7ebd3d699724e047939e52ff292143.png";
import imgGeminiGeneratedImageGrxp12Grxp12GrxpPhotoroom1 from "./d337a2fc69fc8b355902a29a4d150807903f9906.png";

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

function MalBox() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[236px] top-[310px]" data-name="mal_box">
      <div className="h-[70px] relative shrink-0 w-[106px]" data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[165.71%] left-[-31.13%] max-w-none top-[-21.43%] w-[164.15%]" src={imgImg} />
        </div>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[267px] top-[334px]" data-name="p">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">Hㅏei</p>
    </div>
  );
}

function Center() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="center">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[100px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[180px]" data-name="cheesecat">
            <div className="aspect-[400/400] flex-[1_0_0] min-w-px relative" data-name="cat1-3 2">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCat132} />
            </div>
          </div>
          <MalBox />
          <P />
          <div className="absolute content-stretch flex h-[23px] items-center left-[180px] top-[352px] w-[25px]" data-name="oranges">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_grxp12grxp12grxp-Photoroom 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[122.07%] left-[-12.87%] max-w-none top-[-8.96%] w-[124.82%]" src={imgGeminiGeneratedImageGrxp12Grxp12GrxpPhotoroom1} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex h-[26px] items-center left-[231px] top-[487px] w-[27px]" data-name="oranges">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_grxp12grxp12grxp-Photoroom 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[122.07%] left-[-12.87%] max-w-none top-[-8.96%] w-[124.82%]" src={imgGeminiGeneratedImageGrxp12Grxp12GrxpPhotoroom1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IntroSplash() {
  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] size-full" data-name="intro_splash4">
      <FixBar />
      <Center />
      <div className="absolute content-stretch flex h-[20px] items-center left-[221px] top-[555px] w-[26px]" data-name="oranges">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_grxp12grxp12grxp-Photoroom 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[122.07%] left-[-12.87%] max-w-none top-[-8.96%] w-[124.82%]" src={imgGeminiGeneratedImageGrxp12Grxp12GrxpPhotoroom1} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[25px] items-center left-[112px] top-[546px] w-[29px]" data-name="oranges">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_grxp12grxp12grxp-Photoroom 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[122.07%] left-[-12.87%] max-w-none top-[-8.96%] w-[124.82%]" src={imgGeminiGeneratedImageGrxp12Grxp12GrxpPhotoroom1} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[21px] items-center left-[126px] top-[554px] w-[23px]" data-name="oranges">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_grxp12grxp12grxp-Photoroom 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[122.07%] left-[-12.87%] max-w-none top-[-8.96%] w-[124.82%]" src={imgGeminiGeneratedImageGrxp12Grxp12GrxpPhotoroom1} />
          </div>
        </div>
      </div>
    </div>
  );
}