'use client';

import { MainWrap } from "../styles/MainStyled";
import { CartoonSection } from "./CartoonSection";
import { MainSection } from "./MainSection";

export const Main = () => {
  return (
    <MainWrap>
      <MainSection />
      <CartoonSection />
    </MainWrap>
  )
}
