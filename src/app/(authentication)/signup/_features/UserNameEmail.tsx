// /* eslint-disable no-unused-vars */
// import React from 'react';

// import TextInputField from '@/components/Inputfield';

// import FormWrapper from './FormWrapper';

// type AddressData = {
//   userName: string;
//   email: string;
//   register: any;
//   errors: any;
// };

// type AddressFormProps = AddressData & {
//   updateFields: (_fields: Partial<AddressData>) => void;
// };

// export default function UserNameEmail({
//   // eslint-disable-next-line no-unused-vars
//   userName,
//   email,
//   updateFields,
//   register,
//   errors,
// }: AddressFormProps) {
//   return (
//     <FormWrapper>
//       <div className="flex w-full flex-col gap-3.5">
//         <TextInputField
//           register={...register('username', {
//             required: 'User Name is required',
//             pattern: {
//               value: /^[a-zA-Z0-9]{4,15}$/,
//               message: 'user name should contain 4 to 15 chracter',
//             },
//           })}
//           className="w-full"
//           placeholder="@ pick a username"
//           name="username"
//           renderError={
//             errors?.username?.message.length > 1
//               ? errors?.username?.message
//               : false
//           }
//         />
//         <TextInputField
//           type="email"
//           name="email"
//           className="w-full"
//           placeholder="Enter your email"
//           renderError={
//             errors?.email?.message.length > 1 ? errors?.email?.message : false
//           }
//           register={{
//             ...register('email', { required: 'Email Address is required' }),
//           }}
//         />
//       </div>
//     </FormWrapper>
//   );
// }

/* eslint-disable no-unused-vars */
import React from 'react';

import { type FieldValues, type UseFormRegister } from 'react-hook-form';

import FormWrapper from './FormWrapper';
import Inputfield from '@/app/_components/Inputfield';

interface UserNameEmailData {
  userName: string;
  email: string;
}

type AddressFormProps = UserNameEmailData & {
  // updateFields: (_fields: Partial<UserNameEmailData>) => void;
  register: UseFormRegister<FieldValues>;
  errors: {
    userName: {
      message: string;
    };
    email: {
      message: string;
    };
  };
};

export default function UserNameEmail({
  register,
  errors,
}: AddressFormProps): React.JSX.Element {
  // const [userName, setUserName] = useState('');

  return (
    <FormWrapper>
      <div className="flex w-full flex-col gap-3.5">
        <Inputfield
          register={register('userName', {
            required: 'User Name is required',
            pattern: {
              value: /^[a-zA-Z0-9]{4,15}$/,
              message: 'user name should contain 4 to 15 characters',
            },
          })}
          className="w-full"
          placeholder="@ pick a username"
          name="username"
          renderError={
            errors?.userName?.message?.length > 10
              ? errors?.userName?.message
              : false
          }
        />
        <Inputfield
          type="email"
          name="email"
          className="w-full"
          placeholder="Enter your email"
          renderError={
            errors?.email?.message?.length > 10 ? errors?.email?.message : false
          }
          register={register('email', {
            required: 'Email Address is required',
          })}
        />
      </div>
    </FormWrapper>
  );
}
