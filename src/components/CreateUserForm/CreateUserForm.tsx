import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react';

type Props = {
  className?: string;
};

export const CreateUserForm = ({ className }: Props) => {
  const [createUserFormValues, setCreateUserFormValues] = useState({
    email: '',
    name: '',
  });
  const onCreateButtonClick = () => {
    console.log('onCreateButtonClick');
  };
  return (
    <>
      <div
        className={`${
          className ?? ''
        } max-w-500 w-100p bg-gray-800 rounded-8 p-30`}
      >
        <h2 className={'text-20 font-bold'}>Create</h2>
        <Box component="form">
          <TextField
            id="email"
            label="Email"
            variant="standard"
            className={'w-100p'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.currentTarget.value);
              setCreateUserFormValues({
                ...createUserFormValues,
                email: e.currentTarget.value,
              });
            }}
          />
          <TextField
            id="Name"
            label="Name"
            variant="standard"
            className={'w-100p mt-20'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.currentTarget.value);
              setCreateUserFormValues({
                ...createUserFormValues,
                name: e.currentTarget.value,
              });
            }}
          />
        </Box>
        <div className={'flex justify-end mt-20'}>
          <Button variant={'contained'} onClick={onCreateButtonClick}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateUserForm;
