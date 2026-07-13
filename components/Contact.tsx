import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiLoader 
} from 'react-icons/fi';
import { SOCIAL_LINKS } from '../constants';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Ref to track the last submitted payload to prevent duplicates
  const lastSubmittedRef = useRef<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field on change
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be under 100 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone && formData.phone.length > 20) {
      newErrors.phone = 'Phone number must be under 20 characters.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    } else if (formData.subject.length > 200) {
      newErrors.subject = 'Subject must be under 200 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message must be under 5000 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check duplicate submission
    const currentPayload = JSON.stringify(formData);
    if (currentPayload === lastSubmittedRef.current) {
      showToast('error', 'You have already submitted this exact message.');
      return;
    }

    setStatus('loading');

    try {
      const now = new Date().toLocaleString('en-US', { timeZoneName: 'short' });
      const mailSubject = `New Portfolio Contact Form Submission`;
      const mailBody = `Name:\n${formData.name}\n\nEmail:\n${formData.email}\n\nPhone:\n${formData.phone || 'N/A'}\n\nSubject:\n${formData.subject}\n\nMessage:\n${formData.message}\n\nSubmission Time:\n${now}`;

      // Save message to localStorage so it is stored in the Admin Panel
      try {
        const storedMessages = JSON.parse(localStorage.getItem('contact_messages') || '[]');
        const newMessage = {
          id: Date.now(),
          from_name: formData.name,
          from_email: formData.email,
          message: `Subject: ${formData.subject}\nPhone: ${formData.phone || 'N/A'}\n\n${formData.message}`,
          timestamp: new Date().toISOString()
        };
        storedMessages.push(newMessage);
        localStorage.setItem('contact_messages', JSON.stringify(storedMessages));
      } catch (err) {
        console.error('Failed to save message to localStorage:', err);
      }

      const mailtoUrl = `mailto:arjunlaptop7507@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      // Redirect user to open their default email application pre-filled with the contact details
      window.location.href = mailtoUrl;

      // Track last submission to prevent duplicates
      lastSubmittedRef.current = currentPayload;

      setStatus('success');
      showToast('success', 'Thank you! Your default mail client has been opened to send the message.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Failed to open mail client:', error);
      setStatus('error');
      showToast('error', 'Something went wrong. Please try again later.');
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-accent" size={24} />,
      label: 'Email',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: <FiPhone className="text-accent" size={24} />,
      label: 'Phone',
      value: SOCIAL_LINKS.phone,
      href: `tel:${SOCIAL_LINKS.phone}`,
    },
    {
      icon: <FiMapPin className="text-accent" size={24} />,
      label: 'Location',
      value: 'Maharashtra, India',
      href: 'https://www.google.com/maps/search/Maharashtra,+India',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Toast Notification Container */}
      <div className="fixed top-5 right-5 z-50 space-y-4 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              className={`p-4 rounded-lg shadow-xl border flex items-start gap-3 backdrop-blur-md pointer-events-auto ${
                toast.type === 'success' 
                  ? 'bg-green-50/95 dark:bg-green-950/90 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' 
                  : 'bg-red-50/95 dark:bg-red-950/90 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {toast.type === 'success' ? (
                  <FiCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                ) : (
                  <FiAlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-tight">{toast.message}</p>
              </div>
              <button 
                onClick={() => setToast(null)}
                className="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                &times;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="font-mono text-accent mb-2">What's Next?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-lightest-slate mb-4">Get In Touch</h3>
          <p className="text-gray-700 dark:text-slate max-w-2xl mx-auto">
            I'm open to internship and full-time opportunities. Feel free to reach out if you'd like to collaborate or discuss opportunities!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto px-4">
          {/* Contact Details Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-light-navy rounded-lg border border-transparent hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-xs font-mono text-accent uppercase tracking-wider">{info.label}</p>
                    <p className="text-gray-900 dark:text-lightest-slate font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-lightest-navy">
              <h4 className="text-gray-900 dark:text-lightest-slate font-bold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-light-navy text-gray-700 dark:text-slate hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-300">
                  <FiLinkedin size={20} />
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-light-navy text-gray-700 dark:text-slate hover:text-accent hover:bg-accent/10 rounded-full transition-all duration-300">
                  <FiGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            <form onSubmit={sendEmail} className="space-y-5 bg-gray-50 dark:bg-light-navy p-8 rounded-xl border border-gray-200 dark:border-lightest-navy shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-sm font-mono text-gray-600 dark:text-slate ml-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    className={`w-full bg-white dark:bg-navy p-3 rounded-md border ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-lightest-navy focus:border-accent'
                    } focus:outline-none text-gray-900 dark:text-lightest-slate transition-colors`} 
                  />
                  {errors.name && <p className="text-xs text-red-500 ml-1 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-sm font-mono text-gray-600 dark:text-slate ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com" 
                    className={`w-full bg-white dark:bg-navy p-3 rounded-md border ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-lightest-navy focus:border-accent'
                    } focus:outline-none text-gray-900 dark:text-lightest-slate transition-colors`} 
                  />
                  {errors.email && <p className="text-xs text-red-500 ml-1 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-sm font-mono text-gray-600 dark:text-slate ml-1">
                    Phone Number <span className="text-gray-400 dark:text-slate/60 text-xs">(Optional)</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210" 
                    className={`w-full bg-white dark:bg-navy p-3 rounded-md border ${
                      errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-lightest-navy focus:border-accent'
                    } focus:outline-none text-gray-900 dark:text-lightest-slate transition-colors`} 
                  />
                  {errors.phone && <p className="text-xs text-red-500 ml-1 mt-1">{errors.phone}</p>}
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-sm font-mono text-gray-600 dark:text-slate ml-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Collaboration Opportunity" 
                    className={`w-full bg-white dark:bg-navy p-3 rounded-md border ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-lightest-navy focus:border-accent'
                    } focus:outline-none text-gray-900 dark:text-lightest-slate transition-colors`} 
                  />
                  {errors.subject && <p className="text-xs text-red-500 ml-1 mt-1">{errors.subject}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-sm font-mono text-gray-600 dark:text-slate">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <span className={`text-xs font-mono ${formData.message.length > 5000 ? 'text-red-500' : 'text-gray-400 dark:text-slate/60'}`}>
                    {formData.message.length} / 5000
                  </span>
                </div>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can I help you?" 
                  rows={5} 
                  className={`w-full bg-white dark:bg-navy p-3 rounded-md border ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 dark:border-lightest-navy focus:border-accent'
                  } focus:outline-none text-gray-900 dark:text-lightest-slate transition-colors`}
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 ml-1 mt-1">{errors.message}</p>}
              </div>
              
              <div className="pt-2">
                 <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="w-full bg-accent text-white py-4 rounded-md hover:bg-accent/90 transition-all duration-300 font-bold tracking-wide shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <FiLoader className="animate-spin w-5 h-5" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
