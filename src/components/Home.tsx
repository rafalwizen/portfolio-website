import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation()

    return (
        <section id="home" className="py-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Rafał Wiżeń</h1>
                    <p className="text-xl mb-6">{t('home.intro')}</p>
                    <p className="mb-6">{t('home.description')}</p>
                    <div className="space-y-2">
                        <p><strong>{t('home.phone')}:</strong> 726 593 099</p>
                        <p><strong>{t('home.email')}:</strong> rafal.wizen@gmail.com</p>
                        <p><strong>{t('home.location')}:</strong> Tarnowskie Góry</p>
                    </div>
                    <a href="#contact" className="inline-block mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
                        {t('home.contact')}
                    </a>
                </div>
                <div className="md:w-1/2">
                    <img src="/path-to-your-image.jpg" alt="Rafał Wiżeń" className="rounded-full w-64 h-64 object-cover mx-auto" />
                </div>
            </div>
        </section>
    )
}