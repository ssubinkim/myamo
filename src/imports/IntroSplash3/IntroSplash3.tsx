import imgFullboxPhotoroom2 from "./90f9c62de916a4fb167abb3b160d27598732acdc.png";

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
            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="fullbox-Photoroom 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[114.81%] left-[-1.07%] max-w-none top-[-9.95%] w-[101.64%]" src={imgFullboxPhotoroom2} />
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
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] size-full" data-name="intro_splash3">
      <FixBar />
      <Center />
    </div>
  );
}