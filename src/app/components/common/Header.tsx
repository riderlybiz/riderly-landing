'use client';

import Logo from '@/assets/logo.png'
import { HeaderLogo, HeaderLogoImg, HeaderMenuNav, HeaderPreRegistraitionBtn, HeaderWrap } from "../../styles/HeaderStyled";
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
          <Link href="#Service">서비스특징</Link>
          <Link href="#PreRegsiter">사전신청</Link>
        </HeaderMenuNav>
        <HeaderPreRegistraitionBtn>사전신청</HeaderPreRegistraitionBtn>
    </HeaderWrap>
  )
}
