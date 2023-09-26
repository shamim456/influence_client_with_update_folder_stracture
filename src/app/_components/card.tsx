import React, { ReactNode } from 'react';

interface cardProps {
  Icon?: ReactNode;
  text?: string;
  className?: string;
  active?: boolean;
}

export default function Card({ Icon, text, className, active }: cardProps) {
  return (
    <div
      className={`${className} ${
        active ? 'bg-[#6E6E6E1A]' : ''
      } flex w-full items-center justify-center rounded-[10px] p-[9px] text-black hover:bg-[#6E6E6E1A]`}
    >
      <div className="flex w-[20%] items-center justify-center">{Icon}</div>
      <div className="w-[80%] px-5 text-[12px] text-[#2D2D2D]">
        <span>{text}</span>
      </div>
    </div>
  );
}

Card.defaultProps = {
  Icon: null,
  text: '',
  className: '',
  active: false,
};
