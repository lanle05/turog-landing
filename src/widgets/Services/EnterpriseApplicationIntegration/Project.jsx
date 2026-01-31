import ProjectSection from "../../../shared/services/ProjectSection";
import { project } from "../../../entities/services/eai/model";
import { Stack, Text, Title } from "@mantine/core";

const Project = () => {
  return (
    <>
      <Stack maw={"85%"} mx="auto" gap="lg">
        <Title
          order={1}
          fz={{ base: "25.44px", md: "33.888px" }}
          fw={300}
          c="brandGrey.9"
          ta="center"
        >
          Here's how we solved integration issues for our clients ...
        </Title>
        <Text
          c="brandGrey.9"
          size="sm"
          fz={{ base: "14px", md: "15px", lg: "15.75px" }}
          lh={1.8}
          ta={{ base: "center", md: "left" }}
        >
          Facing challenges with integrating your applications and data? You're
          not alone. Many organizations struggle with data silos, inefficient
          workflows, and complex integrations. In this section, we'll share
          real-world examples of how we've helped our clients overcome these
          challenges.
        </Text>
      </Stack>
      <ProjectSection project={project} />
    </>
  );
};

export default Project;
