import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sky Creatives",
  description:
    "Get in touch with Sky Creatives for exceptional web development services tailored to your business needs.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Us!" />

      <Contact />
    </>
  );
};

export default ContactPage;
