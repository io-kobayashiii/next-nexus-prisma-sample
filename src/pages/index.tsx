import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export const Home = () => {
  const onClick = async () => {
    console.log('onClick');
    const response = await fetch('http://localhost:3000/api/hello');
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button {...{ onClick }}>Button</button>
      </main>
    </>
  );
};

export default Home;
