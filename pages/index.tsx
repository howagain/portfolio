/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Lottie from "react-lottie";
import jacob_haugen from "../public/lottie/jacob_haugen.json";
import Parallax from "../components/utility/Parallax";
import SideParallax from "../components/utility/SideParallax";

import BackgroundDisplay from "../components/text/BackgroundDisplay";

import waterstoneDesktopMockup from "../public/mockups/waterstone/waterstone-desktop-mockup.png";
import waterstonePhoneMockup from "../public/mockups/waterstone/waterstone-phone-mockup.png";
import waterstoneCourseMockup from "../public/mockups/waterstone/waterstone-course-mockup.png";

import TBiPhoneMockup from "../public/mockups/transparent-beauty/iphone-mockup.png";
import TBlaptopMockup from "../public/mockups/transparent-beauty/laptop-mockup.png";
import TBtabletMockup from "../public/mockups/transparent-beauty/tablet-mockup.png";

import FFsignInMockup from "../public/mockups/facefinder/facefinder-signin-mockup.png";
import FFidentifiedMockup from "../public/mockups/facefinder/facefinder-identfied-mockup.png";

import FCCdrumProjectMockup from "../public/mockups/freecodecamp/fcc-drum-clock-mockup.png";
import FCCcalcProjectMockup from "../public/mockups/freecodecamp/fcc-calculator-mockup.png";
import FCCmarkdownProjectMockup from "../public/mockups/freecodecamp/fcc-markdown-mockup.png";
import FCCquoteProjectMockup from "../public/mockups/freecodecamp/fcc-quote-mockup.png";

import REACT_LOGO from "../public/logos/react_logo.svg";
import FIREBASE_LOGO from "../public/logos/firebase_logo.png";
import NEXTJS_LOGO from "../public/logos/next-js_logo.png";
import NODEJS_LOGO from "../public/logos/nodejs_logo.png";
import POSTGRES_LOGO from "../public/logos/postgresql_logo.png";
import SUPABASE_LOGO from "../public/logos/supabase_logo.png";
import TAILWIND_LOGO from "../public/logos/tailwindcss_logo.png";
import MUI_LOGO from "../public/logos/material-ui_logo.svg";
import TYPESCRIPT_LOGO from "../public/logos/typescript_logo.svg";

