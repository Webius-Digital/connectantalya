"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const galleryImages = [
    { src: "/gallery/event-1.jpeg", alt: "Travel Connect Antalya Event 1" },
    { src: "/gallery/event-2.jpeg", alt: "Travel Connect Antalya Event 2" },
    { src: "/gallery/event-3.jpeg", alt: "Travel Connect Antalya Event 3" },
    { src: "/gallery/event-4.jpeg", alt: "Travel Connect Antalya Event 4" },
    { src: "/gallery/event-5.jpeg", alt: "Travel Connect Antalya Event 5" },
    { src: "/gallery/event-6.jpeg", alt: "Travel Connect Antalya Event 6" },
    { src: "/gallery/event-7.jpeg", alt: "Travel Connect Antalya Event 7" },
    { src: "/gallery/event-8.jpeg", alt: "Travel Connect Antalya Event 8" },
    { src: "/gallery/event-9.jpeg", alt: "Travel Connect Antalya Event 9" },
    { src: "/gallery/event-10.jpeg", alt: "Travel Connect Antalya Event 10" },
];

interface EventGalleryProps {
    title?: string;
    subtitle?: string;
    limit?: number;
    showTitle?: boolean;
}

export function EventGallery({
    limit = 6,
    showTitle = true
}: EventGalleryProps) {
    const t = useTranslations("Gallery");
    const displayImages = galleryImages.slice(0, limit);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                {showTitle && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
                            {t("title")}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {t("subtitle")}
                        </p>
                    </motion.div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                >
                    {displayImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-2xl aspect-[4/3] group ${index === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-[4/3]" : ""
                                }`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
