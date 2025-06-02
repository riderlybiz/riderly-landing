'use client';

export const HeroSection = () => {
  return (
    <section className="gradient-bg hero-pattern min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
            <div className="flex flex-col items-center space-y-6">
                <img src="Assets/Logo_Riderly_main.png" alt="Riderly Logo" className="w-24 h-24 md:w-28 md:h-28" />
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    혼자 달리기 <span className="text-orange-500">외로운</span><br />
                    라이더들을 위한<br />
                    <span className="gradient-orange bg-clip-text text-transparent"
                        style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: '#fff' }}>벙개 모임</span> 플랫폼
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                    동호회 활동 부담 없이 쉽게 라이딩 동행자를 찾을 수 있는<br />
                    새로운 라이더 커뮤니티 서비스
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <a href="#signup"
                    className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
                    <i className="fas fa-bell mr-2"></i>
                    사전신청하고 출시알림 받기
                </a>
                <a href="#features"
                    className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all">
                    <i className="fas fa-play mr-2"></i>
                    서비스 둘러보기
                </a>
            </div>
            <div className="absolute top-20 left-10 text-orange-500 opacity-20 animate-pulse-slow hidden md:block">
                <i className="fas fa-route text-4xl"></i>
            </div>
            <div className="absolute bottom-20 right-10 text-orange-500 opacity-20 animate-pulse-slow hidden md:block"
                style={{animationDelay: '2s'}}>
                <i className="fas fa-users text-4xl"></i>
            </div>
            <div className="absolute top-1/2 left-20 text-orange-500 opacity-20 animate-pulse-slow hidden md:block"
                style={{animationDelay: '1s'}}>
                <i className="fas fa-map-marker-alt text-3xl"></i>
            </div>
        </div>
    </section>
  )
}
