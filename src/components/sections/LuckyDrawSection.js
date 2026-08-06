"use client";

import {
    ArrowRight,
    Bike,
    CalendarDays,
    Check,
    Clock3,
    Crown,
    Gift,
    MapPin,
    PartyPopper,
    Sparkles,
    Ticket,
    Trophy,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import {
    luckyDrawConfig,
    luckyDrawPrizes,
    luckyDrawRules,
} from "@/data/luckyDraw";
import { useCountdown } from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";

const sectionVariants = {
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
        y: 26,
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

const scaleVariants = {
    hidden: {
        opacity: 0,
        scale: 0.94,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function CountdownItem({ value, label, showDivider = true }) {
    return (
        <div className="relative flex min-w-0 flex-1 items-center justify-center">
            <div className="flex flex-col items-center px-2 py-5 sm:px-5 sm:py-6">
                <strong className="font-heading text-3xl font-extrabold tracking-[-0.05em] text-primary sm:text-4xl lg:text-[2.75rem]">
                    {String(value).padStart(2, "0")}
                </strong>

                <span className="mt-1.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-text-muted sm:text-[0.68rem]">
                    {label}
                </span>
            </div>

            {showDivider && (
                <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 bg-border sm:h-14"
                />
            )}
        </div>
    );
}

function FeaturedPrizeCard({
    prize,
    position,
    shouldReduceMotion,
}) {
    const Icon = prize.icon;

    const positionStyles = {
        first: {
            wrapper:
                "order-1 sm:order-2 sm:-translate-y-5 lg:-translate-y-8",
            card:
                "border-[#e8bd69]/65 bg-gradient-to-b from-[#fffaf0] via-surface to-primary-light/25 shadow-[0_25px_70px_rgba(135,83,47,0.14)]",
            icon:
                "bg-gradient-to-br from-[#f3c96a] to-[#d99d35] text-white shadow-[0_14px_35px_rgba(210,154,52,0.28)]",
            badge:
                "bg-gradient-to-r from-[#f4cc73] to-[#dca13c] text-[#5f4018]",
            crown: true,
        },
        second: {
            wrapper: "order-2 sm:order-1",
            card:
                "border-primary/30 bg-gradient-to-br from-surface via-surface to-primary-light/30",
            icon:
                "bg-primary text-primary-foreground shadow-[0_14px_35px_rgba(221,91,139,0.24)]",
            badge: "bg-primary-light text-primary",
            crown: false,
        },
    };

    const styles = positionStyles[position];

    return (
        <motion.article
            variants={scaleVariants}
            whileHover={
                shouldReduceMotion
                    ? undefined
                    : {
                          y: -7,
                      }
            }
            transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={cn("relative", styles.wrapper)}
        >
            {styles.crown && (
                <motion.div
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  y: [0, -5, 0],
                                  rotate: [-2, 2, -2],
                              }
                    }
                    transition={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                              }
                    }
                    className="absolute -top-7 left-1/2 z-20 flex size-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-[#f3cb70] to-[#d99a32] text-white shadow-[0_12px_30px_rgba(190,133,42,0.3)]"
                >
                    <Crown
                        size={24}
                        fill="currentColor"
                        aria-hidden="true"
                    />
                </motion.div>
            )}

            <div
                className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 shadow-[var(--shadow-lg)] sm:p-7",
                    styles.card,
                )}
            >
                <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 size-44 rounded-full bg-primary-light/60 blur-3xl"
                />

                <div
                    aria-hidden="true"
                    className="absolute -bottom-20 -left-16 size-44 rounded-full bg-[#ffe9a8]/30 blur-3xl"
                />

                <div className="relative flex items-start justify-between gap-4">
                    <span
                        className={cn(
                            "flex size-16 shrink-0 items-center justify-center rounded-2xl",
                            styles.icon,
                        )}
                    >
                        <Icon
                            size={30}
                            strokeWidth={1.8}
                            aria-hidden="true"
                        />
                    </span>

                    <span
                        className={cn(
                            "rounded-full px-3 py-1.5 text-[0.64rem] font-extrabold uppercase tracking-[0.1em]",
                            styles.badge,
                        )}
                    >
                        {position === "first"
                            ? "Mega Prize"
                            : prize.label}
                    </span>
                </div>

                <div className="relative mt-7 flex-1">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-text-muted">
                        {prize.quantity} lucky winner
                    </p>

                    <h3 className="mt-2 font-heading text-2xl font-extrabold leading-tight tracking-[-0.045em] text-text-primary">
                        {prize.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-text-secondary">
                        {prize.description}
                    </p>
                </div>

                <div className="relative mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-primary">
                        <Trophy
                            size={15}
                            aria-hidden="true"
                        />

                        Exclusive grand reward
                    </span>

                    <span className="font-heading text-sm font-extrabold text-text-muted">
                        #{position === "first" ? "01" : "02"}
                    </span>
                </div>
            </div>
        </motion.article>
    );
}

