import { Navbar } from "@/components/landing/navbar";
import { About } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";
import { Contact } from "@/components/landing/contact";
import { Hero } from "@/components/landing/hero";
import { Project } from "@/components/landing/project";

const Index: React.FC = () => {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />

            {/* Add margin-top to account for fixed navbar */}
            <div className="pt-16">
                <Hero />
                <About />
                <Project />
                <Contact />
            </div>

            <Footer />
        </main>
    )
}

export default Index;