import { useState, useRef, useEffect } from 'react';
import svgPaths from "../../imports/Right/svg-ddh6t126gu";
import imgGeminiGeneratedImage8Glnmc8Glnmc8GlnPhotoroom1 from "../../imports/Right/95ca83fd1468857f161104896c6890a54f432add.png";
import imgOrange11 from "../../imports/Right/f09c5af308b73c48641aee180262f44f925f694c.png";
import imgImage59 from "../../imports/Right/08f023feec7809a44ad04b257669f326ac638c35.png";
import imgImage60 from "../../imports/Right/9430e4f7a478f23792ca47b17ac3f3bd8392ec44.png";
import imgHeartCatPhotoroom1 from "../../imports/Right/83718a1f12162b12dcf029465d1f9865b1a9dc6e.png";
import imgAngryCatPhotoroom1 from "../../imports/Right/697639c3bfc838d03b90c8aba0b67eaeb366bc64.png";
import imgCryingCatPhotoroom1 from "../../imports/Right/ab4a1361f977c81294def5924d9a7990df767552.png";
import imgPlusMath from "../../imports/Right/962ef48595bc7f4fff0e3ef1fb2f62ddc39f751b.png";
import imgImage62 from "../../imports/Right/ab23ddf2ed1b16c6e2233db59705f464318c81d7.png";

import type { DiaryEntry } from '../App';

interface WriteContentProps {
  onBack: () => void;
  onFarmClick: () => void;
  diaryEntries: { [key: string]: DiaryEntry };
  onUpdateEntry: (date: string, entry: Partial<DiaryEntry>) => void;
  onMemoAdd: () => void;
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

function Icon({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="h-[38px] relative shrink-0 w-[42px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 38">
        <g id="Icon">
          <path d={svgPaths.p1e72880} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </button>
  );
}

function Button({ onBack }: { onBack: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="content-stretch flex flex-col items-start pl-[6px] relative size-full">
        <Icon onClick={onBack} />
      </div>
    </div>
  );
}

function Tit() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="tit">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-px not-italic relative text-[#1e293b] text-[22px] tracking-[0.3px] whitespace-pre-wrap">
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2] mb-[4px]">{`Good Morning, `}</p>
        <p className="font-['Pretendard:SemiBold',sans-serif] leading-[1.2]">수빈</p>
      </div>
    </div>
  );
}

