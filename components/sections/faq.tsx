'use client';

import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedSection } from '@/components/shared/animated-section';

const faqs = [
    {
        question: '일본어 못해도 되나요?',
        answer: '네! 앱 내 실시간 번역 기능이 있어 걱정 없어요. 오히려 서로 언어를 배우는 재미도 있답니다. 많은 이용자들이 언어 교환 파트너로 시작해서 친한 친구나 연인으로 발전하는 경우가 많습니다.',
    },
    {
        question: '안전한가요?',
        answer: '대학 이메일 인증으로 학생 신분을 확인하고, 24시간 모니터링과 신고 시스템을 운영합니다. 또한 개인정보는 철저히 보호되며, 부적절한 행동은 즉시 제재됩니다.',
    },
    {
        question: '정말 오프라인에서 만날 수 있나요?',
        answer: '네! 한일 교류회를 월 1회 개최하여 안전한 첫 만남을 지원합니다. 또한 방학 기간에는 서울/도쿄 크로스 만남 이벤트도 개최하고 있어요. 많은 커플들이 이 이벤트를 통해 처음 만나고 있습니다.',
    },
    {
        question: '비용은 어떻게 되나요?',
        answer: '기본 매칭은 무료이며, 프리미엄 기능은 학생 할인가로 제공됩니다. 사전 등록 시 출시 후 1개월 프리미엄 무료 혜택을 드립니다!',
    },
    {
        question: '장거리 연애가 가능할까요?',
        answer: '많은 성공 사례가 있습니다! 방학에 서로 방문하고, 교환학생 기회를 활용하는 커플들도 많아요. 영상통화로 매일 소통하며 관계를 발전시키는 분들이 정말 많답니다.',
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-background">
            <div className="container mx-auto max-w-3xl">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-gradient">자주 묻는 질문</span>
                    </h2>
                    <p className="text-xl text-neutral-600">
                        궁금한 점이 있으신가요? 여기서 답을 찾아보세요!
                    </p>
                </AnimatedSection>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="glass-effect rounded-xl px-6 border-0"
                            >
                                <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-600 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
