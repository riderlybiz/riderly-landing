import styled from "styled-components";

export const FooterGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterBlock = styled.div``;

export const SectionTitle = styled.h4`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ECEEF0;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #9ca3af;
    font-size: 1.25rem;
    transition: color 0.2s;

    &:hover {
      color: #f97316; /* tailwind text-orange-500 */
    }
  }
`;

export const FooterWrap = styled.footer`
    padding: 20px 40px;
    box-sizing: border-box;
    background-color: #000;
`

export const FooterTextWrap = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    border-top: 2px solid #1c1c1c;
`

export const FooterText = styled.p`
    text-align: center;
    line-height: 24px;
    font-size: 16px;
    color: #707070;
`