function Top({ onFarmClick }: { onFarmClick: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="top">
      <div className="content-stretch flex items-start justify-between pl-[10px] relative size-full">
        <Tit />
        <button onClick={onFarmClick} className="content-stretch flex items-center relative self-stretch shrink-0 w-[69px]" data-name="orange_box">
          <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_8glnmc8glnmc8gln-Photoroom 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[130.43%] left-[-2.22%] max-w-none top-[-20.16%] w-[104.75%]" src={imgGeminiGeneratedImage8Glnmc8Glnmc8GlnPhotoroom1} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

function DayItem({ day, dayName, isSelected, onClick, itemRef }: { day: number; dayName: string; isSelected: boolean; onClick: () => void; itemRef?: React.RefObject<HTMLButtonElement> }) {
  return (
    <button
      ref={itemRef}
      onClick={onClick}
      className={`flex-shrink-0 h-full w-[50px] relative ${isSelected ? 'bg-[#ff6900] rounded-[10px]' : ''}`}
      data-name="li"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className={`content-stretch flex flex-col ${isSelected ? '' : 'gap-[2px]'} items-center justify-center leading-[0] not-italic py-[4px] relative size-full ${isSelected ? 'text-white' : 'text-[#1e293b]'} text-center tracking-[0.3px]`}>
          <div className={`flex ${isSelected ? 'flex-[1_0_0]' : ''} flex-col font-['Pretendard:SemiBold',sans-serif] ${isSelected ? 'min-h-px' : 'h-[24px]'} justify-center relative shrink-0 text-[18px] w-full`}>
            <p className="leading-[26px]">{day}</p>
          </div>
          <div className={`flex ${isSelected ? 'flex-[1_0_0] font-[\'Pretendard:Medium\',sans-serif] min-h-px' : 'font-[\'Pretendard:ExtraLight\',sans-serif]'} flex-col justify-center relative ${isSelected ? '' : 'shrink-0'} text-[14px] w-full`}>
            <p className="leading-[26px]">{dayName}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

function Ul({ selectedDay, onDaySelect }: { selectedDay: number; onDaySelect: (day: number) => void }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dayRefs = useRef<{ [key: number]: React.RefObject<HTMLButtonElement> }>({});

  // 더 많은 날짜 생성 (14일부터 30일까지)
  const days = Array.from({ length: 17 }, (_, i) => {
    const day = 14 + i;
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      day,
      name: dayNames[day % 7]
    };
  });

  // 각 날짜에 대한 ref 생성
  days.forEach((item) => {
    if (!dayRefs.current[item.day]) {
      dayRefs.current[item.day] = { current: null } as React.RefObject<HTMLButtonElement>;
    }
  });

  const scrollToCenter = (day: number) => {
    const container = scrollContainerRef.current;
    const dayElement = dayRefs.current[day]?.current;

    if (container && dayElement) {
      const containerWidth = container.offsetWidth;
      const elementLeft = dayElement.offsetLeft;
      const elementWidth = dayElement.offsetWidth;

      const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToCenter(selectedDay);
  }, [selectedDay]);

  const handleDayClick = (day: number) => {
    onDaySelect(day);
    scrollToCenter(day);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex gap-[8px] h-[60px] items-center relative shrink-0 w-full overflow-x-auto scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      data-name="ul"
    >
      {days.map((item) => (
        <DayItem
          key={item.day}
          day={item.day}
          dayName={item.name}
          isSelected={selectedDay === item.day}
          onClick={() => handleDayClick(item.day)}
          itemRef={dayRefs.current[item.day]}
        />
      ))}
    </div>
  );
}

function MemoHeader({ selectedDay, onDaySelect, onFarmClick }: { selectedDay: number; onDaySelect: (day: number) => void; onFarmClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[22px] items-center justify-center pb-[20px] relative rounded-[16px] shrink-0 w-full" data-name="memo_header">
      <Top onFarmClick={onFarmClick} />
      <Ul selectedDay={selectedDay} onDaySelect={onDaySelect} />
    </div>
  );
}

function CheckOran() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[16px]" data-name="check_oran">
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="orange1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[400%] left-[-137.74%] max-w-none top-[-151%] w-[377.36%]" src={imgOrange11} />
        </div>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-none">오늘 하루를 기록해 보세요 !</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="relative shrink-0 w-full" data-name="p">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[10px] relative size-full">
          <CheckOran />
          <Span />
        </div>
      </div>
    </div>
  );
}

function EmojiBox({ selectedEmoji, onEmojiClick }: { selectedEmoji: number | null; onEmojiClick: (index: number) => void }) {
  const emojis = [
    { id: 0, img: imgImage59 },
    { id: 1, img: imgImage60 },
    { id: 2, img: imgHeartCatPhotoroom1 },
    { id: 3, img: imgAngryCatPhotoroom1 },
    { id: 4, img: imgCryingCatPhotoroom1 }
  ];

  return (
    <div className="bg-white content-stretch flex h-[70px] items-center justify-between px-[14px] py-[10px] relative rounded-[16px] shrink-0 w-[342px]" data-name="emoji_box">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[16.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      {emojis.map((emoji) => (
        <button
          key={emoji.id}
          onClick={() => onEmojiClick(emoji.id)}
          className={`content-stretch flex items-center relative shrink-0 size-[50px] ${selectedEmoji === emoji.id ? '' : 'opacity-30'}`}
          data-name="emoji"
        >
          <div className="relative shrink-0 size-[50px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={emoji.img} />
          </div>
        </button>
      ))}
    </div>
  );
}

function Emoji({ selectedEmoji, onEmojiClick }: { selectedEmoji: number | null; onEmojiClick: (index: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center justify-center relative rounded-[16px] shrink-0 w-full" data-name="emoji">
      <P />
      <EmojiBox selectedEmoji={selectedEmoji} onEmojiClick={onEmojiClick} />
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="span">
      <div className="relative shrink-0 size-[16px]" data-name="Component 6">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p31cb1b00} fill="var(--fill-0, #FC9F66)" id="Vector" />
        </svg>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="tit">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] tracking-[0.3px] whitespace-nowrap">
          <p className="leading-none">일기</p>
        </div>
      </div>
    </div>
  );
}

function Plus({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="plus">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Plus Math">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPlusMath} />
      </div>
    </button>
  );
}

function P1({ onSave }: { onSave: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="p">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] relative size-full">
          <Span1 />
          <Plus onClick={onSave} />
        </div>
      </div>
    </div>
  );
}

