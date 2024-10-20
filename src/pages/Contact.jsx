import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email using the sendForm method
    emailjs.sendForm('my_portfolio', 'template_j86ih8r', formRef.current, 'dr0krsJpFgqSv5EZY')
      .then(() => {
        setSuccess('Message sent successfully!');
        setError('');
        formRef.current.reset(); // Reset the form after successful submission
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError('Failed to send message. Please try again.');
        setSuccess('');
      });
  };

  return (
    <section className="p-8 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <form ref={formRef} onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <label className="block mb-4">
          <span className="text-black">Your Name</span>
          <input
            type="text"
            name="user_name"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="John Doe"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-black">Email Address</span>
          <input
            type="email"
            name="user_email"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="john@example.com"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-black">Message</span>
          <textarea
            name="message"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm"
            rows="4"
            placeholder="Your message here..."
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded-md shadow-md hover:bg-red-600"
        >
          Send Message
        </button>
      </form>
      {success && <p className="text-green-600 text-center mt-4">{success}</p>}
      {error && <p className="text-red-600 text-center mt-4">{error}</p>}
    </section>
  );
};

export default Contact;
