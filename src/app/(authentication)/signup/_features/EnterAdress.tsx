import React from 'react';
import { type FieldValues, type UseFormRegister } from 'react-hook-form';

import Image from 'next/image';
import map from '@/app/_assets/Map.png';

import FormWrapper from './FormWrapper';
import Inputfield from '@/app/_components/Inputfield';

interface AddressData {
  address: string;
}

type AddressProps = AddressData & {
  // updateFields: (_fields: Partial<AddressData>) => void;
  register: UseFormRegister<FieldValues>;
  errors: {
    address: {
      message: string;
    };
  };
};
export default function EnterAdress({
  register,
  errors,
}: AddressProps): React.JSX.Element {
  return (
    <FormWrapper>
      <main className="flex w-full place-items-center md:w-[370px]">
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col gap-4">
            <Inputfield
              register={register('address', {
                required: 'Address is required ',
              })}
              className="w-full"
              placeholder="Your address"
              name="address"
              renderError={
                errors?.address?.message?.length > 10
                  ? errors?.address?.message
                  : false
              }
            />
          </div>
          <div className="text-xs">
            <h3>Why we collect your address</h3>
            <span className="text-[#A1A1A1]">
              Your address is not publically available. Your address is used to
              help connect with with brands and creators that have location
              specific campaigns.
            </span>
          </div>
          <div className="flex items-center justify-center">
            <Image className="" src={map} alt="Map" width={375} height={193} />
          </div>
        </div>
      </main>
    </FormWrapper>
  );
}
