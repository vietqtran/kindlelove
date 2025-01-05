"use client";

import { categories, products } from "@/constants/products";

import Accordion from "@/components/common/Accordion";
import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShopPage() {
  const [currentCategory, setCurrentCategory] = useState("all");
  return (
    <div className="z-0 flex flex-col gap-2 space-y-2 lg:px-10 lg:py-10">
      <div className="flex w-full items-center justify-start gap-3 text-left">
        <Link className="font-ogg-light" href={"/"}>
          HOME
        </Link>
        <span className="text-sm">|</span>
        <Link className="font-ogg-regular font-semibold" href={"/"}>
          SHOP
        </Link>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 hidden flex-col gap-4 pt-36 md:flex">
          <div
            className={`font-ogg-light hover:font-bold text-lg cursor-pointer ${
              currentCategory === "all" && "font-bold"
            }`}
          >
            All
          </div>
          {categories.map((c) => {
            return (
              <div
                onClick={() => setCurrentCategory(c.name)}
                key={c.id}
                className={`${
                  currentCategory === c.name && "font-bold"
                } font-ogg-light text-lg hover:font-bold cursor-pointer`}
              >
                {c.text}
              </div>
            );
          })}
        </div>
        <div className="col-span-3 mt-5 space-y-10 md:mt-0 md:space-y-20">
          <h2 className="font-ogg-regular text-center text-5xl md:text-7xl">
            {currentCategory === "all"
              ? "All"
              : categories.filter((c) => c.name === currentCategory)[0].text}
          </h2>
          <div className="md:hidden">
            <Accordion
              categories={categories}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((p) => {
              return (
                <div className="relative flex w-full flex-col gap-3" key={p.id}>
                  <Image
                    className="aspect-square h-[360px] w-full object-cover"
                    src={p.image}
                    alt={p.name}
                    width={2000}
                    height={2000}
                  />
                  <div className="text-xl">
                    <span className="font-medium">{p.name}:</span>
                    {` `}
                    <span>{p.gif}</span>
                  </div>
                  <div className="text-2xl font-bold">
                    {`${p.price.toLocaleString()} VND`}
                  </div>
                  <Button
                    title="ADD TO CART"
                    className="mt-5 w-full text-center"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full">
        <h2 className="font-ogg-regular mb-10 tracking-wider ~text-3xl/5xl">
          Recently Viewed
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => {
            return (
              <Link
                href={"/product/" + p.id}
                key={p.id}
                className="relative flex w-full flex-col gap-3"
              >
                <Image
                  className="aspect-square h-[360px] w-full object-cover"
                  src={p.image}
                  alt={p.name}
                  width={2000}
                  height={2000}
                />
                <div className="text-xl">
                  <span className="font-medium">{p.name}:</span>
                  {` `}
                  <span>{p.gif}</span>
                </div>
                <div className="text-2xl font-bold">
                  {`${p.price.toLocaleString()} VND`}
                </div>
                <Button
                  title="ADD TO CART"
                  className="mt-5 w-full text-center"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
