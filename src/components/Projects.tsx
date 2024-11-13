import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Project {
    id: string
    title: string
    description: string
    images: string[]
}

export default function Projects() {
    const { t } = useTranslation()
    const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})

    const projects: Project[] = [
        {
            id: 'project1',
            title: t('projects.project1.title'),
            description: t('projects.project1.description'),
            images: ['/images/profile_picture.jpg', '/placeholder.svg?height=300&width=400']
        },
        {
            id: 'project2',
            title: t('projects.project2.title'),
            description: t('projects.project2.description'),
            images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400']
        }
    ]

    const handlePrevImage = (projectId: string) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] - 1 + projects.find(p => p.id === projectId)!.images.length) % projects.find(p => p.id === projectId)!.images.length
        }))
    }

    const handleNextImage = (projectId: string) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % projects.find(p => p.id === projectId)!.images.length
        }))
    }

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">{t('projects.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <img
                                        src={project.images[currentImageIndex[project.id] || 0]}
                                        alt={`${project.title} screenshot`}
                                        className="w-full h-[300px] object-cover rounded-lg"
                                    />
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2"
                                        onClick={() => handlePrevImage(project.id)}
                                        aria-label={t('projects.previousImage')}
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                        onClick={() => handleNextImage(project.id)}
                                        aria-label={t('projects.nextImage')}
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}