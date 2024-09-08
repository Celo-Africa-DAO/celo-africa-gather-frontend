// import { useRouter } from "next/router";

// const item = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <div className="mt-[52px]">
//       <h4 className="pl-[74px] font-Manrope  mb-[53px] text-[22px] leading-[28px] font-bold text-[#FFFFFF]">
//         NFT Product
//       </h4>
//       <div className="flex items-center pl-[40px] mb-[20px]">
//         <img
//           src="/logo/product.svg"
//           alt="Cryptovoxels"
//           className="w-[580px] h-[301px] mr-[103px]"
//         />

//         <div className="flex flex-col">
//           <p className="text-[#FFFFFF] font-Manrope text-[48px] leading-[65.57px]  font-medium mb-[91px]">
//             Cryptovoxels
//           </p>
//           <button className="w-[417px] text-[14px] leading-[21px] font-manrope font-bold mr-[61px] px-[16px] py-[8px] bg-[#1A5CE5] text-[#FFFFFF] rounded">
//             View in...
//           </button>
//         </div>
//       </div>

//       <div className="">
//         <h4 className="pt-[15px] w-[902px] h-[28px]">Description</h4>
//         <p className="">
//           Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
//           vulputate libero et velit interdum, ac aliquet odio mattis.
//         </p>
//       </div>

//       <div>
//         <h4 className="">Provenance</h4>
//       </div>
//     </div>
//   );
// };

// export default item;


"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

// Dummy data for the product
const dummyProduct = {
  id: 6,
  name: "Smart Watch Pro",
  category: "electronics",
  image: "/img/depth.png",
  price: "120.00",
  rating: 4.5,
  stock: 5,
  description: "This smart watch comes with all the features you need for a connected life. Stay updated with notifications, track your fitness, and much more.",
};

const Item = () => {
  const currency = "cUSD"; // Placeholder for currency
  const [product, setProduct] = useState(dummyProduct); // Use dummy product data
  const { chainId } = useAccount();

  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  useEffect(() => {
    // In a real-world scenario, you'd fetch the product data by ID.
    // Here, we're simulating it by setting the dummy product.
    setProduct(dummyProduct);
  }, [id]);

  const handleBuy = async () => {
    try {
      toast.loading("Approving, please wait...");
      console.log(product.price);
      // Simulate buying process
      setTimeout(() => {
        toast.dismiss();
        toast.success("Purchase successful");
        router.refresh();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Failed to purchase item");
    }
  };

  return (
    <div className="mt-[52px] p-3 md:p-6">
      <h4 className="pl-[74px] font-Manrope mb-[53px] text-[22px] leading-[28px] font-bold text-[#FFFFFF]">
        Product
      </h4>
      <div className="flex items-center pl-[40px] mb-[20px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-[580px] h-[301px] mr-[103px]"
        />

        <div className="flex flex-col space-y-2">
          <p className="text-[#FFFFFF] font-Manrope text-[48px] leading-[65.57px] font-medium mb-[91px]">
            {product.name}
          </p>
          <p className="text-[gray] text-sm mt-3">
            Left in stock: {product.stock}
          </p>

          <p className="text-xl">
            Price: {Number(product.price).toFixed(2)} {currency}
          </p>
          <button
            onClick={handleBuy}
            className="w-[417px] text-[14px] leading-[21px] font-manrope font-bold mr-[61px] px-[16px] py-[8px] bg-[#1A5CE5] text-[#FFFFFF] rounded"
          >
            Buy
          </button>
        </div>
      </div>

      <div className="">
        <h4 className="pt-[15px] font-bold text-xl w-[902px] h-[28px] mb-5">
          Description
        </h4>
        <p className="">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
