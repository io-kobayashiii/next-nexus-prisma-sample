import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createClient, Provider } from 'urql';

export const urqlClient = createClient({
  url: `${process.env.NEXT_PUBLIC_BASE_URL}${process.env.NEXT_PUBLIC_GRAPHQL_PATH}`,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={urqlClient}>
      <Component {...pageProps} />
    </Provider>
  );
}
