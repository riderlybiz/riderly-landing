import Image from "next/image";
import styled from "styled-components";

export const CartoonSectionWrap = styled.section`
    width: 100dvw;
    padding: 60px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    box-sizing: border-box;
    background-color: #F2F4F6;
`

export const CartoonSectionText = styled.p`
    text-align: center;
    line-height: 28px;
    font-weight: 500;
    font-size: 20px;
    color: #000;
`

export const CartoonImageWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const CartoonImage = styled(Image)`
    width: 500px !important;
    height: 382px !important;
    position: static !important;
`