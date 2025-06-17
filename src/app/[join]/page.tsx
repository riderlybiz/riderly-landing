import { replaceUtmUrl } from './components/replaceUtmUrl';
import { Main } from "../components/Main";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    // 필요한 모든 경로 나열
    { join: 'naver' },
    { join: 'instagram' },
    { join: 'instagram-profile' },
    { join: 'instagram-content-vedio1' },
    { join: 'metavv' },
    { join: 'facebook' },
    { join: 'tiktok' },
    { join: 'youtube' },
    { join: 'blog' },
    { join: 'twitter' },
    { join: 'email' },
    { join: 'kakao' },
  ];
}

export default function RedirectPage({ params }: { params: { join: string } }) {
  // replaceUtmUrl({ join: params.join });
  return (
    <div>
      <Main />
    </div>
  );
};
