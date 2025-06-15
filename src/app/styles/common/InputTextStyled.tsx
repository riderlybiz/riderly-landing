import styled from "styled-components";

export const InputTextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`

export const InputTextLabel = styled.label`
    font-size: 14px;
`

export const Input = styled.input`
    padding: 8px 12px;
    border: 1px solid #ECEEF0;
    border-radius: 8px;
    background-color: #fff;

    &:focus { 
        outline: none;
    }
`