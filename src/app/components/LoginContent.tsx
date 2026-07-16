import { useState } from 'react';
import logo3 from '../../imports/logo3.svg';

interface LoginContentProps {
  onLogin: (email: string) => void;
  onSignUp: () => void;
}

function Fix() {
  return <div className="bg-[rgba(204,204,204,0.8)] h-[36px] rounded-[999px] shrink-0 w-[127px]" />;
}

function FixBar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[10px] relative shrink-0 w-full">
      <Fix />
    </div>
  );
}

export function LoginContent({ onLogin, onSignUp }: LoginContentProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      localStorage.setItem('userEmail', email.trim());
      onLogin(email.trim());
    }
  };

  return (
    <div className="bg-[#fff7ef] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[49px] h-full">
      <FixBar />
      <div className="flex-[1_0_0] min-h-px relative w-full">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[36px] relative size-full">

            {/* 타이틀 영역 */}
            <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
              <img src={logo3} alt="myamo" className="h-[40px] w-auto object-contain" />
              <p className="font-['Pretendard:ExtraLight',sans-serif] leading-none not-italic text-[14px] text-[#b9b9b9]">
                나의 고양이와 함께하는 일상
              </p>
            </div>

            {/* 입력 영역 */}
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              {/* 이메일 */}
              <div className="bg-white h-[60px] relative rounded-[4px] shrink-0 w-full border-2 border-[#1e293b] shadow-[4px_4px_0_#1e293b]">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative size-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="이메일을 입력해주세요"
                      className="font-['Pretendard:Regular',sans-serif] leading-none not-italic text-[16px] bg-transparent border-none outline-none w-full"
                      style={{ color: email ? '#111' : '#b9b9b9' }}
                    />
                  </div>
                </div>
              </div>

              {/* 비밀번호 */}
              <div className="bg-white h-[60px] relative rounded-[4px] shrink-0 w-full border-2 border-[#1e293b] shadow-[4px_4px_0_#1e293b]">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative size-full">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호를 입력해주세요"
                      className="font-['Pretendard:Regular',sans-serif] leading-none not-italic text-[16px] bg-transparent border-none outline-none w-full"
                      style={{ color: password ? '#111' : '#b9b9b9' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 버튼 영역 */}
            <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
              <button
                onClick={handleLogin}
                className="bg-[#E9642C] h-[52px] relative rounded-full shrink-0 w-full border-[2.5px] border-[#B14A1E] shadow-[4px_4px_0px_0px_#B14A1E] active:shadow-[2px_2px_0px_0px_#B14A1E] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100"
              >
                <div className="flex flex-col items-center justify-center size-full">
                  <p className="font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[16px] text-[#FFF7EE]">
                    로그인
                  </p>
                </div>
              </button>

              <div className="content-stretch flex items-center gap-[8px] relative shrink-0">
                <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic text-[14px] text-[#b9b9b9]">
                  처음이신가요?
                </p>
                <button onClick={onSignUp}>
                  <p className="font-['Pretendard:Regular',sans-serif] leading-none not-italic text-[14px] text-[#f65f1e]">
                    시작하기
                  </p>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
