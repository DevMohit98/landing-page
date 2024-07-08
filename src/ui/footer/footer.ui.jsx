import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
      }}
      className="flex justify-center items-center px-5 py-20">
      <Box className="max-w-5xl">
        <Box className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <Box className="col-span-2">
            <Box className="!flex !items-center">
              <Typography
                component="span"
                className="!h-10 !w-10 !rounded-full !bg-white !text-[--color-primary] !font-bold !text-xl md:!text-3xl flex items-center justify-center">
                T
              </Typography>
              <Typography
                as="span"
                className="!pl-2 !font-bold !text-lg md:!text-2xl !text-white">
                Trafalgar
              </Typography>
            </Box>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 !text-white pt-5">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 !text-white pt-5">
              ©Trafalgar PTY LTD 2020. All rights reserved
            </Typography>
          </Box>
          <Box className="flex flex-col">
            <Typography as="h3" className="!font-bold !text-xl !text-white">
              Comapany
            </Typography>
            <Box className="pt-5">
              <Typography
                as="h3"
                className="!font-light !text-lg !text-white !leading-9">
                About
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Testimonials
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Find a doctor
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Apps
              </Typography>
            </Box>
          </Box>
          <Box className="flex flex-col">
            <Typography as="h3" className="!font-bold !text-xl !text-white">
              Region
            </Typography>
            <Box className="pt-5">
              <Typography
                as="h3"
                className="!font-light !text-lg !text-white !leading-9">
                Indonesia
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Singapore
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Hongkong
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Canada
              </Typography>
            </Box>
          </Box>
          <Box className="flex flex-col">
            <Typography as="h3" className="!font-bold !text-xl !text-white">
              Help
            </Typography>
            <Box className="pt-5">
              <Typography
                as="h3"
                className="!font-light !text-lg !text-white !leading-9">
                Help center
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Contact support
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                Instructions
              </Typography>
              <Typography
                as="h4"
                className="!font-light !text-lg !text-white !leading-9">
                How it works
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
