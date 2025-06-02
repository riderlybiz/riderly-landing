'use client';

import { useEffect } from 'react'

export const Navigation = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navigation 스크롤 감지
        const nav = document.querySelector('nav');

        window.addEventListener('scroll', () => {
            if (nav) {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        });
    }, [])

    const handleClickNavMenu = (e: Event) => {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

  return (
    <nav>
        <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <img src="Assets/Logo_Riderly_main.png" alt="Riderly Logo" className="w-8 h-8" />
                    <span className="text-white text-xl font-bold">Riderly</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#features" className="text-gray-300 hover:text-orange-500 transition-colors">기능소개</a>
                    <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors">서비스특징</a>
                    <a href="#signup" className="text-gray-300 hover:text-orange-500 transition-colors">사전신청</a>
                </div>
                <a href="#signup"
                    className="btn-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all">
                    사전신청
                </a>
            </div>
        </div>
    </nav>
  )
}
