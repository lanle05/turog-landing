import { mainText } from "../../../entities/services/iam/model";
import { Stack, Text, Container } from "@mantine/core";

const TextSection = () => {
  return (
    <>
      <Container size="lg" pb={{ base: 40, md: 60 }} maw={"85%"}>
        <Stack spacing="lg">
          {mainText.map((item, index) => (
            <Text
              c="brandGrey.9"
              size="sm"
              fw={300}
              fz={{ base: "14px", md: "15px", lg: "15.75px" }}
              lh={1.8}
              key={index}
            >
              {item.text}
            </Text>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default TextSection;
