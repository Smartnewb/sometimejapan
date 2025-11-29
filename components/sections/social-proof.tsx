'use client';

import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useSpring(0, { duration: 2000, bounce: 0 });
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            count.set(target);
        }
    }, [isInView, count, target]);

    return (
        <motion.span ref={ref} className="text-6xl sm:text-7xl font-bold text-[#333D4B] tracking-tighter">
            {rounded.get().toLocaleString()}{suffix}
        </motion.span>
    );
}

const stats = [
    {
        value: 10000,
        suffix: '+',
        label: '사전 등록 목표',
    },
    {
        value: 50,
        suffix: '개',
        label: '한국 대학 파트너십',
    },
    {
        value: 30,
        suffix: '개',
        label: '일본 대학 협력 예정',
    },
    {
        value: 98,
        suffix: '%',
        label: '베타 테스터 만족도',
    },
];

export default function SocialProof() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB]">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#191F28]">
                        숫자로 증명하는<br />
                        <span className="text-[#FF6B81]">썸타임의 가능성</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center"
                        >
                            <div className="mb-4">
                                <Counter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-xl text-[#8B95A1] font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Partner Logos - Simplified */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="mt-32 text-center"
                >
                    <p className="text-[#8B95A1] mb-8 text-sm font-medium">함께하는 대학들</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {['연세대학교', '고려대학교', '서울대학교', '와세다대학', '도쿄대학', '게이오대학'].map((uni) => (
                            <span key={uni} className="text-xl font-bold text-[#333D4B]">{uni}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

