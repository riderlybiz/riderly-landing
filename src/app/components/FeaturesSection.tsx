'use client';

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">핵심 기능</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    라이더들이 정말 원하는 기능들만 모았습니다
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mb-6">
                        <i className="fas fa-plus text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">벙개 생성</h3>
                    <p className="text-gray-600 mb-4">
                        집결지, 경유지, 목적지를 설정하고 선호 성향을 태그로 선택해 나만의 라이딩 모임을 만들어보세요.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>• 지도 기반 경로 설정</li>
                        <li>• 라이딩 성향 태그</li>
                        <li>• 커스텀 썸네일 등록</li>
                    </ul>
                </div>
                <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mb-6">
                        <i className="fas fa-search text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">스마트 검색</h3>
                    <p className="text-gray-600 mb-4">
                        내 위치, 선호 성향, 바이크 종류를 기반으로 딱 맞는 벙개를 찾아드립니다.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>• 위치 기반 반경 검색</li>
                        <li>• 성향 매칭 필터</li>
                        <li>• AI 추천 시스템</li>
                    </ul>
                </div>
                <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mb-6">
                        <i className="fas fa-comments text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">실시간 채팅</h3>
                    <p className="text-gray-600 mb-4">
                        벙개 참여자들과 실시간으로 소통하고 라이딩 계획을 함께 세워보세요.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>• 그룹 채팅방</li>
                        <li>• 1:1 DM 기능</li>
                        <li>• 위치 공유</li>
                    </ul>
                </div>

                <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mb-6">
                        <i className="fas fa-map-marked-alt text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">위치 공유</h3>
                    <p className="text-gray-600 mb-4">
                        라이딩 중 실시간으로 위치를 공유하여 안전하고 편리한 투어를 즐기세요.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>• 실시간 위치 추적</li>
                        <li>• 지도에 표시</li>
                        <li>• 위치 공유 On/Off 설정</li>
                    </ul>
                </div>
                <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mb-6">
                        <i className="fas fa-user-friends text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">프로필 & 팔로우</h3>
                    <p className="text-gray-600 mb-4">
                        다른 라이더들의 프로필을 확인하고 팔로우하여 지속적인 관계를 만들어가세요.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>• 상세 프로필 정보</li>
                        <li>• 팔로우/팔로워 시스템</li>
                        <li>• 라이딩 이력 관리</li>
                    </ul>
                </div>
                <div className="feature-card bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 gradient-orange rounded-2xl flex items-center justify-center mb-6">
                        <i className="fas fa-flag text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">클럽 생성</h3>
                    <p className="text-gray-600 mb-4">
                        관심사가 비슷한 라이더들과 정기적인 모임을 위한 클럽을 만들어보세요.
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        <li>• 정기 모임 관리</li>
                        <li>• 클럽 전용 피드</li>
                        <li>• 멤버 관리 도구</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
