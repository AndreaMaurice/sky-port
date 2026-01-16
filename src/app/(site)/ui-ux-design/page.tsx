import Services from "@/components/Services";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "UI/UX Design | Sky Creatives",
  description:
    "Sky Creatives offer top-notch UI/UX design services to create intuitive and engaging user experiences tailored to your business needs.",
};

const ServicesPage = () => {
  return (
    <main>
      <Breadcrumb pageName="UI/UX Design" />
      <Services />
      <Pricing />
      <Faq />
    </main>
  );
};

export default ServicesPage;
