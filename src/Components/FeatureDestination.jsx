import React from "react";
import Bali from "../assets/Bali.jpg";
import Paris from "../assets/Paris.jpg";
import Tokyo from "../assets/Tokyo.jpg";
import India from "../assets/India.jpg";
import Venice from "../assets/Venice.jpg";
import NEXT2 from "../assets/next.svg";
import back from "../assets/back.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star } from "lucide-react";
import "../Components/Css/reactSlick.css";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={NEXT2} alt="prevArrow" {...props} />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={back} alt="prevArrow" {...props} />
);

const FeatureDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const destinationJson = [
    {
      name: "Baliya",
      img: Bali,
      time: "5 Days - 4 Nights",
      star: "3 (12 reviews)",
      price: "69,999",
    },
    {
      name: "Venice",
      img: Venice,
      time: "5 Days - 4 Nights",
      star: "3 (12 reviews)",
      price: "69,999",
    },
    {
      name: "Tokyo",
      img: Tokyo,
      time: "5 Days - 4 Nights",
      star: "3 (12 reviews)",
      price: "69,999",
    },
    {
      name: "India",
      img: India,
      time: "5 Days - 4 Nights",
      star: "3 (12 reviews)",
      price: "69,999",
    },
    {
      name: "Paris",
      img: Paris,
      time: "5 Days - 4 Nights",
      star: "3 (12 reviews)",
      price: "69,999",
    },
    {
      name: "Tokyo",
      img: Tokyo,
      time: "5 Days - 4 Nights",
      star: "3 (12 reviews)",
      price: "69,999",
    },
  ];
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:pt-32 px-6 md:px-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
            Featured Destinations
          </h2>
          <hr className="text-red-500 w-[200px] bg-[#60B5FF] mx-auto h-1 mb-10" />
          <div className="slider-container">
            <Slider {...settings}>
              {destinationJson.map((destination) => (
                <div>
                  <div
                    key={destination.name}
                    className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5 mr-5"
                  >
                    <div className="">
                      <img
                        src={destination.img}
                        alt={destination.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-48 hover:scale-110 transition-all"
                      />
                      <div className="p-4">
                        <p className="text-gray-500 flex items-center gap-1 text-sm mb-1">
                          <Clock width={15} />
                          {destination.time}
                        </p>
                        <h3 className="text-xl font-bold mb-2">
                          {destination.name}
                        </h3>
                        <p className="flex gap-1 items-center">
                          <Star width={20} fill="#FFD700" />
                          {destination.star}
                        </p>
                        <p className="text-gray-600 mb-4 mt-2">
                          Experience the beauty and culture of{" "}
                          {destination.name}
                        </p>
                        <div className="flex gap-4">
                          <button className="px-3 py-2 bg-[#60B5FF] rounded-md text-white">
                            ${destination.price}
                          </button>
                          <button className="px-3 py-2 bg-black rounded-md text-white">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureDestination;
