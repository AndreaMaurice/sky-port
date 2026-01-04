import Services from "@/components/Services";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is Services page description",
};

const ServicesPage = () => {
  return (
    <main>
      <Breadcrumb pageName="Services Page" />
      <Services />
    </main>
  );
};

export default ServicesPage;
