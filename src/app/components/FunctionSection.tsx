import React from 'react'
import Image from 'next/image';
import { FunctionDescription, FunctionIconWrap, FunctionSectionCard, FunctionSectionCardWrap, FunctionSectionSubText, FunctionSectionTxtTitle, FunctionSectionTxtWrap, FunctionSectionWrap, FunctionTextItem, FunctionTextList, FunctionTitle } from '../styles/FunctionSectionStyled'

export const FunctionSection = () => {
  return (
    <FunctionSectionWrap id='function-sec'>
        <FunctionSectionTxtWrap>
            <FunctionSectionTxtTitle>핵심 기능</FunctionSectionTxtTitle>
            <FunctionSectionSubText>라이더들이 정말 원하는 기능들만 모았습니다</FunctionSectionSubText>
        </FunctionSectionTxtWrap>
        <FunctionSectionCardWrap>
          <FunctionSectionCard>
            <FunctionIconWrap>
              <Image src="./icons/white_plus.png" alt='Plus' width={26} height={26} />
            </FunctionIconWrap>
            <FunctionTitle>벙개 생성</FunctionTitle>
            <FunctionDescription>집결지, 경유지, 목적지를 설정하고 선호 성향을 태그로 선택해 나만의 라이딩 모임을 만들어보세요.</FunctionDescription>
            <FunctionTextList>
              <FunctionTextItem>지도 기반 경로 설정</FunctionTextItem>
              <FunctionTextItem>라이딩 성향 태그</FunctionTextItem>
              <FunctionTextItem>커스텀 썸네일 등록</FunctionTextItem>
            </FunctionTextList>
          </FunctionSectionCard>
          <FunctionSectionCard>
            <FunctionIconWrap>
              <Image src="./icons/white_search.png" alt='Plus' width={26} height={26} />
            </FunctionIconWrap>
            <FunctionTitle>스마트 검색</FunctionTitle>
            <FunctionDescription>내 위치, 선호 성향, 바이크 종류를 기반으로 딱 맞는 벙개를 찾아드립니다.</FunctionDescription>
            <FunctionTextList>
              <FunctionTextItem>위치 기반 반경 검색</FunctionTextItem>
              <FunctionTextItem>성향 매칭 필터</FunctionTextItem>
              <FunctionTextItem>AI 추천 시스템</FunctionTextItem>
            </FunctionTextList>
          </FunctionSectionCard>
          <FunctionSectionCard>
            <FunctionIconWrap>
              <Image src="./icons/white_chat.png" alt='Plus' width={26} height={26} />
            </FunctionIconWrap>
            <FunctionTitle>실시간 채팅</FunctionTitle>
            <FunctionDescription>벙개 참여자들과 실시간으로 소통하고 라이딩 계획을 함께 세워보세요.</FunctionDescription>
            <FunctionTextList>
              <FunctionTextItem>그룹 채팅방</FunctionTextItem>
              <FunctionTextItem>1:1 DM 기능</FunctionTextItem>
              <FunctionTextItem>위치 공유</FunctionTextItem>
            </FunctionTextList>
          </FunctionSectionCard>
          <FunctionSectionCard>
            <FunctionIconWrap>
              <Image src="./icons/white_location.png" alt='Plus' width={26} height={26} />
            </FunctionIconWrap>
            <FunctionTitle>위치 공유</FunctionTitle>
            <FunctionDescription>라이딩 중 실시간으로 위치를 공유하여 안전하고 편리한 투어를 즐기세요.</FunctionDescription>
            <FunctionTextList>
              <FunctionTextItem>실시간 위치 추적</FunctionTextItem>
              <FunctionTextItem>내비게이션 연동</FunctionTextItem>
              <FunctionTextItem>개인정보 보호 설정</FunctionTextItem>
            </FunctionTextList>
          </FunctionSectionCard>
          <FunctionSectionCard>
            <FunctionIconWrap>
              <Image src="./icons/white_group.png" alt='Plus' width={26} height={26} />
            </FunctionIconWrap>
            <FunctionTitle>프로필 & 팔로우</FunctionTitle>
            <FunctionDescription>다른 라이더들의 프로필을 확인하고 팔로우하여 지속적인 관계를 만들어가세요.</FunctionDescription>
            <FunctionTextList>
              <FunctionTextItem>상세 프로필 정보</FunctionTextItem>
              <FunctionTextItem>팔로우/팔로워 시스템</FunctionTextItem>
              <FunctionTextItem>라이딩 이력 관리</FunctionTextItem>
            </FunctionTextList>
          </FunctionSectionCard>
          <FunctionSectionCard>
            <FunctionIconWrap>
              <Image src="./icons/white_flag.png" alt='Plus' width={26} height={26} />
            </FunctionIconWrap>
            <FunctionTitle>클럽 생성</FunctionTitle>
            <FunctionDescription>관심사가 비슷한 라이더들과 정기적인 모임을 위한 클럽을 만들어보세요.</FunctionDescription>
            <FunctionTextList>
              <FunctionTextItem>정기 모임 관리</FunctionTextItem>
              <FunctionTextItem>클럽 전용 피드</FunctionTextItem>
              <FunctionTextItem>멤버 관리 도구</FunctionTextItem>
            </FunctionTextList>
          </FunctionSectionCard>
        </FunctionSectionCardWrap>
    </FunctionSectionWrap>
  )
}
