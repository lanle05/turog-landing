import { about } from "../../../entities/company/about/model";
import { Flex, Box, Stack, Text } from "@mantine/core";
import AboutImage from "./AboutImage";

const MainSection = ({ title, desc, image, index }) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      mx={"auto"}
      py={{ base: 40, md: 80 }}
      px={{ lg: 80 }}
      maw={"90%"}
      //gap={{ base: "md", md: "xl", lg: "2xl" }}
    >
      <Box w={{ md: "50%" }}>
        <AboutImage index={index} image={image} title={title} />
      </Box>

      <Stack w={{ md: "70%", lg: "50%" }} gap="lg">
        <Text
          lh={{ base: 0.9, md: 1.1 }}
          fz={{ base: 15, sm: 16, md: 22, lg: 24, xl: 28 }}
          fw={400}
          c={"brandGrey.9"}
        >
          {title}
        </Text>

        {desc?.map((text) => (
          <Text
            key={text}
            c="brandGrey.9"
            size="sm"
            fw={300}
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
          >
            {text}
          </Text>
        ))}
      </Stack>
    </Flex>
  );
};

const AboutUsSection = () => {
  return (
    <>
      {about.map((item, index) => (
        <MainSection key={item.title} {...item} index={index} />
      ))}
    </>
  );
};

export default AboutUsSection;
