import { Slider ,TestimonialsCard } from "../../../component";
import testimonials from "../../../assets/images/png/testimonials.png";
const data = [
  {
    image: testimonials,
    name: "Edward Newgate",
    designation: "Founder Circle",
    review:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    image: testimonials,
    name: "Johne Doe",
    designation: "Founder Round",
    review:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    image: testimonials,
    name: "Ram",
    designation: "Founder ENT",
    review:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    image: testimonials,
    name: "Lewis",
    designation: "Formula 1",
    review:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
];
const Testimonials = () => {
  return (
    <Slider>
      {data.map((testimonialData, index) => {
        return (
          <TestimonialsCard
            key={index}
            image={testimonialData.image}
            name={testimonialData.name}
            designation={testimonialData.designation}
            review={testimonialData.review}
          />
        );
      })}
    </Slider>
  );
};
export default Testimonials;
