import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="dark:bg-dark pt-20 pb-8 lg:pt-[120px] lg:pb-[70px]">
      <div className="container">
        <SectionTitle
          subtitle="Featured Services"
          title="What Sky Creatives Does Best"
          paragraph="We help startups and businesses build fast, reliable, and visually engaging digital products using modern web technologies and proven design practices."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
