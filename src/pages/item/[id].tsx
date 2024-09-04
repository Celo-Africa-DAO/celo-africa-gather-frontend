import { useRouter } from "next/router";

const item = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="mt-[52px]">
      <h4 className="pl-[74px] font-Manrope  mb-[53px] text-[22px] leading-[28px] font-bold text-[#FFFFFF]">
        NFT Product
      </h4>
      <div className="flex items-center pl-[40px] mb-[20px]">
        <img
          src="/logo/product.svg"
          alt="Cryptovoxels"
          className="w-[580px] h-[301px] mr-[103px]"
        />

        <div className="flex flex-col">
          <p className="text-[#FFFFFF] font-Manrope text-[48px] leading-[65.57px]  font-medium mb-[91px]">
            Cryptovoxels
          </p>
          <button className="w-[417px] text-[14px] leading-[21px] font-manrope font-bold mr-[61px] px-[16px] py-[8px] bg-[#1A5CE5] text-[#FFFFFF] rounded">
            View in...
          </button>
        </div>
      </div>

      <div className="">
        <h4 className="pt-[15px] w-[902px] h-[28px]">Description</h4>
        <p className="">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div>
        <h4 className="">Provenance</h4>
      </div>
    </div>
  );
};

export default item;
