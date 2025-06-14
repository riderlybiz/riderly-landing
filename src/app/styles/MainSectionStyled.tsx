import Image from "next/image";
import styled from "styled-components";

export const MainSectionWrap = styled.section`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5E43DE;
    background: linear-gradient(90deg,rgba(94, 67, 222, 1) 0%, rgba(199, 119, 130, 1) 100%);

    @media (max-width: 800px) {
        width: 100dvw;
        height: 100dvh;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        background: #5E43DE;
        background: linear-gradient(90deg,rgba(94, 67, 222, 1) 0%, rgba(199, 119, 130, 1) 100%);
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

export const MainSectionSubText = styled.p`
    text-align: center;
    line-height: 48px;
    font-weight: 500;
    font-size: 32px;
    color: #c5c5c5;

    @media (max-width: 800px) {
        text-align: center;
        line-height: 28px;
        font-weight: 500;
        font-size: 20px;
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
    width: 100%;
    max-width: 360px;
    padding: 12px 24px;
    display: block;
    border: 1px solid transparent;
    border-radius: 999px;
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    box-sizing: border-box;
    background-color: #7061EF;
    cursor: pointer;
`