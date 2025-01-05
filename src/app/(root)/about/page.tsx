import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import { alsoLike } from "@/constants/products";

export default function Home() {
  return (
    <div className="z-0 flex flex-col gap-20 lg:px-10 lg:py-16">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <div className="order-1 col-span-6 flex items-start justify-start p-3 md:order-2 md:col-span-5">
          <div className="flex flex-col gap-10">
            <h2 className="font-ogg-regular text-5xl tracking-wide">
              About Us
            </h2>
            <h3 className="text-xl tracking-wide">
              KindleLove is a premium scented candle line that not only provides
              fragrance but also conveys a heartfelt message through hidden,
              secret notes inside. Each candle is a unique blend of natural
              essential oils, eco-friendly wax, and meaningful messages,
              enhancing emotional connection between the giver and receiver.
            </h3>
          </div>
        </div>
        <div className="order-2 col-span-6 md:order-1 md:col-span-7">
          <Image
            className="size-full object-cover"
            src="/images/about/1.png"
            alt="Spring Collection"
            width={2000}
            height={2000}
          />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <div className="order-2 col-span-6 flex items-start justify-start p-3 md:order-1 md:col-span-5">
          <div className="flex flex-col gap-10">
            <h2 className="font-ogg-regular text-5xl tracking-wide">
              Core Value{" "}
            </h2>
            <h3 className="text-xl tracking-wide">
              Bringing a warm experience that fosters deep connection,
              KindleLove candles make the perfect gift for special occasions
              like birthdays and anniversaries. Customers can personalize the
              message—be it a heartfelt wish or a note of love—to strengthen
              bonds with loved ones. Or, they may simply want to add a touch of
              elegance and freshness to their living space.
            </h3>
          </div>
        </div>
        <div className="order-1 col-span-6 md:order-2 md:col-span-7">
          <Image
            className="size-full object-cover"
            src="/images/about/2.png"
            alt="Spring Collection"
            width={2000}
            height={2000}
          />
        </div>
      </div>

      <div className="w-full">
        <h2 className="font-ogg-regular mb-10 tracking-wider ~text-3xl/5xl">
          You may also like
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 xl:grid-cols-4">
          {alsoLike.map((p) => {
            return (
              <Link
                href={"/product/" + p.id}
                className="relative flex w-full flex-col gap-3"
                key={p.id}
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
