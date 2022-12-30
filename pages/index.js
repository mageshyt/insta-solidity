import Head from "next/head";
import HomePage from "./HomePage";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div className="h-screen overflow-hidden w-full bg-[#121212] ">
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
