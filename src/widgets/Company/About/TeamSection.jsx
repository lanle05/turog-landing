import { useRef } from "react";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Paper, Stack, Box, Text, Image, Flex, Title } from "@mantine/core";
import { team } from "../../../entities/company/about/model/";

const TeamCard = ({ image, name, position }) => (
  <Paper
    // className={`feature-card feature-card--${position}`}
    radius="lg"
    p="md"
    // shadow="md"
    style={{
      border: "1px solid #D5DBE1",
    }}
  >
    <Flex gap="sm" direction={"column"} justify={"center"} align={"center"}>
      <Box className="member-image-wrapper">
        <Image className="member-image" src={image} alt={name} />
      </Box>
      <Text
        fz={{ base: 13, sm: 14, md: 15, lg: 16, xl: 18 }}
        c="brandGrey.9"
        fw={500}
        lh={{ base: 1.4, md: 1.6 }}
        lts={0.5}
      >
        {name}
      </Text>
      <Text
        c="brandGrey.9"
        fz={{ base: 12, sm: 12.5, md: 13, lg: 13.5, xl: 14 }}
        lh={{ base: 1.5, xl: 1.75 }}
        fw={300}
      >
        {position}
      </Text>
    </Flex>
  </Paper>
);

const TeamSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Title
        order={2}
        my={{ base: 15, md: 25 }}
        ta={"center"}
        fw={500}
        c="brandGrey.9"
      >
        Leadership Team
      </Title>
      <Carousel
        withIndicators={false}
        withControls={false}
        controlsOffset="xl"
        maw={"70%"}
        mx={"auto"}
        my={{ base: 15, md: 25 }}
        type="container"
        slideSize={{ base: "100%", "300px": "50%", "500px": "33.333333%" }}
        slideGap={{ base: 0, "300px": "md", "500px": "lg" }}
        emblaOptions={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        className="team-carousel"
        styles={{
          viewport: {
            height: "240px",
          },
        }}
      >
        {team.map((member) => (
          <Carousel.Slide key={member.name}>
            <TeamCard
              image={member.image}
              name={member.name}
              position={member.position}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default TeamSection;
