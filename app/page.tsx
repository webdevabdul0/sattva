import React from "react";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Regulations from "./components/Regulations";
import Haccp from "./components/Haccp";
import RiskAssessment from "./components/RiskAssessment";
import FireProtection from "./components/FireProtection";
import Audit from "./components/Audit";
import Tiers from "./components/Tiers";
import Education from "./components/Education";
import Legislation from "./components/Legislation";
import Contact from "./components/Contact";
import Philosophy from "./components/Philosophy";
import RecommendedApp from "./components/RecommendedApp";

const Page = () => {
  return (
    <div>
      {/* Full-Screen Hero Section */}
      <section className="w-full h-screen">
        <Hero />
      </section>

      {/* Main Content (Centered) */}
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <Partners />
        <Regulations />
        <Haccp />
        <RiskAssessment />
        <FireProtection />
        <Audit />
        <Tiers />
        <Education />
        <Legislation />
        <Philosophy />
        <RecommendedApp />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
