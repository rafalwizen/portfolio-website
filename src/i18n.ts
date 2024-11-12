import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    name: 'Rafał Wiżeń',
                    nav: {
                        home: 'Home',
                        about: 'About',
                        portfolio: 'Portfolio',
                        testimonials: 'Testimonials',
                        contact: 'Contact',
                    },
                    aria: {
                        toggleMenu: 'Toggle menu',
                    },
                    social: {
                        github: 'GitHub',
                        linkedin: 'LinkedIn',
                        email: 'Email',
                    },
                    footer: {
                        rights: 'All rights reserved.',
                    },
                    home: {
                        welcome: 'Welcome to my portfolio!',
                        intro: "I'm a software developer with four years of experience, specializing in Java and JavaScript technologies. I'm passionate about creating efficient and user-friendly software solutions.",
                        contactButton: 'Contact Me',
                        learnMoreButton: 'Learn More',
                        imageAlt: 'Rafał Wiżeń',
                        aboutTitle: 'About Me',
                        aboutContent: 'I am a software developer with extensive experience in both frontend and backend development. My journey in software development has equipped me with strong problem-solving skills and a deep understanding of software architecture.',
                        viewWorkButton: 'View My Work',
                        getInTouchButton: 'Get in Touch',
                        skillsTitle: 'Featured Skills',
                        skills: {
                            frontend: {
                                title: 'Frontend Development',
                                description: 'React, AngularJS, HTML, CSS',
                            },
                            backend: {
                                title: 'Backend Development',
                                description: 'Java, Spring Boot, Play Framework',
                            },
                            database: {
                                title: 'Database Management',
                                description: 'MySQL, Oracle DBMS, SQL',
                            },
                        },
                    },
                },
            },
            pl: {
                translation: {
                    name: 'Rafał Wiżeń',
                    nav: {
                        home: 'Strona główna',
                        about: 'O mnie',
                        portfolio: 'Portfolio',
                        testimonials: 'Referencje',
                        contact: 'Kontakt',
                    },
                    aria: {
                        toggleMenu: 'Przełącz menu',
                    },
                    social: {
                        github: 'GitHub',
                        linkedin: 'LinkedIn',
                        email: 'Email',
                    },
                    footer: {
                        rights: 'Wszelkie prawa zastrzeżone.',
                    },
                    home: {
                        welcome: 'Witaj w moim portfolio!',
                        intro: 'Jestem programistą z czteroletnim doświadczeniem, specjalizującym się w technologiach Java i JavaScript. Pasjonuję się tworzeniem wydajnych i przyjaznych dla użytkownika rozwiązań programistycznych.',
                        contactButton: 'Skontaktuj się',
                        learnMoreButton: 'Dowiedz się więcej',
                        imageAlt: 'Rafał Wiżeń',
                        aboutTitle: 'O mnie',
                        aboutContent: 'Jestem programistą z bogatym doświadczeniem zarówno w rozwoju frontend, jak i backend. Moja podróż w świecie programowania wyposażyła mnie w silne umiejętności rozwiązywania problemów i głębokie zrozumienie architektury oprogramowania.',
                        viewWorkButton: 'Zobacz moje prace',
                        getInTouchButton: 'Skontaktuj się',
                        skillsTitle: 'Główne umiejętności',
                        skills: {
                            frontend: {
                                title: 'Rozwój Frontend',
                                description: 'React, AngularJS, HTML, CSS',
                            },
                            backend: {
                                title: 'Rozwój Backend',
                                description: 'Java, Spring Boot, Play Framework',
                            },
                            database: {
                                title: 'Zarządzanie bazami danych',
                                description: 'MySQL, Oracle DBMS, SQL',
                            },
                        },
                    },
                },
            },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n