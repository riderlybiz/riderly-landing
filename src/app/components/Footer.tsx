import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <img src="Assets/Logo_Riderly_main.png" alt="Riderly Logo" className="w-8 h-8" />
                        <span className="text-xl font-bold">Riderly</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        혼자 달리기 외로운 라이더들을 위한<br />
                        라이딩 모임 플랫폼
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">서비스</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>벙개 생성/참여</li>
                        <li>AI 매칭</li>
                        <li>실시간 채팅</li>
                        <li>위치 공유</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">지원</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>자주 묻는 질문</li>
                        <li>고객센터</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">소셜</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <i className="fab fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <i className="fab fa-youtube text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                            <i className="fab fa-kakao text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2025 Riderly. All rights reserved.</p>
                <p className="mt-2">라이더의, 라이더에 의한, 라이더를 위한 플랫폼</p>
            </div>
        </div>
    </footer>
  )
}
