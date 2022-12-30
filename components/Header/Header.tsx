import Image from "next/image";

import { useRouter } from "next/dist/client/router";
import LogoImage from "../../assets/insta_logo.png";
import SearchBar from "./SearchBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { AiOutlineCloudUpload as UploadIcon } from "react-icons/ai";
import SmallLogo from "../../assets/small_logo.png";
import UploadPost from "../Upload/UploadPost";
const Header = () => {
  const session = null;

  // ! routing
  const router = useRouter();

  function signIn() {
    throw new Error("Function not implemented.");
  }

  function setOpen() {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="shadow-sm border-b      sticky p-2 top-0 z-50">
      <div className=" flex items-center justify-between   mx-5">
        {/* Left side  */}
        {/* logo */}
        <div
          onClick={() => router.push("/")}
          className=" relative hidden lg:block w-24 h-12 cursor-pointer"
        >
          <Image
            alt="logo-website"
            src={LogoImage}
          />
        </div>
        {/* in mobile insta logo */}
        <div className="relative  lg:hidden w-12 h-12 flex-shrink-0">
          <Image
            alt="logo-mobile"
            src={SmallLogo}
          />
        </div>
        {/* Middle */}

        {/* Search bar */}
        <SearchBar />

        {/* Buttons */}
        <div className="center space-x-4 ">
          

          {/*  connect btn */}
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
