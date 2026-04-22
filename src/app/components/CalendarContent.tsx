import { useState } from 'react';
import type { DiaryEntry } from '../App';

interface CalendarContentProps {
  onBack: () => void;
  onFarmClick: () => void;
  diaryEntries: { [key: string]: DiaryEntry };
  onToggleBookmark: (date: string) => void;
}

import svgPaths from "../../imports/Left/svg-v9t9xnitkv";
import imgGeminiGeneratedImage8Glnmc8Glnmc8GlnPhotoroom1 from "../../imports/Left/95ca83fd1468857f161104896c6890a54f432add.png";
import imgOrange11 from "../../imports/Left/f09c5af308b73c48641aee180262f44f925f694c.png";
import img83B4794EDd2E498C8E7190E9112C6D8BPhotoroom1 from "../../imports/Left/cca2178b71e56a9cffe02a4bac53898f520f0e2d.png";
import imgImage67 from "../../imports/Left/4f07e5ca678dad88d5ca873b4b294cb626e16292.png";
import imgImage59 from "../../imports/Left/08f023feec7809a44ad04b257669f326ac638c35.png";
import imgImage62 from "../../imports/Left/ab23ddf2ed1b16c6e2233db59705f464318c81d7.png";
import imgPlusMath from "../../imports/Left/962ef48595bc7f4fff0e3ef1fb2f62ddc39f751b.png";
import imgImage60 from "../../imports/Right/9430e4f7a478f23792ca47b17ac3f3bd8392ec44.png";
import imgHeartCatPhotoroom1 from "../../imports/Right/83718a1f12162b12dcf029465d1f9865b1a9dc6e.png";
import imgAngryCatPhotoroom1 from "../../imports/Right/697639c3bfc838d03b90c8aba0b67eaeb366bc64.png";
import imgCryingCatPhotoroom1 from "../../imports/Right/ab4a1361f977c81294def5924d9a7990df767552.png";
import imgImage66 from "../../imports/LeftAct2-1/87adc94d946d5f01a118bdf85656fb280efffe30.png";

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

function Btn({ onBack }: { onBack: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="btn">
      <Icon onClick={onBack} />
    </div>
  );
}

function BtnBox({ onBack, onFarmClick }: { onBack: () => void; onFarmClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center pl-[12px] pr-[14px] relative shrink-0 w-[390px]" data-name="btn_box">
      <Btn onBack={onBack} />
      <button onClick={onFarmClick} className="content-stretch flex h-[40px] items-center relative shrink-0 w-[60px]" data-name="orange_box">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Gemini_Generated_Image_8glnmc8glnmc8gln-Photoroom 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[130.43%] left-[-2.22%] max-w-none top-[-20.16%] w-[104.75%]" src={imgGeminiGeneratedImage8Glnmc8Glnmc8GlnPhotoroom1} />
          </div>
        </div>
      </button>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[22369600px] shrink-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function P() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="p">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[22px] tracking-[0.3px] whitespace-nowrap">
        <p className="leading-[1.2]">April</p>
      </div>
    </div>
  );
}

function P1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="p">
      <p className="font-['Pretendard:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#515f7a] text-[12px] whitespace-nowrap">2026</p>
    </div>
  );
}

function DateDisplay() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-w-px relative" data-name="date">
      <P />
      <P1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M1 13L7 7L1 1" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[22369600px] shrink-0 w-[24px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="container">
      <Button />
      <DateDisplay />
      <Button1 />
    </div>
  );
}

function Li() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="li">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f33b0c] text-[14px] whitespace-nowrap">Sun</p>
        </div>
      </div>
    </div>
  );
}

function Li1() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="li">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">Mon</p>
        </div>
      </div>
    </div>
  );
}

function Li2() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="li">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">Tue</p>
        </div>
      </div>
    </div>
  );
}

function Li3() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="li">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">Wed</p>
        </div>
      </div>
    </div>
  );
}

