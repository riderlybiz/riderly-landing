import React, { useEffect, useState } from 'react'
import { ApplicationDescription, ApplicationFormCardWrap, ApplicationFormWrap, ApplicationTitle, ApplicationTitleWrap } from '../styles/ApplicationFormStyled'
import { InputText } from './common/InputText'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export const ApplicationForm = () => {
    const [name, setName] = useState('');

    // 유저 폼 생성
    const handleClickAddApplication = () => {
      addData();
    }
  
    const addData = async () => {
      try {
        await setDoc(doc(db, 'users', '유민호'), {
          name: '유민호',
          phoneNumber: '01094199543',
          age: 27,
          email: 'ymh0951@gmail.com'
        })
      } catch (err: unknown) {
        console.error("Error adding document: ", err);
      }
    }

    const handleChangeValue = (value: string, setState: React.Dispatch<React.SetStateAction<string>>) => {
      setState(value);
    }

  return (
    <ApplicationFormWrap>
      <ApplicationTitleWrap>
        <ApplicationTitle>사전 신청</ApplicationTitle>
        <ApplicationDescription>
          Riderly 출시 소식을 가장 먼저 받아보세요!<br />
          사전 신청자에게는 특별한 혜택을 준비했습니다.
        </ApplicationDescription>
        <ApplicationFormCardWrap>
          <InputText value={name} onChange={(value: string) => handleChangeValue(value, setName)}>테스트</InputText>
        </ApplicationFormCardWrap>
      </ApplicationTitleWrap>
    </ApplicationFormWrap>
  )
}
