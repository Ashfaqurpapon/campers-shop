import React from "react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import clothes from "../../assets/images/Survivalkits1.jpg"; // replace with relevant image
import pic1 from "../../assets/images/Survivalkits2.jpg"; // replace with relevant image
import pic2 from "../../assets/images/BackpackCovers1.jpg"; // replace with relevant image
import pic3 from "../../assets/images/airmattresses1.jpg"; // replace with relevant image
import { filterProducts } from "../../features/slices/productsSlice";

const Products = () => {
  const buttons = [
    "Survival kits",
    "Backpack Covers",
    "air mattresses",
    "Portable Chairs",
    "multitool carabine",
  ];

  const recommendedProducts = [
    {
      name: "Deluxe Survival Kit",
      image: pic1, // replace with relevant image
      description: "A comprehensive kit for all your survival needs.",
    },
    {
      name: "Ultralight Backpack Cover",
      image: pic2, // replace with relevant image
      description: "Protect your gear with this lightweight cover.",
    },
    {
      name: "Comfort Air Mattress",
      image: pic3, // replace with relevant image
      description: "Sleep comfortably anywhere with this air mattress.",
    },
  ];
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Great products! They have made my outdoor experiences much better.",
    },
    {
      name: "Jane Smith",
      feedback: "The survival kit is a must-have. It has everything you need!",
    },
    {
      name: "Sam Wilson",
      feedback:
        "Highly recommend the air mattress. It's so comfortable and easy to carry.",
    },
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => (
          <div key={index} className="mr-4">
            <Link to={"/filteredProducts/" + button}>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out"
                onClick={() => dispatch(filterProducts(button))}
              >
                {button}
              </Button>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
          src={clothes}
          alt="clothes"
        ></img>
      </div>

      <div className="py-8">
        <h2 className="text-center text-2xl font-bold">
          Best Selling/Recommended Products
        </h2>
        <div className="flex justify-center flex-wrap gap-8 py-4">
          {recommendedProducts.map((product, index) => (
            <div key={index} className="w-[300px] p-4 shadow-lg rounded-md">
              <img
                className="h-[200px] w-full object-cover rounded-t-md"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/products">
            <Button
              color="blue"
              size="lg"
              ripple={true}
              className="mt-4 text-white"
            >
              View More
            </Button>
          </Link>
        </div>
      </div>
      <div className="py-8 bg-gray-100">
        <h2 className="text-center text-2xl font-bold">Testimonials</h2>
        <div className="flex justify-center flex-wrap gap-8 py-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[300px] p-4 shadow-lg rounded-md bg-white"
            >
              <p className="text-sm italic">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-bold mt-4">- {testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
