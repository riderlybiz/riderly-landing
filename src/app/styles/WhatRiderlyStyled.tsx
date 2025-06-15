import Image from "next/image";
import styled from "styled-components";

export const WhatRiderlySectionWrap = styled.section`
    width: 100dvw;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    box-sizing: border-box;
    background: #FF6F00;
    background: linear-gradient(320deg, rgba(255, 111, 0, 1) 0%, rgba(78, 52, 46, 1) 70%, rgba(33, 33, 33, 1) 82%);
`

export const WhatRiderlyTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

export const WhatRiderlyTitle = styled.h2`
    font-weight: 700;
    font-size: 36px;
    color: #fff;
`

export const WhatRiderlyDescription = styled.p`
    text-align: center;
    font-size: 24px;
    color: #b5b5b5;
`

export const WhatRiderlyContentWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 52px;

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 52px;
    }
`

export const WhatRiderlyList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const WhatRiderlyItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const WhatRiderlyItemTitle = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #fff;
`

export const WhatRiderlyItemDescription = styled.p`
    font-size: 16px;
    color: #b5b5b5;
`

export const WhatRiderlyItemImageWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 1000px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
`

export const WhatRiderlyItemImage = styled(Image)`
    width: 300px !important;
    height: auto !important;
    position: static !important;
    
    @media (max-width: 550px) {
        width: 75% !important;
        height: auto !important;
        position: static !important;
    }
`

export const WhatRiderlyDashbordWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const WhatRiderlyMainCard = styled.div`
    width: 400px;
    height: 250px;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    box-sizing: border-box;
    background-color:rgba(255, 255, 255, 0.2);

    @media (max-width: 400px) {
        width: 100%;
        height: 250px;
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        border-radius: 16px;
        box-sizing: border-box;
        background-color:rgba(255, 255, 255, 0.2);
    }
`

export const WhatRiderlyTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
`

export const WhatRiderlyCardTitle = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: #fff;
`

export const WhatRiderlyCardDescription = styled.p`
    line-height: 20px;
    font-size: 16px;
    color: #b5b5b5;
`

export const WhatRiderlySubCardList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const WhatRiderlySubCard = styled.div`
    width: 30%;
    padding: 36px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #ffffff13;
`

export const WhatRiderlySubCardTopText = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: #fff;
`

export const WhatRiderlySubCardBotText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #b5b5b5;

    @media (max-width: 400px) {
        font-weight: 400;
        font-size: 14px;
        color: #b5b5b5;
    }
`