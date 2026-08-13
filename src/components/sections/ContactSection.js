"use client";

import {
    ArrowUpRight,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Navigation,
    Phone,
    Send,
    Share2,
    Sparkles,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { contactConfig } from "@/data/contact";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.08,
            staggerChildren: 0.1,
        },
    },
};

const revealVariants = {
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

const imageSideVariants = {
    hidden: {
        opacity: 0,
        x: 30,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function ContactDetailCard({
    icon: Icon,
    eyebrow,
    title,
    description,
    href,
}) {
    const Wrapper = href ? "a" : "div";

    return (
        <Wrapper
            href={href}
            className="group flex min-w-0 items-start gap-3 rounded-[1.35rem] border border-border bg-surface/80 p-4 text-left shadow-[var(--shadow-xs)] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-sm)]"
        >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-105">
                <Icon
                    size={19}
                    strokeWidth={1.9}
                    aria-hidden="true"
                />
            </span>

            <div className="min-w-0 flex-1">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-text-muted">
                    {eyebrow}
                </p>

                <p className="mt-1 break-words text-sm font-bold leading-5 text-text-primary sm:text-[0.95rem]">
                    {title}
                </p>

                {description && (
                    <p className="mt-1 break-words text-sm leading-6 text-text-secondary">
                        {description}
                    </p>
                )}
            </div>

            {href && (
                <ArrowUpRight
                    size={16}
                    className="mt-1 shrink-0 text-text-muted transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                />
            )}
        </Wrapper>
    );
}

function SocialLink({ href, label, icon: Icon }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="focus-ring flex size-11 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
            <Icon
                size={18}
                aria-hidden="true"
            />
        </a>
    );
}

export default function ContactSection() {
    const shouldReduceMotion = useReducedMotion();

    const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(
        contactConfig.whatsapp.message,
    )}`;

    return (
        <section
            id="contact"
            className="section-spacing relative overflow-hidden bg-background"
        >
            <div
                aria-hidden="true"
                className="absolute -left-52 top-10 size-[34rem] rounded-full bg-primary-light/45 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -right-48 bottom-0 size-[32rem] rounded-full bg-surface-muted/65 blur-3xl"
            />

            <Container className="relative z-10">
                <motion.div
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    variants={containerVariants}
                >
                    <motion.div
                        variants={revealVariants}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-[var(--shadow-xs)]">
                            <Sparkles
                                size={15}
                                aria-hidden="true"
                            />

                            Come say hello
                        </div>

                        <h2 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] text-text-primary sm:text-5xl lg:text-6xl">
                            Your next favourite cup is
                            <span className="block text-primary">
                                waiting for you.
                            </span>
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                            Visit Boba O&apos;Clock, contact our team or
                            place your order through WhatsApp. We are
                            always ready to prepare something delicious.
                        </p>
                    </motion.div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
                        <motion.div
                            variants={containerVariants}
                            className="flex flex-col rounded-[2rem] border border-border bg-surface/75 p-5 shadow-[var(--shadow-lg)] backdrop-blur-sm sm:p-7 lg:p-8"
                        >
                            <motion.div variants={revealVariants}>
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                                            Contact information
                                        </p>

                                        <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.04em] text-text-primary sm:text-3xl">
                                            Let&apos;s get in touch
                                        </h3>
                                    </div>

                                    <span className="hidden items-center gap-2 rounded-full bg-[#e9f8f0] px-3 py-2 text-xs font-bold text-[#23875f] sm:inline-flex">
                                        <span className="size-2 rounded-full bg-[#23875f]" />

                                        Open today
                                    </span>
                                </div>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary">
                                    Have a question about our menu, lucky
                                    draw or custom orders? Contact us
                                    directly and our team will help you.
                                </p>
                            </motion.div>

                            <motion.div
                                variants={revealVariants}
                                className="mt-7 grid gap-3"
                            >
                                <ContactDetailCard
                                    icon={MapPin}
                                    eyebrow="Visit our café"
                                    title={contactConfig.address.line2}
                                    description={contactConfig.address.country}
                                    href={contactConfig.address.mapUrl}
                                />

                                <div className="grid gap-3 md:grid-cols-2">
                                    <ContactDetailCard
                                        icon={Phone}
                                        eyebrow="Call us"
                                        title={contactConfig.phone}
                                        href={contactConfig.phoneHref}
                                    />

                                    <ContactDetailCard
                                        icon={Mail}
                                        eyebrow="Email us"
                                        title={contactConfig.email}
                                        href={contactConfig.emailHref}
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                variants={revealVariants}
                                className="mt-7 rounded-[1.5rem] border border-border bg-background/75 p-5"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary-light text-primary">
                                        <Clock3
                                            size={19}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                                            Opening hours
                                        </p>

                                        <h4 className="mt-1 font-heading text-lg font-extrabold text-text-primary">
                                            Visit at your perfect time
                                        </h4>
                                    </div>
                                </div>

                                <div className="mt-5 divide-y divide-border">
                                    {contactConfig.openingHours.map(
                                        (schedule) => (
                                            <div
                                                key={schedule.days}
                                                className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                                            >
                                                <span className="text-sm text-text-secondary">
                                                    {schedule.days}
                                                </span>

                                                <span className="text-right text-sm font-bold text-text-primary">
                                                    {schedule.hours}
                                                </span>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                variants={revealVariants}
                                className="mt-7 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
                                        Follow Boba O&apos;Clock
                                    </p>

                                    <div className="mt-3 flex items-center gap-2">
                                        <SocialLink
                                            href={contactConfig.socialLinks.instagram}
                                            label="Follow us on Instagram"
                                            icon={Share2}
                                        />

                                        <SocialLink
                                            href={contactConfig.socialLinks.facebook}
                                            label="Follow us on Facebook"
                                            icon={MessageCircle}
                                        />

                                        <SocialLink
                                            href={contactConfig.socialLinks.tiktok}
                                            label="Follow us on TikTok"
                                            icon={Send}
                                        />
                                    </div>
                                </div>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="focus-ring group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-[0_14px_35px_rgba(221,91,139,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover"
                                >
                                    <MessageCircle
                                        size={18}
                                        aria-hidden="true"
                                    />

                                    Order on WhatsApp

                                    <ArrowUpRight
                                        size={17}
                                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={imageSideVariants}
                            className="relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary-light/45 via-surface to-surface-muted shadow-[var(--shadow-lg)] lg:min-h-full"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute -right-20 -top-20 size-72 rounded-full bg-primary-light/90 blur-3xl"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute -bottom-28 -left-20 size-80 rounded-full bg-[#ffe7a8]/35 blur-3xl"
                            />

                            <div className="absolute inset-4 overflow-hidden rounded-[1.5rem] border border-white/50 bg-surface/65 shadow-inner backdrop-blur-sm">
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-7 text-center sm:p-10">
                                    <span className="flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_20px_50px_rgba(221,91,139,0.3)]">
                                        <MapPin
                                            size={32}
                                            strokeWidth={1.8}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                                        Find Boba O&apos;Clock
                                    </p>

                                    <h3 className="mt-3 max-w-md font-heading text-3xl font-extrabold leading-tight tracking-[-0.045em] text-text-primary sm:text-4xl">
                                        Visit us for freshly prepared boba
                                        and good moments.
                                    </h3>

                                    <p className="mt-4 max-w-md text-sm leading-7 text-text-secondary sm:text-base">
                                        {contactConfig.address.line2},{" "}
                                        {contactConfig.address.country}
                                    </p>

                                    <a
                                        href={contactConfig.address.mapUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="focus-ring group mt-7 inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-border-strong bg-surface px-6 text-sm font-bold text-text-primary shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                                    >
                                        <Navigation
                                            size={17}
                                            aria-hidden="true"
                                        />

                                        Get Directions

                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            aria-hidden="true"
                                        />
                                    </a>

                                    <div className="mt-9 grid w-full max-w-md grid-cols-2 gap-3">
                                        <div className="rounded-2xl border border-border bg-surface/80 p-4 shadow-[var(--shadow-xs)]">
                                            <Phone
                                                size={18}
                                                className="mx-auto text-primary"
                                                aria-hidden="true"
                                            />

                                            <p className="mt-2 text-xs text-text-muted">
                                                Call ahead
                                            </p>

                                            <p className="mt-1 text-sm font-bold text-text-primary">
                                                {contactConfig.phone}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-border bg-surface/80 p-4 shadow-[var(--shadow-xs)]">
                                            <MessageCircle
                                                size={18}
                                                className="mx-auto text-primary"
                                                aria-hidden="true"
                                            />

                                            <p className="mt-2 text-xs text-text-muted">
                                                Quick ordering
                                            </p>

                                            <p className="mt-1 text-sm font-bold text-text-primary">
                                                WhatsApp available
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                aria-hidden="true"
                                className="absolute left-[12%] top-[14%] size-3 rounded-full bg-primary/35"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute bottom-[12%] right-[12%] size-4 rounded-full bg-[#e3b64d]/40"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}