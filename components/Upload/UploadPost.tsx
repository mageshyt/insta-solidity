import React from "react";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
const UploadPost = () => {
  // Initialize once (at the start of your app).
  const uploader = Uploader({
    apiKey: process.env.UPLOAD_IO_KEY || "", // Get production API keys from Upload.io
  });
  return (
    <UploadButton
      uploader={uploader}
      onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
    >
      {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
    </UploadButton>
  );
};

export default UploadPost;
