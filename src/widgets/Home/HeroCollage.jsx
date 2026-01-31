import { Box, Image } from "@mantine/core";

const HeroCollage = ({ images }) => {


  return (
    <Box className="hero__visuals">
      <Box className="hero__collage">
        <Box className="hero__imgBox hero__img1">
          <Image src={images[0]} alt="" fit="cover" />
        </Box>

        <Box className="hero__imgBox hero__img2">
          <Image src={images[1]} alt="" fit="cover" />
        </Box>

        <Box className="hero__imgBox hero__img3">
          <Image src={images[2]} alt="" fit="cover" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroCollage;
