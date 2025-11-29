'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/couple-1.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-pink-50 text-[#FF6B81] font-semibold text-sm mb-6">
                        2026.01 OPEN
                    </span>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6 text-[#191F28]">
                        일본 친구 만들기,<br />
                        <span className="text-[#FF6B81]">썸타임</span>으로 시작하세요
                    </h1>
                    <p className="text-xl sm:text-2xl text-[#8B95A1] max-w-2xl mx-auto leading-relaxed">
                        언어 교환부터 문화 체험까지.<br className="sm:hidden" />
                        가장 안전하고 확실한 한일 대학생 매칭 플랫폼.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#FF6B81] hover:bg-[#FF526B] text-white text-lg px-8 py-7 rounded-[18px] transition-all hover:scale-[1.02] shadow-lg shadow-pink-500/20"
                    >
                        <a href="#cta" className="flex items-center gap-2">
                            사전 등록하기 <ArrowRight size={20} />
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}
