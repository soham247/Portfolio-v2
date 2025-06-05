"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
import Section from "@/components/Section";
import { useThemeStyles } from "@/hooks/useThemeStyles";

// Contact card component to avoid repetition
interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  gradient: string;
  shadow: string;
}

function ContactCard({ icon, title, children, gradient, shadow }: ContactCardProps) {
  const { cardBg } = useThemeStyles();
  
  return (
    <div 
      className={`p-6 rounded-xl backdrop-blur-sm ${cardBg} transform transition-transform hover:scale-105`}
      style={{ boxShadow: shadow }}
    >
      <div className="flex items-center mb-3">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
          style={{ background: gradient }}
        >
          {icon}
        </div>
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}

// Form field component
interface FormFieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: 'input' | 'textarea';
  rows?: number;
}

function FormField({ 
  id, 
  label, 
  icon, 
  value, 
  onChange, 
  type = "text", 
  placeholder, 
  required = false,
  as = 'input',
  rows = 4
}: FormFieldProps) {
  const { textSecondary, inputBg, inputBorder, inputText, inputFocus } = useThemeStyles();
  
  const inputClasses = `w-full p-3 rounded-lg focus:ring-2 transition-all ${inputBg} border ${inputBorder} ${inputText} ${inputFocus} border focus:border-transparent`;
  
  return (
    <div>
      <label 
        htmlFor={id} 
        className={`block mb-2 text-sm font-medium ${textSecondary} flex items-center`}
      >
        {icon}
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

function ContactSection() {
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

  const { 
    textSecondary, 
    accentColor, 
    cardBg, 
    cardShadow, 
    gradientPurple, 
    gradientPink, 
    buttonPrimary 
  } = useThemeStyles();

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
        setFormStatus({
          submitted: true,
          error: false,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          submitted: true,
          error: true,
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
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
    <Section 
      title="Contact Me" 
      subtitle="Have a project in mind or just want to chat about tech? Drop me a message!"
      containerClassName="max-w-4xl"
      particleQuantity={100}
    >
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
            <ContactCard
              icon={<MapPin size={20} className="text-white" />}
              title="Location"
              gradient={gradientPurple}
              shadow={cardShadow}
            >
              <p className={textSecondary}>West Bengal, India</p>
            </ContactCard>
            
            {/* Social links card */}
            <ContactCard
              icon={<Globe size={20} className="text-white" />}
              title="Connect"
              gradient={gradientPink}
              shadow={cardShadow}
            >
              <div className="flex space-x-6 mt-2">
                <a href="https://github.com/soham247" target="blank" className={`${accentColor} hover:scale-110 transition-transform`}>
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/sohamsadhukhan2004" target="blank" className={`${accentColor} hover:scale-110 transition-transform`}>
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com/GeekSoham" target="blank" className={`${accentColor} hover:scale-110 transition-transform`}>
                  <Twitter size={24} />
                </a>
              </div>
            </ContactCard>
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
            className={`p-8 rounded-xl backdrop-blur-sm ${cardBg}`}
            style={{ boxShadow: cardShadow }}
          >
            <h3 className="text-xl font-medium mb-6 text-foreground flex items-center">
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
                <FormField
                  id="name"
                  label="Your Name"
                  icon={<User size={16} className="mr-2" />}
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
                <FormField
                  id="email"
                  label="Your Email"
                  icon={<Mail size={16} className="mr-2" />}
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <FormField
                id="subject"
                label="Subject"
                icon={<MessageSquare size={16} className="mr-2" />}
                value={formState.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
              
              <FormField
                id="message"
                label="Your Message"
                icon={<MessageSquare size={16} className="mr-2" />}
                as="textarea"
                value={formState.message}
                onChange={handleChange}
                placeholder="Hey Soham, I have a project idea..."
                required
              />
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full p-3 rounded-lg ${buttonPrimary} text-white font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                } flex items-center justify-center`}
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
    </Section>
  );
}

export default ContactSection;