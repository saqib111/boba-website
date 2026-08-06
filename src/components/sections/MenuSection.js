"use client";

import Image from "next/image";
import {
    ArrowRight,
    ChevronDown,
    Coffee,
    LoaderCircle,
    Search,
    SlidersHorizontal,
    Sparkles,
    Star,
    X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import { menuCategories, menuItems } from "@/data/menu";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { cn } from "@/lib/utils";

const sortOptions = [
    {
        value: "featured",
        label: "Featured",
    },
    {
        value: "rating-high",
        label: "Highest Rated",
    },
    {
        value: "price-low",
        label: "Price: Low to High",
    },
    {
        value: "price-high",
        label: "Price: High to Low",
    },
    {
        value: "name-az",
        label: "Name: A to Z",
    },
];

function getSortedItems(items, sortBy) {
    const sortedItems = [...items];

    switch (sortBy) {
        case "rating-high":
            return sortedItems.sort(
                (firstItem, secondItem) =>
                    secondItem.rating - firstItem.rating,
            );

        case "price-low":
            return sortedItems.sort(
                (firstItem, secondItem) =>
                    firstItem.price - secondItem.price,
            );

        case "price-high":
            return sortedItems.sort(
                (firstItem, secondItem) =>
                    secondItem.price - firstItem.price,
            );

        case "name-az":
            return sortedItems.sort((firstItem, secondItem) =>
                firstItem.name.localeCompare(secondItem.name),
            );

        case "featured":
        default:
            return sortedItems.sort((firstItem, secondItem) => {
                if (firstItem.featured !== secondItem.featured) {
                    return (
                        Number(secondItem.featured) -
                        Number(firstItem.featured)
                    );
                }

                return secondItem.rating - firstItem.rating;
            });
    }
}

function ProductCard({ item, index, shouldReduceMotion }) {
    return (
        <motion.article
            initial={
                shouldReduceMotion
                    ? false
                    : {
                          opacity: 0,
                          y: 18,
                      }
            }
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.1,
            }}
            transition={{
                duration: 0.45,
                delay: shouldReduceMotion
                    ? 0
                    : Math.min(index * 0.05, 0.2),
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface shadow-[var(--shadow-sm)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-lg)]"
        >
            <div className="relative m-3 overflow-hidden rounded-[1.1rem] bg-surface-soft">
                <div className="relative aspect-[4/3]">
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                </div>

                {item.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-primary-foreground shadow-[var(--shadow-sm)]">
                        {item.badge}
                    </span>
                )}

                <span className="absolute bottom-3 left-3 rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-[0.7rem] font-semibold text-text-primary shadow-sm backdrop-blur-md">
                    {item.categoryLabel}
                </span>
            </div>

            <div className="flex flex-1 flex-col px-5 pb-5 pt-2">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-lg font-extrabold leading-6 tracking-[-0.03em] text-text-primary">
                        {item.name}
                    </h3>

                    <div className="mt-0.5 flex shrink-0 items-center gap-1 rounded-full bg-primary-light px-2 py-1">
                        <Star
                            size={12}
                            className="fill-primary text-primary"
                            aria-hidden="true"
                        />

                        <span className="text-xs font-bold text-primary">
                            {item.rating}
                        </span>
                    </div>
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary">
                    {item.description}
                </p>

                <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
                    <div>
                        <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-text-muted">
                            Starting from
                        </p>

                        <p className="mt-1 font-heading text-xl font-extrabold tracking-[-0.03em] text-primary">
                            PKR {item.price}
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-4 text-sm font-bold text-text-primary transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        aria-label={`Customize ${item.name}`}
                    >
                        Customize

                        <ArrowRight
                            size={15}
                            aria-hidden="true"
                        />
                    </a>
                </div>
            </div>
        </motion.article>
    );
}

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("featured");

    const shouldReduceMotion = useReducedMotion();

    const debouncedSearchQuery = useDebouncedValue(
        searchQuery,
        300,
    );

    const isSearching =
        searchQuery.trim().toLowerCase() !==
        debouncedSearchQuery.trim().toLowerCase();

    const filteredItems = useMemo(() => {
        const normalizedQuery = debouncedSearchQuery
            .trim()
            .toLowerCase();

        const matchingItems = menuItems.filter((item) => {
            const matchesCategory =
                activeCategory === "all" ||
                item.category === activeCategory;

            const searchableContent = [
                item.name,
                item.description,
                item.categoryLabel,
                item.badge,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            const matchesSearch =
                normalizedQuery.length === 0 ||
                searchableContent.includes(normalizedQuery);

            return matchesCategory && matchesSearch;
        });

        return getSortedItems(matchingItems, sortBy);
    }, [activeCategory, debouncedSearchQuery, sortBy]);

    const hasActiveFilters =
        activeCategory !== "all" ||
        searchQuery.trim().length > 0 ||
        sortBy !== "featured";

    function clearSearch() {
        setSearchQuery("");
    }

    function clearFilters() {
        setActiveCategory("all");
        setSearchQuery("");
        setSortBy("featured");
    }

    return (
        <section
            id="menu"
            className="section-spacing relative overflow-hidden bg-surface-soft"
        >
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-primary-light/35 blur-3xl"
            />

            <Container className="relative z-10">
                <motion.div
                    initial={
                        shouldReduceMotion
                            ? false
                            : {
                                  opacity: 0,
                                  y: 24,
                              }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-[var(--shadow-xs)]">
                        <Sparkles
                            size={15}
                            aria-hidden="true"
                        />

                        Discover your favourite
                    </div>

                    <h2 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-6xl">
                        Explore our{" "}
                        <span className="text-primary">
                            boba creations
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                        Search, explore and discover handcrafted drinks
                        prepared with premium ingredients and flavours made
                        for every craving.
                    </p>
                </motion.div>

                <div className="mx-auto mt-10 max-w-4xl">
                    <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                        <div className="relative">
                            <Search
                                size={19}
                                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-text-muted"
                                aria-hidden="true"
                            />

                            <input
                                type="text"
                                inputMode="search"
                                value={searchQuery}
                                onChange={(event) =>
                                    setSearchQuery(event.target.value)
                                }
                                placeholder="Search brown sugar, matcha, mango..."
                                className="focus-ring h-14 w-full rounded-full border border-border bg-surface pl-14 pr-14 text-sm text-text-primary shadow-[var(--shadow-sm)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-text-muted hover:border-border-strong focus:border-primary"
                                aria-label="Search menu items"
                            />

                            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center">
                                {isSearching && (
                                    <LoaderCircle
                                        size={17}
                                        className="mr-1 animate-spin text-primary"
                                        aria-label="Searching"
                                    />
                                )}

                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={clearSearch}
                                        className="focus-ring flex size-9 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-primary-light hover:text-primary"
                                        aria-label="Clear search"
                                    >
                                        <X
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="relative">
                            <SlidersHorizontal
                                size={16}
                                className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-text-muted"
                                aria-hidden="true"
                            />

                            <select
                                value={sortBy}
                                onChange={(event) =>
                                    setSortBy(event.target.value)
                                }
                                className="focus-ring h-14 w-full appearance-none rounded-full border border-border bg-surface pl-11 pr-11 text-sm font-semibold text-text-primary shadow-[var(--shadow-sm)] outline-none transition-[border-color,box-shadow] duration-200 hover:border-border-strong focus:border-primary md:min-w-52"
                                aria-label="Sort menu items"
                            >
                                {sortOptions.map((option) => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown
                                size={17}
                                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-7 overflow-x-auto pb-2">
                    <div
                        className="mx-auto flex w-max min-w-full items-center justify-start gap-2 sm:justify-center"
                        role="tablist"
                        aria-label="Menu categories"
                    >
                        {menuCategories.map((category) => {
                            const isActive =
                                activeCategory === category.id;

                            return (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() =>
                                        setActiveCategory(category.id)
                                    }
                                    role="tab"
                                    aria-selected={isActive}
                                    className={cn(
                                        "focus-ring whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,box-shadow] duration-200",
                                        isActive
                                            ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_25px_rgba(221,91,139,0.2)]"
                                            : "border-border bg-surface text-text-secondary hover:border-border-strong hover:text-primary",
                                    )}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                    <p
                        className="text-sm text-text-secondary"
                        aria-live="polite"
                    >
                        {isSearching ? (
                            "Searching drinks..."
                        ) : (
                            <>
                                Showing{" "}
                                <strong className="font-bold text-text-primary">
                                    {filteredItems.length}
                                </strong>{" "}
                                {filteredItems.length === 1
                                    ? "drink"
                                    : "drinks"}
                            </>
                        )}
                    </p>

                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="focus-ring inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
                        >
                            <X
                                size={15}
                                aria-hidden="true"
                            />

                            Clear filters
                        </button>
                    )}
                </div>

                <div
                    className={cn(
                        "mt-8 min-h-[28rem] transition-opacity duration-200",
                        isSearching ? "opacity-60" : "opacity-100",
                    )}
                    aria-busy={isSearching}
                >
                    {filteredItems.length > 0 ? (
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {filteredItems.map((item, index) => (
                                <ProductCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    shouldReduceMotion={
                                        shouldReduceMotion
                                    }
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-[2rem] border border-dashed border-border-strong bg-surface px-6 py-16 text-center">
                            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary-light text-primary">
                                <Coffee
                                    size={27}
                                    aria-hidden="true"
                                />
                            </span>

                            <h3 className="mt-5 font-heading text-2xl font-extrabold tracking-[-0.03em] text-text-primary">
                                No drinks found
                            </h3>

                            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-secondary">
                                Try another drink name or clear the
                                selected filters.
                            </p>

                            <button
                                type="button"
                                onClick={clearFilters}
                                className="focus-ring mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
                            >
                                View all drinks
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}