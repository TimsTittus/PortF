import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { toast } from 'sonner';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast.success("Message sent! I'll get back to you soon.");
      setFormData(initialFormState);
    } catch (err) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-purple-500 text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions, project inquiries, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-purple-950 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-light border border-purple-950 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors duration-300"
                    placeholder="example@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-light border border-purple-950 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-light border border-purple-950 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-600 transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 ${
                  isSubmitting ? 'bg-purple-950 cursor-not-allowed' : 'bg-purple-800 hover:bg-purple-500'
                } text-dark font-medium rounded transition-colors duration-300`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="p-6 bg-dark-light border border-purple-950 rounded-lg h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:timstittus1@gmail.com" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                      timstittus1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+91 9946116910" className="text-gray-400 hover:text-purple-600 transition-colors duration-300">
                      +91 9946116910
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-400">Cherupuzha(PO), Kannur(DIST), Kerala, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-purple-600">
                    <Clock size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-gray-400">Mon - Fri: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gold/10">
                <h3 className="font-medium mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/TimsTittus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-gray-400 hover:text-purple-600 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/tims-tittus/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-gray-400 hover:text-purple-600 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/timstittus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-gray-400 hover:text-purple-600 transition-colors duration-300"
                  >  
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1200 1227.92" fill="currentColor">
                    <path d="M714.28 586.56 1166.36 0H1060.6L667.1 505.21 346.2 0H0l475.29 708.95L0 1227.92h105.76l418.15-547.42 336.33 547.42H1200L714.28 586.56ZM579.35 694.65l-48.45-75.06L155.36 82.6h145.21l269.53 417.75 48.46 75.06 393.5 610.88H866.39Z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://medium.com/@adonis369" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-dark-lighter rounded-full flex items-center justify-center text-gray-400 hover:text-purple-600 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1043.63 592.71" fill="currentColor">
                    <path d="M588.67 296.7c0 163.84-131.9 296.7-294.33 296.7S0 460.54 0 296.7 131.9 0 294.34 0s294.33 132.86 294.33 296.7zM730.07 296.7c0 155.16-65.27 280.94-145.83 280.94s-145.83-125.79-145.83-280.94S503.68 15.76 584.24 15.76 730.07 141.54 730.07 296.7zM1043.63 296.7c0 145.26-32.02 263.03-71.48 263.03s-71.48-117.77-71.48-263.03 32.02-263.03 71.48-263.03 71.48 117.77 71.48 263.03z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;