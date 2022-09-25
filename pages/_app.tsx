import '../styles/fonts.scss';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

declare global {
  interface Window {
    Kakao: any;
    IMP: any;
  }
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const kakaoMapSrc = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_APP_KEY}&autoload=false&libraries=services`;
  const getLayout = Component.getLayout ?? ((page) => page);

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.KAKAO_APP_KEY);
    }

    if (!window.IMP) {
      window.IMP.init(process.env.IMP_CERTIFICATION_CODE);
    }
  }, []);

  return getLayout(
    <RecoilRoot>
      <Component {...pageProps} />{' '}
      <Script
        type="text/javascript"
        src={kakaoMapSrc}
        strategy={'beforeInteractive'}
      />
    </RecoilRoot>
  );
}

export default MyApp;
