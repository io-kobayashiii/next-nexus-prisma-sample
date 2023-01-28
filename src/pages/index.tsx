import Head from 'next/head';
import { Inter } from '@next/font/google';
import Button from '@mui/material/Button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const Home = () => {
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <main
        className={'flex justify-center items-center min-h-100vh bg-gray-900'}
      >
        <div className={'max-w-500 w-100p bg-gray-800 rounded-8 p-30'}>
          <Link href={'/users'} className={'w-100p'}>
            <Button
              variant={'contained'}
              className={'w-100p bg-green-600 hover:bg-green-700'}
            >
              to Users page
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
