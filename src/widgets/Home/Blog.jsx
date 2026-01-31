import { blogs } from "../../entities/home/model/index";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  Anchor,
  Group,
} from "@mantine/core";

const Blog = () => {
  return (
    <Box component="section" py={{ base: 60, md: 100 }}>
      <Container size="xl">
        <Stack align="center" ta="center" gap="md" mb={{ base: 40, md: 60 }}>
          <Title
            order={1}
            fz={{ base: "25.44px", md: "33.888px" }}
            fw={300}
            c="brandGrey.9"
          >
            Industry Expertise
          </Title>

          <Text
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
            c="brandGrey.9"
            maw={800}
          >
            Explore insights from our experts and engage with the broader
            discussions we&apos;re leading.
          </Text>
        </Stack>

        <Grid gutter={{ base: 24, md: 32 }}>
          {blogs.map((blog) => (
            <Grid.Col key={blog.id} span={{ base: 12, sm: 6, lg: 4 }}>
              <Paper
                withBorder
                radius="md"
                shadow="sm"
                className="blogCard"
                h="100%"
              >
                <Box className="blogCard__imageWrap">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fit="cover"
                    className="blogCard__image"
                  />
                </Box>

                <Stack p={{ base: 20, md: 24 }} gap="sm" style={{ flex: 1 }}>
                  <Text
                    fw={300}
                    fz={{ base: "14px", md: "18px", lg: "21px" }}
                    lh={1.2}
                    c="brandGrey.9"
                  >
                    {blog.title}
                  </Text>

                  <Text
                    fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                    lh={1.3}
                    c="brandLightGrey.7"
                    style={{ flex: 1 }}
                  >
                    {blog.description}
                  </Text>

                  <Group>
                    <Anchor
                      component={Link}
                      to={blog.link}
                      fw={300}
                      fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                      lh={1.8}
                      c="brandOrangish.8"
                      underline="hover"
                    >
                      read more
                    </Anchor>
                  </Group>
                </Stack>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
