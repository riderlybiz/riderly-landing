import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderWrap = styled.header`
    height: 80px;
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderLogo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    font-size: 20px;
`

export const HeaderLogoImg = styled(Image)`
    width: 60px !important;
    height: auto !important;
    position: static !important;
`

export const HeaderMenuNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 32px;

    a {
        font-weight: 700;
        font-size: 20px;
        color: #989898;
        transition: 0.3s;

        &:hover {
            color: #000;
        }
    }
`

export const HeaderPreREgistraitionBtn = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    background-color: #7061EF;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #6356d4;
    }
`