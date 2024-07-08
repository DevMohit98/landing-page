import { Typography, Divider, Box , Button } from "@mui/material";
import { ArticleCard } from "../../../component";
import article1 from "../../../assets/images/png/article1.png";
import article2 from "../../../assets/images/png/article2.png";
import article3 from "../../../assets/images/png/article3.png";
const data = [
  {
    title: "Disease detection, check up in the laboratory",
    description:
      "In this case, the role of the health laboratory is very important to doa disease detection...",
    image: article1,
  },
  {
    title: "Herbal medicines that are safe for consumption",
    description:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
    image: article2,
  },
  {
    title: "Natural care for healthy facial skin",
    description:
      "A healthy lifestyle should start from now and also for your skin health.There are some...",
    image: article3,
  },
];
const Article = () => {
  return (
    <Box className="flex justify-center items-center mt-5">
      <Box className="max-w-6xl m-5">
        <Box className="flex items-start md:items-center justify-center flex-col">
          <Typography
            as="h1"
            className="text-start md:!text-center !text-[--color-dark] !font-bold !text-4xl !normal-case">
            Check out our latest article
          </Typography>
          <Divider className="!w-14 !bg-[--color-dark] !h-1 !mt-6" />
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {data.map((article, index) => {
            return (
              <ArticleCard
                key={index}
                title={article.title}
                description={article.description}
                image={article.image}
              />
            );
          })}
        </Box>
        <Box className="flex justify-center items-center">
          <Button
            variant="outlined"
            className="!text-[--color-primary] !border-[--color-primary] !w-52 !h-14 !rounded-full !font-bold !text-lg !mt-10 !normal-case">
            View all
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Article;
