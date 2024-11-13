import React from 'react'
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation()

    // Explicitly type the interests as an array of strings
    const interests: string[] = t('about.interestsList', { returnObjects: true }) as string[]

    const skills: string[] = t('about.skillsList', { returnObjects: true }) as string[]

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">{t('about.title')}</h2>
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">{t('about.aboutMe')}</h3>
                    <p className="mb-4">{t('about.aboutMeContent')}</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">{t('about.education')}</h3>
                    <p>
                        <strong>{t('about.educationContent')}</strong><br />
                        {t('about.educationInstitution')}
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">{t('about.skills')}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <li key={index} className="bg-white rounded-lg p-2 shadow">{skill}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">{t('about.interests')}</h3>
                    <ul className="list-disc list-inside">
                        {interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}