import React from 'react'

export const AppDownload = () => {
  return (
    <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">곧 만나요!</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Riderly 앱이 곧 출시됩니다.<br />
                App Store와 Google Play에서 다운로드하실 수 있어요.
            </p>

            <div className="flex justify-center space-x-6 mb-12">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center">
                    <i className="fab fa-apple text-white text-4xl mb-4"></i>
                    <div className="text-white font-semibold">App Store</div>
                    <div className="text-gray-300 text-sm">iOS 17.0 이상</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 text-center">
                    <i className="fab fa-google-play text-white text-4xl mb-4"></i>
                    <div className="text-white font-semibold">Google Play</div>
                    <div className="text-gray-300 text-sm">Android 14.0 이상</div>
                </div>
            </div>

            <div className="text-gray-300">
                <p className="mb-2">📱 모바일 최적화된 사용자 경험</p>
                <p className="mb-2">🔒 안전한 개인정보 보호</p>
                <p>⚡ 빠르고 안정적인 서비스</p>
            </div>
        </div>
    </section>
  )
}
