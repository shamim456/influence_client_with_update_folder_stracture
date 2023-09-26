import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function LargeButton({ text, className, type }: ButtonProps) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`${className} h-[41px] w-full rounded-[3px] text-xs transition duration-300 ease-out`}
    >
      {text}
    </button>
  );
}

LargeButton.defaultProps = {
  className: '',
  type: 'button',
};
