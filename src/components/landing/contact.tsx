import React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Initialize EmailJS
    React.useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
            );

            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        } catch (err) {
            setError("Failed to send message. Please try again.");
            console.error("Email error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 bg-gradient-to-b from-background via-card/20 to-background"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                        <span className="text-accent font-semibold uppercase tracking-wide text-sm">
                            Get In Touch
                        </span>
                    </div>

                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I&apos;m always interested in new opportunities and interesting
                        projects. Whether you have a project in mind, want to collaborate,
                        or just want to say hello, feel free to reach out!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Contact Info Cards */}
                    {[
                        {
                            icon: Mail,
                            label: "Email",
                            value: "dexter.montero09@gmail.com",
                            href: "mailto:dexter.montero09@gmail.com",
                        },
                        {
                            icon: Phone,
                            label: "Phone",
                            value: "+63 (0976) 103-8160",
                            href: "tel:+63976103816",
                        },
                        {
                            icon: MapPin,
                            label: "Location",
                            value: "Quezon City, Philippines",
                            href: "#",
                        },
                    ].map((contact, i) => {
                        const Icon = contact.icon;
                        return (
                            <a
                                key={i}
                                href={contact.href}
                                className="group bg-card/50 border border-border rounded-xl p-6 hover:bg-card/80 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition">
                                    <Icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-foreground font-semibold mb-2">
                                    {contact.label}
                                </h3>
                                <p className="text-muted-foreground text-sm">{contact.value}</p>
                            </a>
                        );
                    })}
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto bg-card/30 border border-border rounded-xl p-8 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-foreground mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                                placeholder="Project collaboration"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-foreground mb-2"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {error && (
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        {submitted && (
                            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500 text-sm">
                                Thanks for your message! I'll get back to you soon.
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-dark text-foreground gap-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader className="w-4 h-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
