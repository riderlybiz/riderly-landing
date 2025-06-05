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
    font-size: 24px;
    color: #6B747F;
`

export const FunctionSectionCardWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
`

export const FunctionSectionCard = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px 0px #d5d5d5;
    background-color: #fff;
`