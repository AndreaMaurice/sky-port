import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Sky Creatives",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404!" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
