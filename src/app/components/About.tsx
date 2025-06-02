import React from 'react'

export const About = () => {
  return (
    <section id="about" className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">왜 Riderly인가요?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    기존 동호회의 부담스러운 점들을 해결한 새로운 라이더 커뮤니티
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-10">
                    <div className="flex items-start space-x-4">
                        <div
                            className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-heart text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">부담 없는 만남</h3>
                            <p className="text-gray-300">정기 모임이나 의무 참석 없이, 원할 때만 함께 달릴 수 있어요.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div
                            className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-bullseye text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">정확한 매칭</h3>
                            <p className="text-gray-300">라이딩 스타일, 바이크 종류, 실력 수준을 고려한 AI 매칭으로 최적의 동행자를 찾아드려요.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div
                            className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-comments text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">SNS 방식 소통</h3>
                            <p className="text-gray-300">라이딩 경로 공유부터 벙개 후기, 바이크 자랑까지. 자유롭고 다양한 소통으로 라이딩의 즐거움을 나눌 수 있어요.</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div
                            className="w-12 h-12 gradient-orange rounded-xl flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-mobile-alt text-white"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">간편한 사용</h3>
                            <p className="text-gray-300">복잡한 절차 없이 몇 번의 터치만으로 벙개를 만들고 참여할 수 있어요.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center self-center">
                    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-10 shadow-lg">
                        <img src="Assets/Logo_Riderly_main.png" alt="Riderly Logo"
                            className="w-24 h-24 md:w-28 md:h-28 mb-4 mx-auto" />
                        <h3 className="text-2xl font-bold text-white mb-3">Connect. Ride. Share.</h3>
                        <p className="text-white text-opacity-80 leading-relaxed text-lg">
                            라이더들을 연결하고, 함께 달리며, 경험을 나누는<br />
                            새로운 모터사이클 커뮤니티의 시작
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
