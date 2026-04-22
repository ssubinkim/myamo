import imgGeminiGeneratedImage8Glnmc8Glnmc8GlnPhotoroom1 from "./95ca83fd1468857f161104896c6890a54f432add.png";

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

function Center() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="center">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pt-[100px] relative size-full">
          <div className="content-stretch flex h-[150px] items-center justify-center relative shrink-0 w-[180px]" data-name="orange_box">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_8glnmc8glnmc8gln-Photoroom 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.43%] left-[-2.22%] max-w-none top-[-20.16%] w-[104.75%]" src={imgGeminiGeneratedImage8Glnmc8Glnmc8GlnPhotoroom1} />
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
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] size-full" data-name="intro_splash1">
      <FixBar />
      <Center />
    </div>
  );
}