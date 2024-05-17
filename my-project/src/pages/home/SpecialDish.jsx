import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"


const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "greenF" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
};

const SpecialDish = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipes(specials); // Update the recipes state with the filtered data
      });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    nextArrow:<simpleNextArrow/>,
    prevArray:<simplePrevArrow/>
  };
  return (
    <div className="section-container my-16 relative">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h3 className="title md:w-[600px]">Our special dishes from our menu</h3>
      </div>

      <div className="absolute right-5 top-8 md:mr-24">
        <button className="btn p-2 rounded-full ml-5" onClick={()=>slider?.current?.slickPrev()}>
          <FaAngleLeft className="w-8 h-8 p-1"/>
        </button>
        <button className="btn p-2 rounded-full ml-5 bg-[#C70039]" onClick={()=>slider?.current?.slickNext()}> 
        <FaAngleRight className="w-8 h-8 p-1"/></button>
      </div>
      <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5">
        {recipes.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDish;
