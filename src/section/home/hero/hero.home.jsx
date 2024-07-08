import { Box, Typography, Button } from "@mui/material";
import hero1 from "../../../assets/images/png/hero1.png";
const Hero = () => {
  return (
    <Box className="flex justify-center items-center  m-5">
      <Box className="max-w-6xl flex flex-col md:flex-row">
        <Box className="order-last md:order-1 mt-5 md:mt-0">
          <Typography
            as="h1"
            className="!font-bold !text-3xl lg:!text-4xl  md:!text-5xl md:!leading-snug lg:!leading-snug !text-[--color-dark]">
            Virtual healthcare
            <br />
            for you
          </Typography>
          <Typography
            as="p"
            className="!font-light !text-xl !leading-8 !text-[--color-gray] pt-6 !w-full md:!w-9/12">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Typography>
          <Button
            className="!mt-7 !bg-[--color-primary] !border-[--color-primary] !normal-case !rounded-full w-40 h-14 !font-bold !text-lg"
            variant="contained">
            Consult today
          </Button>
        </Box>
        <Box className="order-1 md:order-last">
          <img src={hero1} alt="hero_section_image" />
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;
