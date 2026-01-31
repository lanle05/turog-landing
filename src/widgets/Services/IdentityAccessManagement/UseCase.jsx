import { Flex, Image, Box, Stack, Text } from "@mantine/core";

const MainSection = () => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      mx={"auto"}
      pb={{ base: 40, md: 60 }}
      px={{ base: 20, lg: 80 }}
      maw={"95%"}
      gap={{ base: "md", md: "xl", lg: "xl" }}
      direction={"row"}
    >
      <Box w={{ md: "50%" }} visibleFrom="md">
        <Image
          src="/services/iam/secure.webp"
          alt="Securing Ceviant Developer Portal"
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
          Securing Ceviant Developer Portal
        </Text>

        <Text
          c="brandGrey.9"
          size="sm"
          fz={{ base: "14px", md: "15px", lg: "15.75px" }}
          lh={1.8}
          ta={{ base: "center", md: "left" }}
        >
          TUROG Technologies is supporting Ceviant - a leading payments provider
          in the UK and Nigeria, by enhancing the security of their developer
          portal with robust Identity and Access Management (IAM) solutions. By
          implementing advanced authentication mechanisms, such as multi-factor
          authentication, and granular access controls, TUROG helps Ceviant
          safeguard sensitive developer data and ensure only authorized
          personnel can access critical APIs and development environments. This
          not only strengthens Ceviant's security posture but also fosters a
          more secure and trustworthy ecosystem for their developer community.
        </Text>
      </Stack>
    </Flex>
  );
};

const UseCase = () => {
  return (
    <>
      <MainSection />
    </>
  );
};

export default UseCase;
