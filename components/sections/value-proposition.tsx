'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, Sparkles, Globe, Gift } from 'lucide-react';
import Image from 'next/image';

const features = [
    {
        icon: GraduationCap,
        title: '대학생 인증으로\n더 안전하게',
        description: '학교 이메일로 인증된 학생들만 가입할 수 있어요.\n신원이 확실한 친구들과 안심하고 대화하세요.',
        color: 'bg-pink-100 text-[#FF6B81]',
        image: '/images/couple-2.png'
    },
    {
        icon: Sparkles,
        title: 'AI가 찾아주는\n나만의 인연',
        description: '단순한 조건 매칭이 아니에요.\n취미, 가치관, 성격까지 분석해 꼭 맞는 상대를 추천해요.',
        color: 'bg-pink-50 text-[#FF6B81]',
        image: '/images/couple-3.png'
    },
    {
        icon: Globe,
        title: '언어 장벽 없는\n자유로운 대화',
        description: '실시간 번역 기능이 지원돼요.\n일본어를 못해도 마음껏 대화하며 친구가 될 수 있어요.',
        color: 'bg-pink-100 text-[#FF6B81]',
        image: '/images/poster-1.jpg'
    },
    {
        icon: Gift,
        title: '오프라인 만남까지\n이어지는 설렘',
        description: '서울과 도쿄에서 열리는 정기 교류회.\n온라인을 넘어 실제 만남으로 이어지도록 도와드려요.',
        color: 'bg-pink-50 text-[#FF6B81]',
        image: '/images/poster-2.jpg'
    },
];

function FeatureItem({ feature, index, onInView }: { feature: typeof features[0], index: number, onInView: (index: number) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
            onViewportEnter={() => onInView(index)}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen flex items-center justify-center lg:justify-start"
        >
            <div className="max-w-md">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-8`}>
                    <feature.icon size={32} />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 whitespace-pre-line text-[#191F28]">
                    {feature.title}
                </h2>

                {/* Mobile Image */}
                <div className="block lg:hidden relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-8 shadow-lg">
                    <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <p className="text-xl text-[#8B95A1] leading-relaxed whitespace-pre-line">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function ValueProposition() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section ref={containerRef} className="relative bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Column - Scrollable Text */}
                    <div className="w-full lg:w-1/2 z-10">
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                feature={feature}
                                index={index}
                                onInView={setActiveIndex}
                            />
                        ))}
                    </div>

                    {/* Right Column - Sticky Visual */}
                    <div className="hidden lg:block w-1/2 sticky top-0 h-screen flex items-center justify-center">
                        <div className="relative w-full max-w-lg aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl bg-gray-100">
                            <Image
                                src={features[activeIndex].image}
                                alt={features[activeIndex].title}
                                fill
                                className="object-cover transition-opacity duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

