/* eslint-disable no-unused-vars */
import React from 'react';
import Link from 'next/link';

import FormWrapper from './FormWrapper';
import VerifyByCode from '@/app/_components/VerifyByCode';

interface AccountData {
  email: string;
  password: string | number;
  register: any;
}

type AccountFormProps = AccountData & {
  updateFields: (_fields: Partial<AccountData>) => void;
};

export default function VerifyEmail({
  email,
  password,
  updateFields,
  register,
}: AccountFormProps): React.JSX.Element {
  return (
    <FormWrapper>
      <VerifyByCode
        register={{ ...register('verifyCode') }}
        name="verifyCode"
        title="Enter the 6-digit code from your email"
        digit={6}
      />
      <p className="text-xs">
        Didn’t receive the email?{' '}
        <Link href="/resend">Click here to resend</Link>
      </p>
    </FormWrapper>
  );
}
