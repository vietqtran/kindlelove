"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsOpenMenu(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[99999] h-14 w-full border-b border-b-black bg-[var(--background)] md:h-16 lg:h-20 xl:h-[116px]">
      <div className="mx-auto size-full max-w-[1440px] md:px-[30px] lg:px-[40px] xl:px-[60px] xl:py-10">
        <div className="relative flex size-full items-center justify-between">
          <div className="hidden items-center md:flex lg:gap-[40px] xl:gap-[50px]">
            <Link
              href={"/shop"}
              className={`${
                pathname === "/shop" && "font-semibold"
              } hover:font-semibold w-[78px] text-center cursor-pointer`}
            >
              SHOP
            </Link>
            <Link
              href={"/about"}
              className={`${
                pathname === "/about" && "font-semibold"
              } hover:font-semibold w-[78px] text-center cursor-pointer`}
            >
              ABOUT
            </Link>
            <Link
              href={"#"}
              className={`${
                pathname === "/contact" && "font-semibold"
              } hover:font-semibold w-[78px] text-center cursor-pointer`}
            >
              CONTACT
            </Link>
          </div>
          <div className="hidden h-full items-center gap-[50px] md:flex">
            <div className="cursor-pointer text-center hover:font-semibold">
              <Image
                className="min-h-6 min-w-6"
                src={"/images/icons/search.svg"}
                width={24}
                height={24}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="cursor-pointer text-center hover:font-semibold">
              <Image
                className="min-h-6 min-w-6"
                src={"/images/icons/cart.svg"}
                width={24}
                height={24}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="cursor-pointer text-center hover:font-semibold">
              <Image
                className="min-h-6 min-w-6"
                src={"/images/icons/profile.svg"}
                width={24}
                height={24}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div
            onClick={() => setIsOpenMenu(true)}
            className="cursor-pointer p-4 text-center hover:font-semibold md:hidden"
          >
            <Image
              className="min-h-6 min-w-6"
              src={"/images/icons/menu.svg"}
              width={24}
              height={24}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="cursor-pointer p-4 text-center hover:font-semibold md:hidden">
            <Image
              className="min-h-6 min-w-6"
              src={"/images/icons/cart.svg"}
              width={24}
              height={24}
              alt=""
              loading="lazy"
            />
          </div>
          <Link
            href={"/"}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <h2 className="text-2xl font-bold text-[#503101] lg:text-4xl xl:text-[40px]">
              KindleLove
            </h2>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isOpenMenu && (
          <div
            onClick={() => setIsOpenMenu(false)}
            className="fixed inset-0 z-10 h-screen w-screen bg-black/50"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-full w-[300px] bg-[var(--background)]"
            >
              <div
                onClick={() => setIsOpenMenu(false)}
                className="absolute right-0 top-0 z-10 cursor-pointer p-2"
              >
                <Image
                  className="min-h-6 min-w-6"
                  src={"/images/icons/close.svg"}
                  width={32}
                  height={32}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="relative size-full py-10">
                <div className="w-full">
                  <Link
                    href={"/shop"}
                    className={`hover:font-semibold block border-b-black p-4 border-b w-full ${
                      pathname === "/shop" && "font-semibold"
                    }`}
                  >
                    SHOP
                  </Link>
                  <Link
                    href={"/about"}
                    className={`hover:font-semibold block border-b-black p-4 border-b w-full ${
                      pathname === "/about" && "font-semibold"
                    }`}
                  >
                    ABOUT
                  </Link>
                  <Link
                    href={"#"}
                    className={`hover:font-semibold block border-b-black p-4 border-b w-full ${
                      pathname === "/contact" && "font-semibold"
                    }`}
                  >
                    CONTACT
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
