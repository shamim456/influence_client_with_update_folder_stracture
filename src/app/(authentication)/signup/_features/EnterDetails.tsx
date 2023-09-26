/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { type FieldValues, type UseFormRegister } from 'react-hook-form';

import FormWrapper from './FormWrapper';
import Inputfield from '@/app/_components/Inputfield';
import CustomDatePicker from '@/app/_components/DatePiker';

interface EnterDetailsData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

type EnterDetailsProps = EnterDetailsData & {
  updateFields: (_fields: Partial<EnterDetailsData>) => void;
  register: UseFormRegister<FieldValues>;
  errors: {
    firstName: {
      message: string;
    };
    lastName: {
      message: string;
    };
    dateOfBirth: {
      message: string;
    };
  };
};

export default function EnterDetails({
  dateOfBirth,
  updateFields,
  register,
  errors,
  lastName,
  firstName,
}: EnterDetailsProps): React.JSX.Element {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <FormWrapper>
      <main className="w-full place-items-center gap-6 md:w-[370px]">
        <div className="flex w-full flex-col gap-9 lg:gap-[50px]">
          <div className="flex w-full flex-col gap-3.5">
            <Inputfield
              register={register('firstName', {
                required: 'First name is required ',
              })}
              className="w-full"
              placeholder="First Name"
              name="firstName"
              renderError={
                errors?.firstName?.message?.length > 10
                  ? errors?.firstName?.message
                  : false
              }
            />
            <Inputfield
              register={register('lastName', {
                required: 'Last name is required ',
              })}
              className="w-full"
              placeholder="Last Name"
              name="lastName"
              renderError={
                errors?.lastName?.message?.length > 10
                  ? errors?.lastName?.message
                  : false
              }
            />
            <div>
              <CustomDatePicker
                register={register('dateOfBirth', {
                  required: 'Please select your date of birth ',
                })}
                className="text-xs"
                selectedDate={selectedDate}
                onChange={(value) => {
                  setSelectedDate(value);
                }}
                renderError={
                  errors?.dateOfBirth?.message?.length > 10
                    ? errors?.dateOfBirth?.message
                    : false
                }
              />
              <div>
                <p className="mt-4 text-xs font-normal text-[#333333]">
                  Your birthday won’t be shown publically
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </FormWrapper>
  );
}
