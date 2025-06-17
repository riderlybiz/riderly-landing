'use client';

import { Main } from "./components/Main";
import { useCleanUrl } from './util/useCleanUrl';

export default function Home() {
  // useCleanUrl 훅을 사용하여 URL 정리
  // 이 훅은 URL에서 불필요한 부분을 제거하고, 깔끔한 URL을 유지합니다.
  useCleanUrl();
  
  return (
    <Main />
  );
}
