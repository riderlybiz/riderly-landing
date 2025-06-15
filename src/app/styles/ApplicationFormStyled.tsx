import styled from "styled-components";

export const ApplicationFormWrap = styled.section`
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 24px;
    line-height: 28px;
    color: #6B747F;
`

export const ApplicationFormCardWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px;
    border-radius: 12px;
    background-color: #F9FAFB;
`

export const ApplicationFormInputFlexWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
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
    background-color: #7061EF;
    cursor: pointer;
`