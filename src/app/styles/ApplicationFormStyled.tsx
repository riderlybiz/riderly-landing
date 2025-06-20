import styled from "styled-components";

export const ApplicationFormWrap = styled.section`
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const ApplicationTitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const ApplicationTitle = styled.h2`
    font-weight: 700;
    font-size: 32px;
`

export const ApplicationDescription = styled.p`
    text-align: center;
    font-size: 20px;
    line-height: 28px;
    color: #212121;
`

export const PreRegistrationMainTitle = styled.p`
    text-align: center;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #212121;
`

export const PreRegistrationItemTitle = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    color: #212121;
`
export const PreRegistrationItemDescription = styled.p`
    text-align: center;
    font-size: 16px;
    color: #9E9E9E;
`

export const ApplicationFormCardWrap = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 12px;
    background-color: #F9FAFB;
`

export const ApplicationFormInputFlexWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    @media (max-width: 500px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
`

export const ApplicationFormCheckboxWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

export const ApplicationFormCheckboxTitle = styled.p`
    font-size: 14px;
`

export const ApplicationFormCheckList = styled.ul`
    width: 100%;
    display: grid;
    row-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 500px) {
        width: 100%;
        display: grid;
        row-gap: 8px;
        grid-template-columns: 1fr 1fr;
    }
`

export const ApplicationFormCheckItem = styled.li`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

export const ApplicationSelectWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

export const ApplicationSelectLabel = styled.label`
    font-size: 14px;
`

export const ApplicationSelect = styled.select`
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ECEEF0;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
`

export const ApplicationFormSubmitBtn = styled.button`
    width: 100%;
    padding: 8px 20px;
    display: block;
    border: 1px solid transparent;
    border-radius: 12px;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
    box-sizing: border-box;
    background-color: #FF6F00;
    cursor: pointer;
`