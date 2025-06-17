'use client';

import { MainWrap } from "../styles/MainStyled";
import { ApplicationForm } from "./ApplicationForm";
import { CartoonSection } from "./CartoonSection";
import { FunctionSection } from "./FunctionSection";
import { MainSection } from "./MainSection";
import { WhatRiderly } from "./WhatRiderly";
import { useCleanUrl } from '../util/useCleanUrl';

export const Main = () => {
  // useCleanUrl 훅을 사용하여 URL 정리
  // 이 훅은 URL에서 불필요한 부분을 제거하고, 깔끔한 URL을 유지합니다.
  useCleanUrl();

  return (
    <MainWrap>
      <MainSection />
      <CartoonSection />
      <FunctionSection />
      <WhatRiderly />
      <ApplicationForm />
    </MainWrap>
  )
}
