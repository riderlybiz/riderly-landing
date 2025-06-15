import React, { useState } from 'react'
import { ApplicationDescription, PreRegistrationMainTitle, PreRegistrationItemTitle, PreRegistrationItemDescription, ApplicationFormCardWrap, ApplicationFormCheckboxTitle, ApplicationFormCheckboxWrap, ApplicationFormCheckItem, ApplicationFormCheckList, ApplicationFormInputFlexWrap, ApplicationFormSubmitBtn, ApplicationFormWrap, ApplicationSelect, ApplicationSelectLabel, ApplicationSelectWrap, ApplicationTitle, ApplicationTitleWrap } from '../styles/ApplicationFormStyled'
import { InputText } from './common/InputText'
import { TextArea } from './common/TextArea';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [telNumber, setTelNumber] = useState('');
  const [email, setEmail] = useState('');
  const [functionList, setFunctionList] = useState([]);
  const [bikeExperience, setBikeExperience] = useState('');
  const [etc, setEtc] = useState('');

  // 유저 폼 생성
  const handleClickAddApplication = async () => {
    if (name && telNumber && email) {
      try {
        await setDoc(doc(db, 'users', `${telNumber}`), {
          name: name,
          phoneNumber: telNumber,
          email: email,
          functions: functionList,
          bikeExperience: bikeExperience,
          etc: etc
        })
      } catch (err: unknown) {
        console.error("Error adding document: ", err);
      }
    } else {
      alert('필수값을 입력해주시길 바랍니다.');
    }
  }

  const handleChangeValue = (value: string, setState: React.Dispatch<React.SetStateAction<string>>) => {
    setState(value);
  }

  const handleClickAddFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (checked) {
      setFunctionList((prev) => [...prev, value]);
    } else {
      setFunctionList((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <ApplicationFormWrap id='application-form'>
      <ApplicationTitleWrap>
        <ApplicationTitle>사전 신청</ApplicationTitle>
        <ApplicationDescription>
          Riderly 출시 소식을 가장 먼저 받아보세요!<br />
          사전 신청자에게는 특별한 혜택을 준비했습니다.
        </ApplicationDescription>
        <PreRegistrationMainTitle>
          🎁 사전 신청 혜택
        </PreRegistrationMainTitle>
        <PreRegistrationItemDescription>
          출시 초기 한정 특별 혜택을 놓치지 마세요!
        </PreRegistrationItemDescription>
        <PreRegistrationItemTitle>
          🚀 베타 테스터
        </PreRegistrationItemTitle>
        <PreRegistrationItemDescription>
          정식 출시 전 체험 기회
        </PreRegistrationItemDescription>
        <PreRegistrationItemTitle>
          💰 프리미엄 무료
        </PreRegistrationItemTitle>
        <PreRegistrationItemDescription>
          3개월 무료 이용권
        </PreRegistrationItemDescription>
        <PreRegistrationItemTitle>
          🏆 창립 멤버
        </PreRegistrationItemTitle>
        <PreRegistrationItemDescription>
          특별 배지 및 혜택
        </PreRegistrationItemDescription>
        <br />
      </ApplicationTitleWrap>
      <ApplicationFormCardWrap>
        <ApplicationFormInputFlexWrap>
          <InputText value={name} onChange={(value: string) => handleChangeValue(value, setName)}>이름 *</InputText>
          <InputText value={telNumber} onChange={(value: string) => handleChangeValue(value, setTelNumber)}>연락처 *</InputText>
        </ApplicationFormInputFlexWrap>
        <InputText value={email} onChange={(value: string) => handleChangeValue(value, setEmail)}>이메일 *</InputText>
        <ApplicationFormCheckboxWrap>
          <ApplicationFormCheckboxTitle>관심 기능 (복수 선택 가능)</ApplicationFormCheckboxTitle>
          <ApplicationFormCheckList>
            <ApplicationFormCheckItem>
              <input type="checkbox" id='bung' value='벙개 생성/참여' checked={functionList.includes('벙개 생성/참여')} onChange={(e) => handleClickAddFunction(e)} />
              <label htmlFor="bung">벙개 생성/참여</label>
            </ApplicationFormCheckItem>
            <ApplicationFormCheckItem>
              <input type="checkbox" id='ai' value="AI 매칭" checked={functionList.includes('AI 매칭')} onChange={(e) => handleClickAddFunction(e)} />
              <label htmlFor="ai">AI 매칭</label>
            </ApplicationFormCheckItem>
            <ApplicationFormCheckItem>
              <input type="checkbox" id='chat' value="실시간 채팅" checked={functionList.includes('실시간 채팅')} onChange={(e) => handleClickAddFunction(e)} />
              <label htmlFor="chat">실시간 채팅</label>
            </ApplicationFormCheckItem>
            <ApplicationFormCheckItem>
              <input type="checkbox" id='location' value='위치 공유' checked={functionList.includes('위치 공유')} onChange={(e) => handleClickAddFunction(e)} />
              <label htmlFor="location">위치 공유</label>
            </ApplicationFormCheckItem>
            <ApplicationFormCheckItem>
              <input type="checkbox" id='club' value="클럽 기능" checked={functionList.includes('클럽 기능')} onChange={(e) => handleClickAddFunction(e)} />
              <label htmlFor="club">클럽 기능</label>
            </ApplicationFormCheckItem>
            <ApplicationFormCheckItem>
              <input type="checkbox" id='feed' value="피드 공유" checked={functionList.includes('피드 공유')} onChange={(e) => handleClickAddFunction(e)} />
              <label htmlFor="feed">피드 공유</label>
            </ApplicationFormCheckItem>
          </ApplicationFormCheckList>
        </ApplicationFormCheckboxWrap>
        <ApplicationSelectWrap>
          <ApplicationSelectLabel>보유 바이크 (선택사항)</ApplicationSelectLabel>
          <ApplicationSelect>
            <option value="">선택해주세요</option>
            <option value="scooter">스쿠터 (125cc 이하)</option>
            <option value="entry">엔트리급 (126-250cc)</option>
            <option value="quarter">쿼터급 (251-400cc)</option>
            <option value="middle">미들급 (401-750cc)</option>
            <option value="liter">리터급 (751cc-1000cc)</option>
            <option value="overliter">오버리터급 (1001cc 이상)</option>
          </ApplicationSelect>
        </ApplicationSelectWrap>
        <ApplicationFormCheckboxWrap>
          <ApplicationFormCheckboxTitle>라이딩 경험</ApplicationFormCheckboxTitle>
          <ApplicationFormCheckList>
            <ApplicationFormCheckItem>
              <input type="radio" id='bike-1' value='바린이(0년~2년)' checked={bikeExperience === '바린이(0년~2년)'} onChange={(e) => handleChangeValue(e.target.value, setBikeExperience)} />
              <label htmlFor="bike-1">바린이(0년~2년)</label>
            </ApplicationFormCheckItem>
            <ApplicationFormCheckItem>
              <input type="radio" id='bike-2' value="중급자(3년~5년)" checked={bikeExperience === '중급자(3년~5년)'} onChange={(e) => handleChangeValue(e.target.value, setBikeExperience)} />
              <label htmlFor="bike-2">중급자(3년~5년)</label>
            </ApplicationFormCheckItem>
            <ApplicationFormCheckItem>
              <input type="radio" id='bike-3' value="상급자(6년~)" checked={bikeExperience === '상급자(6년~)'} onChange={(e) => handleChangeValue(e.target.value, setBikeExperience)} />
              <label htmlFor="bike-3">상급자(6년~)</label>
            </ApplicationFormCheckItem>
          </ApplicationFormCheckList>
        </ApplicationFormCheckboxWrap>
        <TextArea value={etc} onChange={(e) => handleChangeValue(e, setEtc)}>추가 의견 (선택사항)</TextArea>
        <ApplicationFormSubmitBtn onClick={handleClickAddApplication}>사전 신청 완료하기</ApplicationFormSubmitBtn>
      </ApplicationFormCardWrap>
    </ApplicationFormWrap >
  )
}
