import React from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { AiOutlineCloudUpload as UploadIcon } from "react-icons/ai";
import { useRouter } from "next/router";
const UploadPost = () => {
  // Initialize once (at the start of your app).
  const uploader = Uploader({
    apiKey: process.env.UPLOAD_IO_KEY || "public_FW25b1B3LoVLBR887AiD57YkJB7F", // Get production API keys from Upload.io
  });
  const options = {
    multi: false,
    styles: {
      colors: {
        primary: "#377dff",
      },
    },
  };

  const router = useRouter();

  const handleUpload = (files: any) => {
    const fileUrls = files.map((x: any) => x.fileUrl).join("\n");
    router.push(`/?image=${fileUrls}`);
  };

  return (
    <UploadButton
      uploader={uploader}
      options={options}
      onComplete={handleUpload}
    >
      {({ onClick }) => (
        <div className=" flex flex-col items-center">
          <UploadIcon onClick={onClick} className="navBtn" />

          <span className="text-white hidden md:block">upload</span>
        </div>
      )}
    </UploadButton>
  );
};

export default UploadPost;
