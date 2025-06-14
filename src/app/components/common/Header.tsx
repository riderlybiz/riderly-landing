'use client';

import Logo from '@/assets/logo.png'
import { HeaderLogo, HeaderLogoImg, HeaderMenuNav, HeaderPreRegistraitionBtn, HeaderWrap } from "../../styles/HeaderStyled";
import Link from 'next/link';
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

  return (
    <HeaderWrap className={isScroll ? 'scroll' : ''}>
        <HeaderLogo className={isScroll ? 'scroll' : ''} href="/">
          <HeaderLogoImg src={Logo.src} alt="Logo" fill />
          Riderly
        </HeaderLogo>
        <HeaderMenuNav className={isScroll ? 'scroll' : ''}>
          <Link href="#About">기능소개</Link>
          <Link href="#Service">서비스특징</Link>
          <Link href="#PreRegsiter">사전신청</Link>
        </HeaderMenuNav>
        <HeaderPreRegistraitionBtn>사전신청</HeaderPreRegistraitionBtn>
    </HeaderWrap>
  )
}
