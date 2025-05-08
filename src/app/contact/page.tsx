"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";
import { 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  User,
  MessageSquare,
  Send
} from "lucide-react";

function ContactSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  // Ensure text visibility with explicit colors based on theme
  const accentTextColor = resolvedTheme === "dark" ? "text-blue-400" : "text-amber-500";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Determine if we should show space elements (only in dark mode)
  const showSpaceElements = resolvedTheme === "dark";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
        from_name: "Portfolio Contact Form"
      };

      // Send the request to Web3Forms API
      const response = await fetch(process.env.NEXT_PUBLIC_WEB3FORMS_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Success message
        setFormStatus({
          submitted: true,
          error: false,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        
        // Reset form after submission
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // API returned an error
        setFormStatus({
          submitted: true,
          error: true,
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      // Network or other error
      setFormStatus({
        submitted: true,
        error: true,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-background py-16 px-4">
      {showSpaceElements && (
        <Particles
          className="absolute inset-0 z-0 bg-particle"
          quantity={100}
          ease={120}
          refresh={false}
        />
      )}
      
      {/* Content section */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`font-rubik_dirt text-4xl md:text-5xl mb-4 text-foreground`}>Contact Me</h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Have a project in mind or just want to chat about tech? Drop me a message!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact info cards */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">              
              {/* Location card */}
              <div 
                className={`p-6 rounded-xl backdrop-blur-sm ${
                  resolvedTheme === "dark" ? "bg-gray-800/50" : "bg-gray-100/80"
                } transform transition-transform hover:scale-105`}
                style={{
                  boxShadow: resolvedTheme === "dark" 
                    ? "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 8px rgba(124, 58, 237, 0.3)" 
                    : "0 8px 32px rgba(0, 0, 0, 0.05), 0 0 8px rgba(217, 119, 6, 0.2)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ 
                      background: resolvedTheme === "dark" 
                        ? "linear-gradient(135deg, #8B5CF6, #6366F1)" 
                        : "linear-gradient(135deg, #D97706, #F59E0B)"
                    }}
                  >
                    <MapPin size={20} className="text-white" />
                  </div>
                  <h3 className={`text-lg font-medium text-foreground`}>Location</h3>
                </div>
                <p className={resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"}>
                  West Bengal, India
                </p>
              </div>
              
              {/* Social links card */}
              <div 
                className={`p-6 rounded-xl backdrop-blur-sm ${
                  resolvedTheme === "dark" ? "bg-gray-800/50" : "bg-gray-100/80"
                } transform transition-transform hover:scale-105`}
                style={{
                  boxShadow: resolvedTheme === "dark" 
                    ? "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 8px rgba(236, 72, 153, 0.3)" 
                    : "0 8px 32px rgba(0, 0, 0, 0.05), 0 0 8px rgba(180, 83, 9, 0.2)",
                }}
              >
                <div className="flex items-center mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ 
                      background: resolvedTheme === "dark" 
                        ? "linear-gradient(135deg, #EC4899, #D946EF)" 
                        : "linear-gradient(135deg, #B45309, #D97706)"
                    }}
                  >
                    <Globe size={20} className="text-white" />
                  </div>
                  <h3 className={`text-lg font-medium text-foreground`}>Connect</h3>
                </div>
                <div className="flex space-x-6 mt-2">
                  <a href="https://github.com/soham247" target="blank" className={`${accentTextColor} hover:scale-110 transition-transform`}>
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/sohamsadhukhan2004" target="blank" className={`${accentTextColor} hover:scale-110 transition-transform`}>
                    <Linkedin size={24} />
                  </a>
                  <a href="https://twitter.com/GeekSoham" target="blank" className={`${accentTextColor} hover:scale-110 transition-transform`}>
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div 
              className={`p-8 rounded-xl backdrop-blur-sm ${
                resolvedTheme === "dark" ? "bg-gray-800/50" : "bg-white/90"
              }`}
              style={{
                boxShadow: resolvedTheme === "dark" 
                  ? "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 16px rgba(59, 130, 246, 0.2)" 
                  : "0 8px 32px rgba(0, 0, 0, 0.05), 0 0 16px rgba(245, 158, 11, 0.1)",
              }}
            >
              <h3 className={`text-xl font-medium mb-6 text-foreground flex items-center`}>
                <MessageSquare className="mr-2" size={20} />
                Send Me a Message
              </h3>
              
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 mb-6 rounded-lg ${
                    formStatus.error ? "bg-red-500/20 text-red-500" : "bg-green-500/20 text-green-500"
                  }`}
                >
                  {formStatus.message}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="name" 
                      className={`block mb-2 text-sm font-medium ${
                        resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                      } flex items-center`}
                    >
                      <User size={16} className="mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-lg focus:ring-2 transition-all ${
                        resolvedTheme === "dark" 
                          ? "bg-gray-700/50 border-gray-600 text-white focus:ring-blue-500" 
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-amber-500"
                      } border focus:border-transparent`}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className={`block mb-2 text-sm font-medium ${
                        resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                      } flex items-center`}
                    >
                      <Mail size={16} className="mr-2" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className={`w-full p-3 rounded-lg focus:ring-2 transition-all ${
                        resolvedTheme === "dark" 
                          ? "bg-gray-700/50 border-gray-600 text-white focus:ring-blue-500" 
                          : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-amber-500"
                      } border focus:border-transparent`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className={`block mb-2 text-sm font-medium ${
                      resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    } flex items-center`}
                  >
                    <MessageSquare size={16} className="mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg focus:ring-2 transition-all ${
                      resolvedTheme === "dark" 
                        ? "bg-gray-700/50 border-gray-600 text-white focus:ring-blue-500" 
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-amber-500"
                    } border focus:border-transparent`}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 text-sm font-medium ${
                      resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
                    } flex items-center`}
                  >
                    <MessageSquare size={16} className="mr-2" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full p-3 rounded-lg focus:ring-2 transition-all ${
                      resolvedTheme === "dark" 
                        ? "bg-gray-700/50 border-gray-600 text-white focus:ring-blue-500" 
                        : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-amber-500"
                    } border focus:border-transparent`}
                    placeholder="Hey Soham, I have a project idea..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium ${
                    resolvedTheme === "dark" ? "hover:from-blue-400 hover:to-purple-400" : "hover:from-blue-600 hover:to-purple-600"
                  } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={20} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection;