import React from 'react'
import { FunctionSectionSubText, FunctionSectionTxtTitle, FunctionSectionTxtWrap, FunctionSectionWrap } from '../styles/FunctionSectionStyled'

export const FunctionSection = () => {
  return (
    <FunctionSectionWrap>
        <FunctionSectionTxtWrap>
            <FunctionSectionTxtTitle>핵심 기능</FunctionSectionTxtTitle>
            <FunctionSectionSubText>라이더들이 정말 원하는 기능들만 모았습니다</FunctionSectionSubText>
        </FunctionSectionTxtWrap>
    </FunctionSectionWrap>
  )
}
