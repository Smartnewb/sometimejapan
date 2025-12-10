'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAppStore } from '@/lib/store';
import { supabase, supabaseAdmin } from '@/lib/supabase';
import { Check, Sparkles } from 'lucide-react';

export default function FinalCTA() {
    const {
        registrationData,
        setRegistrationData,
        isFormSubmitting,
        formSubmitted,
        setFormSubmitting,
        setFormSubmitted
    } = useAppStore();

    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!phone) return;

        setFormSubmitting(true);
        setError('');

        try {
            // Save to Supabase - Use service role for public pre-registration
            const { data, error: supabaseError } = await supabaseAdmin
                .from('pre_registrations')
                .insert([{ phone }])
                .select();

            if (supabaseError) {
                if (supabaseError.code === '23505' || supabaseError.message.includes('duplicate')) {
                    setError('✅ 이미 등록된 전화번호입니다!');
                } else {
                    throw supabaseError;
                }
            }

            if (!supabaseError) {
                setRegistrationData({ phone });
                setFormSubmitted(true);
            }
        } catch (err: any) {
            console.error('Error saving registration:', err);
            setError(err.message || '등록 중 오류가 발생했습니다. 다시 시도해주세요.');
        } finally {
            setFormSubmitting(false);
        }
    };

    const benefits = [
        '출시 즉시 프리미엄 1개월 무료',
        '우선 매칭 기회',
        '한일 오프라인 이벤트 초대권',
        '친구 추천 시 추가 혜택',
    ];

    return (
        <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-effect rounded-3xl p-8 md:p-12 text-center"
                >
                    {!formSubmitted ? (
                        <>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", duration: 0.6 }}
                                className="inline-block mb-6"
                            >
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                                    <Sparkles className="w-10 h-10 text-white" />
                                </div>
                            </motion.div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                <span className="text-gradient">사전 등록하고</span>
                                <br />
                                <span className="text-neutral-900">얼리버드 혜택 받기</span>
                            </h2>

                            <p className="text-lg text-neutral-600 mb-8">
                                2026년 1월 출시 예정! 지금 등록하고 특별한 혜택을 받아보세요 🌸
                            </p>

                            {/* Benefits List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl mx-auto">
                                {benefits.map((benefit, index) => (
                                    <motion.div
                                        key={benefit}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-2 text-left"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-neutral-700 font-medium">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Registration Form */}
                            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Input
                                        type="tel"
                                        placeholder="전화번호를 입력하세요 (예: 010-1234-5678)"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        className="flex-1 h-12 px-6 text-lg"
                                        disabled={isFormSubmitting}
                                    />
                                    <Button
                                        type="submit"
                                        size="lg"
                                        disabled={isFormSubmitting}
                                        className="bg-gradient-to-r from-primary via-accent to-secondary text-white hover:opacity-90 h-12 px-8 text-lg"
                                    >
                                        {isFormSubmitting ? '등록 중...' : '지금 등록하기'}
                                    </Button>
                                </div>
                                {error && (
                                    <p className="text-sm text-red-600 mt-3 bg-red-50 p-3 rounded-lg">
                                        {error}
                                    </p>
                                )}
                                <p className="text-xs text-neutral-500 mt-3">
                                    등록하시면 <a href="#" className="underline">이용약관</a> 및 <a href="#" className="underline">개인정보처리방침</a>에 동의하는 것으로 간주됩니다.
                                </p>
                            </form>
                        </>
                    ) : (
                        <AnimatePresence>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", duration: 0.6 }}
                            >
                                <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check className="w-12 h-12 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-neutral-900">
                                    등록 완료! 🎉
                                </h3>
                                <p className="text-lg text-neutral-600 mb-6">
                                    사전 등록이 완료되었습니다!<br />
                                    출시 소식을 <span className="font-semibold text-accent">{registrationData.phone}</span>로 보내드릴게요.
                                </p>
                                <p className="text-neutral-500">
                                    친구에게도 추천해주시면 더 많은 혜택을 받으실 수 있어요! ✨
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
