import { faqs } from "../../entities/home/model/index";
import { Accordion, Box, Container, Stack, Text, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

const FAQ = () => {
  return (
    <Box component="section" py={{ base: 60, md: 100 }}>
      <Container size="md">
        <Stack align="center" ta="center" gap="md" mb={{ base: 40, md: 60 }}>
          <Title
            order={1}
            fz={{ base: "25.44px", md: "33.888px" }}
            fw={300}
            c="brandGrey.9"
          >
            Frequently Asked Questions
          </Title>

          <Text
            c="brandGrey.9"
            size="sm"
            fz={{ base: "14px", md: "15px", lg: "15.75px" }}
            lh={1.8}
            maw={720}
          >
            We prioritize understanding our customers&apos; needs and delivering
            meaningful value, rather than simply providing technology solutions.
          </Text>
        </Stack>

        <Accordion
          radius="md"
          variant="filled"
          chevronPosition="right"
          defaultValue={null}
          chevron={<IconPlus size={20} className="chevron" />}
          styles={{label:{color: "var(--c-link)"}}}
        >
          {faqs.map((faq) => (
            <Accordion.Item key={faq.id} value={faq.value}>
              <Accordion.Control fw={600} c="brandGrey.9">
                {faq.question}
              </Accordion.Control>

              <Accordion.Panel>
                <Text c="brandLightGrey.7" lh={1.7}>
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQ;
