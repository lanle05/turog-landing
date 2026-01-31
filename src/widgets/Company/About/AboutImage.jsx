import { Box, Image } from "@mantine/core";

const AboutImage = ({ index, image, title }) => {
  return (
    <>
      <Box
        className="about-image-wrapper"
        visibleFrom="md"
        style={{ float: "right", marginRight: "7rem" }}
      >
        <Box className="about-image-wrapper__box" />
        <Image
          className="about-image-wrapper__img"
          src={image}
          alt={title}
        ></Image>
      </Box>
    </>
  );
};

export default AboutImage;
