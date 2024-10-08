import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ProductType } from "@/pages";

// Dummy data for featured collection
const dummyFeaturedProducts = [
  {
    id: 6,
    name: "Cat",
    category: "pets",
    image: "/img/depth.png",
    price: "199.99",
    rating: 4.9,
    stock: 7,
    description: "Cute cat with playful personality.",
  },
  {
    id: 6,
    name: "Cat",
    category: "pets",
    image: "/img/art.png",
    price: "199.99",
    rating: 4.9,
    stock: 7,
    description: "Cute cat with playful personality.",
  },
  {
    id: 6,
    name: "Cat",
    category: "pets",
    image: "/img/guy.png",
    price: "199.99",
    rating: 4.9,
    stock: 7,
    description: "Cute cat with playful personality.",
  },
  {
    id: 6,
    name: "Cat",
    category: "pets",
    image: "/img/art.png",
    price: "199.99",
    rating: 4.9,
    stock: 7,
    description: "Cute cat with playful personality.",
  },
];

const FeaturedCollection = () => {
  const currency = "cUSD"; // Placeholder for currency
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Set products with the dummy data
    setProducts(dummyFeaturedProducts);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[70%]">
          <h3 className="p-2 text-3xl">Featured Collection</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
            {products.map((item) => (
              <Link
                href={`/item/${item.id}`}
                key={item.id}
                className="hover:bg-gray-800 p-[15px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-28 object-cover rounded-sm"
                />
                <h4 className="mt-5 text-xl">{item.name}</h4>
                <p className="text-[gray] text-sm mt-3">
                  Left in stock: {item.stock}
                </p>
                <p className="text-lg">
                  Price: {Number(item.price).toFixed(2)} {currency}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCollection;
