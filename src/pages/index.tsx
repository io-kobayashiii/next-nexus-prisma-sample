import Head from 'next/head';
import { Inter } from '@next/font/google';
import { useUsersQuery } from '../generated/graphql';
import Button from '@mui/material/Button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const Home = () => {
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <main className={'flex justify-center items-center min-h-100vh'}>
        <div className={'max-w-500 w-100p bg-gray-100 rounded-8 p-30'}>
          <Link href={'/users'} className={'w-100p'}>
            <Button variant={'contained'} className={'w-100p'}>
              to Users page
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
