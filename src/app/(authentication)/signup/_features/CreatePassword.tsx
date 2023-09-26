/* eslint-disable no-unused-vars */
import React from 'react';
import { type FieldValues, type UseFormRegister } from 'react-hook-form';

import FormWrapper from './FormWrapper';
import Inputfield from '@/app/_components/Inputfield';

interface createPasswordData {
  register: UseFormRegister<FieldValues>;
  errors: {
    password: {
      message: string;
    };
  };
}

export default function CreatePassword({
  register,
  errors,
}: createPasswordData): React.JSX.Element {
  return (
    <FormWrapper>
      <main className="grid w-full place-items-center gap-2">
        <Inputfield
          type="password"
          register={register('password', {
            required: 'Password is required ',
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
              message:
                'Your password must have: 8 to 20 charactersLetters, numbers, and special characters',
            },
          })}
          className="w-full"
          placeholder="password"
          name="password"
          renderError={
            errors?.password?.message?.length > 10
              ? errors?.password?.message
              : false
          }
        />

        {/* if needed then use */}
        {/* <div className="flex flex-col w-full flex-start">
          <span className="cursor-pointer text-[10px] font-semibold">
            Your password must have:
          </span>
          <span className="text-[10px] font-normal text-[#A1A1A1]">
            8 to 20 characters{' '}
          </span>
          <span className="text-[10px] font-normal text-[#A1A1A1]">
            Letters, numbers, and special characters
          </span>
        </div> */}
      </main>
    </FormWrapper>
  );
}
