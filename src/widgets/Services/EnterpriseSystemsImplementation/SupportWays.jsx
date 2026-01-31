import { supportWays } from "../../../entities/services/esi/model";
import { SimpleGrid, Text, Title, Stack, Box, Container } from "@mantine/core";

const SupportWays = () => {
  return (
    <>
      <Box component="section" size={"xl"} pb={"60"} maw={"100%"}>
        <Title
          order={1}
          fz={{ base: "25.44px", md: "33.888px" }}
          fw={300}
          c="brandGrey.9"
          ta="center"
          mb={"40"}
        >
          Here's how we support with Enterprise Systems Implementation
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={0}>
          {supportWays.map((way, index) => (
            <Stack
              key={index}
              ta={"center"}
              gap={"xs"}
              className="gridItem"
              px={20}
              py={40}
            >
              <Title
                order={3}
                mb="xs"
                fw={500}
                fz={{ base: "15px", md: "19.5px", lg: "21px" }}
                lh={1.8}
              >
                {way.title}
              </Title>
              <Text
                size="sm"
                fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                lh={1.8}
                fw={100}
              >
                {way.description}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default SupportWays;
