import React, { useRef, useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type Props = object;

function ContactMe({}: Props) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not properly configured. Please contact the administrator.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      }
    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.text || 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[12px] text-gray-500 text-lg">
        Contact Me!
      </h3>

      <div className="flex flex-col space-y-6 px-4 w-full max-w-md">
        <h4 className="text-2xl font-semibold text-center">
          Wanna know more?{" "}
          <span className="underline decoration-[#F7AB0A]/50">Ping Me.</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-sm">+1(709)853-6302</p>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-sm">kkirat911@gmail.com</p>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-sm">St. John's, NL, Canada</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-full"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
              name="user_name"
              required
              disabled={isSubmitting}
            />
            <input
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
              name="user_email"
              required
              disabled={isSubmitting}
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            required
            disabled={isSubmitting}
          />

          <textarea
            placeholder="Message"
            className="contactInput h-32"
            name="message"
            required
            disabled={isSubmitting}
          />

          {submitStatus.type && (
            <div
              className={`p-3 rounded-md text-sm ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 text-green-500'
                  : 'bg-red-500/10 text-red-500'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-sm 
              hover:bg-[#F7AB0A]/80 transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed
              relative ${isSubmitting ? 'cursor-wait' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
