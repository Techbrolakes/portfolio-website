import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "./components/SideComponents/Navbar";
import Portfolio from "./components/Portfolio";
import styled from "styled-components";
import HashLoader from "react-spinners/HashLoader";

export default function Home() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2810);
  }, []);
  return (
    <Container>
      <Head>
        <title>Lekan Dar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ld4.svg" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>
      {loading ? (
        <Loader>
          <HashLoader color="#63FEDA" loading={loading} size={150} />
        </Loader>
      ) : (
        <div>
          <Navbar />
          <Portfolio />
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
const Loader = styled.div`
  background: #09192f;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 6s all ease-in;
`;
