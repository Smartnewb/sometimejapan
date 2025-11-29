import { create } from 'zustand';

interface RegistrationData {
    email: string;
    name?: string;
    university?: string;
}

interface AppState {
    // Mobile menu
    isMobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;

    // Registration form
    registrationData: RegistrationData;
    setRegistrationData: (data: Partial<RegistrationData>) => void;

    // UI state
    isFormSubmitting: boolean;
    formSubmitted: boolean;
    setFormSubmitting: (submitting: boolean) => void;
    setFormSubmitted: (submitted: boolean) => void;

    // Scroll position
    scrollY: number;
    setScrollY: (y: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
    isMobileMenuOpen: false,
    setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

    registrationData: { email: '' },
    setRegistrationData: (data) => set((state) => ({
        registrationData: { ...state.registrationData, ...data }
    })),

    isFormSubmitting: false,
    formSubmitted: false,
    setFormSubmitting: (submitting) => set({ isFormSubmitting: submitting }),
    setFormSubmitted: (submitted) => set({ formSubmitted: submitted }),

    scrollY: 0,
    setScrollY: (y) => set({ scrollY: y }),
}));
