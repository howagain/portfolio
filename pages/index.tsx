/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BackgroundDisplay from "../components/text/backgroundDisplay";
import Lottie from "react-lottie";
import jacob_haugen from "../public/lottie/jacob_haugen.json";
import Parallax from "../components/utility/parallax";

import waterstoneDesktopMockup from "../public/mockups/waterstone/waterstone-desktop-mockup.png";
import waterstonePhoneMockup from "../public/mockups/waterstone/waterstone-phone-mockup.png";
import waterstoneCourseMockup from "../public/mockups/waterstone/waterstone-course-mockup.png";

import TBiPhoneMockup from "../public/mockups/transparent-beauty/iphone-mockup.png";
import TBlaptopMockup from "../public/mockups/transparent-beauty/laptop-mockup.png";
import TBtabletMockup from "../public/mockups/transparent-beauty/tablet-mockup.png";

import FFsignInMockup from "../public/mockups/facefinder/facefinder-signin-mockup.png";
import FFidentifiedMockup from "../public/mockups/facefinder/facefinder-identfied-mockup.png";

//Import Free Code Camp Mockups
import FCCdrumProjectMockup from "../public/mockups/freecodecamp/fcc-drum-clock-mockup.png";
import FCCcalcProjectMockup from "../public/mockups/freecodecamp/fcc-calculator-mockup.png";
import FCCmarkdownProjectMockup from "../public/mockups/freecodecamp/fcc-markdown-mockup.png";
import FCCquoteProjectMockup from "../public/mockups/freecodecamp/fcc-quote-mockup.png";

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
          content="The highlights of the coolest projects I've made."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>{/*  */}</header>
      <main className="grid grid-cols-1 bg-white">
        {/* Hero */}
        <section className="min-h-screen p-6 mx-auto rounded-xl flex items-center space-x-4">
          <h1 className="md:text-6xl text-center prose prose-slate">
            <Lottie options={lottieOptions} />
            Full-Stack Web Developer
          </h1>
        </section>
        {/* Background */}
        <section className="bg-white flex flex-col items-center p-4">
          {/* I want this to be a callout box right here that fills the page,  */}
          <BackgroundDisplay>About Me</BackgroundDisplay>
          <p className="prose prose-slate">
            Full-Stack developer who has a deep passion for creating fantastic
            user experience using new technology.
          </p>
        </section>
        {/* Projects */}
        <section className="bg-white grid md:grid-cols-2 min-h-screen min-w-full place-content-center align-items-center">
          <div className="pl-10 prose prose-slate">
            <h2 className="text-4xl mb-0">Waterstone</h2>
            <h3>Full Stack Developer • UX Designer</h3>
            <p>
              Web App project to give users power to customize workouts using
              YouTube’s API.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <Parallax offset={200}>
              <Image
                src={waterstonePhoneMockup}
                alt="Waterstone Phone Mockup"
              />
            </Parallax>
            <Parallax offset={400}>
              <Image
                src={waterstoneDesktopMockup}
                alt="Waterstone Desktop Mockup"
              />
            </Parallax>
            <div className="col-span-2">
              <Parallax offset={300}>
                <div className="max-w-[50%] max-h-[50%] mx-auto">
                  <Image
                    src={waterstoneCourseMockup}
                    alt="Waterstone Course Mockup"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </section>
        <section className="bg-white grid md:grid-cols-2 min-h-screen min-w-full place-content-center align-items-center">
          <div className="p-10 prose prose-slate">
            <h2 className="text-4xl mb-0">Transparent Beauty</h2>
            <h3>Full Stack Developer • UX Designer</h3>
            <p>
              Beauty app to help customers of e-commerce store identify harmful
              ingredients in the products they use.
            </p>
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
              <Parallax offset={300}>
                <div className="max-w-[50%] max-h-[50%] mx-auto">
                  <Image
                    src={TBlaptopMockup}
                    alt="Transparent Beauty Laptop Mockup"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </section>
        <section className="bg-white grid md:grid-cols-2 min-h-screen min-w-full place-content-center align-items-center">
          <div className="p-10 prose prose-slate">
            <h2 className="text-4xl mb-0">FaceFinder</h2>
            <h3>Full Stack Developer</h3>
            <p>
              Face annotation web app using CloudinaryAPI and Node.js backend to
              manage accounts and identify faces in uploaded image.
            </p>
          </div>
          <div className="grid grid-cols-2">
            <Parallax offset={200}>
              <Image
                src={FFsignInMockup}
                alt="Transparent Beauty Phone Mockup"
              />
            </Parallax>
            <Parallax offset={450}>
              <Image
                src={FFidentifiedMockup}
                alt="Transparent Beauty Tablet Mockup"
              />
            </Parallax>
          </div>
        </section>
        <section className="bg-white grid md:grid-cols-2 min-h-screen min-w-full place-content-center align-items-center">
          <div className="p-10 prose prose-slate">
            <h2 className="text-4xl mb-0">FreeCodeCamp Projects</h2>
            <h3>Front End Developer</h3>
            <p>
              Projects completed for the front end developer certification on
              FreeCodeCamp.com
            </p>
          </div>
          <div className="grid grid-cols-2">
            <Parallax offset={400}>
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
            <Parallax offset={150}>
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
      </main>
    </div>
  );
};

export default Home;
