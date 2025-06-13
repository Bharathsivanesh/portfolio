import React, { useRef, useState } from "react";
import mailu from "../assets/mail.png";
import phone from "../assets/Phone.png";
import twitter from "../assets/twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
import GitHub from "../assets/GitHub.png";
import Facebook from "../assets/Facebook F.png";
import emailjs from "emailjs-com";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Contact = () => {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");
  const form = useRef();
  const handle = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm("service_9p67n3j", "template_16l1uuk", form.current, {
    //     publicKey: "wwVZVFgfBCrIl_7pL",
    //   })
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
    setmail("");
    setname("");
    setmessage("");
  };

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
              <img src={mailu} className="w-10 h-12" />
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
              <a href="https://www.facebook.com/share/162eLiqrCt/">
                <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                  <img src={twitter} alt="" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/bharathsivanesh"
                target="_blank"
              >
                <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                  <img src={LinkedIn} alt="" />
                </div>
              </a>
              <a href="https://github.com/Bharathsivanesh">
                <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                  <img src={GitHub} alt="" />
                </div>
              </a>
              <a href="https://www.facebook.com/share/162eLiqrCt/">
                <div className="bg-purple-500 rounded-full w-10 h-10 p-2 cursor-pointer">
                  <img src={Facebook} alt="" className="w-16 h-6" />
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handle} ref={form} className="w-full md:w-1/2">
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="flex flex-col p-6 gap-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <input
                  name="name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  type="text"
                  placeholder="First Name"
                  required
                  className="h-12 rounded-lg text-center bg-[#272727] w-full"
                />
                <input
                  name="email"
                  value={mail}
                  onChange={(e) => setmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  required
                  className="h-12 text-center rounded-lg bg-[#272727] w-full"
                />
              </div>

              <textarea
                name="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder="Let's Talk Something"
                required
                rows="4"
                className="w-full rounded-lg text-center bg-[#272727]"
              />

              {/* Submit Button + Lottie (same space) */}
              <div className="h-12 flex justify-center md:justify-start items-center">
                {!loading ? (
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-purple-500 font-sedan text-white px-5 rounded-lg py-2 cursor-pointer"
                  />
                ) : (
                  <div className="w-60 h-60 flex items-center">
                    <DotLottieReact
                      src="https://lottie.host/06a53ab4-8a77-45b0-ae20-8c9b60b5e200/Cz8Xjf0Gyf.lottie"
                      loop
                      autoplay
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
