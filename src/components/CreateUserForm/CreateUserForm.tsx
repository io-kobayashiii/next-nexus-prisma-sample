import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useMutation } from 'urql';
import { CreateUserDocument } from '../../generated/graphql';
import * as yup from 'yup';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  className?: string;
};

export const CreateUserForm = ({ className }: Props) => {
  const [_, createUser] = useMutation(CreateUserDocument);

  const schema = yup.object({
    email: yup
      .string()
      .email('メールアドレスの形式が正しくありません')
      .required('この項目は必須です'),
    password: yup.string().required('この項目は必須です'),
    name: yup.string().required('この項目は必須です'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (formInput) => {
    console.log('onCreateButtonClick / formInput:', formInput);
    // const result = await createUser(formInput);
    // console.log(result);
  };

  useEffect(() => {
    console.log('errors:', errors);
  }, [errors]);

  return (
    <>
      <div
        className={`${
          className ?? ''
        } max-w-500 w-100p bg-gray-800 rounded-8 p-30`}
      >
        <h2 className={'text-20 font-bold'}>Create</h2>
        <Box
          id={'create-user-form'}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label="Email"
            variant="standard"
            className={'w-100p'}
            error={'email' in errors}
            helperText={errors.email?.message as string}
            {...register('email')}
          />
          <TextField
            label="Password"
            variant="standard"
            className={'w-100p mt-20'}
            error={'password' in errors}
            helperText={errors.password?.message as string}
            {...register('password')}
          />
          <TextField
            label="Name"
            variant="standard"
            className={'w-100p mt-20'}
            error={'name' in errors}
            helperText={errors.name?.message as string}
            {...register('name')}
          />
        </Box>
        <div className={'flex justify-end mt-20'}>
          <Button
            variant={'contained'}
            type={'submit'}
            form={'create-user-form'}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateUserForm;
