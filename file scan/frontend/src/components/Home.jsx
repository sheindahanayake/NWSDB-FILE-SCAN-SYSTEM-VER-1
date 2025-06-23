import React from "react";
import Hero from "./common/Hero";
import Layout from "./common/Layout";


const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <Layout>
        <div className="p-0 m-0">
          <Hero />
        </div>
       
      </Layout>
    </div>
  );
};

export default HomePage;