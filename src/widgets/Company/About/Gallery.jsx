import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Box, Container, Image, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { gallery } from "../../../entities/company/about/model/gallery";

const Gallery = () => {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Box component="section" pb={{ base: 40, md: 60 }}>
      <Container size="xl">
        <Title
          order={2}
          ta={"center"}
          fw={500}
          c="brandGrey.9"
          mb={{ base: 20, md: 30 }}
        >
          Gallery
        </Title>

        <Carousel
          withIndicators={!isMobile}
          withControls={!isMobile}
          emblaOptions={{ loop: true }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          slideSize="100%"
          slideGap="md"
          align="center"
          styles={{
            viewport: {
              borderRadius: 16,
            },
          }}
        >
          {gallery.map((item) => (
            <Carousel.Slide key={item.imageSrc}>
              <Box
                h={{ base: 220, sm: 260, md: 500 }}
                style={{ overflow: "hidden", borderRadius: 16 }}
              >
                <Image
                  src={item.imageSrc}
                  alt="Gallery image"
                  h="100%"
                  w="100%"
                  fit="contain"
                  fallbackSrc="https://placehold.co/600x400?text=No+Image"
                />
              </Box>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Gallery;
