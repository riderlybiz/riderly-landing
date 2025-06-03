import Image from "next/image";
import styled from "styled-components";

export const MainSectionWrap = styled.section`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5E43DE;
    background: linear-gradient(90deg,rgba(94, 67, 222, 1) 0%, rgba(199, 119, 130, 1) 100%);;
`

export const MainSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
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
`

export const MainSectionSubText = styled.p`
    text-align: center;
    line-height: 48px;
    font-weight: 500;
    font-size: 32px;
    color: #c5c5c5;
`

export const MainSectionBtnWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 28px;
`

export const MainSectionBtn = styled.button`
    width: 360px;
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