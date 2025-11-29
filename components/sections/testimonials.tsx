'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/shared/animated-section';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "첫 메시지가 'K-POP 좋아해요?'였는데, 지금은 매일 밤 영상통화로 서로 언어 가르쳐줘요. 다음 달 도쿄 가면 만나기로 했어요 😊",
        author: "김민지, 22세",
        university: "연세대 국문과",
        match: "유키, 21세 · 와세다대 경영학과",
    },
    {
        text: "처음엔 그냥 일본어 연습 상대 찾는다고 시작했는데... 3개월 째 매일 연락하고 있어요. 부모님한테 여자친구 생겼다고 말씀드렸습니다 ㅎㅎ",
        author: "박준호, 24세",
        university: "고려대 일어일문학과",
        match: "하루키, 23세 · 도쿄대 한국학과",
    },
    {
        text: "한국 음식 소개해주고, 저는 일본 애니메이션 추천받고. 서로의 문화를 나누는 게 이렇게 재밌을 줄 몰랐어요. 이번 여름 오사카에서 만날 예정이에요!",
        author: "최수진, 21세",
        university: "이화여대 경영학과",
        match: "사키, 22세 · 교토대",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">이런 경험, 상상해봤어?</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                        썸타임을 통해 특별한 인연을 만난 분들의 이야기
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            whileHover={{ y: -8 }}
                            className="glass-effect rounded-2xl p-6 relative hover:shadow-xl transition-all"
                        >
                            <Quote className="absolute top-6 right-6 text-primary/20 w-12 h-12" />

                            <div className="relative z-10">
                                <p className="text-neutral-700 leading-relaxed mb-6 italic">
                                    "{testimonial.text}"
                                </p>

                                <div className="border-t border-neutral-200 pt-4">
                                    <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                                    <p className="text-sm text-neutral-600">{testimonial.university}</p>
                                    <div className="flex items-center mt-2">
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary to-accent"></div>
                                        <span className="px-3 text-xs text-neutral-500">↔</span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-accent to-secondary"></div>
                                    </div>
                                    <p className="text-sm text-accent font-medium mt-2">{testimonial.match}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
