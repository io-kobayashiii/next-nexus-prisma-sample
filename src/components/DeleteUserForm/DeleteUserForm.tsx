import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { useMutation } from 'urql';
import { CreateUserDocument } from '../../generated/graphql';
import * as yup from 'yup';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  className?: string;
};

export const DeleteUserForm = ({ className }: Props) => {
  const [_, createUser] = useMutation(CreateUserDocument);

  const schema = useMemo(
    () =>
      yup.object({
        email: yup
          .string()
          .email('メールアドレスの形式が正しくありません')
          .required('この項目は必須です'),
      }),
    []
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onDeleteButtonClick: SubmitHandler<FieldValues> = async (formInput) => {
    console.log('onDeleteButtonClick / formInput:', formInput);
  };

  return (
    <>
      <div className={`${className ?? ''} bg-gray-800 rounded-8 p-30`}>
        <h2 className={'text-20 font-bold'}>Delete</h2>
        <Box
          id={'dalete-user-form'}
          component={'form'}
          autoComplete={'off'}
          onSubmit={handleSubmit(onDeleteButtonClick)}
        >
          <TextField
            label="メールアドレス"
            variant="standard"
            className={'w-100p mt-20'}
            error={'email' in errors}
            helperText={errors.email?.message as string}
            {...register('email')}
          />
        </Box>
        <div className={'flex justify-end mt-20'}>
          <Button
            variant={'contained'}
            type={'submit'}
            form={'dalete-user-form'}
          >
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default DeleteUserForm;
