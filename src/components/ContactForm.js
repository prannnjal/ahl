"use client";

import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h3 className="text-white text-2xl font-bold mb-6">GET IN TOUCH</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input 
          type="tel" 
          name="phone"
          placeholder="Phone" 
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea 
          name="message"
          placeholder="Message" 
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        ></textarea>
        <button 
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 font-semibold rounded hover:bg-yellow-300 transition-colors"
        >
          SEND MESSAGE
        </button>
      </form>
      
      <div className="mt-8 text-white space-y-2">
        <p><strong>Email:</strong> info@aktivo.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> 123 Innovation St, Tech City, TC 12345</p>
      </div>
    </div>
  );
};
