import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export default function Contact() {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            await emailjs.send(
                import.meta.env.EMAILJS_SERVICE_ID,
                import.meta.env.EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.EMAILJS_USER_ID
            )

            toast({
                title: t('contact.successTitle'),
                description: t('contact.successMessage'),
            })
            setFormData({ name: '', phone: '', email: '', message: '' })
        } catch (error) {
            console.error('Error sending email:', error)
            toast({
                variant: "destructive",
                title: t('contact.errorTitle'),
                description: t('contact.errorMessage'),
                action: <ToastAction altText="Try again">{t('contact.tryAgain')}</ToastAction>,
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">{t('contact.name')}</label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2">{t('contact.phone')}</label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">{t('contact.email')}</label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2">{t('contact.message')}</label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                        />
                    </div>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? t('contact.sending') : t('contact.send')}
                    </Button>
                </form>
            </div>
        </section>
    )
}