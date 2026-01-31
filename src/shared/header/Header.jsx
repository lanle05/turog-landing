import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Group,
  Button,
  Burger,
  Stack,
  Menu,
  Anchor,
  Image,
} from "@mantine/core";
import navLinks from "../../shared/header/header-links";

const Header = ({ variant = "transparent" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const isSolid = variant === "solid";

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileOpenIndex(null);
  };

  const toggleMobileDropdown = (index) => {
    setMobileOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
      <Box
      component="header"
      className={`navbar${isScrolled ? " navbar--scrolled" : ""}${
        isSolid ? " navbar--solid" : ""
      }`}
    >
      <Container
        size="xl"
        maw={"100%"}
        px={{ base: 24, md: 80 }}
        py={16}
        className="navbar__container"
      >
        {/* Logo */}
        <Anchor component={Link} to="/" onClick={closeMobileMenu}>
          <Image
            src="/navbar/logo.svg"
            alt="Logo"
            w={{ base: 95, md: 168 }}
            h="auto"
          />
        </Anchor>

        {/* Desktop nav */}
        <Group justify="center" gap="xl" visibleFrom="md">
          {navLinks.map((link) => {
            const hasDropdown =
              Array.isArray(link.dropdown) && link.dropdown.length > 0;

            // No dropdown: simple link
            if (!hasDropdown) {
              return (
                <Anchor
                  key={link.name}
                  component={Link}
                  to={link.href}
                  fw={400}
                  c={"brandGrey.9"}
                  styles={{ root: { fontSize: "14px" } }}
                  className="navbar__menu-link"
                  underline="never"
                  py={8}
                >
                  {link.name}
                </Anchor>
              );
            }

            // Has dropdown: Mantine Menu
            return (
              <Menu
                key={link.name}
                trigger="hover"
                openDelay={100}
                closeDelay={200}
                transitionProps={{
                  transition: "pop-top-left",
                  duration: 150,
                }}
                withinPortal
              >
                <Menu.Target>
                  <Group gap={4} className="navbar__menu-link" py={8}>
                    <Anchor
                      component={Link}
                      to={link.href}
                      fw={400}
                      c={"brandGrey.9"}
                      styles={{ root: { fontSize: "14px" } }}
                      underline="never"
                    >
                      {link.name}
                    </Anchor>
                    <ChevronDown size={14} className="navbar__chevron-icon" />
                  </Group>
                </Menu.Target>

                <Menu.Dropdown
                  p={16}
                  className="navbar__dropdown-menu"
                  style={{ minWidth: 200 }}
                  styles={{
                    dropdown: {
                      backgroundColor: "#ffffff",
                      borderRadius: 12,
                      boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)",
                      border: "1px solid #f3f4f6",
                    },
                  }}
                >
                  {link.dropdown.map((sub) => (
                    <Menu.Item
                      key={sub.name}
                      component={Link}
                      to={sub.href}
                      className="navbar__dropdown-link"
                      radius={8}
                      fw={400}
                      c={"brandLightGrey.7"}
                      styles={{ item: { fontSize: "14px" } }}
                      px={16}
                      py={8}
                    >
                      {sub.name}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            );
          })}
        </Group>
        {/* CTA Button (desktop) */}
        <Button
          color="brandOrange.4"
          radius="md"
          px={16}
          fw={400}
          size="sm"
          styles={{ root: { fontSize: "14px" } }}
          py={6}
          className="navbar__cta-button"
          visibleFrom="md"
        >
          Talk To Us
        </Button>

        {/* Burger (mobile) */}
        <Burger
          opened={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="navbar__mobile-menu-button"
          aria-label="Toggle navigation"
          hiddenFrom="md"
        />
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <Box className="navbar__mobile-menu" hiddenFrom="md">
          <Stack gap={8} p={24} style={{ borderTop: "1px solid #f3f4f6" }}>
            {navLinks.map((link, index) => {
              const hasDropdown =
                Array.isArray(link.dropdown) && link.dropdown.length > 0;

              // Simple link (no dropdown)
              if (!hasDropdown) {
                return (
                  <Anchor
                    key={link.name}
                    component={Link}
                    to={link.href}
                    className="navbar__mobile-link"
                    onClick={closeMobileMenu}
                    c={"brandOrangish.8"}
                    fw={500}
                    underline="never"
                    radius={8}
                    px={8}
                    py={16}
                  >
                    {link.name}
                  </Anchor>
                );
              }

              // Link with dropdown
              return (
                <Box key={link.name}>
                  <Group
                    justify="space-between"
                    className="navbar__mobile-link"
                    c={"brandOrangish.8"}
                    fw={500}
                    onClick={() => toggleMobileDropdown(index)}
                    px={8}
                    py={16}
                  >
                    <span>{link.name}</span>
                    {mobileOpenIndex === index ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </Group>

                  {mobileOpenIndex === index && (
                    <Stack
                      gap={12}
                      pl={24}
                      pb={8}
                      ml={16}
                      mt={4}
                      className="navbar__mobile-sublinks"
                    >
                      {link.dropdown.map((sub) => (
                        <Anchor
                          key={sub.name}
                          component={Link}
                          to={sub.href}
                          className="navbar__mobile-sublink"
                          fw={400}
                          c={"brandLightGrey.7"}
                          onClick={closeMobileMenu}
                          underline="never"
                          py={4}
                        >
                          {sub.name}
                        </Anchor>
                      ))}
                    </Stack>
                  )}
                </Box>
              );
            })}
          </Stack>

          <Box px={24} pb={24}>
            <Button
              color="brandOrange"
              radius="xl"
              fullWidth
              onClick={closeMobileMenu}
            >
              Talk To Us
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Header;
