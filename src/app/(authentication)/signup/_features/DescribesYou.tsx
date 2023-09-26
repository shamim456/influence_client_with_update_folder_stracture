/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Image from 'next/image';

import store from '@/assets/icon/store.png';
import user from '@/assets/icon/user.png';

import FormWrapper from './FormWrapper';
import Card from '@/app/_components/card';

const INITIAL_DATA = [
  {
    id: 1,
    text: 'I’m a brand looking to partner with creators to promote my products or services.',
    icon: <Image className="" src={store} alt="Logo" width="18" height="18" />,
    role: 'brand',
    isActive: false,
  },
  {
    id: 2,
    text: 'I’m a creator looking to earn money by partnering with brands.',
    icon: <Image className="" src={user} alt="Logo" width="18" height="18" />,
    role: 'influencer',
    isActive: false,
  },
];

interface AccountFormProps {
  // updateFields: (_fields: Partial<AccountData>) => void;
  setUserRole: any;
  userRole: string;
  register: any;
  setError: any;
  error: string;
}

export default function DescribesYou({
  // updateFields,
  setUserRole,
  userRole,
  register,
  setError,
  error,
}: AccountFormProps): React.JSX.Element {
  const [info, setInfo] = useState(INITIAL_DATA);

  const handleRole = (role: string): void => {
    setError('');
    setInfo((prevInfo) =>
      prevInfo.map((data) => ({
        ...data,
        isActive: data.role === role,
      })),
    );
    setUserRole(role);
    if (userRole.length === 0) {
      setError('Please select a role.');
    }
  };

  // eslint-disable-next-line no-console
  console.log(error);
  return (
    <FormWrapper>
      <main className="grid w-full place-items-center gap-3 md:w-[370px]">
        <div className="flex w-full flex-col gap-9">
          {info.map((data) => (
            <div
              key={data.id}
              onClick={() => {
                handleRole(data.role);
              }}
            >
              <Card
                className="mt-[26px] h-[118px] cursor-pointer border-2  border-[#6E6E6E1A]"
                text={data.text}
                Icon={data.icon}
                active={data.isActive}
              />
              {error.length > 10 ? <p>{error}</p> : null}
            </div>
          ))}
        </div>
      </main>
    </FormWrapper>
  );
}
