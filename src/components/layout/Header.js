"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/layout/Container";
import { mainNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <motion.header
            initial={
                shouldReduceMotion
                    ? false
                    : {
                          opacity: 0,
                          y: -24,
                      }
            }
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"
        >
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="focus-ring inline-flex items-center gap-3 rounded-md"
                        aria-label={`${siteConfig.name} home`}
                    >
                        <span className="flex size-11 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground shadow-[var(--shadow-sm)]">
                            B
                        </span>

                        <span className="font-heading text-xl font-extrabold tracking-[-0.04em] text-text-primary">
                            {siteConfig.name}
                        </span>
                    </a>

                    <nav
                        className="hidden items-center gap-8 md:flex"
                        aria-label="Main navigation"
                    >
                        {mainNavigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="focus-ring rounded-md text-[0.875rem] font-semibold tracking-[-0.01em] text-text-secondary transition-colors hover:text-primary"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={() =>
                            setIsMenuOpen((current) => !current)
                        }
                        className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-colors hover:border-border-strong hover:bg-surface-soft md:hidden"
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? (
                            <X size={21} aria-hidden="true" />
                        ) : (
                            <Menu size={21} aria-hidden="true" />
                        )}
                    </button>
                </div>

                <div
                    id="mobile-navigation"
                    className={cn(
                        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden",
                        isMenuOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0",
                    )}
                >
                    <div className="min-h-0">
                        <nav
                            className="flex flex-col gap-1 border-t border-border py-4"
                            aria-label="Mobile navigation"
                        >
                            {mainNavigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="focus-ring rounded-lg px-4 py-3 text-base font-semibold text-text-secondary transition-colors hover:bg-surface-soft hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </Container>
        </motion.header>
    );
}