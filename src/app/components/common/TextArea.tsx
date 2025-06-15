import { InputTextLabel, InputTextWrap, TextAreaEl } from '@/app/styles/common/InputTextStyled'
import React from 'react'

interface InputTextProps {
    children: string;
    value: string;
    onChange: (value: string) => void;
}

export const TextArea = ({ children = 'label', value, onChange }: InputTextProps) => {
  return (
    <InputTextWrap>
        <InputTextLabel>{children}</InputTextLabel>
        <TextAreaEl value={value} onChange={(e) => onChange(e.target.value)} />
    </InputTextWrap>
  )
}
