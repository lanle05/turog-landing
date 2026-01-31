import { Flex, Image, Box, Stack, Text } from "@mantine/core";

const MainSection = ({ title, desc, image, index }) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      mx={"auto"}
      py={{ base: 40, md: 40 }}
      px={{ base: 20, lg: 80 }}
      maw={"95%"}
      gap={{ base: "md", md: "xl", lg: "xl" }}
      direction={index % 2 === 0 ? "row" : "row-reverse"}
    >
      <Box w={{ md: "50%" }} visibleFrom="lg">
        <Image
          src={image}
          alt={title}
          fallbackSrc="https://placehold.co/600x400?text=No+Image"
        />
      </Box>

      <Stack w={{ md: "70%", lg: "50%" }} gap="lg">
        <Text
          order={1}
          fz={{ base: "25.44px", md: "33.888px" }}
          fw={300}
          c="brandGrey.9"
          lh={{ base: 1.4, md: 1.6 }}
          lts={0.5}
          ta={{ base: "center", md: "left" }}
        >
          {title}
        </Text>

        {desc?.map((text) => (
          <Text
            key={text}
            c="brandGrey.9"
            size="sm"
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
            ta={{ base: "center", md: "left" }}
          >
            {text}
          </Text>
        ))}
      </Stack>
    </Flex>
  );
};

const ProjectSection = ({ project }) => {
  return (
    <>
      {project.map((item, index) => (
        <MainSection key={item.title} {...item} index={index} />
      ))}
    </>
  );
};

export default ProjectSection;
