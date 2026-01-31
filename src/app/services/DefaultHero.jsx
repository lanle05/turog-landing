import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
  Button,
  Image,
} from "@mantine/core";
import { Link } from "react-router-dom";

const DefaultHero = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  bg = "brandOrange.4",
  pt = { base: 40, md: 80 },
  pb = { base: 60, md: 100 },
}) => {
  return (
    <Box component="section">
      <Grid m={0} gutter={0}>
        {/* LEFT SIDE */}
        <Grid.Col span={{ base: 12, md: 6 }} bg={bg} py={pb}>
          <Container size="sm" pt={pt}>
            <Stack gap="xl">
              <Title order={1} fw={400} lh={1.2} fz={{ base: 28, md: 36 }}>
                {title}
              </Title>

              <Text fz={{ base: "14px", md: "15px", lg: "15.75px" }} fw={300} lh={1.7}>
                {subtitle}
              </Text>

              <Button
                component={Link}
                to="/contactus"
                color="brandGrey.9"
                radius="sm"
                fw={300}
                fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                w="fit-content"
              >
                Talk To Us
              </Button>
            </Stack>
          </Container>
        </Grid.Col>

        {/* RIGHT SIDE (hidden on small screens) */}
        <Grid.Col span={{ md: 6 }} display={{ base: "none", md: "block" }}>
          <Image src={imageSrc} alt={imageAlt} h="100%" fit="cover" />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default DefaultHero;
