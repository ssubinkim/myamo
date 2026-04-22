import imgGeminiGeneratedImageP54Spgp54Spgp54SPhotoroom1 from "./4ba3b44c84e8e44f27d67ef9b60261e638b9b489.png";

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
          <div className="content-stretch flex h-[146px] items-center justify-center relative shrink-0 w-[180px]" data-name="orange_box">
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_p54spgp54spgp54s-Photoroom 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[136.36%] left-[-0.3%] max-w-none top-[-22.54%] w-[101.59%]" src={imgGeminiGeneratedImageP54Spgp54Spgp54SPhotoroom1} />
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
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] size-full" data-name="intro_splash2">
      <FixBar />
      <Center />
    </div>
  );
}