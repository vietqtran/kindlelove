import { alsoLike, products } from "@/constants/products";

import Button from "@/components/common/Button";
import Image from "next/image";
import Link from "next/link";
import ProductDetails from "@/components/ProductDetails";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  return (
    <div className="z-0 flex flex-col gap-20 lg:px-10 lg:py-16">
      <ProductDetails
        title={product?.name}
        price={`${product?.price.toLocaleString()} VND`}
        burningTime={product?.attrs.burning_time}
        sleepTight={product?.attrs.sleep_tight}
        doUrZest={product?.attrs.do_ur_zest}
        crownUp={product?.attrs.crown_up}
        flawsome={product?.attrs.flaw_some}
        size={product?.attrs.weight}
        image={product?.image}
        name={product?.name}
        gif={product?.gif}
      />
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
