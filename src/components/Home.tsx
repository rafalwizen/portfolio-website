import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export default function Home() {
    const { t } = useTranslation()

    return (
        <>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <div className="flex max-w-[980px] flex-col items-start gap-2">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                        {t('home.welcome')}
                    </h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground">
                        {t('home.intro')}
                    </p>
                </div>
                <div className="flex gap-4">
                    <Button asChild>
                        <Link to="/contact">{t('home.contactButton')}</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link to="/about">{t('home.learnMoreButton')}</Link>
                    </Button>
                </div>
            </section>
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <img
                        alt={t('home.imageAlt')}
                        className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center"
                        height="300"
                        width="300"
                        src="/placeholder.svg"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('home.aboutTitle')}</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t('home.aboutContent')}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button asChild>
                                <Link to="/portfolio">{t('home.viewWorkButton')}</Link>
                            </Button>
                            <Button asChild variant="outline">
                                <Link to="/contact">{t('home.getInTouchButton')}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto grid max-w-5xl gap-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{t('home.skillsTitle')}</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardContent className="flex flex-col gap-2 p-6">
                                <h3 className="font-bold">{t('home.skills.frontend.title')}</h3>
                                <p className="text-sm text-muted-foreground">{t('home.skills.frontend.description')}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col gap-2 p-6">
                                <h3 className="font-bold">{t('home.skills.backend.title')}</h3>
                                <p className="text-sm text-muted-foreground">{t('home.skills.backend.description')}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="flex flex-col gap-2 p-6">
                                <h3 className="font-bold">{t('home.skills.database.title')}</h3>
                                <p className="text-sm text-muted-foreground">{t('home.skills.database.description')}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}