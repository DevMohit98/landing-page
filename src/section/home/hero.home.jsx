import { Box, Typography, Button } from "@mui/material";
import hero1 from "../../assets/images/png/hero1.png";

const Hero = () => {
  return (
    <Box className=" flex justify-center !mt-5 p-4">
      <Box className="max-w-8xl flex justify-center items-center flex-col md:flex-row">
        <Box className="md:w-6/12 order-last md:order-1 !mt-4 md:!mt-0 flex justify-center flex-col items-center lg:flex-none lg:justify-start lg:items-start">
          <Typography
            variant="h1"
            className="!font-bold !text-4xl !leading-snug lg:!text-4xl lg:!leading-snug 2xl:!text-5xl !text-gray-800 2xl:!leading-snug text-center md:text-left">
            Virtual healthcare
            <br />
            for you
          </Typography>
          <Typography
            variant="body1"
            className="!font-light !text-xl !text-gray-600 !pt-6 !leading-8 text-center md:text-left  lg:!w-full !w-full">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Typography>
          <Button
            variant="contained"
            className="!mt-5 md:!mt-12 !bg-blue-500 !border-blue-500 !rounded-full !font-bold !text-lg !normal-case !w-52 !h-14">
            Consult today
          </Button>
        </Box>
        <Box className="order-1 md:order-last">
          <img src={hero1} alt="hero section" className="max-w-full md:max-w-lg"/>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
