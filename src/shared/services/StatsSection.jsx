import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SimpleGrid, Box, Title, Text, } from "@mantine/core";


const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  const numericValue = parseInt(value, 10);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !isNaN(numericValue)) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {isNaN(numericValue) ? value : <motion.span>{rounded}</motion.span>}
      {!isNaN(numericValue) && String(value).includes("M") && "M"}
      {!isNaN(numericValue) && String(value).includes("+") && "+"}
      {!isNaN(numericValue) && String(value).includes("%") && "%"}
    </span>
  );
};

const StatsSection = ({ data, title }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Box size="xl" pb={60} maw={"100%"}>
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

      {/* DESKTOP: Static Grid with Animation */}
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 4 }}
        visibleFrom="sm"
        bg={"#F3F2F2"}
        py={44}
        px={20}
        spacing={0}
      >
        {data.map((stat, index) => (
          <Box key={index} ta="center">
            <Title
              order={1}
              fz={{ base: "25.44px", md: "33.888px" }}
              fw={300}
              c="brandGrey.9"
            >
              <AnimatedNumber value={stat.number} />
            </Title>
            <Text
              c="brandGrey.9"
              size="sm"
              fz={{ base: "14px", md: "15px", lg: "15.75px" }}
              lh={1.8}
            >
              {stat.text}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* MOBILE: Carousel */}
      <Carousel
        hiddenFrom="sm"
        slideSize="100%"
        withControls={false}
        emblaOptions={{ loop: true }}
        plugins={[autoplay.current]}
        slideGap={0}
        bg={"#F3F2F2"}
      >
        {data.map((stat, index) => (
          <Carousel.Slide key={index}>
            <Box ta="center" py={40}>
              <Title
                order={1}
                fz={{ base: "25.44px", md: "33.888px" }}
                fw={300}
                c="brandGrey.9"
              >
                {stat.number}
              </Title>
              <Text
                c="brandGrey.9"
                size="sm"
                fz={{ base: "14px", md: "15px", lg: "15.75px" }}
                lh={1.8}
              >
                {stat.text}
              </Text>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  );
};

export default StatsSection;
