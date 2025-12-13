'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const { isMobileMenuOpen, setMobileMenuOpen } = useAppStore();
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setScrolled(currentScrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 스크롤 위치에 따른 텍스트 색상 결정 (120px 이하: 흰색, 200px 이상: 원래 색상)
    const isTopArea = scrollY <= 120;
    const isTransitionArea = scrollY > 120 && scrollY < 200;

    const navLinks = [
        { href: '#features', label: '특징' },
        { href: '#how-it-works', label: '이용방법' },
        { href: '#testimonials', label: '후기' },
        { href: '#faq', label: '문의' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-[#E5E8EB]' : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 group">
                            <span
                                className="text-2xl font-bold group-hover:text-[#FF6B81] transition-all duration-300"
                                style={{
                                    color: isTopArea ? '#FFFFFF' : (isTransitionArea ? `rgba(25, 31, 40, ${(scrollY - 120) / 80})` : '#191F28')
                                }}
                            >
                                썸타임
                            </span>
                            <span
                                className="hidden sm:inline text-xl transition-all duration-300"
                                style={{
                                    color: isTopArea ? '#FFFFFF' : (isTransitionArea ? `rgba(176, 184, 193, ${(scrollY - 120) / 80})` : '#B0B8C1')
                                }}
                            >
                                × 日本
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="hover:text-[#191F28] hover:bg-[#F2F4F6] px-4 py-2 rounded-lg transition-all duration-300 font-medium text-base"
                                    style={{
                                        color: isTopArea ? '#FFFFFF' : (isTransitionArea ? `rgba(78, 89, 104, ${(scrollY - 120) / 80})` : '#4E5968')
                                    }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button
                                asChild
                                className="bg-[#FF6B81] hover:bg-[#FF526B] text-white font-semibold shadow-none"
                            >
                                <a href="#cta">사전 등록</a>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 transition-all duration-300"
                            style={{
                                color: isTopArea ? '#FFFFFF' : (isTransitionArea ? `rgba(78, 89, 104, ${(scrollY - 120) / 80})` : '#4E5968')
                            }}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    className="fixed inset-0 z-30 md:hidden bg-white pt-20"
                >
                    <div className="flex flex-col items-center space-y-6 p-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl text-[#333D4B] hover:text-[#FF6B81] font-medium w-full text-center py-3 border-b border-[#F2F4F6]"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4 w-full">
                            <Button
                                asChild
                                size="lg"
                                className="w-full bg-[#FF6B81] text-white"
                            >
                                <a href="#cta" onClick={() => setMobileMenuOpen(false)}>사전 등록하기</a>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}

