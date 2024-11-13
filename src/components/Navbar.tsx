import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    toggleLanguage: () => void
    language: string
}

export default function Navbar({ toggleLanguage, language }: NavbarProps) {
    const { t } = useTranslation()

    const scrollToSection = useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    return (
        <nav className="bg-gray-50 sticky top-0 z-10 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex space-x-4">
                        <button onClick={() => scrollToSection('home')} className="text-black hover:text-gray-600">
                            {t('nav.home')}
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-black hover:text-gray-600">
                            {t('nav.about')}
                        </button>
                        <button onClick={() => scrollToSection('portfolio')} className="text-black hover:text-gray-600">
                            {t('nav.portfolio')}
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-black hover:text-gray-600">
                            {t('nav.contact')}
                        </button>
                    </div>
                    <button
                        onClick={toggleLanguage}
                        className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800"
                    >
                        {language === 'pl' ? 'EN' : 'PL'}
                    </button>
                </div>
            </div>
        </nav>
    )
}