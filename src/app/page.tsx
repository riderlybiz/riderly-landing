'use client';

import { Main } from "./components/Main";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Home() {
  return (
    <div>
      <GoogleAnalytics gaId="G-3LM2DF1EZW" />
      <Main />
    </div>
  );
}
