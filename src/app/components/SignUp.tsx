import React from 'react'

export const SignUp = () => {
  return (
    <section id="signup" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">사전 신청</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Riderly 출시 소식을 가장 먼저 받아보세요!<br />
                    사전 신청자에게는 특별한 혜택을 준비했습니다.
                </p>

                <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                                <input type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder="홍길동" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                                <input type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                    placeholder="010-1234-5678" required />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                            <input type="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                placeholder="your@email.com" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">관심 기능 (복수 선택 가능)</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">벙개 생성/참여</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">AI 추천 매칭</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">실시간 채팅</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">위치 공유</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">클럽 기능</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="checkbox" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">SNS 기능</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">보유 바이크 (선택사항)</label>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none">
                                <option value="">선택해주세요</option>
                                <option value="scooter">스쿠터 (125cc 이하)</option>
                                <option value="entry">엔트리급 (126-250cc)</option>
                                <option value="quarter">쿼터급 (251-400cc)</option>
                                <option value="middle">미들급 (401-750cc)</option>
                                <option value="liter">리터급 (751cc-1000cc)</option>
                                <option value="overliter">오버리터급 (1001cc 이상)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">라이딩 경험</label>
                            <div className="flex space-x-4">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="experience" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">바린이(0년~2년)</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="experience" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">중급자(3년~5년)</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input type="radio" name="experience" className="text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">상급자(6년~)</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">추가 의견 (선택사항)</label>
                            <textarea
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                                rows={3} placeholder="Riderly에 대한 기대나 의견을 자유롭게 적어주세요"></textarea>
                        </div>

                        <div className="flex items-start space-x-2">
                            <input type="checkbox" className="mt-1 text-orange-500 focus:ring-orange-500" required />
                            <span className="text-sm text-gray-600">개인정보 수집 및 이용에 동의합니다. (출시 알림 및 서비스 안내 목적)</span>
                        </div>

                        <button type="submit"
                            className="w-full btn-primary text-white py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                            <i className="fas fa-bell mr-2"></i>
                            사전 신청 완료하기
                        </button>
                    </form>
                </div>

                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-primary rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">🎁 사전 신청 혜택</h3>
                    <p className="text-sm opacity-90 mb-4">출시 초기 한정 특별 혜택을 놓치지 마세요!</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white bg-opacity-20 rounded-lg p-3">
                            <div className="font-semibold">🚀 베타 테스터</div>
                            <div>정식 출시 전 체험 기회</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-3">
                            <div className="font-semibold">💰 프리미엄 무료</div>
                            <div>3개월 무료 이용권</div>
                        </div>
                        <div className="bg-white bg-opacity-20 rounded-lg p-3">
                            <div className="font-semibold">🏆 창립 멤버</div>
                            <div>특별 배지 및 혜택</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
