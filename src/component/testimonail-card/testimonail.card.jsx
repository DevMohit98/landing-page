import { Box, Typography, Divider, Avatar } from "@mui/material";
const TestimonialsCard = ({ image, name, designation, review }) => {
  const boxStyle = {
    background: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)",
    borderRadius: "25px",
  };
  return (
    <Box className="flex justify-center items-center m-5">
      <Box className="max-w-6xl  !w-full" style={boxStyle}>
        <Box className="py-7 md:py-16 px-5">
          <Box className="flex justify-center items-center flex-col">
            <Typography
              as="h1"
              className="!font-bold !text-2xl md:!text-3xl !text-white text-center">
              What our customer are saying
            </Typography>
            <Divider className="!w-14 !bg-white !h-1 !mt-6" />
          </Box>

          <Box className="mt-5 flex justify-between items-center flex-col md:flex-row">
            <Box className="flex justify-center items-center flex-col md:flex-row">
              <Box
                className="!w-36 !h-36 !rounded-full"
                sx={{
                  border: "12px solid white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Avatar
                  alt="user"
                  src={image}
                  sx={{ width: 133, height: 133 }}
                />
              </Box>
              <Box className="!ml-5 !w-max">
                <Typography
                  as="h2"
                  className="!font-bold !text-2xl !text-white text-center pt-3">
                  {name}
                </Typography>
                <Typography
                  as="h3"
                  className="!font-normal !text-lg !text-white text-center">
                  {designation}
                </Typography>
              </Box>
            </Box>
            <Box className="flex justify-center items-center">
              <Typography
                as="p"
                className="!font-normal !text-lg !text-white !opacity-90 w-full md:w-8/12 pt-3 md:pt-0 !text-center md:!text-start">
                {` “${review}”`}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TestimonialsCard;
