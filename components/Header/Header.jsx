import Image from "next/image";

import { useRouter } from "next/dist/client/router";
import LogoImage from "../../assets/insta_logo.png";
import SearchBar from "./SearchBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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
          onClick={() => {
            router.push("/?image/");
            console.log("clicked ", router.asPath.includes("image"));
          }}
          className="w-[120px]  h-[50px] center cursor-pointer"
        >
          <Image className="   " alt="logo" src={LogoImage} loading="eager" />
        </div>
        {/* in mobile insta logo */}
        <div className=" ">
          <Image
            className="md:hidden inline-flex h-10 w-10"
            alt="logo-mobile"
            src={SmallLogo}
            loading="eager"
          />
        </div>
        {/* Middle */}

        {/* Search bar */}
        <SearchBar />

        {/* Buttons */}
        <UploadPost />
        <div className="center space-x-4 hidden md:block ">
          {/*  connect btn */}
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
