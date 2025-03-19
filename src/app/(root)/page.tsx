import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { home_menu_products } from "@/constants/products";

export default function Home() {
  return (
    <div className="z-0 flex flex-col gap-20 lg:px-10 lg:py-10">
      {/* Spring Collection */}
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <div className="col-span-1 size-full">
          <Image
            className="object-cover"
            src="/images/home/spring-collection.png"
            alt="Spring Collection"
            width={2000}
            height={2000}
          />
        </div>
        <div className="flex size-full items-center justify-start">
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-16">
            <h2 className="font-ogg-regular text-6xl tracking-wide sm:text-7xl lg:text-8xl">
              Spring
            </h2>
            <h2 className="font-ogg-regular text-6xl tracking-wide sm:text-7xl lg:text-8xl">
              Collection
            </h2>
            <Link href="/shop">
            <Button title="SHOP NOW" icon="arrow" />
            </Link>
          </div>
        </div>
      </div>

      {/* Our Menu */}
      <div className="flex w-full flex-col gap-8">
        <h2 className="font-ogg-regular tracking-wider ~text-3xl/5xl">
          Our Menu
        </h2>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {home_menu_products.map((p) => {
            return (
              <Link
                href={"/product/" + p.id}
                className="relative w-full"
                key={p.id}
              >
                <Image
                  className="aspect-square h-[360px] w-full object-cover"
                  src={p.image}
                  alt={p.name}
                  width={2000}
                  height={2000}
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/40 p-3 text-white">
                  <div className="flex size-full flex-col items-center justify-center gap-2 px-5 text-center">
                    <p className="text-lg font-bold">{p.name}</p>
                    <p className="">{p.gif}</p>
                    <p className="text-lg font-bold">
                      {p.price.toLocaleString() + " VND"}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Print hidden message */}
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <div className="col-span-1 size-full">
          <Image
            className="object-cover"
            src="/images/home/print-hidden-message.png"
            alt="Spring Collection"
            width={2000}
            height={2000}
          />
        </div>
        <div className="flex size-full items-start justify-start p-3">
          <div className="flex flex-col gap-10">
            <h2 className="font-ogg-regular text-5xl tracking-wide">
              Print hidden message
            </h2>
            <h3 className="font-ogg-regular text-2xl tracking-wide">
              Applicable to all products:{" "}
              <span className="whitespace-nowrap">+ 59,000 VND/jar</span>
            </h3>
            <Button title="PRINT NOW" icon="arrow" />
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <div className="order-2 col-span-6 flex items-start justify-start p-3 md:order-1 md:col-span-7">
          <div className="flex flex-col gap-10">
            <h2 className="font-ogg-regular text-5xl tracking-wide">
              About Us
            </h2>
            <h3 className="font-ogg-regular text-2xl tracking-wide">
              KindleLove is a premium scented candle line that not only provides
              fragrance but also conveys a heartfelt message through hidden,
              secret notes inside. Each candle is a unique blend of natural
              essential oils, eco-friendly wax, and meaningful messages,
              enhancing emotional connection between the giver and receiver.
            </h3>
            <Button as="Link" href="/about" title="READ MORE" icon="arrow" />
          </div>
        </div>
        <div className="order-1 col-span-6 md:order-2 md:col-span-5">
          <Image
            className="size-full object-cover"
            src="/images/home/about-us.png"
            alt="Spring Collection"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </div>
  );
}
