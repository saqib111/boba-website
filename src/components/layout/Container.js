import { cn } from "@/lib/utils";

export default function Container({
    children,
    className,
    as: Component = "div",
}) {
    return (
        <Component className={cn("site-container", className)}>
            {children}
        </Component>
    );
}