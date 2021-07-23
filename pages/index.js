import React from "react";
import Head from "next/head";
import Dashboard from "../components/Dashboard";

import { getDashboardData } from "../utils";

const upgrading = true

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>STX Mining Monitor</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>
      {upgrading? <div>Upgrading By Daemon Now</div> :
                  <Dashboard dashboardData={props.data} />
      }
          
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await getDashboardData();
  return {
    props: { data },
  };
}

export default Home;