function P2({ diaryText, onDiaryChange }: { diaryText: string; onDiaryChange: (text: string) => void }) {
  return (
    <div className="bg-white min-h-[200px] relative rounded-[14px] shrink-0 w-full" data-name="p">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[14.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-start size-full">
        <div className="content-stretch flex items-start justify-center p-[20px] relative size-full">
          <textarea
            value={diaryText}
            onChange={(e) => {
              if (e.target.value.length <= 300) {
                onDiaryChange(e.target.value);
              }
            }}
            placeholder="오늘 하루를 기록해 보세요"
            className="w-full min-h-[160px] font-['Pretendard:Regular',sans-serif] leading-[1.3] not-italic text-[#222] text-[14px] bg-transparent border-none outline-none resize-none"
            style={{ color: diaryText ? '#222' : '#6a7282' }}
          />
        </div>
      </div>
    </div>
  );
}

function Contents({ diaryText, onDiaryChange }: { diaryText: string; onDiaryChange: (text: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="contents">
      <P2 diaryText={diaryText} onDiaryChange={onDiaryChange} />
    </div>
  );
}

function P3({ charCount }: { charCount: number }) {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575a61] text-[12px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[1.2]">{charCount} / 300</p>
      </div>
    </div>
  );
}

function Dairy({ diaryText, onDiaryChange }: { diaryText: string; onDiaryChange: (text: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[16px] shrink-0 w-full" data-name="dairy">
      <P1 onSave={() => {}} />
      <Contents diaryText={diaryText} onDiaryChange={onDiaryChange} />
      <P3 charCount={diaryText.length} />
    </div>
  );
}

function Span2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="span">
      <div className="relative shrink-0 size-[16px]" data-name="Component 6">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p31cb1b00} fill="var(--fill-0, #AAD59E)" id="Vector" />
        </svg>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="tit">
        <div className="flex flex-col font-['Pretendard:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[18px] tracking-[0.3px] whitespace-nowrap">
          <p className="leading-none">메모</p>
        </div>
      </div>
    </div>
  );
}

function Plus1({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="plus">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Plus Math">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPlusMath} />
      </div>
    </button>
  );
}

function P4({ onAddMemo }: { onAddMemo: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="p">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] relative size-full">
          <Span2 />
          <Plus1 onClick={onAddMemo} />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[14px]" data-name="icon">
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image 62">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[272.34%] left-[-119.06%] max-w-none top-[-80.32%] w-[328.91%]" src={imgImage62} />
        </div>
      </div>
    </div>
  );
}

function Txt({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pb-[4px] relative" data-name="txt">
      <div aria-hidden="true" className="absolute border-[#222] border-b-[0.6px] border-solid inset-[0_0_-0.6px_0] pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="메모입력하기"
        className="font-['Pretendard:Regular',sans-serif] leading-[1.1] not-italic text-[#111] text-[14px] bg-transparent border-none outline-none w-full"
        style={{ color: value ? '#111' : '#6a7282' }}
      />
    </div>
  );
}

function MemoItem({ value, onChange }: { value: string; onChange: (text: string) => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="p">
      <Icon1 />
      <Txt value={value} onChange={onChange} />
    </div>
  );
}

