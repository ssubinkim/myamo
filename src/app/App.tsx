import { useState } from 'react';
import { MainContent } from './components/MainContent';
import { CalendarContent } from './components/CalendarContent';
import { WriteContent } from './components/WriteContent';
import { ProfileContent } from './components/ProfileContent';
import { FarmContent } from './components/FarmContent';
import { BottomNav } from './components/BottomNav';
import { IntroSplashContent } from './components/IntroSplashContent';
import { IntroNameContent } from './components/IntroNameContent';
import { IntroCatnameContent } from './components/IntroCatnameContent';
import { IntroNoticeContent } from './components/IntroNoticeContent';
import { SubscribeContent } from './components/SubscribeContent';

export type DiaryEntry = {
  date: string; // "2026-04-20" 형식
  emoji: number | null;
  diary: string;
  memos: string[];
  bookmarked: boolean;
};

export default function App() {
  const [currentView, setCurrentView] = useState('intro-name');
  const [diaryEntries, setDiaryEntries] = useState<{ [key: string]: DiaryEntry }>({});
  const [userName, setUserName] = useState('');
  const [catName, setCatName] = useState('');
  const [memoCount, setMemoCount] = useState(0);

  const handleBack = () => {
    setCurrentView('main');
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  const updateDiaryEntry = (date: string, entry: Partial<DiaryEntry>) => {
    setDiaryEntries(prev => ({
      ...prev,
      [date]: {
        ...prev[date],
        date,
        emoji: entry.emoji ?? prev[date]?.emoji ?? null,
        diary: entry.diary ?? prev[date]?.diary ?? '',
        memos: entry.memos ?? prev[date]?.memos ?? [''],
        bookmarked: entry.bookmarked ?? prev[date]?.bookmarked ?? false
      }
    }));
  };

  return (
    <div className="size-full flex items-center justify-center bg-[#e5e5e5]">
      <div className="w-[390px] h-[844px] overflow-hidden relative">
        {currentView === 'intro-name' && (
          <IntroNameContent onComplete={(name) => {
            setUserName(name);
            setCurrentView('splash');
          }} />
        )}
        {currentView === 'splash' && (
          <IntroSplashContent onComplete={() => setCurrentView('intro-catname')} />
        )}
        {currentView === 'intro-catname' && (
          <IntroCatnameContent userName={userName} onComplete={(name) => {
            setCatName(name);
            setCurrentView('intro-notice');
          }} />
        )}
        {currentView === 'intro-notice' && (
          <IntroNoticeContent onComplete={() => setCurrentView('subscribe')} />
        )}
        {currentView === 'subscribe' && (
          <SubscribeContent
            onComplete={() => setCurrentView('main')}
            onSkip={() => setCurrentView('main')}
          />
        )}
        {currentView === 'main' && (
          <MainContent
            onProfileClick={handleProfileClick}
            onFarmClick={() => setCurrentView('farm')}
            userName={userName}
            catName={catName}
            memoCount={memoCount}
          />
        )}
        {currentView === 'farm' && (
          <FarmContent 
            onBack={handleBack} 
            onCalendarClick={() => setCurrentView('calendar')}
            onWriteClick={() => setCurrentView('write')}
            onHomeClick={() => setCurrentView('main')}
            onProfileClick={() => setCurrentView('profile')}
          />
        )}
        {currentView === 'calendar' && (
          <div className="h-full overflow-y-auto">
            <CalendarContent
              onBack={handleBack}
              onFarmClick={() => setCurrentView('farm')}
              diaryEntries={diaryEntries}
              onToggleBookmark={(date) => {
                if (diaryEntries[date]) {
                  updateDiaryEntry(date, { bookmarked: !diaryEntries[date].bookmarked });
                }
              }}
            />
          </div>
        )}
        {currentView === 'write' && (
          <div className="h-full overflow-y-auto">
            <WriteContent
              onBack={handleBack}
              onFarmClick={() => setCurrentView('farm')}
              diaryEntries={diaryEntries}
              onUpdateEntry={updateDiaryEntry}
              onMemoAdd={() => setMemoCount(prev => prev + 1)}
            />
          </div>
        )}
        {currentView === 'profile' && (
          <ProfileContent 
            onBack={handleBack} 
            onFarmClick={() => setCurrentView('farm')}
            onCalendarClick={() => setCurrentView('calendar')}
            onWriteClick={() => setCurrentView('write')}
            onHomeClick={() => setCurrentView('main')}
          />
        )}
        {currentView !== 'splash' && currentView !== 'intro-name' && currentView !== 'intro-catname' && currentView !== 'intro-notice' && currentView !== 'subscribe' && currentView !== 'farm' && (
          <BottomNav currentView={currentView} onNavigate={setCurrentView} />
        )}
      </div>
    </div>
  );
}