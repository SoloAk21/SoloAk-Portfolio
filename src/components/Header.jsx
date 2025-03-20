import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
const Header = () => {
  const SocialLinks = () => {
    return (
      <div className="flex gap-x-2">
        <div className="flex items-center justify-center gap-x-3 rounded-full border-zinc-300 py-1 text-sm transition-all hover:border-black">
          {/* Telegram */}
          <a
            href="https://t.me/SoloAk21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon lucide lucide-send cursor-pointer text-sm text-zinc-700 hover:scale-125 hover:text-cyan-500"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
              <path d="m21.854 2.147-10.94 10.939" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/solo_ak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon lucide lucide-linkedin cursor-pointer text-sm text-zinc-700 hover:scale-125 hover:text-blue-500"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://www.github.com/SoloAk21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon lucide lucide-github cursor-pointer text-sm text-zinc-700 hover:scale-125 hover:text-black"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:soloasefa6603@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon lucide lucide-mail cursor-pointer text-sm text-zinc-700 hover:scale-125 hover:text-green-500"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>

          {/* Phone */}
          <div className="group/phone cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide-icon lucide lucide-phone text-sm text-zinc-700 hover:scale-125 group-hover/phone:hidden"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden text-sm font-semibold text-pink-600 hover:scale-125 group-hover/phone:block">
              LOL
            </span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div id="home" className="md:mb-6 lg:mb-0 mb-10 container loaded bg-white ">
      <section className="home-top   relative w-full md:min-h-[730px]  pt-[370px] md:pt-[100px] lg:pt-[140px]">
        {/* Background Image */}
        <div className="bg-image absolute inset-0 opacity-100 z-0">
          <img
            loading="lazy"
            src="/images/photo-1.webp"
            alt="Background"
            className="w-full h-full object-cover md:max-w-[800px] mx-auto"
          />
        </div>

        {/* Content Wrapper */}
        <div className="wrapper md:items-center   relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="row">
            <div className="main-copy text-center lg:text-left">
              {/* Subtitle */}
              <h5 className="text-lg font-semibold text-zinc-700">
                Solomon Asefa
              </h5>

              {/* Main Heading */}
              <h1 className="large text-3xl sm:text-4xl  font-bold text-black ">
                Full Stack Developer
              </h1>

              {/* Description with TextGenerateEffect */}
              <TextGenerateEffect
                words="Ready to elevate your web projects? Let’s create something amazing!"
                className="text-lg font-light sm:text-xl lg:text-2xl text-zinc-700 mt-2 max-w-3xl mx-auto lg:mx-0"
              />

              {/* Links */}
              <nav className="links mt-8 flex flex-row items-center justify-center lg:justify-start space-x-4 sm:space-x-6">
                <h4>
                  <a
                    href="#portfolio"
                    className="scroll-to special text-lg font-semibold text-zinc-900 hover:underline transition-colors"
                  >
                    View Projects
                  </a>
                </h4>
                <span className="text-zinc-500">or</span>
                <h4>
                  <a
                    href="about"
                    className="internal special text-lg font-semibold text-zinc-900 hover:underline transition-colors"
                  >
                    Read About Me
                  </a>
                </h4>
              </nav>

              {/*Link */}
              <div className="flex flex-col mt-4 space-y-2 mx-[6rem] md:mx-[4rem] justify-center items-center">
                <SocialLinks />

                <div className="mx-auto md:mx-[0.5rem] mt-4 max-w-32 duration-120 flex  gap-x-2 rounded-full border border-zinc-300 px-4 py-2 text-sm transition-all  hover:border-zinc-900">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide-icon lucide lucide-external-link text-zinc-700 hover:text-zinc-900"
                  >
                    <path
                      d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href="./Solomon Asefa - Resume.pdf"
                    download="Solomon_Resume.pdf"
                  >
                    <span className="text-sm text-zinc-700 hover:text-zinc-900">
                      Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