const Home: NextPage = () => {
  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: jacob_haugen,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Head>
        <title>Jacob Haugen</title>
        <meta
          name="description"
          content="Some highlights of the coolest projects I've made."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>{/*  */}</header>
      <main className="grid grid-cols-1 bg-white">
        {/* Hero */}
        <section className="mx-auto flex min-h-screen items-center space-x-4 rounded-xl p-6">
          <h1 className="prose prose-slate text-center md:text-6xl">
            <Lottie options={lottieOptions} />
            Full-Stack Web Developer
          </h1>
        </section>
        {/* Background */}
        <section className="flex flex-col items-center bg-white p-4">
          {/* I want this to be a callout box right here that fills the page,  */}
          <BackgroundDisplay>About Me</BackgroundDisplay>
          <p className="prose prose-slate">
            Full-Stack developer who has a deep passion for creating fantastic
            user experience using new technology.
          </p>
        </section>
        {/* Projects */}
        <section className="align-items-center grid min-h-screen min-w-full place-content-center bg-white md:grid-cols-2">
          <div className="prose prose-slate px-10">
            <h2 className="mb-0 text-4xl">Waterstone</h2>
            <h3>Full Stack Developer • UX Designer</h3>
            <p>
              Web App project to give users power to customize workouts using
              YouTube’s API.
            </p>
            <SideParallax>
              <div className="rounded-lg bg-slate-200 p-4 shadow-md">
                <div className="grid grid-cols-4 gap-4 px-3">
                  <Image
                    src={REACT_LOGO}
                    alt="react logo"
                    objectFit="contain"
                  />
                  <Image
                    src={MUI_LOGO}
                    alt="material ui logo"
                    objectFit="contain"
                  />
                  <Image
                    src={FIREBASE_LOGO}
                    alt="firebase logo"
                    objectFit="contain"
                  />
                  <Image
                    src={NODEJS_LOGO}
                    alt="nodejs logo"
                    objectFit="contain"
                  />
                </div>
              </div>
            </SideParallax>
          </div>
          <div className="grid grid-cols-2">
            <Parallax offset={100}>
              <Image
                src={waterstonePhoneMockup}
                alt="Waterstone Phone Mockup"
              />
            </Parallax>
            <Parallax offset={200}>
              <Image
                src={waterstoneDesktopMockup}
                alt="Waterstone Desktop Mockup"
              />
            </Parallax>
            <div className="col-span-2">
              <Parallax offset={150}>
                <div className="mx-auto max-h-[50%] max-w-[50%]">
                  <Image
                    src={waterstoneCourseMockup}
                    alt="Waterstone Course Mockup"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </section>
        <section className="align-items-center grid min-h-screen min-w-full place-content-center bg-white md:grid-cols-2">
          <div className="prose prose-slate p-10">
            <h2 className="mb-0 text-4xl">Transparent Beauty</h2>
            <h3>Full Stack Developer • UX Designer</h3>
            <p>
              Web app to help customers identify harmful ingredients in the
              skincare products they use.
            </p>
            <SideParallax>
              <div className="rounded-lg bg-slate-200 p-4 shadow-md">
                <div className="grid grid-cols-6 gap-4 px-3">
                  <Image
                    src={REACT_LOGO}
                    alt="react logo"
                    objectFit="contain"
                  />
                  <Image
                    src={TYPESCRIPT_LOGO}
                    alt="Typescript logo"
                    objectFit="contain"
                  />
                  <Image
                    src={MUI_LOGO}
                    alt="material ui logo"
                    objectFit="contain"
                  />
                  <Image
                    src={SUPABASE_LOGO}
                    alt="supabase logo"
                    objectFit="contain"
                  />
                  <Image
                    src={NODEJS_LOGO}
                    alt="nodejs logo"
                    objectFit="contain"
                  />
                  <Image
                    src={POSTGRES_LOGO}
                    alt="postgreSQL logo"
                    objectFit="contain"
                  />
                </div>
              </div>
            </SideParallax>
          </div>
          <div className="grid grid-cols-2">
            <Parallax offset={200}>
              <Image
                src={TBiPhoneMockup}
                alt="Transparent Beauty Phone Mockup"
              />
            </Parallax>
            <Parallax offset={250}>
              <Image
                src={TBtabletMockup}
                alt="Transparent Beauty Tablet Mockup"
              />
            </Parallax>
            <div className="col-span-2">
              <Parallax offset={100}>
                <div className="mx-auto max-h-[50%] max-w-[50%]">
                  <Image
                    src={TBlaptopMockup}
                    alt="Transparent Beauty Laptop Mockup"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </section>
        <section className="align-items-center grid min-h-screen min-w-full place-content-center bg-white md:grid-cols-2">
          <div className="prose prose-slate p-10">
            <h2 className="mb-0 text-4xl">FaceFinder</h2>
            <h3>Full Stack Developer</h3>
            <p>Web app to use AI to identify faces in uploaded image.</p>
            <SideParallax>
              <div className="rounded-lg bg-slate-200 p-4 shadow-md">
                <div className="grid grid-cols-3 gap-12 px-12">
                  <Image
                    src={REACT_LOGO}
                    alt="react logo"
                    objectFit="contain"
                  />
                  <Image
                    src={NODEJS_LOGO}
                    alt="nodejs logo"
                    objectFit="contain"
                  />
                  <Image
                    src={POSTGRES_LOGO}
                    alt="postgreSQL logo"
                    objectFit="contain"
                  />
                </div>
              </div>
            </SideParallax>
          </div>
          <div className="grid grid-cols-2">
            <Parallax offset={200}>
              <Image src={FFsignInMockup} alt="FaceFinder Phone Mockup" />
            </Parallax>
            <Parallax offset={150}>
              <Image src={FFidentifiedMockup} alt="FaceFinder Tablet Mockup" />
            </Parallax>
          </div>
        </section>
        <section className="align-items-center grid min-h-screen min-w-full place-content-center bg-white md:grid-cols-2">
          <div className="prose prose-slate p-10">
            <h2 className="mb-0 text-4xl">FreeCodeCamp Projects</h2>
            <h3>Front End Developer</h3>
            <p>
              Projects completed for the front-end developer certification on
              FreeCodeCamp.com
            </p>
            <SideParallax>
              <div className="rounded-lg bg-slate-200 p-4 shadow-md">
                <div className="grid">
                  <Image
                    src={REACT_LOGO}
                    alt="react logo"
                    objectFit="contain"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
            </SideParallax>
          </div>
          <div className="grid grid-cols-2">
            <Parallax offset={100}>
              <Image
                src={FCCcalcProjectMockup}
                alt="FreeCodeCamp Calculator Project Mockup"
              />
            </Parallax>
            <Parallax offset={250}>
              <Image
                src={FCCdrumProjectMockup}
                alt="FreeCodeCamp Drum Project Mockup"
              />
            </Parallax>
            <Parallax offset={50}>
              <Image
                src={FCCmarkdownProjectMockup}
                alt="FreeCodeCamp Markdown Project Mockup"
              />
            </Parallax>
            <Parallax offset={250}>
              <Image
                src={FCCquoteProjectMockup}
                alt="FreeCodeCamp Quote Project Mockup"
              />
            </Parallax>
          </div>
        </section>
        {/* Contact */}
        <section className="flex min-h-[60vh] flex-col items-center bg-white p-4">
          <BackgroundDisplay>Contact Me</BackgroundDisplay>
          <p className="prose prose-slate mt-4 text-center text-xl">
            You can reach me at:{" "}
            <a href="mailto:jacobdhaugen@gmail.com">jacob.d.haugen@gmail.com</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
