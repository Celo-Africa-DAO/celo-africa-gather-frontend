import React from "react";

const NewArrival = () => {
  const FeatureColl = [
    {
      id: 1,
      image: "/img/snnog.png",
      text: "Snoop Dog x Board Ape Yacht Club",
      description: "$10,000",
    },
    {
      id: 2,
      image: "/img/depth.png",
      text: "Balanciaga x Fortnite",
      description: "$1,000",
    },
    {
      id: 3,
      image: "/img/guy.png",
      text: "The Weekend x Board Ape Yacht Club",
      description: "$20,000",
    },
    {
      id: 4,
      image: "/img/shoes.png",
      text: "Vans x Roblox",
      description: "$100",
    },
  ];

  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="w-[70%] ">
          <h3 className="p-2">New Arrival</h3>
          <div className="flex flex-wrap w-full">
            {FeatureColl.map((item) => (
              <div key={item.id} className="p-[15px] ">
                <img
                  src={item.image}
                  alt={item.text}
                  className="w-[180px] h-40 object-cover rounded-sm"
                />
                <h4 className="mt-5 w-[180px]">{item.text}</h4>
                <p className="text-[gray]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
