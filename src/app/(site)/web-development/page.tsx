import Services from "@/components/Services";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Web Development | Sky Creatives",
  description:
    "Sky Creatives offer top-notch web development services to build responsive and engaging websites tailored to your business needs.",
};

const ServicesPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Web Development" />
      <Services />
      <Pricing />
      <Faq />
    </main>
  );
};

export default ServicesPage;
