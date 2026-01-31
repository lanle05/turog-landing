import { mainText } from "../../../entities/services/esi/model";
import { Title, Text, Container, Stack, Box } from "@mantine/core";

const MainText = () => {
  return (
    <Box component="section" py={60}>
      <Container size="xl" maw={"90%"}>
        <Stack>
          {mainText.map((section, index) => (
            <Box key={index}>
              <Title
                order={3}
                mb="xs"
                fw={500}
                fz={{ base: "15px", md: "19.5px", lg: "21px" }}
                lh={1.8}
                c="brandGrey.9"
              >
                {section.title}
              </Title>
              {Array.isArray(section.subtitle) ? (
                <Stack gap="sm">
                  {section.subtitle.map((sub, subIndex) => (
                    <Text
                      key={subIndex}
                      c="brandGrey.9"
                      size="sm"
                      fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                      lh={1.8}
                      fw={100}
                    >
                      {sub}
                    </Text>
                  ))}
                </Stack>
              ) : (
                <Text
                  c="brandGrey.9"
                  size="sm"
                  fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                  lh={1.8}
                  fw={100}
                >
                  {section.subtitle}
                </Text>
              )}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default MainText;
