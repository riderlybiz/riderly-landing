'use client';

import { FooterText, FooterTextWrap, FooterWrap } from '@/app/styles/common/FooterStyled'
import React from 'react'

export const Footer = () => {
  return (
    <FooterWrap>
        <FooterTextWrap>
            <FooterText>
                Ⓒ 2025 Riderly. All Rights reserved.<br />
                라이더의, 라이더에 의한, 라이더를 위한 플랫폼
            </FooterText>
        </FooterTextWrap>
    </FooterWrap>
  )
}
