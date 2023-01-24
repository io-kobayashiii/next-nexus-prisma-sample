import Head from 'next/head';
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm';
import DeleteUserForm from '../../components/DeleteUserForm/DeleteUserForm';
import UpdateUserForm from '../../components/UpdateUserForm/UpdateUserForm';

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
            <CreateUserForm className={'w-[calc(100%/3)]'} />
            <UpdateUserForm className={'ml-30 w-[calc(100%/3)]'} />
            <DeleteUserForm className={'ml-30 w-[calc(100%/3)]'} />
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
