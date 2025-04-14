'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard'; // Make sure this path is correct for your project

// Define the type for form data explicitly
interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<string>(''); // To show submission status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    // --- Read the endpoint URL from environment variables ---
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    // --- ---

    // --- Add a check to ensure the environment variable is set ---
    if (!formspreeEndpoint) {
      console.error("Formspree endpoint URL environment variable (NEXT_PUBLIC_FORMSPREE_ENDPOINT) is not defined.");
      setStatus("Configuration error: Form endpoint is missing.");
      return; // Stop the submission if the URL is missing
    }
    // --- ---

    try {
      const response = await fetch(formspreeEndpoint, { // Use the variable here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thanks for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', company: '', message: '' }); // Clear form
        setTimeout(() => setStatus(''), 5000); // Hide message after 5 seconds
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          // Format Formspree errors nicely
          const formattedErrors = data.errors.map((err: any) => `${err.field ? `${err.field}: ` : ''}${err.message}`).join(', ');
          setStatus(`Error: ${formattedErrors}`);
        } else {
          setStatus('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('Oops! Could not send message. Check your connection or the console for details.');
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  // Contact Info Data (using placeholders as in your original code)
  const contactInfo = [
    {
      title: "Phone",
      value: "+62 21 2128 2128",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: "Email",
      value: "admin@vixtero.com", // Replace with your actual display email if different
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Address",
      value: "EightyEight@Kasablanka, Jakarta",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact-us" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4672bc]/10 via-[#59e9d7]/5 to-[#4672bc]/10"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container-fluid px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your trade operations with VIXTERO. Our team is ready to assist you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-[1600px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants}>
              <SpotlightCard className="h-full p-10 backdrop-blur-md bg-gradient-to-br from-white/80 via-white/75 to-white/70 border-[1.5px] border-white/50 shadow-lg">
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h3>
                  <div className="space-y-8 flex-grow">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4672bc]/20 to-[#59e9d7]/20 text-[#4672bc]">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{info.title}</h4>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Complete Address</h4>
                    <p className="text-gray-600">
                      EightyEight@Kasablanka<br />
                      9th Floor – Unit E<br />
                      Jl. Casablanca Raya Kav. 88<br />
                      Jakarta Selatan, DKI Jakarta – 12870<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <SpotlightCard className="h-full p-10 backdrop-blur-md bg-gradient-to-br from-white/80 via-white/75 to-white/70 border-[1.5px] border-white/50 shadow-lg">
                <div className="h-full flex flex-col">
                  {/* Attach handleSubmit to the form */}
                  <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4672bc] focus:border-[#4672bc] transition-colors duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      {/* Email Input */}
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email" // Ensure name="email" for Formspree field matching
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4672bc] focus:border-[#4672bc] transition-colors duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Company Input */}
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4672bc] focus:border-[#4672bc] transition-colors duration-300"
                        placeholder="Your company"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="flex-grow">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full h-full min-h-[150px] px-4 py-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4672bc] focus:border-[#4672bc] transition-colors duration-300 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    {/* Submit Button and Status Message */}
                    <div>
                      <button
                        type="submit"
                        disabled={status === 'Sending...'} // Disable button while sending
                        className="w-full bg-gradient-to-r from-[#4672bc] to-[#59e9d7] text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {/* Animated background span */}
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                        {/* Button Text and Icon */}
                        <span className="relative z-10 flex items-center justify-center">
                          {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                          {status !== 'Sending...' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </span>
                      </button>
                      {/* Display Status Message Below Button */}
                      {status && (
                         // Add some margin-top for spacing
                        <p className={`mt-4 text-center text-sm font-medium ${status.startsWith('Error') || status.startsWith('Oops') ? 'text-red-600' : 'text-green-700'}`}>
                          {status}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}