import DefaultHero from "../../app/services/DefaultHero";
import { eaiStats, imageGrid } from "../../entities/services/eai/model";
import StatsSection from "../../shared/services/StatsSection";
import GridSection from "../../shared/services/GridSection";
import Project from "../../widgets/Services/EnterpriseApplicationIntegration/Project";
import MainText from "../../widgets/Services/EnterpriseApplicationIntegration/MainText";
import { Text } from "@mantine/core";

const Eai = () => {
  return (
    <>
      <DefaultHero
        title="Unlocking Business Agility with Seamless Enterprise Applications Integration"
        subtitle="We leverage a robust suite of technologies, including API Management (APIM), Enterprise Service Bus (ESB) implementations, data processing tools, and other advanced middleware solutions. These powerful tools orchestrate the synchronization and integration of disparate applications, ensuring data accuracy and consistency across your entire enterprise."
        imageSrc="/services/eai/hero-image.webp"
      />
      <Text
        c="brandGrey.9"
        size="sm"
        fw={300}
        fz={{ base: "14px", md: "15px", lg: "15.75px" }}
        lh={1.8}
        py={{ base: 40, md: 60 }}
        maw={"85%"}
        mx={"auto"}
      >
        Building an API-centric architecture requires a robust foundation. API
        Managers play a pivotal role by centralizing API creation, publishing,
        and management, while ensuring security through features like
        authentication, authorization, and rate limiting. Micro Integrators
        complement this by enabling rapid development and deployment of
        lightweight integrations, facilitating micro-services orchestration, and
        enabling real-time event-driven responses.
      </Text>
      <StatsSection data={eaiStats} />
      <MainText />
      <GridSection
        title={"We'll implement the following middleware solutions"}
        data={imageGrid}
      />
      <Project />
    </>
  );
};

export default Eai;
