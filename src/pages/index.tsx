import Header from "@/components/header";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>House Pizzaria</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <div
        className={` body font-oxaminium flex min-h-screen container flex-col  pt-24 pl-5`}
      >
        <h1 className="text-white font-bold">Cardápio</h1>
      </div>
    </>
  );
};

export default Home;
