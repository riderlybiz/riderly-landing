'use client';

import { MainSectionBtn, MainSectionBtnWrap, MainSectionContent, MainSectionLogoImg, MainSectionSubText, MainSectionText, MainSectionTextWrap, MainSectionWrap } from '@/app/styles/MainSectionStyled';

export const MainSection = () => {

    const handleClickAutoScroll = (id: string) => {
        const element = document.querySelector<HTMLElement>(`#${id}`);

        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // 예: 헤더 높이만큼 여유
                behavior: 'smooth',
            });
        }
    };

    return (
        <MainSectionWrap id='main-sec'>
            <MainSectionContent>
                <MainSectionLogoImg src="./logo.png" alt="Riderly" fill />
                <MainSectionTextWrap>
                    <MainSectionText>
                        혼자 달리기 외로운<br />
                        라이더들을 위한<br />
                        벙개 모임 플랫폼
                    </MainSectionText>
                    <MainSectionSubText>
                        동호회 활동 부담 없이 쉽게 라이딩 동행자를 찾을 수 있는<br />
                        새로운 라이더 커뮤니티 서비스
                    </MainSectionSubText>
                </MainSectionTextWrap>
                <MainSectionBtnWrap>
                    <MainSectionBtn
                        onClick={() => handleClickAutoScroll('application-form')}
                    >사전신청하고 출시알림 받기</MainSectionBtn>
                </MainSectionBtnWrap>
            </MainSectionContent>
        </MainSectionWrap>
    )
}
