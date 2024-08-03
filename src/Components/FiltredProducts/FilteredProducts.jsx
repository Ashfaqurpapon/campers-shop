import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPriceDescending,
  filterByColor,
  filterBySize,
  sortByPriceAscending,
} from "../../features/slices/productsSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8 ">
            <div className="flex items-center">
              {genderButtons.map((item, index) => {
                return <div key={index}></div>;
              })}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(sortByPriceAscending())}
              >
                High Price
              </Button>
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(sortByPriceDescending())}
              >
                Low Price
              </Button>
            </div>
            <div className="pr-14">
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="grid grid-cols-3 justify-items-center py-8 gap-12 ">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index} className="">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
