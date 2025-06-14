'use client';

import { CartoonImageWrap, CartoonSectionText, CartoonSectionWrap, CartoonImage } from "../styles/CartoonSectionStyled";

export const CartoonSection = () => {
  return (
    <CartoonSectionWrap id='cartoon-sec'>
        <CartoonSectionText>
            누군가와 함께 달리고 싶지만, 말 걸 곳도, 기다릴 곳도 없는 현실.<br />
            혼자라는 건, 생각보다 더 외롭습니다.
        </CartoonSectionText>
        <CartoonImageWrap>
            <CartoonImage src="./imgs/cartoon_1.png" alt="riderly" fill />
            <CartoonImage src="./imgs/cartoon_2.png" alt="riderly" fill />
        </CartoonImageWrap>
    </CartoonSectionWrap>
  )
}
