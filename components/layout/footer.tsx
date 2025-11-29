import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-gradient mb-4">썸타임 × 日本</h3>
                        <p className="text-neutral-400 mb-4">
                            일본 대학생과 매칭되는 유일한 앱<br />
                            지역을 넘어선 설렘, 2026년 1월 출시 예정
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">빠른 링크</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="text-neutral-400 hover:text-white transition-colors">
                                    특징
                                </a>
                            </li>
                            <li>
                                <a href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">
                                    이용방법
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-neutral-400 hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4">법적 고지</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                                    이용약관
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                                    개인정보처리방침
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                                    문의하기
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400">
                    <p>&copy; {currentYear} 썸타임. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
