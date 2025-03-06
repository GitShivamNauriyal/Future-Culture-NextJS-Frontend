import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import BottomGradient from "./ui/BottomGradient";
import BottomGradientHover from "./ui/BottomGradientHover";

// Define validation schema with Zod
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contactus = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    // Animation observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate__fadeInUp");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const animatedElements = document.querySelectorAll(
            "#contact .animate__animated"
        );
        animatedElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", data);
        reset();
    };

    return (
        <section id="contact" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="relative group text-3xl md:text-4xl font-raleway font-bold text-white mb-6 animate__animated">
                        Get in
                        <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                            Touch
                        </span>
                        <BottomGradient />
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="relative group bg-neutral-800 p-8 rounded-xl animate__animated">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div>
                                <Label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Full Name
                                </Label>
                                <Input
                                    {...register("name")}
                                    id="name"
                                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-opacity-0  focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                                    placeholder="Enter your name"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Email Address
                                </label>
                                <Input
                                    {...register("email")}
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-0  focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                                    placeholder="Enter your email"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Subject
                                </label>
                                <Input
                                    {...register("subject")}
                                    id="subject"
                                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg  focus:ring-0  focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                                    placeholder="Enter subject"
                                />
                                {errors.subject && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.subject.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    id="message"
                                    rows={4}
                                    className=" w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg  focus:ring-0  focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                                    placeholder="Enter your message"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-400">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative group w-full px-6 py-3 bg-white text-neutral-900 rounded-lg font-medium hover:bg-gray-200 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>

                            {isSubmitSuccessful && (
                                <p className="text-green-400 text-center mt-4">
                                    Thank you for your message! We'll get back
                                    to you soon.
                                </p>
                            )}
                        </form>
                        <BottomGradient />
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8 animate__animated">
                        <div className="relative group bg-neutral-800 p-8 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-300">
                                    <span>+91 2099209900</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <span>contact@futureculture.com</span>
                                </div>
                                <div className=" flex items-center text-gray-300">
                                    <span>
                                        2099 Future Street, Future District
                                        <br />
                                        Future City, ST 12345
                                    </span>
                                </div>
                            </div>
                            <BottomGradientHover />
                        </div>

                        <div className="relative group bg-neutral-800 p-8 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-4">
                                Business Hours
                            </h3>
                            <div className="space-y-2 text-gray-300">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed...</p>
                            </div>
                            <BottomGradientHover />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactus;
