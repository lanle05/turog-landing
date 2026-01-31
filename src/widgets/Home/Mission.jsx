import {
  Box,
  Container,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const Mission = () => {
  return (
    <Box
      component="section"
      bg="brandBackgroundGray.1"
      py={{ base: 50, md: 100 }}
      px={{ base: 20, md: 0 }}
    >
      <Container size="md">
        <Stack align="center" ta="center" gap="md" mb={{ base: 32, md: 48 }}>
          <Title
            order={1}
            fz={{ base: "25.44px", md: "33.888px" }}
            fw={300}
            c="brandGrey.9"
          >
            Our Mission
          </Title>

          <Text
            size="sm"
            c="brandGrey.9"
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
            maw={600}
          >
            Laying the financial rail tracks across Africa
          </Text>
        </Stack>

        <Paper radius="md" p={{ base: 16, md: 32 }} bg="white">
          <Stack gap="md">
            <Text
              c="brandLightGrey.7"
              fz={{ base: "14px", md: "15px", lg: "15.75px" }}
              lh={1.8}
              fw={100}
            >
              At TUROG Technologies, we excel in guiding companies through the
              evolving digital landscape with a focus on efficiency, quality,
              and speed. Our mission is to empower businesses by providing
              cutting-edge digital solutions that optimize financial and payment
              processes.
            </Text>

            <Text
              c="brandLightGrey.7"
              fz={{ base: "14px", md: "15px", lg: "15.75px" }}
              lh={1.8}
              fw={100}
            >
              We offer a range of services designed to maximize your digital
              potential, including digital strategy consulting, custom software
              development, web and mobile application development, digital
              marketing, and cloud solutions. Our approach ensures that you
              achieve your business objectives quickly and cost-effectively. Our
              team of experts combines a deep understanding of digital
              transformation with the latest technology and creative insights.
              We are dedicated to delivering high-quality, efficient solutions
              that not only address your current challenges but also create a
              sustainable competitive edge.
            </Text>

            <Text
              c="brandLightGrey.7"
              fz={{ base: "14px", md: "15px", lg: "15.75px" }}
              lh={1.8}
              fw={100}
            >
              We believe in more than just implementing technology; we are
              committed to delivering value and supporting your success every
              step of the way. Our experienced professionals are here to guide
              you through the complexities of digital transformation, ensuring a
              seamless and impactful journey toward achieving your business
              goals.
            </Text>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Mission;
