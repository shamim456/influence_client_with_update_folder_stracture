import React, { ChangeEvent, useRef } from 'react';

interface VerifyByCodeProps {
  digit: number;
  title: string;
  register: any;
  name: string;
}

export default function VerifyByCode({
  digit,
  title,
  register,
  name,
}: VerifyByCodeProps) {
  const inputRefs = useRef<Array<HTMLInputElement>>([]);

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    // const { value } = event.target;
    // if (value.length > 1) {
    //   event.target.value = value.slice(0, 1);
    // }

    // if (value.length === 1 && index < digit - 1) {
    //   inputRefs.current[index + 1].focus();
    // }
    const { value } = event.target;
    let modifiedValue = value;

    if (value.length > 1) {
      modifiedValue = value.slice(0, 1);
      // eslint-disable-next-line no-console
      console.log(modifiedValue);
    }

    if (value.length === 1 && index < digit - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="mt-9 flex flex-col items-center gap-3.5">
      <p className="text-xs">{title}</p>
      <div className="mb-5 flex flex-row gap-2">
        {Array.from({ length: digit }, (_, index) => (
          <input
            {...register}
            key={index}
            type="text"
            name={name}
            id={name}
            className="focus:border-Gray-light h-[53px] w-[41px] appearance-none rounded-[3px] border-2 border-[#ECECEC] text-center text-2xl text-black ring-0 focus:outline-none focus:ring-0"
            maxLength={1}
            onChange={(event) => handleInputChange(index, event)}
            ref={(el: any) => {
              inputRefs.current[index] = el;
            }}
          />
        ))}
      </div>
    </div>
  );
}
