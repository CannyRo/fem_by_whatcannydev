import React from "react";
import Head from "next/head";
import Image from "next/image";
//
import Title from "@/components/Title/Title";
import Searchbar from "@/components/Searchbar/Searchbar";
import Seebelow from "@/components/Seebelow/Seebelow";
import ListOfChallenges from "@/components/ListOfChallenges/ListOfChallenges";
import Cursor from "@/components/Cursor/Cursor";
//
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const[filterWord, setFilterWord] = React.useState('');

  return (
    <>
      <Head>
        <title>Front End Mentor Challenge by WhatCannyDev</title>
        <meta name="description" content="Front End Mentor Challenge by WhatCannyDev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_dark_skull_nude.ico" />
      </Head>
      
      <main>
        <Cursor />
        <Title />
        <Searchbar filterWord={filterWord} setFilterWord={setFilterWord}/>
        <Seebelow />
        <ListOfChallenges filterWord={filterWord}/>
      </main>
    </>
  );
}
