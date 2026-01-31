import React from "react";
import {
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

const Stats = () => {
  return (
    <Box
      component="section"
      bg="brandCream.0"
      mt={{ base: 30, md: 40 }}
      py={{ base: 40, md: 60 }}
    >
      <Container size="xl" maw={"90%"}>
        <Group
          justify={{base: "center", md: "space-between"}}
          align="center"
          gap="xl"
          wrap="wrap"
          
        >
          <Stack gap="sm" style={{ flex: 1, minWidth: 280 }}>
            <Title
              order={2}
              ta={{ base: "center", md: "left" }}
              fw={300}
              fz={{ base: "23.44px", md: "26.944px" }}
              c="brandGrey.9"
              lh={1.4}
            >
              <Title order={2} component="span" fw={600} inherit>
                50,000+ users
              </Title>{" "}
              leverage TUROG solutions.
            </Title>

            <Text
              c="brandGrey.9"
              ta={{ base: "center", md: "left" }}
              fz={{ base: "14px", md: "15px", lg: "15.75px" }}
              lh={1.6}
              maw={700}
            >
              Looking to build and transform your digital payment platform?
              Reach out to TUROG.
            </Text>
          </Stack>

          <Button
            component={Link}
            to="/contactus"
            color="brandOrange.4"
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            radius="sm"
            mx={{ base: "auto" }}
            size="md"
            fw={300}
          >
            Talk To Us
          </Button>
        </Group>
      </Container>
    </Box>
  );
};

export default Stats;
