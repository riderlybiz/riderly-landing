import styled from "styled-components";

export const FunctionSectionWrap = styled.section`
    width: 100dvw;
    padding: 60px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    box-sizing: border-box;
    background-color: #F2F4F6;
`

export const FunctionSectionTxtWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

export const FunctionSectionTxtTitle = styled.h2`
    font-weight: 700;
    font-size: 32px;
`

export const FunctionSectionSubText = styled.p`
    text-align: center;
    font-size: 24px;
    color: #6B747F;
`

export const FunctionSectionCardWrap = styled.div`
    width: calc(900px + 40px);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 960px) {
        width: calc(100% - 60px);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
`

export const FunctionSectionCard = styled.div`
    width: 300px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px 0px #d5d5d5;
    box-sizing: border-box;
    background-color: #fff;
`

export const FunctionIconWrap = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
    background: #FF6F00;
    background: linear-gradient(320deg, rgba(255, 111, 0, 1) 0%, rgba(78, 52, 46, 1) 80%, rgba(33, 33, 33, 1) 100%);
`

export const FunctionTitle = styled.p`
    font-weight: 600;
    font-size: 22px;
`

export const FunctionDescription = styled.p`
    font-weight: 400;
    line-height: 24px;
    font-size: 18px;
`

export const FunctionTextList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: inside;
`

export const FunctionTextItem = styled.li`
    font-size: 16px;
    color: #959595;
`