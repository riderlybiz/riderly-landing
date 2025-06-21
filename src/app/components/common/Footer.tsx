'use client';

import React from 'react'
import Image from 'next/image';
import { FooterText, FooterTextWrap, FooterWrap, FooterGrid, FooterBlock, SectionTitle, SocialIcons } from '@/app/styles/common/FooterStyled'

export const Footer = () => {
  return (
    <FooterWrap>
      <FooterGrid>
        <FooterBlock>
          <SectionTitle>소셜</SectionTitle>
          <SocialIcons>
            <a
              href="https://www.instagram.com/riderly_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="./icons/instagram.png" alt='Plus' width={26} height={26} />
            </a>
          </SocialIcons>
        </FooterBlock>
      </FooterGrid>
      <br />
      <FooterTextWrap>
        <FooterText>
          Ⓒ 2025 Riderly. All Rights reserved.<br />
          라이더의, 라이더에 의한, 라이더를 위한 플랫폼
        </FooterText>
      </FooterTextWrap>
    </FooterWrap>
  )
}
