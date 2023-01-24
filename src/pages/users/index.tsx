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
        <div className={'w-1000 p-30'}>
          <div className={'flex'}>
            <CreateUserForm />
            <CreateUserForm className={'ml-30'} />
            <CreateUserForm className={'ml-30'} />
          </div>
          <div className={'mt-30'}>
            <CreateUserForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
