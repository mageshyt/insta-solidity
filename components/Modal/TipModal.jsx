import React, { useRef } from "react";
import { useAppContext } from "../../context/context";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const TipModal = () => {
  const { tipPost } = useAppContext();
  // useref
  const router = useRouter();
  const tipRef = useRef(null);
  const handleTip = async () => {
    // tip_amount should be num
    const id = router.asPath.split("/")[2];

    if (isNaN(tipRef.current.value) || tipRef.current.value <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }
    tipPost(tipRef.current.value, id).then(() => {
      router.back();
    });
  };
  return (
    <div className="h-[320px] w-[400px]  center  bg-[#121212] rounded-md ">
      {/* tip amount */}
      <div className=" flex flex-col">
        <h1 className="text-[#fff] text-center text-xl font-bold mt-[20px]">
          Tip Amount
        </h1>
        <input
          ref={tipRef}
          type="text"
          className="w-[100px] mt-4 outline-none h-[40px] bg-[#121212] border-[#121212] text-[#fff] text-center"
          placeholder="0.00 eth"
        />

        {/* tip buttons */}
        <button
          onClick={handleTip}
          className=" text-center bg-blue-500 w-[100px] h-10 mt-2 text-white font-bold text-lg"
        >
          tip
        </button>
      </div>
    </div>
  );
};

export default TipModal;
