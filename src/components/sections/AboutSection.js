"use client";

import Image from "next/image";
import {
    Check,
    Clock3,
    Heart,
    Leaf,
    ShieldCheck,
    Sparkles,
    Star,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";

const aboutFeatures = [
    {
        title: "Premium Ingredients",
        description:
            "Carefully selected tea, fresh milk and quality toppings in every cup.",
        icon: Leaf,
    },
    {
        title: "Made Fresh to Order",
        description:
            "Every drink is prepared when you order for maximum freshness.",
        icon: Clock3,
    },
    {
        title: "Crafted with Care",
        description:
            "Balanced flavours, perfect textures and attention to every detail.",
        icon: Heart,
    },
    {
        title: "Quality You Can Trust",
        description:
            "Consistent preparation standards and ingredients you can rely on.",
        icon: ShieldCheck,
    },
];

const aboutStats = [
    {
        value: "50K+",
        label: "Cups served",
    },
    {
        value: "4.9",
        label: "Average rating",
    },
    {
        value: "100%",
        label: "Freshly prepared",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const contentVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
        x: -35,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function AboutSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="about"
            className="section-spacing relative overflow-hidden bg-background"
        >
            <div
                aria-hidden="true"
                className="absolute -left-32 top-1/3 size-96 rounded-full bg-primary-light/35 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -right-40 bottom-0 size-[28rem] rounded-full bg-surface-muted/55 blur-3xl"
            />

            <Container className="relative z-10">
                <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">
                    <motion.div
                        initial={shouldReduceMotion ? false : "hidden"}
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={imageVariants}
                        className="relative mx-auto w-full max-w-[38rem] lg:mx-0"
                    >
                        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-[var(--shadow-lg)]">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-surface-soft">
                                <Image
                                    src="/images/boba-hero-img.png"
                                    alt="Fresh Boba O'Clock drinks being prepared"
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 45vw"
                                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-white/85 p-4 shadow-lg backdrop-blur-md sm:p-5">
                                    <div className="flex items-start gap-3">
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-sm)]">
                                            <Star
                                                size={18}
                                                className="fill-current"
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <div>
                                            <p className="font-heading text-base font-extrabold text-text-primary">
                                                Crafted for every craving
                                            </p>

                                            <p className="mt-1 text-sm leading-6 text-text-secondary">
                                                From classic milk tea to
                                                refreshing fruit flavours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -right-4 top-10 hidden rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-[var(--shadow-md)] backdrop-blur-md sm:block lg:-right-8">
                            <div className="flex items-center gap-3">
                                <span className="flex size-9 items-center justify-center rounded-full bg-primary-light text-primary">
                                    <Leaf
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </span>

                                <div>
                                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.12em] text-text-muted">
                                        Always
                                    </p>

                                    <p className="font-heading text-sm font-bold text-text-primary">
                                        Fresh Ingredients
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border bg-surface/95 px-5 py-4 shadow-[var(--shadow-md)] backdrop-blur-md sm:block lg:-left-8">
                            <p className="text-xs font-medium text-text-muted">
                                Customer favourite
                            </p>

                            <div className="mt-2 flex items-center gap-2">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <Star
                                                key={index}
                                                size={14}
                                                className="fill-primary text-primary"
                                                aria-hidden="true"
                                            />
                                        ),
                                    )}
                                </div>

                                <span className="font-heading text-sm font-extrabold text-text-primary">
                                    4.9
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={shouldReduceMotion ? false : "hidden"}
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={containerVariants}
                        className="mx-auto w-full max-w-[43rem] text-center lg:mx-0 lg:text-left"
                    >
                        <motion.div
                            variants={contentVariants}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-[var(--shadow-xs)]"
                        >
                            <Sparkles
                                size={15}
                                aria-hidden="true"
                            />

                            The story behind every cup
                        </motion.div>

                        <motion.h2
                            variants={contentVariants}
                            className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-[3.6rem]"
                        >
                            More than boba.
                            <span className="block text-primary">
                                It is a moment worth enjoying.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={contentVariants}
                            className="mx-auto mt-6 max-w-[40rem] text-base leading-8 text-text-secondary sm:text-lg lg:mx-0"
                        >
                            At Boba O&apos;Clock, we believe every drink
                            should feel special. That is why we combine
                            carefully brewed tea, fresh ingredients and
                            perfectly chewy tapioca pearls to create drinks
                            that taste as good as they look.
                        </motion.p>

                        <motion.p
                            variants={contentVariants}
                            className="mx-auto mt-4 max-w-[40rem] text-base leading-8 text-text-secondary lg:mx-0"
                        >
                            Whether you prefer rich milk tea, fruity
                            refreshers or indulgent flavours, every cup is
                            prepared fresh and customised just for you.
                        </motion.p>

                        <motion.div
                            variants={contentVariants}
                            className="mt-8 grid gap-4 sm:grid-cols-2"
                        >
                            {aboutFeatures.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.title}
                                        className="group rounded-2xl border border-border bg-surface/75 p-4 text-left shadow-[var(--shadow-xs)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-sm)]"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-105">
                                                <Icon
                                                    size={18}
                                                    aria-hidden="true"
                                                />
                                            </span>

                                            <div>
                                                <h3 className="font-heading text-sm font-extrabold text-text-primary">
                                                    {feature.title}
                                                </h3>

                                                <p className="mt-1.5 text-sm leading-6 text-text-secondary">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            variants={contentVariants}
                            className="mt-8 rounded-[1.5rem] border border-border bg-surface p-5 shadow-[var(--shadow-sm)] sm:p-6"
                        >
                            <div className="grid grid-cols-3">
                                {aboutStats.map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className={
                                            index > 0
                                                ? "border-l border-border px-3 sm:px-6"
                                                : "pr-3 sm:pr-6"
                                        }
                                    >
                                        <p className="font-heading text-xl font-extrabold tracking-[-0.04em] text-primary sm:text-2xl">
                                            {stat.value}
                                        </p>

                                        <p className="mt-1 text-[0.7rem] leading-5 text-text-muted sm:text-xs">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex items-center justify-center gap-2 border-t border-border pt-5 text-sm font-medium text-text-secondary lg:justify-start">
                                <span className="flex size-6 items-center justify-center rounded-full bg-primary-light text-primary">
                                    <Check
                                        size={13}
                                        strokeWidth={3}
                                        aria-hidden="true"
                                    />
                                </span>

                                Freshly prepared with care in every cup
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}