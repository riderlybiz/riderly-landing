'use client';

import Image from "next/image";
import { WhatRiderlyCardDescription, WhatRiderlyCardTitle, WhatRiderlyItemImageWrap, WhatRiderlyItemImage, WhatRiderlyContentWrap, WhatRiderlyDashbordWrap, WhatRiderlyDescription, WhatRiderlyItem, WhatRiderlyItemDescription, WhatRiderlyItemTitle, WhatRiderlyList, WhatRiderlyMainCard, WhatRiderlySectionWrap, WhatRiderlySubCard, WhatRiderlySubCardBotText, WhatRiderlySubCardList, WhatRiderlySubCardTopText, WhatRiderlyTextWrap, WhatRiderlyTitle, WhatRiderlyTitleWrap } from "../styles/WhatRiderlyStyled";

export const WhatRiderly = () => {
    return (
        <WhatRiderlySectionWrap id='wat-riderly-sec'>
            <WhatRiderlyTitleWrap>
                <WhatRiderlyTitle>왜 Riderly인가요?</WhatRiderlyTitle>
                <WhatRiderlyDescription>기존 동호회의 부담스러운 점들을 해결한 새로운 라이더 커뮤니티</WhatRiderlyDescription>
            </WhatRiderlyTitleWrap>
            <WhatRiderlyContentWrap>
                <WhatRiderlyList>
                    <WhatRiderlyItem>
                        <WhatRiderlyItemTitle>부담 없는 만남</WhatRiderlyItemTitle>
                        <WhatRiderlyItemDescription>정기 모임이나 의무 참석 없이, 원할 때만 함께 달릴 수 있어요.</WhatRiderlyItemDescription>
                        <WhatRiderlyItemImageWrap>
                            <WhatRiderlyItemImage src="./imgs/what_riderly_item_image_1.jpg" alt="what_riderly_item_image_1" width={10} height={26} />
                        </WhatRiderlyItemImageWrap>
                    </WhatRiderlyItem>
                    <WhatRiderlyItem>
                        <WhatRiderlyItemTitle>정확한 매칭</WhatRiderlyItemTitle>
                        <WhatRiderlyItemDescription>라이딩 스타일, 바이크 종류, 실력 수준을 고려한 AI 매칭으로 최적의 동행자를 찾아드려요.</WhatRiderlyItemDescription>
                        <WhatRiderlyItemImageWrap>
                            <WhatRiderlyItemImage src="./imgs/what_riderly_item_image_2.jpg" alt="what_riderly_item_image_1" width={10} height={26} />
                        </WhatRiderlyItemImageWrap>
                    </WhatRiderlyItem>
                    <WhatRiderlyItem>
                        <WhatRiderlyItemTitle>SNS 방식 소통</WhatRiderlyItemTitle>
                        <WhatRiderlyItemDescription>라이딩 경로 공유부터 벙개 후기, 바이크 자랑까지. 자유롭고 다양한 소통으로 라이딩의 즐거움을 나눌 수 있어요.</WhatRiderlyItemDescription>
                        <WhatRiderlyItemImageWrap>
                            <WhatRiderlyItemImage src="./imgs/what_riderly_item_image_3.jpg" alt="what_riderly_item_image_1" width={10} height={26} />
                        </WhatRiderlyItemImageWrap>
                    </WhatRiderlyItem>
                </WhatRiderlyList>
                <WhatRiderlyDashbordWrap>
                    <WhatRiderlyMainCard>
                        <Image src="./logo.png" alt="Logo" width={100} height={100} />
                        <WhatRiderlyTextWrap>
                            <WhatRiderlyCardTitle>Connect, Ride. Share.</WhatRiderlyCardTitle>
                            <WhatRiderlyCardDescription>라이더들을 연결하고, 함께 달리며, 경험을 나누는 새로운 모터사이클 커뮤니티의 시작</WhatRiderlyCardDescription>
                        </WhatRiderlyTextWrap>
                    </WhatRiderlyMainCard>
                    {/* <WhatRiderlySubCardList>
                    <WhatRiderlySubCard>
                        <WhatRiderlySubCardTopText>6명</WhatRiderlySubCardTopText>
                        <WhatRiderlySubCardBotText>최적 벙개 인원</WhatRiderlySubCardBotText>
                    </WhatRiderlySubCard>
                    <WhatRiderlySubCard>
                        <WhatRiderlySubCardTopText>AI</WhatRiderlySubCardTopText>
                        <WhatRiderlySubCardBotText>스마트 매칭</WhatRiderlySubCardBotText>
                    </WhatRiderlySubCard>
                    <WhatRiderlySubCard>
                        <WhatRiderlySubCardTopText>24/7</WhatRiderlySubCardTopText>
                        <WhatRiderlySubCardBotText>언제든 참여</WhatRiderlySubCardBotText>
                    </WhatRiderlySubCard>
                </WhatRiderlySubCardList> */}
                </WhatRiderlyDashbordWrap>
            </WhatRiderlyContentWrap>
        </WhatRiderlySectionWrap>
    )
}
