'use client';

import { replaceUtmUrl } from './replaceUtmUrl';
import { GoogleAnalytics } from '@next/third-parties/google';

import { MainWrap } from "../styles/MainStyled";
import { ApplicationForm } from "./ApplicationForm";
import { CartoonSection } from "./CartoonSection";
import { FunctionSection } from "./FunctionSection";
import { MainSection } from "./MainSection";
import { WhatRiderly } from "./WhatRiderly";

export const Main = ({ join }: { join: string }) => {
    if (join) {
        replaceUtmUrl({ join: join });
    }

    return (
        <MainWrap>
            <GoogleAnalytics gaId="G-3LM2DF1EZW" />
            <MainSection />
            <ApplicationForm />
            <CartoonSection />
            <WhatRiderly />
            <FunctionSection />
        </MainWrap>
    )
}
