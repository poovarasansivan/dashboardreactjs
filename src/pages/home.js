import React, { useState } from "react";
import Header from "../components/header";
import { TbFolderOpen } from "react-icons/tb";
import { IoMdMore } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import Image from "../assets/image.png";
import AddProjects from "../components/addproject";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleProjectForm = () => {
    setShowModal(true);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="flex flex-row items-center justify-between ml-4 md:ml-32 mt-10 mb-10">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-orange-300 border-2 border-black flex items-center justify-center cursor-pointer mr-2 md:mr-4">
            <span className="text-gray-800 font-bold text-lg">A</span>
          </div>
          <p className="text-gray-800 font-bold text-lg">Adam Cooper Team</p>
        </div>
        <div>
          <button
            className="bg-black text-white font-bold py-2 px-4 rounded mr-0 md:mr-32"
            onClick={handleProjectForm}
          >
            New Project
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-white p-6 rounded-md w-5/6">
          <div className="flex items-center">
            <TbFolderOpen
              style={{ fontSize: "35px", marginLeft: "5px", marginTop: "5px" }}
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-sm font-bold">Default Project</h3>
              <p className="text-gray-400 text-sm font-sm">1 storyboard</p>
            </div>
            <IoMdMore style={{ fontSize: "24px", marginRight: "10px" }} />
            <FaChevronDown style={{ fontSize: "18px" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            {[...Array(1)].map((_, index) => (
              <div
                key={index}
                className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={Image}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-base mb-0">
                    AI Character Demo Storyboard
                  </div>
                  <p className="text-gray-500 text-base font-semibold">
                    updated 19 mar 2024
                  </p>
                </div>
              </div>
            ))}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="w-full h-full flex justify-center items-center rounded-md bg-stone-100">
                <CiCirclePlus style={{ fontSize: "40px", color: "#d6d3d1" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddProjects showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
