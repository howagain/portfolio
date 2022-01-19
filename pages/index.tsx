import type { NextPage } from 'next'
import Head from 'next/head'
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

      <main className="flex flex-row min-h-screen justify-center items-center">
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
          <h1 className="text-6xl font-bold underline">Hello world!</h1>
        </div>
      </main>
    </div>
  );
};

export default Home
