import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const HeaderWrap = styled.header`
    width: 100dvw;
    height: 80px;
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    z-index: 999;
    transition: 0.3s;

    &.scroll {
        border-bottom: 1px solid #b5b5b5;
        background-color: #fff;
    }

    @media (max-width: 800px) {
        width: 100dvw;
        height: 80px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        z-index: 999;
        transition: 0.3s;

        &.scroll {
            border-bottom: 1px solid #b5b5b5;
            background-color: #fff;
        }   
    }
`;

export const HeaderLogo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    transition: 0.3s;

    &.scroll {
        color: #000;
    }
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
        color: #c5c5c5;
        transition: 0.3s;

        &:hover {
            color: #fff;
        }
    }

    &.scroll {
        a {
            &:hover {
                color: #000;
            }
        }
    }

    @media (max-width: 800px) {
        display: none;
    }
`

export const HeaderPreRegistraitionBtn = styled.button`
    padding: 12px 24px;
    border: none;
    border-radius: 999px;
    font-size: 16px;
    color: #fff;
    background-color: #7061EF;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #6356d4;
    }
`