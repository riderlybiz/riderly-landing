'use client';

import { MainWrap } from "../styles/MainStyled";
import { ApplicationForm } from "./ApplicationForm";
import { CartoonSection } from "./CartoonSection";
import { FunctionSection } from "./FunctionSection";
import { MainSection } from "./MainSection";
import { WhatRiderly } from "./WhatRiderly";
import { GoogleAnalytics } from '@next/third-parties/google';

export const Main = () => {
  return (
    <MainWrap>
      <MainSection />
      <CartoonSection />
      <FunctionSection />
      <WhatRiderly />
      <ApplicationForm />
      <GoogleAnalytics gaId="G-3LM2DF1EZW" />
    </MainWrap>
  )
}
