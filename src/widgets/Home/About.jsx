import React from "react";
import { Box, Container, Image, Stack, Text, Title } from "@mantine/core";

const About = () => {
  return (
    <Box component="section">
      <Container size="xl" py={{ base: 32, md: 64 }}>
        <Stack align="center" ta="center" gap="xl" mx="auto" maw={{ lg: 900 }}>
          <Title
            order={1}
            fz={{ base: "25.44px", md: "33.888px" }}
            fw={300}
            c="brandGrey.9"
          >
            About Us
          </Title>

          <Text
            c="brandGrey.9"
            size="sm"
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
            maw={820}
          >
            TUROG Technologies excels in navigating businesses through the
            ever-evolving digital landscape. We offer services in digital
            strategy consulting, custom software development, web and mobile app
            development, digital marketing, and cloud solutions to help
            companies achieve their business goals swiftly and efficiently. Our
            expert team specializes in enhancing digital capabilities and
            optimizing investments.
          </Text>

          <Image
            src="/about/review.jpg"
            alt="man review"
            radius="lg"
            fit="cover"
            w="100%"
            visibleFrom="md"
            maw={"100%"}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
