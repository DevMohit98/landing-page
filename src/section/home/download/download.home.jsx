import { Box, Typography, Divider, Button } from "@mui/material";
import download from "../../../assets/images/png/download.png";

const Download = () => {
  return (
    <Box className="flex justify-center items-center m-5 pt-0 md:pt-14">
      <Box className="max-w-6xl flex flex-col md:flex-row">
        <Box className="order-last md:order-1 mt-5 md:mt-0 md:!w-8/12">
          <Typography
            as="h1"
            className="!font-bold !text-4xl  md:!text-3xl 2xl:!text-4xl  !leading-snug !text-[--color-dark]">
            Download our
            <br />
            mobile apps
          </Typography>
          <Divider className="!w-14 !bg-[--color-dark] !h-1 !mt-6" />
          <Typography
            as="p"
            className="!font-light !text-lg !leading-7 !text-[--color-gray] pt-6 !w-full  md:!w-10/12">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </Typography>

          <Button
            variant="outlined"
            className="!text-[--color-primary] !border-[--color-primary] !w-52 !h-14 !rounded-full !font-bold !text-lg !mt-10">
            Download
          </Button>
        </Box>
        <Box className="order-1 md:order-last">
          <img src={download} alt="download_section_image" />
        </Box>
      </Box>
    </Box>
  );
};
export default Download;
