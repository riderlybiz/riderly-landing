// /app/[join]/RedirectClient.tsx
'use client';

import { useEffect } from 'react';

export const RedirectClient = ({ join }: { join: string }) => {

    const DEFAULT_URL = '';
    const NAVER_CAFE_URL = '?utm_source=naver&utm_medium=cafe&utm_campaign=prelaunch';
    const INSTAGRAM_URL = '?utm_source=instagram&utm_campaign=prelaunch';
    const INSTAGRAM_PROFILE_URL = '?utm_source=instagram&utm_medium=profile&utm_campaign=prelaunch';
    const getRedirectUrl = (join: string) => {
        if (!join) {
            return DEFAULT_URL;
        } else if (join === 'naver') {
            return NAVER_CAFE_URL;
        } else if (join === 'instagram') {
            return INSTAGRAM_URL;
        } else if (join === 'instagram-profile') {
            return INSTAGRAM_PROFILE_URL;
        } else {
            // 잘못된 경로로 접근한 경우 기본 URL로 리다이렉트
            return DEFAULT_URL;
        }
    };
    useEffect(() => {
        const REDIRECT_BASE = process.env.NODE_ENV === 'production' ? 'https://riderlybiz.github.io/riderly-landing' : window.location.origin;
        const query  = getRedirectUrl(join);
        window.location.href = `${REDIRECT_BASE}/${query}`;
    }, [join]);

    return <p>Redirecting to Riderly...</p>;
}
