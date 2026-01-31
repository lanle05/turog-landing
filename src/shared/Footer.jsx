import {
  Box,
  Container,
  Grid,
  Stack,
  Title,
  Text,
  Anchor,
  Group,
  ActionIcon,
} from "@mantine/core";
import { Link } from "react-router-dom";

import { PiBuildingOffice } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box component="footer" bg="brandGrey.9" c="white" py={88}>
      <Container size="xl" maw={"95%"}>
        <Grid gutter={{ base: 40, md: 48 }}>
          {/* Useful Links */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Stack gap="sm">
              <Title order={4} fw={700}>
                Useful Links
              </Title>

              <Stack gap={6}>
                {[
                  { label: "Home", to: "/" },
                  { label: "About us", to: "#" },
                  { label: "Talk To Us", to: "/contactus" },
                ].map((link) => (
                  <Anchor
                    key={link.label}
                    component={Link}
                    to={link.to}
                    c="white"
                    opacity={0.8}
                    underline="never"
                  >
                    {link.label}
                  </Anchor>
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* About Us */}
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Stack gap="sm">
              <Title order={4} fw={700}>
                About us
              </Title>

              <Text opacity={0.8} lh={1.7}>
                We are a team of passionate people whose goal is to improve
                everyone&apos;s life through disruptive products. We build great
                products to solve your business problems.
              </Text>

              <Text opacity={0.8} lh={1.7}>
                Our products are designed for small to medium size companies
                willing to optimize their performance.
              </Text>
            </Stack>
          </Grid.Col>

          {/* Contact */}
          <Grid.Col span={{ base: 12, md: 12, lg: 4 }}>
            <Stack gap="sm">
              <Title order={4} fw={700}>
                Connect with us
              </Title>

              <Stack gap="xs">
                <Group align="flex-start" gap="sm">
                  <PiBuildingOffice size={18} />
                  <Text opacity={0.8} lh={1.6}>
                    3B, Community Street, Medina Estate, Gbagada, Lagos
                  </Text>
                </Group>

                <Group gap="sm">
                  <MdOutlineEmail size={18} />
                  <Anchor
                    href="mailto:info@turog.ng"
                    c="white"
                    opacity={0.8}
                    underline="never"
                  >
                    info@turog.ng
                  </Anchor>
                </Group>

                <Group gap="sm">
                  <FaPhoneAlt size={16} />
                  <Anchor
                    href="tel:+2348022279770"
                    c="white"
                    opacity={0.8}
                    underline="never"
                  >
                    +234 802-227-9770
                  </Anchor>
                </Group>
              </Stack>

              {/* Socials */}
              <Stack gap="xs" mt="md">
                <Text fw={600}>Follow us</Text>

                <Group gap="sm">
                  <ActionIcon
                    size="lg"
                    radius="xl"
                    variant="transparent"
                    color="brandOrangish.8"
                    component="a"
                    href="#"
                    aria-label="X"
                  >
                    <FaXTwitter />
                  </ActionIcon>

                  <ActionIcon
                    size="lg"
                    radius="xl"
                    variant="transparent"
                    color="brandOrangish.8"
                    component="a"
                    href="#"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </ActionIcon>

                  <ActionIcon
                    size="lg"
                    radius="xl"
                    variant="transparent"
                    color="brandOrangish.8"
                    component="a"
                    href="#"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </ActionIcon>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
