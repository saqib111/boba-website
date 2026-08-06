import { cn } from "@/lib/utils";

const buttonVariants = {
    primary:
        "bg-primary text-primary-foreground shadow-[var(--shadow-sm)] hover:bg-primary-hover hover:shadow-[var(--shadow-md)]",
    outline:
        "border border-border-strong bg-surface text-text-primary hover:border-primary hover:bg-surface-soft hover:text-primary",
};

export default function Button({
    children,
    className,
    variant = "primary",
    href,
    ...props
}) {
    const classes = cn(
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all duration-200",
        buttonVariants[variant],
        className,
    );

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}