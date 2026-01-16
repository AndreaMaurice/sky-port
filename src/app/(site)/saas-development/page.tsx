import Services from "@/components/Services";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "SaaS Development | Sky Creatives",
  description:
    "Sky Creatives offer top-notch SaaS development services to build scalable and efficient software solutions tailored to your business needs.",
};

const ServicesPage = () => {
  return (
    <main>
      <Breadcrumb pageName="SaaS Development" />
      <Services />
      <Pricing />
      <Faq />
    </main>
  );
};

export default ServicesPage;
