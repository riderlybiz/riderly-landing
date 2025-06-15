import { Input, InputTextLabel, InputTextWrap } from '@/app/styles/common/InputTextStyled'
import React from 'react'

interface InputTextProps {
    children: string;
    value: string;
    onChange: (value: string) => void;
}

export const InputText = ({ children = 'label', value, onChange }: InputTextProps) => {
  return (
    <InputTextWrap>
        <InputTextLabel>{children}</InputTextLabel>
        <Input value={value} onChange={(e) => onChange(e.target.value)} />
    </InputTextWrap>
  )
}