function RewardCard({
    prize,
    index,
    shouldReduceMotion,
}) {
    const Icon = prize.icon;

    return (
        <motion.article
            variants={revealVariants}
            whileHover={
                shouldReduceMotion
                    ? undefined
                    : {
                          y: -5,
                      }
            }
            transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface p-5 shadow-[var(--shadow-sm)] transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-[var(--shadow-lg)]"
        >
            <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 size-28 rounded-full bg-primary-light/45 blur-2xl transition-transform duration-500 group-hover:scale-125"
            />

            <div className="relative flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon
                        size={22}
                        strokeWidth={1.8}
                        aria-hidden="true"
                    />
                </span>

                <span className="rounded-full border border-border bg-background px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.09em] text-text-muted">
                    {prize.quantity}{" "}
                    {prize.quantity === 1 ? "winner" : "winners"}
                </span>
            </div>

            <div className="relative mt-5 flex-1">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-primary">
                    {prize.label}
                </p>

                <h3 className="mt-2 font-heading text-lg font-extrabold leading-6 tracking-[-0.035em] text-text-primary">
                    {prize.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {prize.description}
                </p>
            </div>

            <div className="relative mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted">
                    <Gift
                        size={14}
                        className="text-primary"
                        aria-hidden="true"
                    />

                    Reward prize
                </span>

                <span className="font-heading text-xs font-extrabold text-primary">
                    #{String(index + 3).padStart(2, "0")}
                </span>
            </div>
        </motion.article>
    );
}

export default function LuckyDrawSection() {
    const shouldReduceMotion = useReducedMotion();

    const {
        days,
        hours,
        minutes,
        seconds,
        isExpired,
    } = useCountdown(luckyDrawConfig.drawDate);

    const featuredPrizes = luckyDrawPrizes.slice(0, 2);
    const additionalPrizes = luckyDrawPrizes.slice(2);

    const totalWinners = luckyDrawPrizes.reduce(
        (total, prize) => total + prize.quantity,
        0,
    );

    return (
        <section
            id="lucky-draw"
            className="section-spacing relative overflow-hidden bg-surface-soft"
        >
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary-light/30 to-transparent"
            />

            <div
                aria-hidden="true"
                className="absolute -left-52 top-40 size-[34rem] rounded-full bg-primary-light/55 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute -right-52 bottom-16 size-[36rem] rounded-full bg-[#ffe7a0]/35 blur-3xl"
            />

            <div
                aria-hidden="true"
                className="absolute left-[8%] top-32 size-2 rounded-full bg-primary/50"
            />

            <div
                aria-hidden="true"
                className="absolute right-[12%] top-56 size-3 rounded-full bg-[#e4b34b]/50"
            />

            <Container className="relative z-10">
                <motion.div
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.08,
                    }}
                    variants={sectionVariants}
                >
                    <motion.div
                        variants={scaleVariants}
                        className="relative overflow-hidden rounded-[2.5rem] border border-border bg-background/85 shadow-[0_30px_90px_rgba(109,60,80,0.11)] backdrop-blur-sm"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                        />

                        <div className="relative px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12 lg:px-12 lg:pb-16">
                            <motion.div
                                variants={revealVariants}
                                className="mx-auto max-w-4xl text-center"
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light/55 px-4 py-2 text-sm font-bold text-primary shadow-[var(--shadow-xs)]">
                                    <PartyPopper
                                        size={16}
                                        aria-hidden="true"
                                    />

                                    Boba O&apos;Clock Grand Giveaway

                                    <Sparkles
                                        size={14}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h2 className="mt-7 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] text-text-primary sm:text-5xl lg:text-[4.25rem]">
                                    Sip, enter and
                                    <span className="relative mx-2 inline-block text-primary">
                                        win big.
                                        <span
                                            aria-hidden="true"
                                            className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-primary-light"
                                        />
                                    </span>
                                </h2>

                                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                                    Spend PKR{" "}
                                    {luckyDrawConfig.minimumOrder} or more
                                    and receive an exclusive entry code
                                    for a chance to win our biggest prizes
                                    yet.
                                </p>

                                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-secondary shadow-[var(--shadow-xs)]">
                                        <Trophy
                                            size={16}
                                            className="text-primary"
                                            aria-hidden="true"
                                        />

                                        {totalWinners} lucky winners
                                    </span>

                                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-text-secondary shadow-[var(--shadow-xs)]">
                                        <Ticket
                                            size={16}
                                            className="text-primary"
                                            aria-hidden="true"
                                        />

                                        One bill, one entry
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={scaleVariants}
                                className="mx-auto mt-10 max-w-3xl"
                            >
                                <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_22px_60px_rgba(110,60,81,0.12)]">
                                    <div className="flex items-center justify-center gap-2 border-b border-border bg-gradient-to-r from-primary-light/25 via-primary-light/55 to-primary-light/25 px-4 py-3.5">
                                        <Clock3
                                            size={17}
                                            className="text-primary"
                                            aria-hidden="true"
                                        />

                                        <span className="text-sm font-bold text-text-primary">
                                            {isExpired
                                                ? "The lucky draw has ended"
                                                : "The grand draw begins in"}
                                        </span>
                                    </div>

                                    {isExpired ? (
                                        <div className="px-6 py-10 text-center">
                                            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary-light text-primary">
                                                <Trophy
                                                    size={28}
                                                    aria-hidden="true"
                                                />
                                            </span>

                                            <h3 className="mt-4 font-heading text-2xl font-extrabold text-text-primary">
                                                Draw completed
                                            </h3>

                                            <p className="mt-2 text-sm text-text-secondary">
                                                Follow our official
                                                channels for the winner
                                                announcement.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-4">
                                            <CountdownItem
                                                value={days}
                                                label="Days"
                                            />

                                            <CountdownItem
                                                value={hours}
                                                label="Hours"
                                            />

                                            <CountdownItem
                                                value={minutes}
                                                label="Minutes"
                                            />

                                            <CountdownItem
                                                value={seconds}
                                                label="Seconds"
                                                showDivider={false}
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={revealVariants}
                        className="mt-14 text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                            Featured grand prizes
                        </p>

                        <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-text-primary sm:text-4xl">
                            The rewards everyone is talking about
                        </h3>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-text-secondary">
                            Two spectacular grand prizes headline this
                            campaign, with even more rewards waiting below.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={sectionVariants}
                        className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 sm:items-stretch"
                    >
                        <FeaturedPrizeCard
                            prize={featuredPrizes[0]}
                            position="first"
                            shouldReduceMotion={shouldReduceMotion}
                        />

                        <FeaturedPrizeCard
                            prize={featuredPrizes[1]}
                            position="second"
                            shouldReduceMotion={shouldReduceMotion}
                        />
                    </motion.div>

                    <motion.div
                        variants={revealVariants}
                        className="mt-16 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between"
                    >
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                                More chances to win
                            </p>

                            <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.04em] text-text-primary sm:text-3xl">
                                Additional premium rewards
                            </h3>
                        </div>

                        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-light px-4 py-2 text-sm font-bold text-primary">
                            <Gift
                                size={15}
                                aria-hidden="true"
                            />

                            Multiple winners
                        </span>
                    </motion.div>

                    <motion.div
                        variants={sectionVariants}
                        className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
                    >
                        {additionalPrizes.map((prize, index) => (
                            <RewardCard
                                key={prize.id}
                                prize={prize}
                                index={index}
                                shouldReduceMotion={
                                    shouldReduceMotion
                                }
                            />
                        ))}
                    </motion.div>

                    <motion.div
                        variants={revealVariants}
                        className="mt-14 overflow-hidden rounded-[2rem] border border-primary/25 bg-gradient-to-br from-surface via-surface to-primary-light/40 shadow-[var(--shadow-lg)]"
                    >
                        <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
                            <div className="p-6 sm:p-8 lg:p-10">
                                <div className="flex items-center gap-4">
                                    <span className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(221,91,139,0.24)]">
                                        <Ticket
                                            size={22}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                                            How to participate
                                        </p>

                                        <h3 className="mt-1 font-heading text-2xl font-extrabold tracking-[-0.04em] text-text-primary">
                                            Enter in three easy steps
                                        </h3>
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-6 md:grid-cols-3">
                                    {luckyDrawRules.map(
                                        (rule, index) => {
                                            const Icon = rule.icon;

                                            return (
                                                <div
                                                    key={rule.id}
                                                    className="relative"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary">
                                                            <Icon
                                                                size={18}
                                                                aria-hidden="true"
                                                            />
                                                        </span>

                                                        <div>
                                                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                                                                Step{" "}
                                                                {index + 1}
                                                            </p>

                                                            <h4 className="mt-1 text-sm font-extrabold text-text-primary">
                                                                {
                                                                    rule.title
                                                                }
                                                            </h4>

                                                            <p className="mt-1.5 text-xs leading-5 text-text-secondary">
                                                                {
                                                                    rule.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>

                                <div className="mt-7 flex items-start gap-2 border-t border-border pt-6 text-sm leading-6 text-text-secondary">
                                    <Check
                                        size={17}
                                        className="mt-0.5 shrink-0 text-primary"
                                        strokeWidth={3}
                                        aria-hidden="true"
                                    />

                                    <span>
                                        {
                                            luckyDrawConfig.announcementText
                                        }
                                    </span>
                                </div>
                            </div>

                            <div className="border-t border-border bg-primary-light/30 p-6 sm:p-8 lg:min-w-[19rem] lg:border-l lg:border-t-0 lg:p-10">
                                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_40px_rgba(221,91,139,0.28)] lg:mx-0">
                                    <Bike
                                        size={28}
                                        aria-hidden="true"
                                    />
                                </span>

                                <p className="mt-5 text-center font-heading text-xl font-extrabold tracking-[-0.03em] text-text-primary lg:text-left">
                                    Your next order could be the winning
                                    one.
                                </p>

                                <p className="mt-2 text-center text-sm leading-6 text-text-secondary lg:text-left">
                                    Visit Boba O&apos;Clock and collect
                                    your official entry coupon today.
                                </p>

                                <a
                                    href={luckyDrawConfig.cta.href}
                                    className="focus-ring group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_14px_35px_rgba(221,91,139,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover"
                                >
                                    <MapPin
                                        size={17}
                                        aria-hidden="true"
                                    />

                                    {luckyDrawConfig.cta.label}

                                    <ArrowRight
                                        size={17}
                                        className="transition-transform duration-200 group-hover:translate-x-1"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={revealVariants}
                        className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-text-muted"
                    >
                        <span className="inline-flex items-center gap-2">
                            <CalendarDays
                                size={14}
                                className="text-primary"
                                aria-hidden="true"
                            />

                            Draw date: 15 September 2026
                        </span>

                        <span className="inline-flex items-center gap-2">
                            <Ticket
                                size={14}
                                className="text-primary"
                                aria-hidden="true"
                            />

                            Minimum order: PKR{" "}
                            {luckyDrawConfig.minimumOrder}
                        </span>

                        <span>
                            Terms and conditions apply
                        </span>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}