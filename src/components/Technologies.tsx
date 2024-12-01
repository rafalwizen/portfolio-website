import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { FileCode2, Codepen, Database } from 'lucide-react';

interface Technology {
    name: string;
    icon: React.ReactNode;
    description: string;
}

const technologies: Technology[] = [
    {
        name: "Java",
        icon: <FileCode2 className="w-12 h-12 text-black" />,
        description: "Java to wszechstronny język programowania, używany w aplikacjach webowych i backendowych.",
    },
    {
        name: "React",
        icon: <Codepen className="w-12 h-12 text-black" />,
        description: "React to biblioteka do budowy dynamicznych interfejsów użytkownika.",
    },
    {
        name: "SQL",
        icon: <Database className="w-12 h-12 text-black" />,
        description: "SQL to język zapytań do zarządzania bazami danych.",
    },
    {
        name: "Java",
        icon: <FileCode2 className="w-12 h-12 text-black" />,
        description: "Java to wszechstronny język programowania, używany w aplikacjach webowych i backendowych.",
    },
    {
        name: "React",
        icon: <Codepen className="w-12 h-12 text-black" />,
        description: "React to biblioteka do budowy dynamicznych interfejsów użytkownika.",
    },
    {
        name: "SQL",
        icon: <Database className="w-12 h-12 text-black" />,
        description: "SQL to język zapytań do zarządzania bazami danych.",
    },
];

export default function Technologies() {
    return (
        <section id="technologies" className="py-20 bg-white">
            <div className="container mx-auto px-4 w-full">
                <h2 className="text-3xl font-bold mb-12 text-center">Technologie</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                    }}
                >
                    {technologies.map((tech) => (
                        <SwiperSlide key={tech.name}>
                            <div className="bg-white border border-gray-300 shadow-md p-6 text-center h-80 flex flex-col justify-between">
                                <div className="flex justify-center mb-4">
                                    {tech.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{tech.name}</h3>
                                <p className="text-sm text-gray-600">{tech.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>
        </section>
    );
}
