"use client";

import {
    ArrowUp,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    Share2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { contactConfig } from "@/data/contact";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

const footerVariants = {
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

function FooterSocialLink({
    href,
    label,
    icon: Icon,
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="focus-ring flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
        >
            <Icon
                size={18}
                aria-hidden="true"
            />
        </a>
    );
}

export default function Footer() {
    const shouldReduceMotion = useReducedMotion();

    const currentYear = new Date().getFullYear();

    const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(
        contactConfig.whatsapp.message,
    )}`;

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: shouldReduceMotion
                ? "auto"
                : "smooth",
        });
    }

    return (
        <footer className="relative overflow-hidden bg-[#2b1b24] text-white">
            <div
                aria-hidden="true"
                className="absolute -left-44 top-0 size-[28rem] rounded-full bg-primary/15 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -right-52 bottom-0 size-[30rem] rounded-full bg-primary/10 blur-3xl"
            />

            <Container className="relative z-10">
                <motion.div
                    initial={
                        shouldReduceMotion
                            ? false
                            : "hidden"
                    }
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.1,
                    }}
                    variants={footerVariants}
                    className="py-14 sm:py-16 lg:py-20"
                >
                    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.75fr_0.9fr_0.95fr] lg:gap-10">
                        <div>
                            <a
                                href="#home"
                                className="focus-ring inline-flex items-center gap-3 rounded-md"
                                aria-label={`${siteConfig.name} home`}
                            >
                                <span className="flex size-12 items-center justify-center rounded-full bg-primary font-heading text-lg font-extrabold text-primary-foreground shadow-[0_14px_35px_rgba(221,91,139,0.24)]">
                                    B
                                </span>

                                <span className="font-heading text-2xl font-extrabold tracking-[-0.04em] text-white">
                                    {siteConfig.name}
                                </span>
                            </a>

                            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
                                Freshly brewed bubble tea made with premium
                                ingredients, chewy tapioca pearls and
                                flavours worth coming back for.
                            </p>

                            <div className="mt-6 flex items-center gap-2">
                                <FooterSocialLink
                                    href={
                                        contactConfig.socialLinks
                                            .instagram
                                    }
                                    label="Instagram"
                                    icon={Share2}
                                />

                                <FooterSocialLink
                                    href={
                                        contactConfig.socialLinks
                                            .facebook
                                    }
                                    label="Facebook"
                                    icon={MessageCircle}
                                />

                                <FooterSocialLink
                                    href={
                                        contactConfig.socialLinks
                                            .tiktok
                                    }
                                    label="TikTok"
                                    icon={Send}
                                />
                            </div>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="focus-ring group mt-7 inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_14px_35px_rgba(221,91,139,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover"
                            >
                                <MessageCircle
                                    size={17}
                                    aria-hidden="true"
                                />

                                Order on WhatsApp
                            </a>
                        </div>

                        <div>
                            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.16em] text-white">
                                Quick Links
                            </h3>

                            <nav
                                className="mt-5 flex flex-col gap-3"
                                aria-label="Footer navigation"
                            >
                                {mainNavigation.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="focus-ring w-fit rounded-md text-sm text-white/65 transition-colors hover:text-primary"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div>
                            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.16em] text-white">
                                Contact
                            </h3>

                            <div className="mt-5 space-y-4">
                                <a
                                    href={contactConfig.address.mapUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-start gap-3 text-sm text-white/65 transition-colors hover:text-white"
                                >
                                    <MapPin
                                        size={17}
                                        className="mt-0.5 shrink-0 text-primary"
                                        aria-hidden="true"
                                    />

                                    <span>
                                        {
                                            contactConfig.address
                                                .line2
                                        }
                                        <br />
                                        {
                                            contactConfig.address
                                                .country
                                        }
                                    </span>
                                </a>

                                <a
                                    href={contactConfig.phoneHref}
                                    className="group flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
                                >
                                    <Phone
                                        size={17}
                                        className="shrink-0 text-primary"
                                        aria-hidden="true"
                                    />

                                    {contactConfig.phone}
                                </a>

                                <a
                                    href={contactConfig.emailHref}
                                    className="group flex items-center gap-3 break-all text-sm text-white/65 transition-colors hover:text-white"
                                >
                                    <Mail
                                        size={17}
                                        className="shrink-0 text-primary"
                                        aria-hidden="true"
                                    />

                                    {contactConfig.email}
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.16em] text-white">
                                Opening Hours
                            </h3>

                            <div className="mt-5 space-y-4">
                                {contactConfig.openingHours.map(
                                    (schedule) => (
                                        <div
                                            key={schedule.days}
                                            className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                                        >
                                            <div className="flex items-start gap-3">
                                                <Clock3
                                                    size={17}
                                                    className="mt-0.5 shrink-0 text-primary"
                                                    aria-hidden="true"
                                                />

                                                <div>
                                                    <p className="text-sm font-semibold text-white">
                                                        {schedule.days}
                                                    </p>

                                                    <p className="mt-1 text-sm text-white/60">
                                                        {schedule.hours}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-center text-xs leading-6 text-white/50 sm:text-left">
                            © {currentYear} {siteConfig.name}. All rights
                            reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/50 sm:justify-end">
                            <a
                                href="#"
                                className="transition-colors hover:text-primary"
                            >
                                Privacy Policy
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-primary"
                            >
                                Terms & Conditions
                            </a>

                            <button
                                type="button"
                                onClick={scrollToTop}
                                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-semibold text-white/70 transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white"
                            >
                                Back to top

                                <ArrowUp
                                    size={14}
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </footer>
    );
}