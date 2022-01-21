import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jacob Haugen</title>
        <meta
          name="description"
          content="The highlights of the coolest projects I've worked on"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>{/*  */}</header>
      <main className="flex flex-col min-h-screen justify-center items-center bg-slate-400">
        {/* Hero */}
        <section className="p-6 mx-auto bg-slate-100 rounded-xl shadow-lg flex items-center space-x-4">
          <h1 className="text-6xl font-bold">
            Hello, I'm <span className="text-purple-500">Jacob Haugen</span>.
            <br /> I'm a full-stack developer.
          </h1>
        </section>
        {/* Background */}
        <section className="bg-slate-100 grid grid-cols-2">
          {/* I want this to be a callout box right here that fills the page,  */}
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
