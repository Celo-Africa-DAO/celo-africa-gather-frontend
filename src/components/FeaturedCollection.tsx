import React from "react";

const FeaturedCollection = () => {
  const FeatureColl = [
    {
      id: 1,
      image: "/img/water.png",
      text: "The Future of Music",
      description:
        "Snoop Dogg, The Weekend, and more",
    },
    {
      id: 2,
      image: "/img/lady.png",
      text: "Digital Fashion Week",
      description: "Shoe runway looks from top designer",
    },
    {
      id: 3,
      image: "/img/mirror.png",
      text: "Emerging Artists",
      description: "Discover the next big name",
    },
    {
      id: 4,
      image: "/img/adventure.png",
      text: "Art for the Metaverse",
      description: "Collect digital art inspired by the internet",
    },
  ];

  return (
    <>
      <div className=" flex items-center justify-center">
        <div className=" w-[70%] ">
          <h3 className="p-2">Featured Collection</h3>

          <div className="flex flex-wrap w-full ">
            {FeatureColl.map((item) => (
              <div key={item.id} className="p-[15px]">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-[180px] h-28 object-cover rounded-sm"
                />
                <h4 className="mt-5 w-[180px]">{item.text}</h4>
                <p className="text-[gray] w-[180px] ">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCollection;
