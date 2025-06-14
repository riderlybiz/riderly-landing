'use client';

import { HeaderLogo, HeaderLogoImg, HeaderMenuNav, HeaderPreRegistraitionBtn, HeaderWrap } from "../../styles/HeaderStyled";
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      setIsScroll(true);
    }

    addEventListener('scroll', () => {
    const eventScrollY = window.scrollY;

      if (eventScrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, []);

  const handleClickAutoScroll = (id: string) => {
    const element = document.querySelector<HTMLElement>(`#${id}`);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // 예: 헤더 높이만큼 여유
        behavior: 'smooth',
      });
    }
  };

  return (
    <HeaderWrap className={isScroll ? 'scroll' : ''}>
        <HeaderLogo className={isScroll ? 'scroll' : ''} href="/">
          <HeaderLogoImg src="./logo.png" alt="Logo" fill />
          Riderly
        </HeaderLogo>
        <HeaderMenuNav className={isScroll ? 'scroll' : ''}>
          <button onClick={() => handleClickAutoScroll('function-sec')}>기능소개</button>
          <button onClick={() => handleClickAutoScroll('wat-riderly-sec')} >서비스특징</button>
          <button>사전신청</button>
        </HeaderMenuNav>
        <HeaderPreRegistraitionBtn>사전신청</HeaderPreRegistraitionBtn>
    </HeaderWrap>
  )
}
