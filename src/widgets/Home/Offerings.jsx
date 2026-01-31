import React from "react";
import { offerings } from "../../entities/home/model/index";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  Anchor,
} from "@mantine/core";

const Offerings = () => {
  return (
    <Box component="section" py={{ base: 60, md: 100 }}>
      <Container size="xl" maw={"95%"}>
        <Stack align="center" ta="center" gap="md" mb={{ base: 40, md: 60 }}>
          <Title
            order={1}
            fz={{ base: "25.44px", md: "33.888px" }}
            fw={300}
            c="brandGrey.9"
          >
            Our Offerings
          </Title>

          <Text
            c="brandGrey.9"
            size="sm"
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
            maw={800}
          >
            Our services encompass Digital Transformation, Identity Management,
            and more, all customized to address your specific business needs.
          </Text>
        </Stack>

        <Stack gap={{ base: 40, md: 80, lg: 120 }}>
          {offerings.map((offering) => (
            <Paper
              key={offering.id}
              radius="xs"
              shadow="sm"
              withBorder
              className="offeringsCard"
              ta={{ base: "center", md: "left" }}
              mb={{ base: "md", md: "20px" }}
            >
              <Grid gutter={0} align="stretch">
                {/* Image */}
                <Grid.Col span={{ base: 12, md: "content" }} visibleFrom="md">
                  <Box className="offeringsCard__imageWrap">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fit="cover"
                      className="offeringsCard__image"
                    />
                  </Box>
                </Grid.Col>

                {/* Content */}
                <Grid.Col span={{ base: 12, md: "auto" }}>
                  <Stack
                    gap="md"
                    p={{ base: 24, md: 32 }}
                    style={{ height: "100%" }}
                  >
                    <Title
                      order={3}
                      fz={{ base: "20px", md: "24px", lg: "28px" }}
                      fw={300}
                      c="brandGrey.9"
                    >
                      {offering.title}
                    </Title>

                    <Text
                      c="brandGrey.9"
                      size="sm"
                      fz={{ base: "12px", md: "13.5px", lg: "15.75px" }}
                      lh={1.8}
                      style={{ flex: 1 }}
                    >
                      {offering.description}
                    </Text>

                    <Group>
                      <Anchor
                        component={Link}
                        to={offering.link}
                        fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                        lh={1.8}
                        fw={300}
                        c="brandOrangish.8"
                        mx={{base:"auto", md:0}}
                        underline="never"
                      >
                        Continue Reading →
                      </Anchor>
                    </Group>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Offerings;
