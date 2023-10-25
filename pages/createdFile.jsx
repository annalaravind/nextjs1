import { metaData } from "@/config/siteConfig";
import Head from "next/head";
import React from "react";

const createdFile = () => {
  return (
    <>
      <Head>
        <title>{metaData.createdFile.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>This is my createdFile!</div>
    </>
  );
};

export default createdFile;
