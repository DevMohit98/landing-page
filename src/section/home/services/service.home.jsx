import { Box, Typography, Divider, Button } from "@mui/material";
import service1 from "../../../assets/images/png/service1.png";
import service2 from "../../../assets/images/png/service2.png";
import service3 from "../../../assets/images/png/service3.png";
import service4 from "../../../assets/images/png/service4.png";
import service5 from "../../../assets/images/png/service5.png";
import service6 from "../../../assets/images/png/service6.png";
const Services = () => {
  const cardShadow = {
    boxShadow: "10px 40px 50px 0px #E5E9F666",
    borderRadius: "20px",
  };
  return (
    <Box className="flex justify-center items-center mt-5">
      <Box className="max-w-6xl  m-5">
        <Box className="flex items-start md:items-center justify-center flex-col">
          <Typography
            as="h1"
            className="text-start md:!text-center !text-[--color-dark] !font-bold !text-4xl !normal-case">
            Our services
          </Typography>
          <Divider className="!w-14 !bg-[--color-dark] !h-1 !mt-6" />
          <Typography
            as="p"
            className="!text-start md:!text-center !font-light !text-lg !leading-7 pt-8 !text-[--color-gray] !w-full md:!w-10/12">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Typography>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-4 !mt-20">
          <Box className="!px-9 !py-12" style={cardShadow}>
            <img src={service1} alt="find_doctor" />
            <Typography
              as="h2"
              className="!font-bold !text-[--color-dark] !text-2xl !mt-6">
              Search doctor
            </Typography>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 text-[--color-gray] pt-4 !w-11/12">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Typography>
          </Box>
          <Box className="!px-9 !py-12" style={cardShadow}>
            <img src={service2} alt="find_doctor" />
            <Typography
              as="h2"
              className="!font-bold !text-[--color-dark] !text-2xl !mt-6">
              Online pharmacy
            </Typography>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 text-[--color-gray] pt-4 !w-11/12">
              Buy your medicines with our mobile application with a simple
              delivery system
            </Typography>
          </Box>
          <Box className="!px-9 !py-12" style={cardShadow}>
            <img src={service3} alt="find_doctor" />
            <Typography
              as="h2"
              className="!font-bold !text-[--color-dark] !text-2xl !mt-6">
              Consultation
            </Typography>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 text-[--color-gray] pt-4 !w-11/12">
              Free consultation with our trusted doctors and get the best
              recomendations
            </Typography>
          </Box>
          <Box className="!px-9 !py-12" style={cardShadow}>
            <img src={service4} alt="find_doctor" />
            <Typography
              as="h2"
              className="!font-bold !text-[--color-dark] !text-2xl !mt-6">
              Details info
            </Typography>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 text-[--color-gray] pt-4 !w-11/12">
              Free consultation with our trusted doctors and get the best
              recomendations
            </Typography>
          </Box>
          <Box className="!px-9 !py-12" style={cardShadow}>
            <img src={service5} alt="find_doctor" />
            <Typography
              as="h2"
              className="!font-bold !text-[--color-dark] !text-2xl !mt-6">
              Emergency care
            </Typography>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 text-[--color-gray] pt-4 !w-11/12">
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </Typography>
          </Box>
          <Box className="!px-9 !py-12" style={cardShadow}>
            <img src={service6} alt="find_doctor" />
            <Typography
              as="h2"
              className="!font-bold !text-[--color-dark] !text-2xl !mt-6">
              Tracking
            </Typography>
            <Typography
              as="p"
              className="!font-light !text-lg !leading-7 text-[--color-gray] pt-4 !w-11/12">
              Track and save your medical history and health data
            </Typography>
          </Box>
        </Box>
        <Box className="flex justify-center items-center">
          <Button
            variant="outlined"
            className="!text-[--color-primary] !border-[--color-primary] !w-52 !h-14 !rounded-full !font-bold !text-lg !mt-16 !normal-case">
            Learn more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Services;
