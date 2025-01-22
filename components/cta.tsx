"use client";

import React, { useState, useCallback } from 'react';
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { InlineWidget } from 'react-calendly';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBTextArea
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Cta() {
  const [showForm, setShowForm] = useState(false);
  const [showCalender, setShowCalender] = useState(false);

  const handleClick = useCallback(() => {
    setShowForm(!showForm);
    setShowCalender(false);
  }, [showForm]);

  const handleCalenderClick = useCallback(() => {
    setShowCalender(!showCalender);
    setShowForm(false);
  }, [showCalender]);

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#CC00FF,theme(colors.blue.400),theme(colors.blue.600),theme(colors.purple.300),theme(colors.purple.600))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              In a digital world, your website is your IDENTITY
            </h2>
            <div id="ContactUs"   className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up">
                <MDBBtn
                  className="relative inline-flex items-center"
                  style={{ margin: '8px' }}
                  onClick={handleClick}
                >
                  Contact Us
                </MDBBtn>
              </div >

              <div data-aos="fade-up" data-aos-delay={600}>
                <MDBBtn
                  className="mb-4"
                  style={{ margin: '8px' }}
                  
                  onClick={handleCalenderClick}
                >
                  Schedule Demo
                </MDBBtn>
              </div>
            </div>
          </div>

          {showForm && (
            <>
              <div data-aos="fade-in-down">
                <form
                  action="https://formsubmit.co/info@particlesai.com"
                  method="POST"
                  className="mt-8 max-w-md mx-auto"
                >
                 <input
                    type="hidden"
                    name="_next"
                    value="https://particlesai.com/thanks.html"
                 />
                    <MDBContainer className="p-3 my-5 d-flex flex-column "
                  
                    >
                     
            <h5
              className=" bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-1xl font-semibold  md:text-2xl text-center"
              data-aos="fade-up"
            >
              Leave a message, we'll be in touch.
            </h5>
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        style={{ color: 'white' }}
                        label="Full Name"
                        id="form1"
                        type="text"
                        name="name"
                        required
                        
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        style={{ color: 'white' }}
                        label="Email address"
                        id="form2"
                        type="email"
                        name="email"
                        required
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        style={{ color: 'white' }}
                        label="Business Name"
                        id="form3"
                        type="text"
                        name="business_name"
                      />
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        style={{ color: 'white' }}
                        label="Contact Number"
                        id="form4"
                        type="tel"
                        name="contact_number"
                      />
                      <MDBTextArea
                        label="Message"
                        labelClass="text-white"
                        style={{ padding: '40px', color: 'white' }}
                        id="textAreaExample"
                        rows={3}
                        name="message"
                        required
                      />
                      <div className="text-center ">
                        <MDBBtn type="submit" className="mb-4" style={{ margin: '42px', width: "46%", backgroundColor: 'rgb(147 51 234 / var(--tw-text-opacity, 1))', }}>
                          Submit
                        </MDBBtn>
                      </div>
                    </MDBContainer>
                </form>
              </div>
            </>
          )}

          {showCalender && (
            <div data-aos="fade-in-down">
              <div className="inline-widget">
                <InlineWidget
                  styles={{ height: '705px' }}
                  url="https://calendly.com/particlesai-info"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
