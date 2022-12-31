import React from "react";
import Stories from "../components/Stories/Stories";
import TipModal from "../components/Modal/TipModal";
import Posts from "../components/posts/Posts";
import { ToastContainer } from "react-toastify";
import { customStyles } from "../lib/ModalStyle";
import UploadModal from "../components/Modal/UploadModal";
import Modal from "react-modal";
import { useRouter } from "next/router";
Modal.setAppElement("#__next");
const HomePage = () => {
  const router = useRouter();
  return (
  <div className="scrollbar-hide h-screen">
      <ToastContainer></ToastContainer>
      <div className="max-w-4xl h-full   pb-[200px] overflow-y-scroll mx-auto">
        {/* stories */}

        <Stories />

        {/* posts */}
        <Posts />
        <Modal
          isOpen={router.asPath.includes("image")}
          onRequestClose={() => router.back()}
          style={customStyles}
        >
          <UploadModal />
        </Modal>
        <Modal
          isOpen={router.asPath.includes("tip")}
          onRequestClose={() => router.back()}
          style={customStyles}
        >
          <TipModal />
        </Modal>
      </div>
    </div>
  );
};

export default HomePage;
