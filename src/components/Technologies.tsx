'use client'

import React, { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from 'react-responsive'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog"
import { Card, CardContent } from "./ui/card"
import { Database, FileCode2, Codepen } from 'lucide-react'

interface Technology {
    name: string
    icon: React.ReactNode
    description: string
}

export default function Technologies() {
    const { t } = useTranslation()
    const [hoveredTech, setHoveredTech] = useState<Technology | null>(null)
    const [selectedTech, setSelectedTech] = useState<Technology | null>(null)
    const isMobile = useMediaQuery({ maxWidth: 767 })

    const technologies: Technology[] = [
        {
            name: "Java",
            icon: <FileCode2 className="w-10 h-10" />,
            description: t('technologies.java'),
        },
        {
            name: "React",
            icon: <Codepen className="w-10 h-10" />,
            description: t('technologies.react'),
        },
        {
            name: "SQL",
            icon: <Database className="w-10 h-10" />,
            description: t('technologies.sql'),
        },
    ]

    const handleMouseEnter = useCallback((tech: Technology) => {
        if (!isMobile) {
            setHoveredTech(tech)
        }
    }, [isMobile])

    const handleMouseLeave = useCallback(() => {
        if (!isMobile) {
            setHoveredTech(null)
        }
    }, [isMobile])

    const handleClick = useCallback((tech: Technology) => {
        if (isMobile) {
            setSelectedTech(tech)
        }
    }, [isMobile])

    return (
        <section id="technologies" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">{t('technologies.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {technologies.map((tech) => (
                        <div key={tech.name} className="relative group">
                            <Card
                                className="cursor-pointer transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1"
                                onMouseEnter={() => handleMouseEnter(tech)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(tech)}
                            >
                                <CardContent className="flex items-center gap-4 p-6">
                                    {tech.icon}
                                    <span className="text-lg font-medium">{tech.name}</span>
                                </CardContent>
                            </Card>
                            {!isMobile && (
                                <div
                                    className={`
                    absolute z-10 left-0 right-0 top-full mt-2 
                    bg-white border border-gray-200 rounded-md shadow-lg p-4 
                    transition-all duration-300 
                    ${hoveredTech === tech ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
                  `}
                                >
                                    <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                                    <p className="text-sm text-gray-600">{tech.description}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <Dialog open={isMobile && selectedTech !== null} onOpenChange={() => setSelectedTech(null)}>
                    {selectedTech && (
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    {selectedTech.icon}
                                    <span>{selectedTech.name}</span>
                                </DialogTitle>
                                <DialogDescription className="mt-4">
                                    {selectedTech.description}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    )}
                </Dialog>
            </div>
        </section>
    )
}