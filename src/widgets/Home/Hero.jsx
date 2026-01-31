import { useRef } from "react";
// import { MdOutlineNavigateNext } from "react-icons/md";
// import { GrPrevious } from "react-icons/gr";
import { slides } from "../../entities/home/model/index";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeroCollage from "./HeroCollage";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 7000 }));

  return (
    <Box component="section" className="hero" py={{ base: 100, md: 80 }}>
      <Carousel
        className="hero__carousel"
        withIndicators
        withControls={true}
        emblaOptions={{ loop: true }}
        plugins={[autoplay.current]}
        my={{ base: 50, md: "5rem" }}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideGap={0}
        //nextControlIcon={<MdOutlineNavigateNext size={16} />}
        //previousControlIcon={<GrPrevious size={16} />}
        align="start"
        classNames={{
          root: "root",
          controls: "controls",
          control: "control",
          indicators: "indicators",
          indicator: "indicator",
        }}
      >
        {slides.map((slide) => (
          <Carousel.Slide key={slide.id}>
            <Container size="xl" maw={{ base: "80%", md: "90%" }}>
              <Grid align="center" gutter={{ base: "xl", lg: 80 }}>
                {/* Left: Text */}
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                  <Stack gap="xl" pt={{ base: 0, md: 80, lg: 80 }}>
                    <Title
                      order={1}
                      fz={{ base: "25.44px", md: "36px" }}
                      fw={300}
                      c="brandGrey.9"
                    >
                      {slide.title}
                    </Title>

                    <Text
                      c="brandLightGrey.7"
                      fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                      maw={620}
                      lh={1.6}
                    >
                      {slide.desc}
                    </Text>

                    <Button
                      size="md"
                      radius="md"
                      color="brandOrange.4"
                      fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                      fw={300}
                      mb={{ base: 80 }}
                      onClick={() => {
                        // routing
                      }}
                      style={{ width: "fit-content" }}
                    >
                      {slide.buttonText}
                    </Button>
                  </Stack>
                </Grid.Col>

                {/* Right: Collage */}
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }} visibleFrom="md">
                  <HeroCollage images={slide.images} />
                </Grid.Col>
              </Grid>
            </Container>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default Hero;
