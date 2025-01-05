"use client";

import "./ProductDetails.css";

import Button from "./common/Button";
import Image from "next/image";
import React from "react";

interface ProductDetailsProps {
  title?: string;
  price?: string;
  burningTime?: string;
  sleepTight?: string;
  doUrZest?: string;
  crownUp?: string;
  flawsome?: string;
  size?: string;
  image?: string;
  name?: string;
  gif?: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  price = "450,000 VND",
  burningTime = "100 hours",
  sleepTight = "main tone is pine wood, warm",
  doUrZest = "sour, cool (lemon, cypress, ..)",
  crownUp = "sweet, feminine",
  flawsome = "sweet, cool",
  size = "(500g)",
  image = "",
  name = "",
  gif = "",
}) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className="w-full grid gap-10 grid-cols-1 lg:grid-cols-2">
      <div className="product-image">
        <Image
          src={image}
          className="size-full object-cover"
          alt="Product"
          width={2000}
          height={2000}
        />
      </div>

      <div className="product-info">
        <div className="product-header">
          <h1 className="font-medium text-4xl">
            {name}: <span className="font-normal">{gif}</span>
          </h1>
          <h2 className="product-price">{price}</h2>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <div
              onClick={() => setQuantity(quantity + 1)}
              className="absolute cursor-pointer top-1/2 -translate-y-1/2 left-0 grid place-items-center px-3 text-xl h-full"
            >
              +
            </div>
            <div
              onClick={() => setQuantity(quantity - 1)}
              className="absolute cursor-pointer top-1/2 -translate-y-1/2 right-0 grid place-items-center px-3 text-xl h-full"
            >
              -
            </div>
            <Button title={quantity + ""} className="!w-[100px] text-center" />
          </div>
          <Button title="ADD TO CART" className="!w-[300px] text-center" />
        </div>

        <div className="w-full h-[1px] bg-gray-500 my-10"></div>

        <div className="text-lg">
          <p className="font-medium">
            <strong className="font-semibold">Burning time:</strong>{" "}
            {burningTime}
          </p>
          <p className="font-medium">
            <strong className="font-semibold">Sleep tight:</strong> {sleepTight}
          </p>
          <p className="font-medium">
            <strong className="font-semibold">Do ur zest:</strong> {doUrZest}
          </p>
          <p className="font-medium">
            <strong className="font-semibold">Crown up:</strong> {crownUp}
          </p>
          <p className="font-medium">
            <strong className="font-semibold">Flawsome:</strong> {flawsome}
          </p>
        </div>
        <p className="font-medium text-lg">
          <strong className="font-semibold">Size:</strong> {size}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
