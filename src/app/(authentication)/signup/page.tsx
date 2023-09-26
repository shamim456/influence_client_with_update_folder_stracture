'use client';
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { useRouter } from 'next/router';

import logo from '@/app/_assets/logo.png';
import googleLogo from '@/app/_assets/icon/googleLogo.png';
import appleLogo from '@/app/_assets/icon/appleLogo.png';
import UserNameEmail from './_features/UserNameEmail';
import CreatePassword from './_features/CreatePassword';
import EnterDetails from './_features/EnterDetails';
import EnterAdress from './_features/EnterAdress';
import useMultistepForm from '@/app/_contexts/useMultistepForm';
import LargeButton from '@/app/_components/LargeButton';
import SigninWith from '@/app/_components/SigninWith';
import toast from 'react-hot-toast';
// import VerifyEmail from '@/features/signupForm/VerifyEmail';

// import DescribesYou from '@/features/signupForm/DescribesYou';

const componentsTitle = [
  'Sign up for Influnce',
  'Verify your email',
  'Create a password',
  'Enter your details',
  'What best describes you?',
  'Enter your address',
];

interface FormData {
  userName: string;
  email: string;
  verificationCode: string;
  password: string | number;
  firstName: string;
  lastName: string;
  dateOfBirth: any;
  role: string;
  address: string;
}

const INITIAL_DATA: FormData = {
  userName: '',
  email: '',
  verificationCode: '',
  password: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  role: '',
  address: '',
};

export default function Signup(): React.JSX.Element {
  const [data, setData] = useState(INITIAL_DATA);
  // const [userRole, setUserRole] = useState('');
  // const [error, setError] = useState('');

  // const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function updateFields(fields: Partial<FormData>): void {
    setData((prev) => ({ ...prev, ...fields }));
  }
  const handleUpdateFields = (fields: object): void => {
    updateFields(fields);
  };

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserNameEmail
        errors={{
          userName: {
            message: `${errors?.userName?.message}`,
          },
          email: {
            message: `${errors?.email?.message}`,
          },
        }}
        {...data}
        // updateFields={handleUpdateFields}
        register={register}
        key={Math.random()}
      />,
      // <VerifyEmail
      //   {...data}
      //   updateFields={handleUpdateFields}
      //   register={register}
      // />,
      <CreatePassword
        key={Math.random()}
        {...data}
        register={register}
        errors={{
          password: {
            message: `${errors?.password?.message}`,
          },
        }}
      />,
      <EnterDetails
        key={Math.random()}
        errors={{
          firstName: {
            message: `${errors?.firstName?.message}`,
          },
          lastName: {
            message: `${errors?.lastName?.message}`,
          },
          dateOfBirth: {
            message: `${errors?.dateOfBirth?.message}`,
          },
        }}
        {...data}
        updateFields={handleUpdateFields}
        register={register}
      />,
      // <DescribesYou
      //   setUserRole={setUserRole}
      //   {...data}
      //   // updateFields={handleUpdateFields}
      //   userRole={userRole}
      //   register={register}
      //   setError={setError}
      //   error={error}
      // />,
      <EnterAdress
        key={Math.random()}
        errors={{
          address: {
            message: `${errors?.address?.message}`,
          },
        }}
        {...data}
        // updateFields={handleUpdateFields}
        register={register}
      />,
    ]);

  const handleSignup = async (value: any): Promise<void> => {
    const { userName, email, password } = value;
    console.log(userName);
    if (
      Boolean(userName) &&
      Boolean(email) &&
      Boolean(password) &&
      isLastStep
    ) {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
      if (result.status === 200) {
        toast.success(result.message);
        // router.push('/dashboard');
      } else {
        toast.error(result.message);
      }
    }

    if (!isLastStep) {
      next();
    }
    console.log(value);
  };

  return (
    <div className="flex items-center justify-center h-screen p-5">
      <main className="grid w-full place-items-center md:w-[348px]">
        <div className="flex flex-col w-full gap-10 lg:gap-9">
          <div className="flex flex-col items-center justify-center gap-3 lg:gap-11">
            <Image
              className=""
              src={logo.src}
              alt="Logo"
              width={48}
              height={48}
            />
            <h3
              className={`${
                currentStepIndex === 3 && 'mb-12'
              } text-[28px] font-normal`}
            >
              {componentsTitle[currentStepIndex]}
            </h3>
          </div>
          {currentStepIndex === 0 ? (
            <div className="flex w-full flex-col items-center gap-3.5">
              <SigninWith text="Continue with Apple">
                <img src={appleLogo.src} alt="apple logo" />
              </SigninWith>
              <SigninWith text="Continue with Google">
                <img src={googleLogo.src} alt="google logo" />
              </SigninWith>
              <span className="pb-4 font-normal text-[#383838]">or</span>
            </div>
          ) : null}
        </div>
        {currentStepIndex === 2 ? (
          <p className=" mb-8 mt-4 text-center text-xs font-normal text-[#838383]">
            Choose a password for your account. You can always change it later
          </p>
        ) : null}
        <form className="w-full" onSubmit={handleSubmit(handleSignup)}>
          <div className="w-full">{step}</div>
          <div className="flex flex-col items-center mt-7">
            <LargeButton
              className="text-white bg-dark hover:bg-black "
              text={isLastStep ? 'Done' : 'Next'}
              type="submit"
            />
            {currentStepIndex === 1 ? (
              <p className="mt-3 text-xs text-center">
                By signing up, you are creating a Patreon account and agree to
                Patreon’s Terms and Privacy Policy
              </p>
            ) : null}
            {!isFirstStep && (
              <button
                type="button"
                className="mt-6 h-4 w-[192px] text-xs text-[#2F437A] hover:underline"
                onClick={back}
              >
                Go back
              </button>
            )}
          </div>
        </form>
        {currentStepIndex === 0 ? (
          <div className="flex flex-col gap-6 mt-6 text-xs text-center">
            <p>
              By signing up, you are creating a Patreon account and agree to
              Patreon’s Terms and Privacy Policy
            </p>
            <p>
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
          </div>
        ) : null}
      </main>
    </div>
  );
}
