import * as React from "react";
import {
  Button,
  Typography,
  CardMedia,
  CardContent,
  Card,
  CardActions,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const cardStyle = {
  boxShadow: "10px 40px 50px 0px #E5E9F666",
  borderRadius: "20px",
};

const ArticleCard = ({ image, description, title }) => {
  return (
    <Card style={cardStyle}>
      <CardMedia sx={{ height: 240 }} image={image} />
      <CardContent className="m-5">
        <Typography
          gutterBottom
          variant="h1"
          className="!font-bold !text-xl !text-[--color-dark]">
          {title}
        </Typography>
        <Typography
          variant="body2"
          as="p"
          className="!font-light !text-[--color-gray] pt-3">
          {description}
        </Typography>
        <CardActions className="!p-0 !mt-6">
          <Button
            size="small"
            className="!text-[--color-primary] !font-semibold !text-sm !normal-case">
            Read more <ArrowRightAltIcon className="ml-2 mt-1" />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default ArticleCard;
