import React, { ReactNode } from 'react';

interface SigninWithProps {
  text: string;
  children: ReactNode;
}

export default function SigninWith({ text, children }: SigninWithProps) {
  return (
    <div className="flex h-[41px] w-full cursor-pointer items-center justify-center gap-2 rounded-[3px] border border-[#ECECEC] text-black transition duration-300 ease-out hover:bg-gray">
      {children}
      <span className="text-[12px] font-normal text-[#383838]">{text}</span>
    </div>
  );
}
