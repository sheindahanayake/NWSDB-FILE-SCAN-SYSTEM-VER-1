import React, { useState } from 'react';
import { MapPin, Mail, Globe } from 'lucide-react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatusMessage('Sending...');

    // EmailJS form submission logic here

    setIsSubmitting(false);
    setStatusMessage('Message sent!');
  };

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 bg-gray-700 rounded-lg"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-2 bg-gray-700 rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full p-2 bg-gray-700 rounded-lg"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full p-2 bg-gray-700 rounded-lg"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full p-2 bg-gray-700 rounded-lg"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 bg-blue-600 rounded-lg text-white font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {statusMessage && <p className="text-center mt-4">{statusMessage}</p>}
            </form>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <p>7JC3+2WW, Dangolla Rd, Peradeniya</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <p>contact@example.com</p>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <p>www.example.com</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086509374058!2d80.59104!3d7.27244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9b1f5e6f5e1!2s7JC3%2B2WW%2C%20Dangolla%20Rd%2C%20Peradeniya!5e0!3m2!1sen!2sau!4v1633072800000!5m2!1sen!2sau"
              width="100%"
              height="170"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
