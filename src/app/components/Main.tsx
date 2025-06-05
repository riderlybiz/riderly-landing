'use client';

import { MainWrap } from "../styles/MainStyled";
import { CartoonSection } from "./CartoonSection";
import { FunctionSection } from "./FunctionSection";
import { MainSection } from "./MainSection";

export const Main = () => {
  return (
    <MainWrap>
      <MainSection />
      <CartoonSection />
      <FunctionSection />
    </MainWrap>
  )
}
