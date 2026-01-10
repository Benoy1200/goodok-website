"use client";

import { useState } from "react";

interface ContactFormProps {
    onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            onSuccess?.();
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    if (status === "success") {
        return (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700 mb-4">
                    Thank you for reaching out. We&apos;ll get back to you within 6 hours.
                </p>
                <p className="text-green-600 text-sm">
                    A confirmation email has been sent to your inbox.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-green-700 hover:text-green-800 underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-700 text-sm">
                        ❌ {errorMessage || "Failed to send message. Please try again."}
                    </p>
                </div>
            )}

            <div className="mb-6">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition disabled:bg-gray-100"
                    placeholder="Your name"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Email (Required)
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition disabled:bg-gray-100"
                    placeholder="your@email.com"
                />
            </div>

            <div className="mb-6">
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Message (Required)
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none disabled:bg-gray-100"
                    placeholder="Tell us about your project, store dimensions, or any questions you have..."
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "loading"}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
                {status === "loading" ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Sending...
                    </>
                ) : (
                    "Quick Response"
                )}
            </button>
        </form>
    );
}
