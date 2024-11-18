import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    name: string
    email: string
    subject: string
    message: string
  }

type Props = {};

function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => 
      {
        window.location.href='mailto:kkirat911@gmailcom?subject=' + formData.subject + '&body=Hi, my name is ' + formData.name + '. ' + formData.message + ' (' + formData.email + ')';
      }
  return (
    <div className="h-screen flex flex-col text-left md:flex-row max-w-full px-10 justify-center items-center mx-auto relative">
      {/* Heading */}
      <h3 className="absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me!
      </h3>

      {/* Main Content */}
      <div className="flex flex-col space-y-10 px-0 md:px-10 max-w-6xl mt-28 md:mt-36">
        {/* Subtitle */}
        <h4 className="text-3xl md:text-4xl font-semibold text-center">
          Wanna know more?{" "}
          <span className="underline decoration-[#F7AB0A]/50">Ping Me.</span>
        </h4>

        {/* Contact Details */}
        <div className="space-y-8 md:space-y-10">
          {/* Phone */}
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">+1 (709) 853-6302</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">kkirat911@gmail.com</p>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-xl">Newfoundland, Canada</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-full max-w-lg mx-auto">
          {/* Name and Email */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
            {...register('name')}
              placeholder="Name"
              type="text"
              className="contactInput flex-1"
            />
            <input
            {...register('email')}
                placeholder="Email"
                type="email"
                className="contactInput flex-1"
                required
                pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                />
                </div>

          {/* Subject */}
          <input
          {...register('subject')}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />

          {/* Message */}
          <textarea
          {...register('message')}
            placeholder="Message"
            className="contactInput resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
           
            type="submit"
            className="bg-[#F7AB0A] py-4 px-8 rounded-md text-black font-bold text-lg hover:bg-[#f7a70a]/90 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
