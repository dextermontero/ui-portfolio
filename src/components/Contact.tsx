import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        I'm always interested in new opportunities and interesting projects.
                        Let's discuss how we can work together!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Let's Start a Conversation
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Whether you have a project in mind, want to collaborate, or just want to say hello,
                            I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Email</p>
                                    <p className="text-muted-foreground">dexter.montero09@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">Phone</p>
                                    <p className="text-muted-foreground">+63 (0976) 103-8160</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                <p className="font-medium text-foreground">Location</p>
                                <p className="text-muted-foreground">Quezon City, Philippines</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Send me a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full cursor-not-allowed opacity-50">
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Contact;