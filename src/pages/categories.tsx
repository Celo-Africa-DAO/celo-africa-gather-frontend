import Link from "next/link";
import React from "react";

const Categories = () => {
  const a = [
    {
      id: 1,
      title: "Featured NFTs",
      img: "/img/art.png",
      text: "Digital Art",
      description: "12,000 items",
    },
    {
      id: 2,
      img: "/img/collectibles.png",
      text: "Collectibles",
      description: "20,000 items",
    },
    {
      id: 3,
      img: "/img/Depth.png",
      text: "Virtual Real Estate",
      description: "30,000 items",
    },
  ];

  const b = [
    {
      id: 4,
      title: "Digital Arts",
      img: "/img/Abstract.png",
      text: "Abstract Art",
      description: "100 items",
    },
    {
      id: 5,
      img: "/img/pop.png",
      text: "Pop Art",
      description: "200 items",
    },
    {
      id: 6,
      img: "/img/Surreal-art.png",
      text: "Surreal Art",
      description: "300 items",
    },
  ];

  const c = [
    {
      id: 7,
      title: "Virtual Real Estate",
      img: "/img/metaverse.png",
      text: "Metaverse City",
      description: "1000 items",
    },
    {
      id: 8,
      img: "/img/decentraland.png",
      text: "Decentraland",
      description: "2000 items",
    },
    {
      id: 9,
      img: "/img/crytovoxels.png",
      text: "Cryptovoxels",
      description: "3000 items",
    },
  ];

  return (
    <>
      <div className="px-4 md:px-8 lg:px-[160px] my-4">
        <h3 className="text-[#9EA6B8] text-[16px] font-medium my-[36px]">
          Categories / NFTs
        </h3>
      </div>

      <div className="px-4 md:px-8 lg:px-[160px]">
        <h2 className="text-[18px] text-[#FFFFFF] font-semibold my-5">
          Featured NFTs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
          {a.map((item) => (
            <>
              <div key={item.id} className="">
                <Link
                  href={`/item/${item.id}`}
                  className=" rounded-lg  flex flex-col"
                >
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-full h-auto md:w-[315px] md:h-[301px]"
                  />
                  <h3 className="text-[16px] text-[#FFFFFF] font-medium mt-5">
                    {item.text}
                  </h3>
                  <p className="text-[14px] text-[#9EA6B8] mt-2">
                    {item.description}
                  </p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-[160px]">
        <h2 className="text-[18px] text-[#FFFFFF] font-semibold my-5">
          Digital Arts{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
          {b.map((item) => (
            <>
              <div key={item.id} className="">
                <Link
                  href={`/item/${item.id}`}
                  className=" rounded-lg  flex flex-col"
                >
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-full h-auto md:w-[315px] md:h-[301px]"
                  />
                  <h3 className="text-[16px] text-[#FFFFFF] font-medium mt-5">
                    {item.text}
                  </h3>
                  <p className="text-[14px] text-[#9EA6B8] mt-2">
                    {item.description}
                  </p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-[160px]">
        <h2 className="text-[18px] text-[#FFFFFF] font-semibold my-5">
          Virtual Real Estate.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
          {c.map((item) => (
            <>
              <div key={item.id} className="">
                <Link
                  href={`/item/${item.id}`}
                  className=" rounded-lg  flex flex-col"
                >
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-full h-auto md:w-[315px] md:h-[301px]"
                  />
                  <h3 className="text-[16px] text-[#FFFFFF] font-medium mt-5">
                    {item.text}
                  </h3>
                  <p className="text-[14px] text-[#9EA6B8] mt-2">
                    {item.description}
                  </p>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
