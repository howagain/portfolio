/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BackgroundDisplay from "../components/text/backgroundDisplay";

const Home: NextPage = () => {
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
      <main className="grid grid-cols-1 justify-center items-center bg-white">
        <BackgroundDisplay />
        {/* Hero */}
        <section className="min-h-screen p-6 mx-auto rounded-xl flex items-center space-x-4">
          <h1 className="text-6xl text-center">
            <span className="font-display font-light text-8xl leading-normal">
              Jacob Haugen
            </span>
            <br /> Full Stack Web Developer
          </h1>
        </section>
        {/* Background */}
        <section className="bg-slate-100 grid grid-cols-2">
          {/* I want this to be a callout box right here that fills the page,  */}
          <h2>About Me</h2>
          <h2>Expertise in React, Node.js, and PostgreSQL</h2>
        </section>
        {/* Projects */}
        <section className="bg-slate-300 flex flex-row min-h-screen min-w-full place-content-center align-items-center">
          <h2>Waterstone</h2>
        </section>
        <section className="bg-slate-100 flex flex-row min-h-screen min-w-full place-content-center align-items-center">
          <h2>Transparent Beauty</h2>
        </section>
        {/* Contact */}
        <section className="bg-slate-300 flex flex-row min-h-screen min-w-full place-content-center align-items-center">
          <h2>
            Interested in working with me contact at{" "}
            <a href="mailto:jacob.d.haugen@gmail.com" className="text-blue-500">
              jacob.d.haugen@gmail.com
            </a>
          </h2>
        </section>
      </main>
    </div>
  );
};

export default Home;
