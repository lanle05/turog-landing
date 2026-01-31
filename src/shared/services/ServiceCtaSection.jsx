import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";

const ServiceCtaSection = () => {
  return (
    <Box
      component="section"
      bg="brandGrey.9"
      c="white"
      py={{ base: 40, md: 56 }}
    >
      <Container size="xl" maw="100%" px={{ base: 24, md: 80 }}>
        <Flex align="center" justify="space-between" wrap="wrap" gap={32}>
          <Stack gap={12} >
            <Title
              order={1}
              fz={{ base: "25.44px", md: "33.888px" }}
              fw={300}
              ta={{ base: "center", md: "left" }}
              c="white"
            >
              Ready to embark on a journey of digital transformation?
            </Title>
            <Text
              size="sm"
              fw={300}
              fz={{ base: "14px", md: "15px", lg: "15.75px" }}
              ta={{ base: "center", md: "left" }}
              lh={1.8}
              c="white"
            >
              Let's turn your vision into reality. Contact us today to set your
              brand on the path to digital excellence with us.
            </Text>
          </Stack>
          <Button
            component={Link}
            to="/contactus"
            color="brandOrange.4"
            radius="xl"
            px={28}
            mx={"auto"}
            h={44}
          >
            Talk To Us
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default ServiceCtaSection;
