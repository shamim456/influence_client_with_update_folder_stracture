/* eslint-disable no-unused-vars */
import React, { ReactNode, useState } from 'react';
import Card from '@/components/card';

interface Props {
  iconAndText: Array<{ icon: ReactNode; text: string }>;
}

export default function MulticardWraper({ iconAndText }: Props) {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null,
  );

  const handleCardClick = (index: number) => {
    setSelectedCardIndex(index);
  };

  return (
    <div className="h-[118px]">
      {iconAndText.map((data, index) => (
        <Card
          className={`${
            selectedCardIndex === index
              ? 'border-none bg-gray bg-opacity-10'
              : 'border-2 border-[#6E6E6E1A]'
          } mt-[26px] cursor-pointer`}
          key={Math.random()}
          text={data.text}
          Icon={data.icon}
          // onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}
