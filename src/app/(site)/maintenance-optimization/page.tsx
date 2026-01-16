import Services from "@/components/Services";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Maintenance & Optimization | Sky Creatives",
  description:
    "Sky Creatives offer top-notch maintenance and optimization services to ensure your websites and applications run smoothly and efficiently.",
};

const ServicesPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Maintenance & Optimization" />
      <Services />
      <Pricing />
      <Faq />
    </main>
  );
};

export default ServicesPage;
