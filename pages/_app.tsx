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
      <Script
        type="text/javascript"
        src={kakaoMapSrc}
        strategy={'beforeInteractive'}
      />
      <Script
        strategy={'afterInteractive'}
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
      />
      <Script
        id={'gtag-init'}
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', ${process.env.GTAG}, {
          page_path: window.location.pathname
          });
          `,
        }}
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-245175154-1"
      />
      <Script
        id={'gtag-init2'}
        strategy={'afterInteractive'}
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-245175154-1');
                `,
        }}
      ></Script>
      <Component {...pageProps} />{' '}
    </RecoilRoot>
  );
}

export default MyApp;
