import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { Button } from './components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { t, i18n } = useTranslation()

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en')
    }

    return (
        <Router>
            <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted">
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-14 items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Link to="/" className="flex items-center space-x-2">
                                <span className="font-bold">{t('name')}</span>
                            </Link>
                            <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
                                <Link to="/" className="transition-colors hover:text-foreground/80">{t('nav.home')}</Link>
                                <Link to="/about" className="transition-colors hover:text-foreground/80">{t('nav.about')}</Link>
                                <Link to="/portfolio" className="transition-colors hover:text-foreground/80">{t('nav.portfolio')}</Link>
                                <Link to="/testimonials" className="transition-colors hover:text-foreground/80">{t('nav.testimonials')}</Link>
                                <Link to="/contact" className="transition-colors hover:text-foreground/80">{t('nav.contact')}</Link>
                            </nav>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button onClick={toggleLanguage} variant="outline" size="sm">
                                {i18n.language === 'en' ? 'PL' : 'EN'}
                            </Button>
                            <button
                                className="md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label={t('aria.toggleMenu')}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <nav className="md:hidden">
                            <Link to="/" className="block py-2 px-4 text-sm hover:bg-muted">{t('nav.home')}</Link>
                            <Link to="/about" className="block py-2 px-4 text-sm hover:bg-muted">{t('nav.about')}</Link>
                            <Link to="/portfolio" className="block py-2 px-4 text-sm hover:bg-muted">{t('nav.portfolio')}</Link>
                            <Link to="/testimonials" className="block py-2 px-4 text-sm hover:bg-muted">{t('nav.testimonials')}</Link>
                            <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-muted">{t('nav.contact')}</Link>
                        </nav>
                    )}
                </header>

                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/testimonials" element={<Testimonials />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <footer className="border-t">
                    <div className="container flex flex-col gap-4 py-10 md:h-24 md:flex-row md:py-0">
                        <div className="flex flex-col gap-4 md:order-1 md:flex-row md:gap-6 md:ml-auto">
                            <Button asChild size="icon" variant="ghost">
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">{t('social.github')}</span>
                                </a>
                            </Button>
                            <Button asChild size="icon" variant="ghost">
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4" />
                                    <span className="sr-only">{t('social.linkedin')}</span>
                                </a>
                            </Button>
                            <Button asChild size="icon" variant="ghost">
                                <a href="mailto:rafal.wizen@gmail.com">
                                    <Mail className="h-4 w-4" />
                                    <span className="sr-only">{t('social.email')}</span>
                                </a>
                            </Button>
                        </div>
                        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                            <p className="text-sm leading-loose text-muted-foreground md:text-xs">
                                © 2024 {t('name')}. {t('footer.rights')}
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    )
}