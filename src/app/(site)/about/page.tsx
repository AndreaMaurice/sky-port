import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Sky Creatives",
  description:
    "Learn more about Sky Creatives, our mission, vision, and the team dedicated to delivering exceptional web development services.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
