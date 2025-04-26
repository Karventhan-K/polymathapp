import Image from "next/image";
import Layout from "@/components/Layout";
import { Fragment } from "react";
import LandingPage from "@/components/Pages/landingPage";
import FlowChart from "@/components/ReactFlow";

export default function Home() {
  return (
    <Fragment>
      <Layout>
        <FlowChart />
      </Layout>
    </Fragment>
  );
}
