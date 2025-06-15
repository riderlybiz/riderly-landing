import styled from "styled-components";

export const InputTextWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

export const InputTextLabel = styled.label`
    font-size: 14px;
`

export const Input = styled.input`
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ECEEF0;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;

    &:focus { 
        outline: none;
    }
`

export const TextAreaEl = styled.textarea`
    width: 100%;
    height: 75px;
    padding: 8px 12px;
    border: 1px solid #ECEEF0;
    border-radius: 8px;
    box-sizing: border-box;
    resize: vertical;
    background-color: #fff;

    &:focus { 
        outline: none;
    }
`