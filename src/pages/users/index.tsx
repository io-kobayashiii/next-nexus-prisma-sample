import Head from 'next/head';
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm';

export const Page = () => {
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
