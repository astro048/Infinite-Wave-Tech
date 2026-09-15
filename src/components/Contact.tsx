import { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { RainbowButton } from './magicui/rainbow-button';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: integrate with backend
    };

    return (
        <section id="contact" className="flex items-center min-h-screen py-20 bg-white border-t border-gray-100 sm:py-28">
            <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

                    {/* Left Column - Info */}
                    <div className="flex flex-col">
                        {/* Icon */}
                        <div className="relative flex items-center justify-center w-12 h-12 mb-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
                            <div className="absolute w-8 h-2 rounded-full -bottom-2 bg-indigo-500/20 blur-md"></div>
                            <HiOutlineMail className="w-6 h-6 text-indigo-600" />
                        </div>

                        {/* Headers */}
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Contact us
                        </h2>

                        <p className="max-w-md mb-10 text-sm leading-relaxed text-gray-500 sm:text-base">
                            We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
                        </p>

                        {/* Contact details */}
                        <div className="flex flex-wrap items-center gap-3 mb-16 text-xs font-medium text-gray-400 sm:text-sm">
                            <a href="mailto:hello@infinitewavetech.com" className="transition-colors hover:text-gray-600">hello@infinitewavetech.com</a>
                            <span>•</span>
                            <span>+91 98765 43210</span>
                            <span>•</span>
                            <span>Chennai, IN</span>
                        </div>

                        {/* Map Visual Image */}
                        <div className="relative flex items-center justify-center w-full h-48 mt-auto sm:h-64 opacity-90">
                            <img src="/image/World%20Map.png" alt="World Map" className="absolute inset-0 object-contain w-full h-full" />

                            {/* "We are here" tooltip overlay on the map */}
                            <div className="absolute top-[46%] left-[63.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center hover:z-20 transition-all">
                                <div className="bg-gray-900 border border-gray-700 text-white text-[10px] font-semibold px-3 py-1.5 rounded-full mb-2 shadow-lg z-10 whitespace-nowrap">
                                    We are here
                                </div>
                                <div className="w-px h-6 bg-gradient-to-b from-indigo-500 to-transparent"></div>
                                <div className="w-2 h-2 bg-indigo-600 rounded-full mt-1 shadow-[0_0_15px_rgba(79,70,229,0.5)] relative">
                                    <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-75 animate-ping"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form Container */}
                    <div className="relative">
                        {/* Form Background with faint grid */}
                        <div className="absolute inset-0 bg-gray-50/80 border border-gray-200 rounded-[2rem] overflow-hidden -z-10 shadow-sm">
                            {/* Grid overlay */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaC00MHY0MGg0MHYtNDB6IiBmaWxsPSJ0cmFuc3BhcmVudCIvPgo8cGF0aCBkPSJNMCAwdjQwaDFWMGgtMXpNMCAwaDQwdjFILTB6IiBmaWxsPSJyZ2JhKDAsMCwwLDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')] opacity-60 bg-[length:30px_30px]" />
                            {/* Gradient glow top right */}
                            <div className="absolute w-64 h-64 bg-indigo-100 rounded-full opacity-50 -top-32 -right-32 blur-3xl"></div>
                        </div>

                        <form onSubmit={handleSubmit} className="relative z-10 p-8 sm:p-10">
                            <div className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className="block text-[13px] font-medium text-gray-700 mb-2">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-gray-400 shadow-sm"
                                        required
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className="block text-[13px] font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-gray-400 shadow-sm"
                                        required
                                    />
                                </div>

                                {/* Company Input */}
                                <div>
                                    <label htmlFor="company" className="block text-[13px] font-medium text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Infinite Wave Tech"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors placeholder-gray-400 shadow-sm"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label htmlFor="message" className="block text-[13px] font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Type your message here"
                                        rows={5}
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none placeholder-gray-400 shadow-sm"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <RainbowButton
                                        type="submit"
                                        className="w-full sm:w-auto"
                                    >
                                        Submit
                                    </RainbowButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
