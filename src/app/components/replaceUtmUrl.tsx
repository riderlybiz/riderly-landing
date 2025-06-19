import { useEffect } from 'react';

export const replaceUtmUrl = ({ join }: { join: string }) => {

    const DEFAULT_URL = '';
    const NAVER_CAFE_URL = '?utm_source=naver&utm_medium=cafe&utm_campaign=prelaunch';
    const INSTAGRAM_URL = '?utm_source=instagram&utm_campaign=prelaunch';
    const INSTAGRAM_PROFILE_URL = '?utm_source=instagram&utm_medium=profile&utm_campaign=prelaunch';
    const INSTAGRAM_CONTENT_VEDIO1_URL = '?utm_source=instagram&utm_medium=content&utm_campaign=prelaunch&utm_content=vedio1 ';
    const METAVV = '?utm_source=metavv&utm_campaign=prelaunch';
    const MBTI = '?utm_source=mbti&utm_medium=referral&utm_campaign=prelaunch';

    const getRedirectUrl = (join: string) => {
        if (!join) {
            return DEFAULT_URL;
        } else if (join === 'naver') {
            return NAVER_CAFE_URL;
        } else if (join === 'instagram') {
            return INSTAGRAM_URL;
        } else if (join === 'instagram-profile') {
            return INSTAGRAM_PROFILE_URL;
        } else if (join === 'instagram-content-vedio1') {
            return INSTAGRAM_CONTENT_VEDIO1_URL;
        } else if (join === 'metavv') {
            return METAVV;
        } else if (join === 'mbti') {
            return MBTI;
        } else {
            // 잘못된 경로로 접근한 경우 기본 URL로 리다이렉트
            return DEFAULT_URL;
        }
    };
    useEffect(() => {
        const REDIRECT_BASE = process.env.NODE_ENV === 'production' ? 'https://riderlybiz.github.io/riderly-landing' : window.location.origin;
        const query = getRedirectUrl(join);
        const utmUrl = `${REDIRECT_BASE}/${query}`;
        window.history.replaceState({}, '', utmUrl);
    }, [join]);
}
