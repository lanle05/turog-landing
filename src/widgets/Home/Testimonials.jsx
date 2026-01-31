import React from "react";
import { testimonials } from "../../entities/home/model/index";
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
} from "@mantine/core";

const Testimonials = () => {
  return (
    <Box
      component="section"
      bg="brandBackgroundGray.1"
      py={{ base: 60, md: 100 }}
    >
      <Container size="xl">
        <Stack align="center" ta="center" gap="md" mb={{ base: 40, md: 60 }}>
          <Title
            order={1}
            fz={{ base: "25.44px", md: "33.888px" }}
            fw={300}
            c="brandGrey.9"
          >
            Client Reviews
          </Title>

          <Text
            c="brandGrey.9"
            size="sm"
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
            maw={800}
          >
            Hear directly from our clients about their experiences with our
            services.
          </Text>
        </Stack>

        <Grid gutter={{ base: 24, md: 32 }}>
          {testimonials.map((t) => (
            <Grid.Col key={t.id} span={{ base: 12, sm: 6 }}>
              <Paper
                withBorder
                radius="md"
                shadow="sm"
                className="reviewCard"
                h="100%"
              >
                <Group
                  align="flex-start"
                  wrap="nowrap"
                  className="reviewCard__layout"
                  p={{ base: 20, md: 24 }}
                >
                  <Box className="reviewCard__imageWrap">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fit="cover"
                      className="reviewCard__image"
                    />
                  </Box>

                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Text
                      fw={500}
                      ta={{ base: "center", md: "left" }}
                      fz={{ base: "14px", md: "15px", lg: "17.5px" }}
                      c="brandGrey.9"
                      lh={1.3}
                    >
                      {t.name}
                    </Text>

                    <Text
                      size="sm"
                      c="brandLightGrey.7"
                      ta={{ base: "center", md: "left" }}
                      lh={1.4}
                    >
                      {t.title}
                    </Text>

                    <Text
                      fw={600}
                      fs="italic"
                      fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                      lh={1.8}
                      ta={{ base: "center", md: "left" }}
                      c="brandLightGrey.7"
                      mt="xs"
                    >
                      “{t.quoteTitle}”
                    </Text>

                    <Text
                      fs="italic"
                      fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                      lh={1.8}
                      ta={{ base: "center", md: "left" }}
                      c="brandLightGrey.7"
                    >
                      “{t.quote}”
                    </Text>
                  </Stack>
                </Group>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
