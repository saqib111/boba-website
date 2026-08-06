"use client";

import Image from "next/image";
import {
    ArrowRight,
    Check,
    Leaf,
    Sparkles,
    Star,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const heroStats = [
    {
        value: "4.9",
        label: "Customer rating",
        icon: Star,
    },
    {
        value: "50K+",
        label: "Cups served",
    },
    {
        value: "100%",
        label: "Fresh daily",
        icon: Leaf,
    },
];

const contentContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.16,
            staggerChildren: 0.11,
        },
    },
};

const contentItemVariants = {
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

const imageAreaVariants = {
    hidden: {
        opacity: 0,
        y: 42,
        scale: 0.94,
        rotate: 2,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const glowVariants = {
    hidden: {
        opacity: 0,
        scale: 0.82,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.1,
            delay: 0.2,
            ease: "easeOut",
        },
    },
};

const firstCardVariants = {
    hidden: {
        opacity: 0,
        x: -18,
        scale: 0.92,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            delay: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const secondCardVariants = {
    hidden: {
        opacity: 0,
        x: 18,
        scale: 0.92,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.55,
            delay: 1.05,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    const initialAnimationState = shouldReduceMotion
        ? "visible"
        : "hidden";

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-background"
        >
            <motion.div
                aria-hidden="true"
                initial={initialAnimationState}
                animate="visible"
                variants={glowVariants}
                className="absolute -left-40 top-24 size-96 rounded-full bg-primary-light/45 blur-3xl"
            />

            <motion.div
                aria-hidden="true"
                initial={initialAnimationState}
                animate="visible"
                variants={glowVariants}
                className="absolute -right-32 top-8 size-[28rem] rounded-full bg-surface-muted/75 blur-3xl"
            />

            <Container>
                <div className="grid min-h-[calc(100vh-var(--header-height))] items-center gap-16 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24 lg:py-20 xl:gap-36">
                    <motion.div
                        initial={initialAnimationState}
                        animate="visible"
                        variants={contentContainerVariants}
                        className="relative z-10 mx-auto w-full max-w-[42rem] text-center lg:mx-0 lg:text-left"
                    >
                        <motion.div
                            variants={contentItemVariants}
                            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/90 px-3 py-2 pr-4 shadow-[var(--shadow-sm)] backdrop-blur-md"
                        >
                            <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <Sparkles
                                    size={14}
                                    aria-hidden="true"
                                />
                            </span>

                            <span className="text-[0.82rem] font-semibold tracking-[-0.01em] text-text-primary">
                                Freshly brewed, every single day
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={contentItemVariants}
                            className="mt-7 font-heading text-[3rem] font-extrabold leading-[0.98] tracking-[-0.06em] text-text-primary sm:text-6xl lg:text-[4.65rem] xl:text-[5.15rem]"
                        >
                            <span className="block">
                                Every Hour is
                            </span>

                            <span className="mt-1 block bg-gradient-to-r from-primary via-[#e16a96] to-[#c84675] bg-clip-text text-transparent">
                                Boba Hour.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={contentItemVariants}
                            className="mx-auto mt-7 max-w-[37rem] text-base leading-8 text-text-secondary sm:text-[1.075rem] lg:mx-0"
                        >
                            Handcrafted bubble tea made with premium
                            ingredients, rich flavours and perfectly chewy
                            tapioca pearls in every cup.
                        </motion.p>

                        <motion.div
                            variants={contentItemVariants}
                            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
                        >
                            <div className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
                                <span className="flex size-6 items-center justify-center rounded-full bg-primary-light text-primary">
                                    <Check
                                        size={13}
                                        strokeWidth={3}
                                        aria-hidden="true"
                                    />
                                </span>

                                Premium ingredients
                            </div>

                            <div className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
                                <span className="flex size-6 items-center justify-center rounded-full bg-primary-light text-primary">
                                    <Check
                                        size={13}
                                        strokeWidth={3}
                                        aria-hidden="true"
                                    />
                                </span>

                                Made fresh to order
                            </div>
                        </motion.div>

                        <motion.div
                            variants={contentItemVariants}
                            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
                        >
                            <Button
                                href="#menu"
                                className="group min-h-14 gap-3 px-7 shadow-[0_14px_35px_rgba(221,91,139,0.22)] hover:-translate-y-0.5"
                            >
                                Explore Our Menu

                                <span className="flex size-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                                    <ArrowRight
                                        size={17}
                                        aria-hidden="true"
                                    />
                                </span>
                            </Button>

                            <Button
                                href="#about"
                                variant="outline"
                                className="min-h-14 px-7 hover:-translate-y-0.5"
                            >
                                Our Story
                            </Button>
                        </motion.div>

                        <motion.div
                            variants={contentItemVariants}
                            className="mt-10 grid grid-cols-3 border-t border-border pt-6"
                        >
                            {heroStats.map((stat, index) => {
                                const Icon = stat.icon;

                                return (
                                    <div
                                        key={stat.label}
                                        className={
                                            index === 0
                                                ? "pr-4"
                                                : "border-l border-border px-4 sm:px-6"
                                        }
                                    >
                                        <div className="flex items-center justify-center gap-1.5 lg:justify-start">
                                            {Icon && (
                                                <Icon
                                                    size={16}
                                                    className="shrink-0 fill-primary text-primary"
                                                    aria-hidden="true"
                                                />
                                            )}

                                            <strong className="font-heading text-lg font-extrabold tracking-[-0.03em] text-text-primary sm:text-xl">
                                                {stat.value}
                                            </strong>
                                        </div>

                                        <p className="mt-1 text-[0.7rem] leading-5 text-text-muted sm:text-xs">
                                            {stat.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={initialAnimationState}
                        animate="visible"
                        variants={imageAreaVariants}
                        className="relative mx-auto flex w-full max-w-[42rem] items-center justify-center lg:mx-0 lg:max-w-none lg:translate-x-5 xl:translate-x-8"
                    >
                        <motion.div
                            aria-hidden="true"
                            initial={initialAnimationState}
                            animate="visible"
                            variants={glowVariants}
                            className="absolute size-[76%] rounded-full bg-primary-light/70 blur-3xl"
                        />

                        <div
                            aria-hidden="true"
                            className="absolute bottom-[10%] h-12 w-[60%] rounded-[100%] bg-secondary/15 blur-xl"
                        />

                        <motion.div
                            animate={
                                shouldReduceMotion
                                    ? undefined
                                    : {
                                          y: [0, -8, 0],
                                      }
                            }
                            transition={
                                shouldReduceMotion
                                    ? undefined
                                    : {
                                          duration: 5,
                                          repeat: Infinity,
                                          ease: "easeInOut",
                                      }
                            }
                            className="relative aspect-[4/5] w-full max-w-[31rem] sm:max-w-[35rem] xl:max-w-[38rem]"
                        >
                            <Image
                                src="/images/boba-hero-img.png"
                                alt="Boba O'Clock bubble tea cup"
                                fill
                                preload
                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 55vw, 560px"
                                className="object-contain object-center drop-shadow-[0_32px_38px_rgba(90,45,64,0.18)]"
                            />
                        </motion.div>

                        <motion.div
                            initial={initialAnimationState}
                            animate="visible"
                            variants={firstCardVariants}
                            className="absolute left-[2%] top-[22%] hidden rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-[var(--shadow-md)] backdrop-blur-md sm:block"
                        >
                            <p className="text-[0.7rem] font-medium text-text-muted">
                                Most loved
                            </p>

                            <p className="mt-1 font-heading text-sm font-bold text-text-primary">
                                Brown Sugar Boba
                            </p>
                        </motion.div>

                        <motion.div
                            initial={initialAnimationState}
                            animate="visible"
                            variants={secondCardVariants}
                            className="absolute bottom-[14%] right-[1%] hidden rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-[var(--shadow-md)] backdrop-blur-md sm:block"
                        >
                            <div className="flex items-center gap-2.5">
                                <span className="flex size-9 items-center justify-center rounded-full bg-primary-light">
                                    <Leaf
                                        size={16}
                                        className="text-primary"
                                        aria-hidden="true"
                                    />
                                </span>

                                <div>
                                    <p className="text-[0.7rem] text-text-muted">
                                        Prepared
                                    </p>

                                    <p className="font-heading text-sm font-bold text-text-primary">
                                        Fresh Daily
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}