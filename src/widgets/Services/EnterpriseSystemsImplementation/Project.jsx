import ProjectSection from "../../../shared/services/ProjectSection";
import { project } from "../../../entities/services/esi/model";
import { Stack, Text } from "@mantine/core";

const Project = () => {
  return (
    <>
      <Stack maw={"85%"} mx="auto" gap="lg">
        <Text
          c="brandGrey.9"
          size="sm"
          fz={{ base: "14px", md: "15px", lg: "15.75px" }}
          lh={1.8}
          ta={{ base: "center", md: "left" }}
        >
          At TUROG, we are proud of our track record of successful project
          implementations across diverse industries. Our portfolio encompasses a
          wide range of projects, from implementing robust Core Banking
          solutions for leading financial institutions to streamlining
          operations with cutting-edge Enterprise Resource Planning (ERP)
          systems for businesses of all sizes.
        </Text>
        <Text
          c="brandGrey.9"
          size="sm"
          fz={{ base: "14px", md: "15px", lg: "15.75px" }}
          lh={1.8}
          ta={{ base: "center", md: "left" }}
        >
          We have consistently delivered exceptional results for our clients,
          exceeding expectations and driving significant value. In the following
          section, we will showcase a selection of our completed projects,
          highlighting the unique challenges faced by each client, the
          innovative solutions we implemented, and the tangible benefits
          achieved. These case studies demonstrate our expertise in delivering
          successful and impactful technology solutions that empower our clients
          to achieve their business objectives and gain a competitive edge.
        </Text>
      </Stack>
      <ProjectSection project={project} />
    </>
  );
};

export default Project;
