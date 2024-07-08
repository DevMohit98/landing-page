import { Box, Typography, Divider, Button } from "@mui/material";
import provider from "../../../assets/images/png/provider.png";

const Download = () => {
  return (
    <Box className="flex justify-center items-center m-5 pt-0 md:pt-14">
      <Box className="max-w-6xl flex flex-col md:gap-20 md:flex-row">
        <Box className="order-1 md:order-1">
          <img src={provider} alt="download_section_image" />
        </Box>
        <Box className="order-last md:order-last mt-5 md:mt-0 md:!w-8/12">
          <Typography
            as="h1"
            className="!font-bold !text-4xl md:!text-3xl 2xl:!text-4xl !leading-snug !text-[--color-dark]">
            Leading healthcare <br />
            providers
          </Typography>
          <Divider className="!w-14 !bg-[--color-dark] !h-1 !mt-6" />
          <Typography
            as="p"
            className="!font-light !text-lg !leading-7 !text-[--color-gray] pt-6 !w-full  md:!w-10/12">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </Typography>

          <Button
            variant="outlined"
            className="!text-[--color-primary] !border-[--color-primary] !w-52 !h-14 !rounded-full !font-bold !text-lg !mt-10">
            Learn more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Download;
