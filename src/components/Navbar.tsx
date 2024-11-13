import React from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    toggleLanguage: () => void
    language: string
}

export default function Navbar({ toggleLanguage, language }: NavbarProps) {
    const { t } = useTranslation()

    return (
        <nav className="bg-gray-50 sticky top-0 z-10 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex space-x-4">
                        <a href="#home" className="text-black hover:text-gray-600">{t('nav.home')}</a>
                        <a href="#about" className="text-black hover:text-gray-600">{t('nav.about')}</a>
                        <a href="#portfolio" className="text-black hover:text-gray-600">{t('nav.portfolio')}</a>
                        <a href="#contact" className="text-black hover:text-gray-600">{t('nav.contact')}</a>
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