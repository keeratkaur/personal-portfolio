import React, { useRef } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

type Props = {};

function ContactMe({}: Props) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          if (form.current) form.current.reset();
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
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

      <div className="flex flex-col space-y-6 px-4 w-full max-w-xl mt-24">
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
            />
            <input
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
              name="user_email"
              required
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
            name="subject"
            required
          />

          <textarea
            placeholder="Message"
            className="contactInput h-32"
            name="message"
            required
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-sm hover:bg-[#F7AB0A]/80 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
