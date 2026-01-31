import {
  Box,
  Image,
  Stack,
  SimpleGrid,
  Text,
  Title,
  Container,
} from "@mantine/core";

const GridSection = ({ title, data }) => {
  return (
    <>
      <Container size="xl" pb={60}>
        {title && (
          <Box mb={48} ta="center">
            <Title
              order={1}
              fz={{ base: "25.44px", md: "33.888px" }}
              fw={300}
              c="brandGrey.9"
            >
              {title}
            </Title>
          </Box>
        )}

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={"40"}>
          {data.map((item, index) => (
            <Stack key={index} align="center" spacing={20}>
              <Image
                src={item.imageSrc}
                alt={item.title}
                styles={{
                  root: {
                    width: "230px",
                    height: "130px",
                  },
                }}
              />
              <Box
                bg={"brandGrey.9"}
                style={{ borderRadius: "0.4rem" }}
                p={5}
                w={{ base: "290px", md: "280px", lg: "350px" }}
                h={"35px"}
              >
                <Text
                  ta={{ base: "center" }}
                  size="sm"
                  fw={300}
                  fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                  lh={1.8}
                  c={"white"}
                >
                  {item.name}
                </Text>
              </Box>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default GridSection;
