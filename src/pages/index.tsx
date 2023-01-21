import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { useUsersQuery } from '../generated/graphql';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] });

export const Home = () => {
  const [{ data }] = useUsersQuery();
  console.log(data);
  const onClick = async () => {
    console.log('onClick');
  };
  return (
    <>
      <Head>
        <title>TOP</title>
      </Head>
      <main
        className={'flex justify-center items-center min-h-100vh bg-gray-700'}
      >
        <div className={'max-w-500 w-100p bg-gray-600 rounded-8 p-30'}>
          <div>
            <Button variant={'contained'} {...{ onClick }}>
              Button
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
