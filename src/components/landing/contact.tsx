import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const contactMethods = [
    {
        icon: Mail,
        label: "Email",
        value: "dexter.montero09@gmail.com",
        href: "mailto:dexter.montero09@gmail.com",
        description: "Best way to reach me",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+63 (0976) 103-8160",
        href: "tel:+63976103816",
        description: "Mon – Fri, 9am – 6pm PHT",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Quezon City, Philippines",
        href: "#",
        description: "Open to remote worldwide",
    },
];

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error || "Server error");
            }
            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setSubmitted(false), 4000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = `
        w-full px-4 py-2.5 rounded-xl bg-card/60 border border-border/70 text-foreground text-sm
        placeholder:text-muted-foreground/50
        focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30
        hover:border-border transition-all duration-200
    `;

    return (
        <section id="contact" className="relative py-16 lg:py-24 px-4 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background pointer-events-none" />
            <div className="hidden lg:block absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* ── Section header ─────────────────────────── */}
                <div className="mb-10 lg:mb-16 text-center">
                    <div className="section-label mb-5 mx-auto w-fit">Get In Touch</div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Let&apos;s{" "}
                        <span className="gradient-text">Work Together</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        I&apos;m always interested in new opportunities and interesting projects.
                        Whether you have a project in mind or just want to say hello — reach out!
                    </p>
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent mx-auto mt-5" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* ── Left: Contact methods ──────────────────── */}
                    <div className="lg:col-span-2 space-y-4">
                        {contactMethods.map(({ icon: Icon, label, value, href, description }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="card-glow-border group flex items-start gap-4 p-5 rounded-2xl
                                           bg-card/50 border border-border/70 backdrop-blur-sm
                                           hover:bg-card/70 transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20
                                               flex items-center justify-center flex-shrink-0
                                               group-hover:bg-primary/20 transition">
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                                        {label}
                                    </p>
                                    <p className="text-sm font-medium text-foreground mb-0.5">
                                        {value}
                                    </p>
                                    <p className="text-xs text-muted-foreground/70">
                                        {description}
                                    </p>
                                </div>
                            </a>
                        ))}

                        {/* Availability card */}
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5
                                       border border-primary/20 backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                                    Available for work
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Currently open to full-time roles. <br />{/*  and freelance projects */}
                                Typical response time: &lt; 24 hours.
                            </p>

                        </div>
                    </div>

                    {/* ── Right: Contact form ─────────────────────── */}
                    <div className="lg:col-span-3">
                        <div className="card-glow-border rounded-2xl p-6 lg:p-8
                                       bg-card/50 border border-border/70 backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className={inputClass}
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Project collaboration"
                                        className={inputClass}
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        className={`${inputClass} resize-none`}
                                    />
                                </div>

                                {error && (
                                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                {submitted && (
                                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                                        Thanks for your message! I'll get back to you within 24 hours.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-2
                                               px-6 py-3 rounded-xl bg-primary hover:bg-primary/85
                                               text-primary-foreground font-medium text-sm
                                               transition-all duration-200 cursor-pointer
                                               hover:shadow-lg hover:shadow-primary/25
                                               disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
