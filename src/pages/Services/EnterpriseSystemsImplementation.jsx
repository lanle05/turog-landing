import DefaultHero from "../../app/services/DefaultHero";
import MainText from "../../widgets/Services/EnterpriseSystemsImplementation/MainText";
import SupportWays from "../../widgets/Services/EnterpriseSystemsImplementation/SupportWays";
import { esiStats, imageGrid, } from "../../entities/services/esi/model";
import StatsSection from "../../shared/services/StatsSection";
import GridSection from "../../shared/services/GridSection";
import Project from "../../widgets/Services/EnterpriseSystemsImplementation/Project";

const Esi = () => {
  return (
    <>
      <DefaultHero
        title="Transforming Your Business with Expert Guidance and Support."
        subtitle="Successfully implementing complex enterprise systems is crucial for driving business growth and efficiency. However, it can be a daunting challenge, requiring careful planning, meticulous execution, and ongoing support. We offer a comprehensive suite of services, guiding you through every stage of the enterprise systems implementation journey."
        imageSrc="/services/esi/hero-image.webp"
      />
      <MainText />
      <SupportWays />
      <StatsSection
        title={
          "We have successfully implemented these products for our clients."
        }
        data={esiStats}
      />
      <GridSection data={imageGrid} />
      <Project/>
    </>
  );
};

export default Esi;
