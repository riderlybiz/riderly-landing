import Image from "next/image";
import styled from "styled-components";

export const MainSectionWrap = styled.section`
    width: 100dvw;
    height: 150vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FF6F00;
    background: linear-gradient(320deg, rgba(255, 111, 0, 1) 0%, rgba(78, 52, 46, 1) 70%, rgba(33, 33, 33, 1) 82%);
    
    @media (max-width: 800px) {
        width: 100dvw;
        height: 120dvh;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        background: #FF6F00;
        background: linear-gradient(320deg, rgba(255, 111, 0, 1) 0%, rgba(78, 52, 46, 1) 70%, rgba(33, 33, 33, 1) 82%);
    }
`

export const MainSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
`

export const MainSectionLogoImg = styled(Image)`
    width: 200px !important;
    height: auto !important;
    position: static !important;
`

export const MainSectionTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

export const MainSectionText = styled.h2`
    text-align: center;
    line-height: 80px;
    font-weight: 700;
    font-size: 64px;
    color: #fff;

    @media (max-width: 800px) {
        text-align: center;
        line-height: 46px;
        font-weight: 700;
        font-size: 36px;
        color: #fff;
    }
`
export const MainCard = styled.div`
    width: 100%;
    height: 140px;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    box-sizing: border-box;
    background-color:rgba(255, 255, 255, 0.3);

    @media (max-width: 800px) {
        width: 100%;
        height: 100px;
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        border-radius: 16px;
        box-sizing: border-box;
        background-color:rgba(255, 255, 255, 0.3);
    }
`

export const MainCardSubText = styled.p`
    text-align: center;
    line-height: 48px;
    font-weight: 500;
    font-size: 30px;
    color:rgba(33, 33, 33);

    @media (max-width: 800px) {
        text-align: center;
        line-height: 26px;
        font-weight: 500;
        font-size: 16px;
        color:rgba(33, 33, 33);
    }
`

export const MainSectionSubText = styled.p`
    text-align: center;
    line-height: 48px;
    font-weight: 500;
    font-size: 30px;
    color: #c5c5c5;

    @media (max-width: 800px) {
        text-align: center;
        line-height: 26px;
        font-weight: 500;
        font-size: 16px;
        color: #c5c5c5;
    }
`

export const MainSectionBtnWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`

export const MainSectionBtn = styled.button`
    width: 360px;
    max-width: 360px;
    padding: 12px 24px;
    display: block;
    border: 1px solid transparent;
    border-radius: 999px;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    box-sizing: border-box;
    background-color: #FF6F00;
    cursor: pointer;

    @media (max-width: 370px) {
        width: 100%;
        max-width: 350px;
        padding: 12px 24px;
        display: block;
        border: 1px solid transparent;
        border-radius: 999px;
        font-weight: 500;
        font-size: 20px;
        color: #fff;
        box-sizing: border-box;
        background-color: #FF6F00;
        cursor: pointer;
    }
`