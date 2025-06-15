import React from 'react'
import { ApplicationDescription, ApplicationFormWrap, ApplicationTitle, ApplicationTitleWrap } from '../styles/ApplicationFormStyled'

export const ApplicationForm = () => {
  return (
    <ApplicationFormWrap>
      <ApplicationTitleWrap>
        <ApplicationTitle>사전 신청</ApplicationTitle>
        <ApplicationDescription>
          Riderly 출시 소식을 가장 먼저 받아보세요!<br />
          사전 신청자에게는 특별한 혜택을 준비했습니다.
        </ApplicationDescription>
      </ApplicationTitleWrap>
    </ApplicationFormWrap>
  )
}
