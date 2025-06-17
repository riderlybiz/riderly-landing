import { RedirectClient } from './components/RedirectClient';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    // 필요한 모든 경로 나열
    { join: 'naver' },
    { join: 'instagram' },
    { join: 'kakao' },
  ];
}

export default function RedirectPage({ params }: { params: { join: string } }) {
    console.log(params)

    return <RedirectClient join={params.join} />;
};
