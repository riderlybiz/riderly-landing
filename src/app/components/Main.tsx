'use client';

import { MainWrap } from "../styles/MainStyled";
// import { ApplicationForm } from "./ApplicationForm";
import { CartoonSection } from "./CartoonSection";
import { FunctionSection } from "./FunctionSection";
import { MainSection } from "./MainSection";
import { WhatRiderly } from "./WhatRiderly";

export const Main = () => {
  return (
    <MainWrap>
      <MainSection />
      <CartoonSection />
      <FunctionSection />
      <WhatRiderly />
      {/* <ApplicationForm /> */}
    </MainWrap>
  )
}
