import React from 'react'
import { useTranslation } from 'react-i18next'

interface Experience {
    company: string
    position: string
    period: string
    responsibilities: string[]
    technologies: string[]
}

export default function Portfolio() {
    const { t } = useTranslation()

    const experiences: Experience[] = [
        {
            company: 'MIKRONIKA Sp. z o.o.',
            position: 'Java developer',
            period: '11.2020 – present',
            responsibilities: [
                'Analyzing and adjusting business requirements',
                'Implementing new backend and frontend software components',
                'Fixing software bugs',
                'Implementing REST API interfaces',
                'Coordinating directly with the client to determine and satisfy client expectations'
            ],
            technologies: [
                'Java 8 with Spring, Hibernate, Play',
                'React and AngularJS',
                'MySQL and Oracle',
                'GIT and SVN'
            ]
        }
    ]

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">{t('portfolio.title')}</h2>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden p-6">
                            <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
                            <p className="text-xl mb-2">{exp.position}</p>
                            <p className="text-gray-600 mb-4">{exp.period}</p>
                            <div className="mb-4">
                                <h4 className="font-semibold mb-2">{t('portfolio.responsibilities')}</h4>
                                <ul className="list-disc list-inside">
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">{t('portfolio.technologies')}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="bg-gray-200 rounded-full px-3 py-1 text-sm">
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}