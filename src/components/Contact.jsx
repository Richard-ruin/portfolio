import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setForm({ name: '', email: '', message: '' });
      alert('Thank you. I will get back to you as soon as possible.');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-accent uppercase tracking-wider text-sm">Get in touch</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col-reverse gap-10 lg:flex-row">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-tertiary rounded-2xl p-8"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-black-200 py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-black-200 py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-black-200 py-4 px-6 text-white rounded-lg outline-none border-none font-medium resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-accent py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl hover:opacity-80 transition-opacity"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:flex-1"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-[24px]">Connect With Me</h3>
            <p className="text-secondary">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
            <div className="flex gap-4 mt-4">
              {[
                { name: 'GitHub', url: 'your-github' },
                { name: 'LinkedIn', url: 'your-linkedin' },
                { name: 'Instagram', url: 'your-instagram' },
                { name: 'Facebook', url: 'your-facebook' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={`https://${social.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition"
                >
                  <img 
                    src={`/icons/${social.name.toLowerCase()}.svg`}
                    alt={social.name}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;