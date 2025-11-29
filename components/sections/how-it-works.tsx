'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '1',
        title: '프로필을 작성해주세요',
        description: '학교 이메일로 인증하고\n나의 취미와 관심사를 알려주세요.',
    },
    {
        number: '2',
        title: '매주 일요일에 매칭돼요',
        description: 'AI가 내 성향을 분석해\n가장 잘 맞는 일본 친구를 소개해드려요.',
    },
    {
        number: '3',
        title: '설레는 대화를 시작하세요',
        description: '서로 수락하면 대화방이 열려요.\n언어 장벽 없이 자유롭게 이야기 나눠보세요.',
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-24">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-[#191F28]">
                        이렇게 <span className="text-[#FF6B81]">시작</span>해요
                    </h2>
                </div>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-start gap-6 sm:gap-8 group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FFF0F2] flex items-center justify-center text-[#FF6B81] font-bold text-2xl sm:text-3xl">
                                {step.number}
                            </div>
                            <div className="pt-2">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-[#333D4B] group-hover:text-[#FF6B81] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-lg sm:text-xl text-[#8B95A1] leading-relaxed whitespace-pre-line">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
