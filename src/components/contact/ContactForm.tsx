import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css'; 

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user types
    if (name in errors) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Using fetch with await
        const response = await fetch('https://formspree.io/f/mldbdgzo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        } else {
          setErrors({ form: 'Failed to send message. Please try again.' });
        }
      } catch (error) {
        setErrors({ form: 'Network error. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-container">
      
      {isSubmitted ? (
        <div className="success-message">
          Thank you for your message! I'll get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${errors.name ? 'error' : ''}`}
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          
          <div className="form-group">
            <input
              type="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          <div className="form-group">
            <textarea
              className={`form-control ${errors.message ? 'error' : ''}`}
              name="message"
              placeholder="Send me a message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>
          
          {errors.form && <div className="form-error error-message">{errors.form}</div>}
          
          <button 
            type="submit" 
            className="btn-send"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;