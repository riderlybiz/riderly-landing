import styled from "styled-components";

export const WhatRiderlySectionWrap = styled.section`
    width: 100dvw;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    box-sizing: border-box;
    background: #5E43DE;
    background: linear-gradient(90deg, rgba(94, 67, 222, 1) 0%, rgba(199, 119, 130, 1) 100%);
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
    background-color: #ffffff13;

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
        background-color: #ffffff13;
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