import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { TbToggleLeft } from "react-icons/tb";

export default function AddProjects({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-8 pt-5 pb-4 sm:p-8 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="flex items-center w-full justify-between mt-3 text-center sm:mt-0 sm:text-left">
                    <h3
                      className="text-2xl leading-4 font-bold text-gray-900"
                      id="modal-headline"
                      style={{ flex: "1" }}
                    >
                      New Storyboard
                    </h3>
                    <div className="flex justify-end">
                      <div
                        className="rounded-full bg-stone-100 p-2 cursor-pointer"
                        onClick={() => setShowModal(false)}
                      >
                        <ImCancelCircle
                          style={{ fontSize: "20px", color: "black" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label
                      className="block text-black mt-6 text-base font-semibold mb-2"
                      htmlFor="username"
                    >
                      Storyboard Name
                    </label>
                    <input
                      className="shadow appearance-black border border-stone-300 rounded w-full py-4 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="e.g, Default Project Storyboard"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-black mt-6 text-base font-semibold mb-2"
                      htmlFor="frame-size"
                    >
                      Frame Size
                    </label>
                    <select
                      className="shadow appearance-black border border-stone-300 rounded w-full py-4 px-3 text-black-500 text-base font-semibold leading-tight focus:outline-none focus:shadow-outline"
                      id="frame-size"
                    >
                      <option value="landscape">Landscape (16:9)</option>
                      <option value="portrait">Portrait (9:16)</option>
                      <option value="medium">Medium (4:3)</option>
                      <option value="large">Large (3:2)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse items-center">
                <button
                  type="button"
                  className="inline-flex justify-end rounded-md border border-transparent shadow-sm px-6 py-3 bg-stone-300 text-lg font-bold text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto  ml-auto sm:text-lg"
                  onClick={() => setShowModal(false)}
                >
                  Create Storyboard
                </button>
                
                <p className="text-base font-bold sm:text-sm hidden md:block">Ai Assistant</p>
                <TbToggleLeft 
                  className="mr-2 cursor-pointer sm:text-sm hidden md:block"
                  style={{ fontSize: "16px", color: "black" }}
                />

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}