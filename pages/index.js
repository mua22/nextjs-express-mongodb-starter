import Head from "next/head";
import SiteLayout from "../components/site/layout/SiteLayout";
import MainPageSlider from "../components/site/pages/index/MainPageSlider";
import Services from "../components/site/pages/index/Services";
import WhatWeDo from "../components/site/pages/index/WhatWeDo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <SiteLayout>
      <MainPageSlider />
      <Services />
      <WhatWeDo />
    </SiteLayout>
  );
}
