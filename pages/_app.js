import Head from "next/head";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="INSPIRO" />
        <meta
          name="description"
          content="Themeforest Template Polo, html template"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* Document title */}
        <title>Cogentro</title>
        {/* Stylesheets & Fonts */}
        <link href="/css/plugins.css" rel="stylesheet" />
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/custom.css" rel="stylesheet" />
        <link href="/css/theme.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />;<script src="/js/jquery.js"></script>
      <ToastContainer position="top-right" />
      <script src="/plugins/popper/popper.min.js"></script>
      <script src="/js/plugins.js"></script>
      <script src="/js/functions.js"></script>
    </React.Fragment>
  );
}

export default MyApp;
