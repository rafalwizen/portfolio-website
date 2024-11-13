import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-6">
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                        LinkedIn
                    </a>
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                        GitHub
                    </a>
                    <a href="https://behance.net/your-profile" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                        Behance
                    </a>
                </div>
                <p className="text-center mt-4">&copy; {new Date().getFullYear()} Rafał Wiżeń. {t('footer.rights')}</p>
            </div>
        </footer>
    )
}