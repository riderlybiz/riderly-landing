'use client';

import Logo from '@/assets/logo.png'
import { HeaderLogo, HeaderLogoImg, HeaderMenuNav, HeaderPreREgistraitionBtn, HeaderWrap } from "../styles/HeaderStyled";
import Link from 'next/link';

export const Header = () => {
  return (
    <HeaderWrap>
        <HeaderLogo href="/">
          <HeaderLogoImg src={Logo.src} alt="Logo" fill />
          Riderly
        </HeaderLogo>
        <HeaderMenuNav>
          <Link href="#About">기능소개</Link>
          <Link href="#About">서비스특징</Link>
          <Link href="#About">사전신청</Link>
        </HeaderMenuNav>
        <HeaderPreREgistraitionBtn>사전신청</HeaderPreREgistraitionBtn>
    </HeaderWrap>
  )
}
