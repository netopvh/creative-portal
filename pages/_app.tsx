import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Toaster position="bottom-right" />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
