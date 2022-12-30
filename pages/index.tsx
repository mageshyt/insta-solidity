import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./HomePage";
import Header from "../components/Header/Header";
import "@rainbow-me/rainbowkit/styles.css";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full bg-[#121212] ">
      <Head>
        <title>Web 3 instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* home page */}
      <Header />
      <HomePage />
    </div>
  );
};

export default Home;
