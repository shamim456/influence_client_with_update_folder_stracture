import React, { type ReactNode } from 'react';

interface FormWrapperProps {
  children: ReactNode;
}

export default function FormWrapper({
  children,
}: FormWrapperProps): React.JSX.Element {
  return <div className="flex w-full flex-col items-center">{children}</div>;
}