function Li4() {
  return (
    <div className="col-5 justify-self-stretch relative row-1 self-start shrink-0" data-name="li">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">Thu</p>
        </div>
      </div>
    </div>
  );
}

function Li5() {
  return (
    <div className="col-6 justify-self-stretch relative row-1 self-start shrink-0" data-name="li">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">Fri</p>
        </div>
      </div>
    </div>
  );
}

function Li6() {
  return (
    <div className="col-7 justify-self-stretch relative row-1 self-start shrink-0" data-name="li">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e293b] text-[14px] whitespace-nowrap">Sat</p>
        </div>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="gap-x-[16px] gap-y-[29px] grid grid-cols-[repeat(7,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
      <Li4 />
      <Li5 />
      <Li6 />
    </div>
  );
}

function P2({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-4 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-1 shrink-0 w-[34px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P3({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-6 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-2 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P4({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-7 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-1 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P5({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-7 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-2 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P6({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-6 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-1 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P7({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-5 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-2 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P8({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-4 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-2 shrink-0 w-[34px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P9({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-3 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-2 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P10({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-2 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-2 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P11({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-1 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-2 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P12({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-1 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-3 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P13({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-2 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-3 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P14({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-3 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-3 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P15({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-4 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-3 shrink-0 w-[34px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P16({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-5 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-3 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P17({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-6 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-3 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P18({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-7 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-3 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P19({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-7 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-4 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P20({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-6 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-4 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P21({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-5 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-4 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P22({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-4 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-4 shrink-0 w-[34px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P23({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-3 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-4 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P24({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-2 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-4 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P25({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-1 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-4 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P26({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-1 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-5 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P27({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-2 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-5 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P28({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-3 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-5 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P29({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-4 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-5 shrink-0 w-[34px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P30({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-5 content-stretch flex flex-col h-[42px] items-center justify-center pb-[10px] relative row-5 shrink-0 w-[38px] cursor-pointer" data-name="p">
      <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
      {hasEntry && (
        <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
          <img alt="" className="size-full object-contain" src={imgOrange11} />
        </div>
      )}
    </button>
  );
}

function P31({ day, hasEntry }: { day: number; hasEntry: boolean }) {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="p">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[10px] relative size-full">
          <p className="font-['Pretendard:Medium',sans-serif] leading-none not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">{day}</p>
          {hasEntry && (
            <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 size-[32px]">
              <img alt="" className="size-full object-contain" src={imgOrange11} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Button2({ day, hasEntry, selectedDay, setSelectedDay }: { day: number; hasEntry: boolean; selectedDay: number; setSelectedDay: (day: number) => void }) {
  return (
    <button onClick={() => setSelectedDay(day)} className="col-5 content-stretch flex flex-col items-center justify-center relative rounded-[10px] row-1 self-stretch shrink-0 w-[38px] cursor-pointer" data-name="Button">
      <P31 day={day} hasEntry={hasEntry} />
    </button>
  );
}

function Container3({ diaryEntries, selectedDay, setSelectedDay }: {
  diaryEntries: { [key: string]: DiaryEntry };
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}) {
  const hasEntry = (day: number) => {
    const dateKey = `2026-04-${day.toString().padStart(2, '0')}`;
    const entry = diaryEntries[dateKey];
    return entry && (entry.diary.trim() !== '' || entry.memos.some(m => m.trim() !== ''));
  };

  return (
    <div className="gap-x-[10px] gap-y-[12px] grid grid-cols-[_______fit-content(100%)_fit-content(100%)_fit-content(100%)_minmax(0,1fr)_fit-content(100%)_fit-content(100%)_fit-content(100%)] grid-rows-[_____42px_fit-content(100%)_fit-content(100%)_fit-content(100%)_fit-content(100%)] relative shrink-0 w-full" data-name="Container">
      <P2 day={1} hasEntry={hasEntry(1)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P3 day={3} hasEntry={hasEntry(3)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P4 day={4} hasEntry={hasEntry(4)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P5 day={11} hasEntry={hasEntry(11)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P6 day={10} hasEntry={hasEntry(10)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P7 day={9} hasEntry={hasEntry(9)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P8 day={8} hasEntry={hasEntry(8)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P9 day={7} hasEntry={hasEntry(7)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P10 day={6} hasEntry={hasEntry(6)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P11 day={5} hasEntry={hasEntry(5)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P12 day={12} hasEntry={hasEntry(12)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P13 day={13} hasEntry={hasEntry(13)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P14 day={14} hasEntry={hasEntry(14)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P15 day={15} hasEntry={hasEntry(15)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P16 day={16} hasEntry={hasEntry(16)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P17 day={17} hasEntry={hasEntry(17)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P18 day={18} hasEntry={hasEntry(18)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P19 day={25} hasEntry={hasEntry(25)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P20 day={24} hasEntry={hasEntry(24)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P21 day={23} hasEntry={hasEntry(23)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P22 day={22} hasEntry={hasEntry(22)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P23 day={21} hasEntry={hasEntry(21)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P24 day={20} hasEntry={hasEntry(20)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P25 day={19} hasEntry={hasEntry(19)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P26 day={26} hasEntry={hasEntry(26)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P27 day={27} hasEntry={hasEntry(27)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P28 day={28} hasEntry={hasEntry(28)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P29 day={29} hasEntry={hasEntry(29)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <P30 day={30} hasEntry={hasEntry(30)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <Button2 day={2} hasEntry={hasEntry(2)} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
    </div>
  );
}

function Cal({ diaryEntries, selectedDay, setSelectedDay }: {
  diaryEntries: { [key: string]: DiaryEntry };
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}) {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="cal">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[14px] items-center justify-center px-[10px] py-[12px] relative size-full">
          <Container2 />
          <Ul />
          <Container3 diaryEntries={diaryEntries} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        </div>
      </div>
    </div>
  );
}

function P33({ selectedDay }: { selectedDay: number }) {
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  // Calculate day of week for April 2026 (month 3, 0-indexed)
  const dateObj = new Date(2026, 3, selectedDay);
  const dayIndex = dateObj.getDay();
  const dayOfWeek = days[dayIndex];

  return (
    <div className="content-stretch flex font-['Pretendard:Medium',sans-serif] gap-[6px] items-start leading-none not-italic relative shrink-0 text-[#222b45] text-[16px] whitespace-nowrap" data-name="p">
      <p className="relative shrink-0">4월</p>
      <p className="relative shrink-0">{selectedDay}일</p>
      <p className="relative shrink-0">{dayOfWeek}</p>
    </div>
  );
}

function Span({ selectedDay, hasEntry }: { selectedDay: number; hasEntry: boolean }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="span">
      {hasEntry && (
        <div className="content-stretch flex flex-col items-start relative shrink-0 size-[18px]" data-name="oranges">
          <div className="flex-[1_0_0] min-h-px relative w-full" data-name="orange1 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[400%] left-[-137.74%] max-w-none top-[-151%] w-[377.36%]" src={imgOrange11} />
            </div>
          </div>
        </div>
      )}
      <P33 selectedDay={selectedDay} />
    </div>
  );
}

function MoreHorizontal() {
  return (
    <div className="content-stretch flex gap-[5px] h-full items-center justify-center overflow-clip px-[2px] relative shrink-0" data-name="more-horizontal">
      <div className="relative shrink-0 size-[2px]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p32cd9cf0} id="Vector" stroke="var(--stroke-0, #565656)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[2px]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p32cd9cf0} id="Vector" stroke="var(--stroke-0, #565656)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[2px]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p32cd9cf0} id="Vector" stroke="var(--stroke-0, #565656)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3({ isBookmarked, onToggleBookmark }: { isBookmarked: boolean; onToggleBookmark: () => void }) {
  return (
    <div className="content-stretch flex gap-[18px] h-full items-center relative shrink-0" data-name="icon">
      <button onClick={onToggleBookmark} className="content-stretch flex h-[19px] items-center relative shrink-0 w-[15px] cursor-pointer" data-name="Component 10">
        <div className="flex-[1_0_0] h-full min-w-px relative" data-name="image 66">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[197.68%] left-[-146.55%] max-w-none top-[-47.1%] w-[392.84%]"
              src={imgImage66}
              style={{
                filter: isBookmarked ? 'none' : 'grayscale(100%) brightness(0.7)',
                opacity: isBookmarked ? 1 : 0.3
              }}
            />
          </div>
        </div>
      </button>
      <div className="content-stretch flex flex-col items-start relative shrink-0 size-[15px]" data-name="Component 9">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image 67">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[237.59%] left-[-96.23%] max-w-none top-[-64.97%] w-[289.81%]" src={imgImage67} />
          </div>
        </div>
      </div>
      <MoreHorizontal />
    </div>
  );
}

function P32({ selectedDay, hasEntry, isBookmarked, onToggleBookmark }: { selectedDay: number; hasEntry: boolean; isBookmarked: boolean; onToggleBookmark: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="p">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[10px] pr-[6px] relative size-full">
          <Span selectedDay={selectedDay} hasEntry={hasEntry} />
          <div className="flex flex-row items-center self-stretch">
            <Icon3 isBookmarked={isBookmarked} onToggleBookmark={onToggleBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
}

function P34({ diaryText }: { diaryText: string }) {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="p">
      <div className="flex flex-row items-center justify-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex items-center justify-center pl-[15px] relative size-full">
          <p className="flex-[1_0_0] font-['Pretendard:Regular',sans-serif] h-full leading-none min-w-px not-italic relative text-[#6a7282] text-[14px]">
            {diaryText || '아직 기록이 없습니다.'}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cbcbcb] border-l border-solid inset-[0_0_0_-0.5px] pointer-events-none" />
    </div>
  );
}

function Li7({ currentEntry }: { currentEntry: DiaryEntry | undefined }) {
  const emojiImages = [imgImage59, imgImage60, imgHeartCatPhotoroom1, imgAngryCatPhotoroom1, imgCryingCatPhotoroom1];
  const emojiSrc = currentEntry?.emoji !== null && currentEntry?.emoji !== undefined ? emojiImages[currentEntry.emoji] : imgImage59;
  const hasEmoji = currentEntry?.emoji !== null && currentEntry?.emoji !== undefined;

  return (
    <div className="bg-white h-[198px] relative rounded-[14px] shrink-0 w-full" data-name="li">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[14.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[15px] items-center px-[20px] py-[16px] relative size-full">
          <div className="h-full relative shrink-0" data-name="emoji">
            <div className="content-stretch flex items-start pt-[10px] relative size-full">
              <div className="relative shrink-0 size-[50px]" data-name="image 59" style={{ opacity: hasEmoji ? 1 : 0.2 }}>
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={emojiSrc} />
              </div>
            </div>
          </div>
          <P34 diaryText={currentEntry?.diary || ''} />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[12px]" data-name="icon">
      <div className="flex-[1_0_0] min-h-px relative w-full" data-name="image 62">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[272.34%] left-[-119.06%] max-w-none top-[-80.32%] w-[328.91%]" src={imgImage62} />
        </div>
      </div>
    </div>
  );
}

function Txt({ text }: { text: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px pb-[2px] relative" data-name="txt">
      <div aria-hidden="true" className="absolute border-b-[0.6px] border-black border-solid inset-[0_0_-0.6px_0] pointer-events-none" />
      <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic relative shrink-0 text-[#6a7282] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="plus">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Plus Math">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgPlusMath} />
      </div>
    </div>
  );
}

function P35({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="p">
      <Icon4 />
      <Txt text={text} />
      <Plus />
    </div>
  );
}

function Contents({ memos }: { memos: string[] }) {
  const displayMemos = memos.filter(m => m.trim() !== '');

  return (
    <div className="content-stretch flex flex-col items-start gap-[10px] relative shrink-0 w-full" data-name="contents">
      {displayMemos.length > 0 ? (
        displayMemos.map((memo, index) => (
          <P35 key={index} text={memo} />
        ))
      ) : (
        <P35 text="아직 기록이 없습니다." />
      )}
    </div>
  );
}

function Li8({ currentEntry }: { currentEntry: DiaryEntry | undefined }) {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="li">
      <div aria-hidden="true" className="absolute border border-[#1e293b] border-solid inset-[-0.5px] pointer-events-none rounded-[14.5px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-[30px] pt-[24px] px-[20px] relative size-full">
        <Contents memos={currentEntry?.memos || []} />
      </div>
    </div>
  );
}

function Ul1({ currentEntry }: { currentEntry: DiaryEntry | undefined }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="ul">
      <Li7 currentEntry={currentEntry} />
      <Li8 currentEntry={currentEntry} />
    </div>
  );
}

function Container4({ currentEntry, currentDateDisplay, selectedDay, onToggleBookmark }: {
  currentEntry: DiaryEntry | undefined;
  currentDateDisplay: string;
  selectedDay: number;
  onToggleBookmark: (date: string) => void;
}) {
  const hasEntry = currentEntry && (currentEntry.diary.trim() !== '' || currentEntry.memos.some(m => m.trim() !== ''));
  const isBookmarked = currentEntry?.bookmarked || false;

  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center justify-center pt-[12px] relative rounded-[16px] shrink-0 w-full" data-name="container">
      <P32
        selectedDay={selectedDay}
        hasEntry={!!hasEntry}
        isBookmarked={isBookmarked}
        onToggleBookmark={() => onToggleBookmark(currentDateDisplay)}
      />
      <Ul1 currentEntry={currentEntry} />
    </div>
  );
}

function Container1({ diaryEntries, selectedDay, setSelectedDay }: {
  diaryEntries: { [key: string]: DiaryEntry };
  selectedDay: number;
  setSelectedDay: (day: number) => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="container">
      <Cal diaryEntries={diaryEntries} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
    </div>
  );
}

function Container({ diaryEntries, selectedDay, setSelectedDay, currentEntry, currentDateDisplay, onToggleBookmark }: {
  diaryEntries: { [key: string]: DiaryEntry };
  selectedDay: number;
  setSelectedDay: (day: number) => void;
  currentEntry: DiaryEntry | undefined;
  currentDateDisplay: string;
  onToggleBookmark: (date: string) => void;
}) {
  return (
    <div className="flex-1 overflow-y-auto px-[24px] pb-[10px] scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} data-name="container">
      <Container1 diaryEntries={diaryEntries} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <div className="pt-[20px]">
        <Container4 currentEntry={currentEntry} currentDateDisplay={currentDateDisplay} selectedDay={selectedDay} onToggleBookmark={onToggleBookmark} />
      </div>
    </div>
  );
}

export function CalendarContent({ onBack, onFarmClick, diaryEntries, onToggleBookmark }: CalendarContentProps) {
  const [selectedDay, setSelectedDay] = useState(20);
  const currentDateDisplay = `2026-04-${selectedDay.toString().padStart(2, '0')}`;
  const currentEntry = diaryEntries[currentDateDisplay];

  return (
    <div className="bg-[#fffbf2] content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[49px] h-full" data-name="left">
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
      <FixBar />
      <BtnBox onBack={onBack} onFarmClick={onFarmClick} />
      <Container
        diaryEntries={diaryEntries}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        currentEntry={currentEntry}
        currentDateDisplay={currentDateDisplay}
        onToggleBookmark={onToggleBookmark}
      />
      <div className="h-[90px]" />
    </div>
  );
}
