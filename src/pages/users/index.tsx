import Head from 'next/head';
import { useEffect, useState } from 'react';
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm';

export const Page = () => {
  const [createUserFormValues, setCreateUserFormValues] = useState({
    email: '',
    name: '',
  });
  const onCreateButtonClick = () => {
    console.log('onCreateButtonClick');
  };
  useEffect(() => {
    console.log(createUserFormValues);
  }, [createUserFormValues]);
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <main
        className={'flex justify-center items-center min-h-100vh bg-gray-900'}
      >
        <CreateUserForm />
      </main>
    </>
  );
};

export default Page;