function MemoContainer({ memos, onMemoChange }: { memos: string[]; onMemoChange: (index: number, text: string) => void }) {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="txt">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[14.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[30px] py-[24px] relative size-full">
          {memos.map((memo, index) => (
            <MemoItem key={index} value={memo} onChange={(text) => onMemoChange(index, text)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function P6({ memoCount }: { memoCount: number }) {
  return (
    <div className="content-stretch flex items-end justify-end relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#575a61] text-[12px] tracking-[0.5px] whitespace-nowrap">
        <p className="leading-[1.2]">{memoCount} / 10</p>
      </div>
    </div>
  );
}

function Memo({ memos, onMemoChange, onAddMemo }: { memos: string[]; onMemoChange: (index: number, text: string) => void; onAddMemo: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[16px] shrink-0 w-full" data-name="memo">
      <P4 onAddMemo={onAddMemo} />
      <MemoContainer memos={memos} onMemoChange={onMemoChange} />
      <P6 memoCount={memos.length} />
    </div>
  );
}

function MemoContents({
  selectedEmoji,
  onEmojiClick,
  diaryText,
  onDiaryChange,
  memos,
  onMemoChange,
  onAddMemo
}: {
  selectedEmoji: number | null;
  onEmojiClick: (index: number) => void;
  diaryText: string;
  onDiaryChange: (text: string) => void;
  memos: string[];
  onMemoChange: (index: number, text: string) => void;
  onAddMemo: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full" data-name="memo_contents">
      <Emoji selectedEmoji={selectedEmoji} onEmojiClick={onEmojiClick} />
      <Dairy diaryText={diaryText} onDiaryChange={onDiaryChange} />
      <Memo memos={memos} onMemoChange={onMemoChange} onAddMemo={onAddMemo} />
    </div>
  );
}

function Container({
  selectedDay,
  onDaySelect,
  selectedEmoji,
  onEmojiClick,
  diaryText,
  onDiaryChange,
  memos,
  onMemoChange,
  onAddMemo,
  onFarmClick
}: {
  selectedDay: number;
  onDaySelect: (day: number) => void;
  selectedEmoji: number | null;
  onEmojiClick: (index: number) => void;
  diaryText: string;
  onDiaryChange: (text: string) => void;
  memos: string[];
  onMemoChange: (index: number, text: string) => void;
  onAddMemo: () => void;
  onFarmClick: () => void;
}) {
  return (
    <div className="flex-1 flex flex-col relative w-full overflow-hidden" data-name="container">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[24px] pt-[10px] relative shrink-0 w-full">
        <MemoHeader selectedDay={selectedDay} onDaySelect={onDaySelect} onFarmClick={onFarmClick} />
      </div>
      <div className="flex-1 overflow-y-auto px-[24px] pb-[10px] scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <MemoContents
          selectedEmoji={selectedEmoji}
          onEmojiClick={onEmojiClick}
          diaryText={diaryText}
          onDiaryChange={onDiaryChange}
          memos={memos}
          onMemoChange={onMemoChange}
          onAddMemo={onAddMemo}
        />
      </div>
    </div>
  );
}

export function WriteContent({ onBack, onFarmClick, diaryEntries, onUpdateEntry, onMemoAdd }: WriteContentProps) {
  const [selectedDay, setSelectedDay] = useState(20);

  const currentDate = `2026-04-${selectedDay.toString().padStart(2, '0')}`;
  const currentEntry = diaryEntries[currentDate];

  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(currentEntry?.emoji ?? null);
  const [diaryText, setDiaryText] = useState(currentEntry?.diary ?? '');
  const [memos, setMemos] = useState<string[]>(currentEntry?.memos ?? ['']);

  useEffect(() => {
    const newDate = `2026-04-${selectedDay.toString().padStart(2, '0')}`;
    const entry = diaryEntries[newDate];
    setSelectedEmoji(entry?.emoji ?? null);
    setDiaryText(entry?.diary ?? '');
    setMemos(entry?.memos ?? ['']);
  }, [selectedDay, diaryEntries]);

  const handleEmojiClick = (index: number) => {
    setSelectedEmoji(index);
    onUpdateEntry(currentDate, { emoji: index, diary: diaryText, memos });
  };

  const handleDiaryChange = (text: string) => {
    setDiaryText(text);
    onUpdateEntry(currentDate, { emoji: selectedEmoji, diary: text, memos });
  };

  const handleMemoChange = (index: number, text: string) => {
    const newMemos = [...memos];
    newMemos[index] = text;
    setMemos(newMemos);
    onUpdateEntry(currentDate, { emoji: selectedEmoji, diary: diaryText, memos: newMemos });
  };

  const handleAddMemo = () => {
    if (memos.length < 10) {
      const newMemos = [...memos, ''];
      setMemos(newMemos);
      onUpdateEntry(currentDate, { emoji: selectedEmoji, diary: diaryText, memos: newMemos });
      if (onMemoAdd) {
        onMemoAdd();
      }
    }
  };

  return (
    <div className="bg-[#fffbf2] content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip relative rounded-[49px] h-full" data-name="right">
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <FixBar />
      <Button onBack={onBack} />
      <Container
        selectedDay={selectedDay}
        onDaySelect={setSelectedDay}
        selectedEmoji={selectedEmoji}
        onEmojiClick={handleEmojiClick}
        diaryText={diaryText}
        onDiaryChange={handleDiaryChange}
        memos={memos}
        onMemoChange={handleMemoChange}
        onAddMemo={handleAddMemo}
        onFarmClick={onFarmClick}
      />
      <div className="h-[90px]" />
    </div>
  );
}