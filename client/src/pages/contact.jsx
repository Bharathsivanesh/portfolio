import React from "react";
import mail from "../assets/mail.png";
import phone from "../assets/Phone.png";
import twitter from "../assets/twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
import GitHub from "../assets/GitHub.png";
import Facebook from "../assets/Facebook F.png";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col mt-16 w-full overflow-hidden ">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="flex flex-col mt-24 text-white justify-center  gap-8 items-center"
        >
          <div className="relative flex items-center justify-center  ">
            <h1 className="absolute text-center text-5xl font-permanent  left-1/2 -translate-x-1/2 opacity-30">
              CONTACT
            </h1>

            <h2 className="z-10  text-center  relative text-3xl font-black ">
              Get In <span className="text-purple-500">Touch</span>
            </h2>
          </div>
          <div className="w-full text-center">
            <h3 className=" md:text-2xl  ">
              I'm always excited to connect with like-minded individuals,
              explore new opportunities, or
              <h3>
                {" "}
                I'm always excited to connect with like-minded individuals,
                explore{" "}
              </h3>
            </h3>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full text-white mt-8 px-8">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="flex flex-col gap-8 p-8 w-full  md:w-1/2 "
          >
            {/* left */}

            <div className="md:text-left text-center w-full flex flex-col">
              <h2 className="text-2xl font-black">
                FELL FREE TO ASK <span className="text-purple-500">US!</span>
              </h2>
              <p className="text-sm md:text-lg">
                I'm always excited to connect with likeminded{" "}
                <span className="block">individuals, explore</span>
              </p>
            </div>
            <div className="flex mt-8 md:mt-0 flex-row gap-4 ">
              <img src={mail} className="w-10 h-12" />
              <div className="flex flex-col justify-center">
                <p>MAIL ME</p>
                <p
                  onClick={() => {
                    window.location.href = "mailto:bharathsivanesh@gmail.com";
                  }}
                  role="link"
                  className="cursor-pointer"
                >
                  bharath@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <img src={phone} className="w-10 h-12" />
              <div className="flex flex-col justify-center">
                <p>CALL ME</p>
                <a href="tel:+919025368695">
                  <p>+91 9025368695</p>
                </a>
              </div>
            </div>
            <div className="flex  mt-8  md:mt-0 flex-row gap-6">
              <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                <img src={twitter} alt="" />
              </div>
              <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                <img src={LinkedIn} alt="" />
              </div>
              <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                <img src={GitHub} alt="" />
              </div>
              <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                <img src={Facebook} alt="" className="w-16 h-6" />
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex flex-col p-6 gap-8 "
          >
            {/* forms */}
            <div className="flex flex-col md:flex-row gap-8">
              <input
                type="text"
                placeholder="First Name"
                className="h-12 rounded-lg text-center bg-[#272727]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="h-12 text-center rounded-lg bg-[#272727]"
              />
              <input
                type="text"
                placeholder="Email"
                className="h-12  text-center rounded-lg bg-[#272727]"
              />
            </div>
            <div>
              <textarea
                rows="4"
                cols="50"
                className="w-full rounded-lg bg-[#272727]"
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <button className="bg-purple-500 font-sedan text-white px-5 rounded-lg py-2">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
