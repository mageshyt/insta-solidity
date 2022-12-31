import { useRouter } from "next/router";
import React, { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppContext } from "../../context/context";
import { toast } from "react-toastify";
const UploadModal = () => {
  const { uploadPost } = useAppContext();
  const router = useRouter();

  const imagePreview = router.query.image;

  const closeModal = () => {
    router.back();
  };

  // useref
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    const loading = toast.loading("Uploading post... Please wait ⏳");
    try {
      e.preventDefault();
      const caption = inputRef.current.value;
      const res = await uploadPost(imagePreview, caption);
      if (res) {
        toast.dismiss(loading);
        toast.success("Post uploaded successfully 🎉");
        router.back();
      }
    } catch (err) {
      toast.dismiss(loading);
      toast.error("Something went wrong ❌");
    }
  };
  return (
    <div className="h-[520px] w-[500px] center bg-[#121212] rounded-md ">
      {/* close btn */}
      <div className="absolute top-2 right-2 text-2xl cursor-pointer">
        <AiOutlineClose onClick={closeModal} className="text-2xl text-white" />
      </div>
      {/* caption */}
      <form className=" " onSubmit={handleSubmit}>
        {/* preview */}
        <div className="h-[250px] w-[300px] center flex-col    space-y-3 rounded-md">
          <img
            src={imagePreview}
            alt="preview"
            className=" h-[200px] rounded-md object-cover"
          />

          {/* description */}
          <div className="w-full  bg-[#1a1a1a] rounded-md">
            <textarea
              ref={inputRef}
              type="text"
              placeholder="Add a caption..."
              className="w-full outline-none p-2 bg-transparent text-white"
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            className="bg-[#1a1a1a] w-full text-white p-2 rounded-md mt-2"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadModal;
