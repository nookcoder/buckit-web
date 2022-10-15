import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

//todo
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="버킷" />
        <link rel="canonical" href="https://www.buckit.me" />
        <meta name="robots" content="index, follow" />
        <meta name="title" content="버킷-로컬비즈니스 공동구매 플랫폼" />
        <meta
          name="description"
          content="버킷으로 이루는 N잡러의 꿈! 3만원으로 시작하는 '내 가게 만들기'"
        />
        <meta
          name="keywords"
          content="투자, 조각투자, 소액투자, 분산투자, 분할투자, 투자플랫폼, 조각투자플랫폼, 재밌는투자, 재미있는투자, 신개념투자, 간편투자, 리셀테크, 명품투자, 부동산크라우드펀딩, 부동산투자, 부동산조각투자, 재테크, 직장인재테크, 대학생재테크, 20대재테크, 30대재테크, 20대재태크하는법, 30대재테크하는법, 20대재테크수익, 30대재테크수익, 20대재테크노하우, 30대재테크노하우, 소액재테크, 소액재테크하는법,100만원으로주식, 백만원투자, 100만원투자, 10만원으로주식, 10만원투자, 최대18%, 창업, 자영업투자, 크라우드펀딩, 자영업창업, 술집창업, 카페창업, 카페자영업, P2P투자, 마이프차, 프랜차이즈창업, 1943, 1943창업, 옥희, 옥희창업, 흥에취한범, 흥에취한범창업, 건대술집, 홍대술집, 강남술집, 수원술집, 창업비용, 술집추천, 드라이브카페추천, 자영업매출, 20대자영업, 30대자영업, 대출자영업, 퇴직금자영업, 버킷, 버킷홈페이지, buckit, bucket, 버닝서프라이즈"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="버킷-로컬비즈니스 공동구매 플랫폼" />
        <meta
          property="og:description"
          content="버킷으로 이루는 N잡러의 꿈! 3만원으로 시작하는 '내 가게 만들기'"
        />
        <meta property="og:site_name" content="버킷" />
        <meta
          property="og:image"
          content="https://www.buckit.me/assets/seo_banner.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="버킷-로컬비즈니스 공동구매 플랫폼"
        />
        <meta
          name="twitter:description"
          content="버킷으로 이루는 N잡러의 꿈! 3만원으로 시작하는 '내 가게 만들기'"
        />
        <meta
          property="twitter:image"
          content="https://www.buckit.me/assets/seo_banner.jpeg"
        />
        <meta name="twitter:image:width" content="1024" />
        <meta name="twitter:image:height" content="512" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js"
          integrity="sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL"
          crossOrigin="anonymous"
        ></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
