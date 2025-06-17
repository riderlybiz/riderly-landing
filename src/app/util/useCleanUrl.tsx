import { useEffect } from 'react';

export const useCleanUrl = () => {
  useEffect(() => {
    const url = new URL(window.location.href);

    if (url.searchParams.has('utm_source') || url.searchParams.has('utm_medium')) {
      // UTM 값은 GA에서 이미 수집됐으므로, 브라우저 주소창에서 제거
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, '', cleanUrl);
    }
  }, []);
};