import DefaultHero from "../../app/services/DefaultHero";
import { iamStats, imageGrid } from "../../entities/services/iam/model";
import StatsSection from "../../shared/services/StatsSection";
import GridSection from "../../shared/services/GridSection";
import Project from "../../widgets/Services/EnterpriseApplicationIntegration/Project";
import TextSection from "../../widgets/Services/IdentityAccessManagement/TextSection";
import FeatureSuite from "../../widgets/Services/IdentityAccessManagement/FeatureSuite";
import UseCase from "../../widgets/Services/IdentityAccessManagement/UseCase";


const Iam = () => {
  return (
    <>
      <DefaultHero
        title="Enhance Organizational Security and Compliance with Our Comprehensive IAM Solutions"
        subtitle="In today's dynamic digital landscape, organizations face increasing pressure to protect their valuable data and comply with stringent regulations. Our Identity and Access Management (IAM) solution provides a robust and comprehensive framework for managing user identities and access privileges across your entire organization."
        imageSrc="/offerings/identity-image.jpg"
      />
      <StatsSection data={iamStats} />
      <TextSection />
      <GridSection
        title={"We'll implement the following IAM solutions"}
        data={imageGrid}
          />
        <FeatureSuite />
      <UseCase />
    </>
  );
};

export default Iam;
