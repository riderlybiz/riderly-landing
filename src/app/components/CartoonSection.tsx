'use client';

import { CartoonImageWrap, CartoonSectionText, CartoonSectionWrap, CartoonImage } from "../styles/CartoonSectionStyled";

export const CartoonSection = () => {
  return (
    <CartoonSectionWrap id='cartoon-sec'>
        <CartoonSectionText>
            혼자 달리는 건 익숙해도<br />
            함께 달리고 싶은 순간은 분명 있습니다.
        </CartoonSectionText>
        <CartoonImageWrap>
            <CartoonImage src="./imgs/cartoon_1.png" alt="riderly" fill />
            <CartoonImage src="./imgs/cartoon_2.png" alt="riderly" fill />
        </CartoonImageWrap>
        <CartoonSectionText>
            Riderly는 그런 당신을 위해 <br />
            만들어졌습니다.<br />
            <br />
            라이더들에게 <br />
            진짜 필요한 기능만 담았습니다.
        </CartoonSectionText>
    </CartoonSectionWrap>
  )
}
