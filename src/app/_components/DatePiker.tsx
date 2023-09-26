import React from 'react';

interface DatePickerProps {
  selectedDate: string;
  onChange: (_date: string) => void;
  className?: string;
  register: any;
  renderError?: string | boolean;
}

export default function CustomDatePicker({
  selectedDate,
  onChange,
  className,
  register,
  renderError,
}: DatePickerProps) {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  // eslint-disable-next-line no-console
  console.log(renderError);
  return (
    <>
      <input
        {...register}
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className={`${className} focus:border-Gray-light h-[40px] w-full appearance-none rounded-[3px] border border-[#ECECEC] px-4 py-2 text-[#A1A1A1] ring-0 focus:outline-none focus:ring-0`}
      />
      {renderError && <p className="text-xs text-[#F50000]">{renderError}</p>}
    </>
  );
}

CustomDatePicker.defaultProps = {
  className: '',
  renderError: null,
};
