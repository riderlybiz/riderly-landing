'use client';

import Image from "next/image";
import { WhatRiderlyCardDescription, WhatRiderlyCardTitle, WhatRiderlyContentWrap, WhatRiderlyDashbordWrap, WhatRiderlyDescription, WhatRiderlyItem, WhatRiderlyItemDescription, WhatRiderlyItemTitle, WhatRiderlyList, WhatRiderlyMainCard, WhatRiderlySectionWrap, WhatRiderlyTextWrap, WhatRiderlyTitle, WhatRiderlyTitleWrap } from "../styles/WhatRiderlyStyled";
import Logo from '@/assets/logo.png';

export const WhatRiderly = () => {
  return (
    <WhatRiderlySectionWrap>
        <WhatRiderlyTitleWrap>
            <WhatRiderlyTitle>왜 Riderly인가요?</WhatRiderlyTitle>
            <WhatRiderlyDescription>기존 동호회의 부담스러운 점들을 해결한 새로운 라이더 커뮤니티</WhatRiderlyDescription>
        </WhatRiderlyTitleWrap>
        <WhatRiderlyContentWrap>
            <WhatRiderlyList>
                <WhatRiderlyItem>
                    <WhatRiderlyItemTitle>부담 없는 만남</WhatRiderlyItemTitle>
                    <WhatRiderlyItemDescription>정기 모임이나 의무 참석 없이, 원할 때만 함께 달릴 수 있어요.</WhatRiderlyItemDescription>
                </WhatRiderlyItem>
                <WhatRiderlyItem>
                    <WhatRiderlyItemTitle>정확한 매칭</WhatRiderlyItemTitle>
                    <WhatRiderlyItemDescription>라이딩 스타일, 바이크 종류, 실력 수준을 고려한 AI 매칭으로 최적의 동행자를 찾아드려요.</WhatRiderlyItemDescription>
                </WhatRiderlyItem>
                <WhatRiderlyItem>
                    <WhatRiderlyItemTitle>안전한 라이딩</WhatRiderlyItemTitle>
                    <WhatRiderlyItemDescription>실시간 위치 공유와 신고 시스템으로 더욱 안전하고 신뢰할 수 있는 라이딩 환경을 제공해요.</WhatRiderlyItemDescription>
                </WhatRiderlyItem>
                <WhatRiderlyItem>
                    <WhatRiderlyItemTitle>간편한 사용</WhatRiderlyItemTitle>
                    <WhatRiderlyItemDescription>정기 모임이나 의무 참석 없이, 원할 때만 함께 달릴 수 있어요.</WhatRiderlyItemDescription>
                </WhatRiderlyItem>
            </WhatRiderlyList>
            <WhatRiderlyDashbordWrap>
                <WhatRiderlyMainCard>
                    <Image src={Logo.src} alt="Logo" width={100} height={100} />
                    <WhatRiderlyTextWrap>
                        <WhatRiderlyCardTitle>Connect, Ride. Share.</WhatRiderlyCardTitle>
                        <WhatRiderlyCardDescription>라이더들을 연결하고, 함께 달리며, 경험을 나누는 새로운 모터사이클 커뮤니티의 시작</WhatRiderlyCardDescription>
                    </WhatRiderlyTextWrap>
                </WhatRiderlyMainCard>
            </WhatRiderlyDashbordWrap>
        </WhatRiderlyContentWrap>
    </WhatRiderlySectionWrap>
  )
}
