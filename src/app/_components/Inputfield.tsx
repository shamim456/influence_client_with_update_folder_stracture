/* eslint-disable no-unused-vars */
import React, {
  BaseHTMLAttributes,
  HTMLInputTypeAttribute,
  useState,
} from 'react';

import { type FieldError, type UseFormRegisterReturn } from 'react-hook-form';

// import hide from '@/assets/icon/Hide.svg';
// import Visible from '@/assets/icon/Visible.svg';
// import styles from '@/styles/components/InputFields/TextField.module.scss';

interface InputfieldProps extends BaseHTMLAttributes<HTMLInputElement> {
  name?: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  error?: FieldError;
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  renderError?: any;
}

export default function Inputfield({
  name,
  type,
  label,
  error,
  disabled,
  register,
  placeholder,
  className,
  renderError,
  ...props
}: InputfieldProps) {
  const [showPassword, setShowPassword] = useState(true);

  const computeType = () => {
    if (type === 'password') return showPassword ? 'password' : 'text';
    return type;
  };

  return (
    <label htmlFor={register?.name} className={className}>
      {label ? <p>{label}</p> : null}
      <div className="w-full">
        <input
          id={register?.name}
          name={name}
          disabled={disabled}
          type={computeType()}
          placeholder={placeholder}
          autoComplete="false"
          {...register}
          {...props}
          className={`${className} focus:border-Gray-light h-10 w-full appearance-none rounded-[3px] border border-[#ECECEC] px-4 py-2 text-black ring-0 focus:outline-none focus:ring-0`}
        />
        {type === 'password' ? (
          <button
            disabled={disabled}
            type="button"
            onClick={() => setShowPassword((curr) => !curr)}
          >
            {/* {showPassword ? (
              <img src={hide} alt="" />
            ) : (
              <img src={Visible} alt="" />
            )} */}
          </button>
        ) : null}
      </div>
      {/* {renderError ? (
        <p
          className={`text-pink ${
            !error && 'hidden'
          } mx-1 mt-0.5 h-5 normal-case`}
        >
          {renderError}
        </p>
      ) : null} */}
      {renderError && <p className="text-xs text-[#F50000]">{renderError}</p>}
    </label>
  );
}

Inputfield.defaultProps = {
  name: '',
  register: undefined,
  type: 'text',
  label: undefined,
  placeholder: '',
  className: '',
  disabled: false,
  error: undefined,
  renderError: null,
};
