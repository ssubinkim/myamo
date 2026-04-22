import { useState, useRef, useEffect, useCallback } from 'react';
import imgCat191 from "../../imports/IntroNotice/12e2e55ad92f3bdd98ae54f6c9d54458549df1a4.png";
import imgBell1 from "../../imports/IntroNotice/7b28644c182a0d74ea5981876b0670c2a275a5fd.png";

interface IntroNoticeContentProps {
  onComplete: () => void;
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

function ScrollPicker<T extends string | number>({
  value,
  onChange,
  items,
  format,
}: {
  value: T;
  onChange: (val: T) => void;
  items: T[];
  format?: (item: T) => string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ITEM_H = 40;
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);
  const snapTimer = useRef<NodeJS.Timeout>();

  // 최신 값을 ref로 유지 (클로저 stale 방지)
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // 마운트 시 현재 값 위치로 스크롤
  useEffect(() => {
    if (!scrollRef.current) return;
    const idx = items.indexOf(value);
    if (idx >= 0) scrollRef.current.scrollTop = idx * ITEM_H;
  }, []);

  const snap = useCallback(() => {
    if (!scrollRef.current) return;
    const idx = Math.round(scrollRef.current.scrollTop / ITEM_H);
    const clamped = Math.max(0, Math.min(itemsRef.current.length - 1, idx));
    scrollRef.current.scrollTo({ top: clamped * ITEM_H, behavior: 'smooth' });
    const next = itemsRef.current[clamped];
    if (next !== undefined) onChangeRef.current(next);
  }, []);

  // 터치 드래그
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startY.current = e.touches[0].clientY;
    startScrollTop.current = scrollRef.current?.scrollTop ?? 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop =
      startScrollTop.current - (e.touches[0].clientY - startY.current);
  };
  const onTouchEnd = () => {
    isDragging.current = false;
    snap();
  };

  // 마우스 드래그 (window에 등록해서 영역 벗어나도 동작)
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    startY.current = e.clientY;
    startScrollTop.current = scrollRef.current?.scrollTop ?? 0;

    const onMove = (ev: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      scrollRef.current.scrollTop =
        startScrollTop.current - (ev.clientY - startY.current);
    };
    const onUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      snap();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // 터치 관성 후 스냅
  const onScroll = () => {
    if (isDragging.current) return;
    if (snapTimer.current) clearTimeout(snapTimer.current);
    snapTimer.current = setTimeout(snap, 150);
  };

  const display = (item: T) =>
    format ? format(item) : typeof item === 'number' ? item.toString().padStart(2, '0') : String(item);

  return (
    <div className="relative select-none">
      {/* 선택 하이라이트 */}
      <div className="absolute top-[40px] left-0 right-0 h-[40px] bg-[rgba(246,95,30,0.1)] rounded-[8px] pointer-events-none z-10" />
      <div
        ref={scrollRef}
        onScroll={onScroll}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="h-[120px] overflow-y-auto scrollbar-hide relative cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overscrollBehavior: 'contain' }}
      >
        <div className="py-[40px]">
          {items.map((item, idx) => {
            const isSelected = items.indexOf(value) === idx;
            return (
              <div
                key={idx}
                className="h-[40px] px-[6px] flex items-center justify-center"
                style={{ color: isSelected ? '#111' : '#ccc', transition: 'color 0.2s ease' }}
              >
                <p className="font-['Pretendard',sans-serif] leading-none not-italic text-[18px] whitespace-nowrap">
                  {display(item)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function IntroNoticeContent({ onComplete }: IntroNoticeContentProps) {
  const [period, setPeriod] = useState<'AM' | 'PM'>('AM');
  const [hour, setHour] = useState(9);
  const [minute, setMinute] = useState(0);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);
  const periods: ('AM' | 'PM')[] = ['AM', 'PM'];

  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] h-full" data-name="intro_notice">
      <style dangerouslySetInnerHTML={{ __html: `.scrollbar-hide::-webkit-scrollbar { display: none; }` }} />
      <FixBar />
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="container">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[36px] relative size-full">
            <div className="content-stretch flex flex-col gap-[42px] items-center relative shrink-0 w-full" data-name="li">
              <div className="content-stretch flex flex-col gap-[26px] items-center pt-[20px] relative shrink-0 w-full" data-name="container">
                <div className="content-stretch flex h-[120px] items-center relative shrink-0 w-[110px]" data-name="cheesecat">
                  <div className="flex-[1_0_0] h-full min-w-px relative" data-name="cat1-9 1">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[117.65%] left-[-17.19%] max-w-none top-[-6.25%] w-[125%]" src={imgCat191} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[6px] items-start justify-center not-italic relative rounded-[16px] shrink-0 text-black text-center w-full" data-name="container">
                  <p className="font-['Pretendard:ExtraLight',sans-serif] leading-none relative shrink-0 text-[22px] w-full">꾸준한 기록습관을 위한</p>
                  <p className="font-['Pretendard:Medium',sans-serif] leading-[0] relative shrink-0 text-[0px] w-full">
                    <span className="leading-none text-[22px]">알림설정</span>
                    <span className="font-['Pretendard:ExtraLight',sans-serif] leading-none text-[22px]">을 도와드릴게요 !</span>
                  </p>
                </div>
              </div>
              <div className="bg-white relative rounded-[16px] shrink-0 w-full h-[160px]" data-name="input_wrap">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[20px] items-center justify-center px-[20px] py-[10px] relative size-full">
                    <div className="content-stretch flex h-[22px] items-center relative shrink-0 w-[20px]" data-name="Component 8">
                      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="bell 1">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute h-[196.91%] left-[-112.47%] max-w-none top-[-44.8%] w-[324.73%]" src={imgBell1} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[160px]" data-name="p">
                      <div className="w-[45px]">
                        <ScrollPicker<'AM' | 'PM'>
                          value={period}
                          onChange={setPeriod}
                          items={periods}
                        />
                      </div>
                      <div className="w-[35px]">
                        <ScrollPicker<number>
                          value={hour}
                          onChange={setHour}
                          items={hours}
                        />
                      </div>
                      <p className="font-['Pretendard',sans-serif] leading-none not-italic text-[#111] text-[18px]">:</p>
                      <div className="w-[35px]">
                        <ScrollPicker<number>
                          value={minute}
                          onChange={setMinute}
                          items={minutes}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px]" />
              </div>
            </div>
            <button onClick={onComplete} className="bg-[#f65f1e] content-stretch flex flex-col h-[42px] items-center justify-center px-[20px] py-[10px] relative rounded-[16px] shrink-0 w-[100px]" data-name="button">
              <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
              <p className="font-['Pretendard',sans-serif] font-normal leading-none relative shrink-0 text-[18px] text-white whitespace-nowrap">완료</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
