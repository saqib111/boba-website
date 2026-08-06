import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import AboutSection from "@/components/sections/AboutSection";
import LuckyDrawSection from "@/components/sections/LuckyDrawSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
    return (
        <main>
            <Hero />

            <MenuSection />

            <AboutSection />

            <LuckyDrawSection />

            <ContactSection />
        </main>
    );
}