import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastProvider } from "@/components/ui/toast"
import { Toaster } from "@/components/ui/toaster"

export default function App() {
    const { t, i18n } = useTranslation()
    const [language, setLanguage] = useState('pl')

    const toggleLanguage = () => {
        const newLang = language === 'pl' ? 'en' : 'pl'
        setLanguage(newLang)
        i18n.changeLanguage(newLang)
    }

    return (
        <ToastProvider>
            <div className="bg-white text-black min-h-screen">
                <Navbar toggleLanguage={toggleLanguage} language={language} />
                <main className="container mx-auto px-4">
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
                <Toaster />
            </div>
        </ToastProvider>
    )
}