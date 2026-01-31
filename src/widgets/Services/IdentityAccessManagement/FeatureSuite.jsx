import { features } from "../../../entities/services/iam/model";
import { Grid, Container, Text, Title, Box, Stack} from "@mantine/core";

const FeatureSuite = () => {
  return (
    <>
      <Container size="xl" pb={60} maw={"80%"}>
        <Text
          c="brandGrey.9"
          size="sm"
          fw={300}
          fz={{ base: "14px", md: "15px", lg: "15.75px" }}
          lh={1.8}
          pb={40}
        >
          TUROG supports a comprehensive suite of Identity and Access Management
          solutions across the vendors shown above. Our implementations
          incorporate all of the features listed below and much more. These
          features empower organizations to effectively manage user identities,
          control access privileges, and maintain a secure and compliant
          environment.
        </Text>
        <Grid gutterY={"100px"}>
          {features.map((feature, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, sm: 6 }}
              style={{
                borderRight: index % 2 === 0 ? "1px solid #e0e0e0" : "none",
              }}
            >
              <Stack
                gap={{ base: 10, md: "36px" }}
                style={{
                  paddingRight: index % 2 === 0 ? "2rem" : "0",
                  paddingLeft: index % 2 === 1 ? "2rem" : "0",
                  textAlign: index % 2 === 0 ? "right" : "left",
                }}
              >
                <Title
                  order={3}
                  c="brandGrey.9"
                  fz={{ base: "18px", md: "23px", lg: "25px" }}
                  lh={1.8}
                  fw={400}
                >
                  {feature.title}
                </Title>
                <Text
                  c="brandGrey.9"
                  size="sm"
                  fw={300}
                  fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                  lh={1.8}
                >
                  {feature.desc}
                </Text>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default FeatureSuite;
