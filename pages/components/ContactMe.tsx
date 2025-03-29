import React, { useRef } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {}

function ContactMe({}: Props) {
    const formRef = useRef<HTMLFormElement>(null);
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href='mailto:kkirat911@gmailcom?subject=' + formData.subject + '&body=Hi, my name is ' + formData.name + '. ' + formData.message + ' (' + formData.email + ')';
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            formRef.current?.requestSubmit();
        }
    };

    return (
        <div className="h-screen flex flex-col text-left md:flex-row max-w-full px-10 justify-center items-center mx-auto relative">
            <h3 className="absolute top-16 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact Me!
            </h3>

            <div className="flex flex-col space-y-10 px-0 md:px-10 max-w-6xl mt-28 md:mt-36">
                <h4 className="text-3xl md:text-4xl font-semibold text-center text-theme">
                    Wanna know more?{" "}
                    <span className="underline decoration-[#F7AB0A]/50">Ping Me.</span>
                </h4>

                <div className="space-y-8 md:space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" aria-hidden="true" />
                        <p className="text-lg md:text-xl text-theme">+1 (709) 853-6302</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" aria-hidden="true" />
                        <p className="text-lg md:text-xl text-theme">kkirat911@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" aria-hidden="true" />
                        <p className="text-lg md:text-xl text-theme">Newfoundland, Canada</p>
                    </div>
                </div>

                <form 
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="flex flex-col space-y-4"
                    onKeyPress={handleKeyPress}
                >
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input
                            {...register('name')}
                            placeholder="Name"
                            type="text"
                            className="contactInput flex-1 focus:ring-2 focus:ring-[#F7AB0A] focus:outline-none"
                            aria-label="Your name"
                            tabIndex={0}
                        />
                        <input
                            {...register('email')}
                            placeholder="Email"
                            type="email"
                            className="contactInput flex-1 focus:ring-2 focus:ring-[#F7AB0A] focus:outline-none"
                            required
                            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                            aria-label="Your email address"
                            tabIndex={0}
                        />
                    </div>

                    <input
                        {...register('subject')}
                        placeholder="Subject"
                        type="text"
                        className="contactInput focus:ring-2 focus:ring-[#F7AB0A] focus:outline-none"
                        aria-label="Email subject"
                        tabIndex={0}
                    />

                    <textarea
                        {...register('message')}
                        placeholder="Message"
                        className="contactInput resize-none focus:ring-2 focus:ring-[#F7AB0A] focus:outline-none"
                        aria-label="Your message"
                        tabIndex={0}
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#F7AB0A] py-4 px-8 rounded-md text-black font-bold text-lg hover:bg-[#f7a70a]/90 transition-all focus:ring-2 focus:ring-[#F7AB0A] focus:outline-none"
                        aria-label="Submit contact form"
                        tabIndex={0}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
