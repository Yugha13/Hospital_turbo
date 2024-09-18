"use client"; 

import Navbar from "./navbar/Navbar";
import Script from "next/script";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Script
        strategy="lazyOnload"
        src="https://cdn.voiceflow.com/widget/bundle.mjs"
        onLoad={() => {
          // @ts-ignore
          window.voiceflow?.chat?.load({
            verify: { projectID: '66e97cb10c7da390a133f728' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
          });
        }}
      />
    </>
  );
}