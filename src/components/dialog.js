import React from "react";
import Image from "next/image";

export function Dialog({ title, open, onClose, children }) {
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 w-screen mx-4">
              <div className="fixed inset-0 bg-dialog opacity-80"></div>
              <div
                className="border-0 max-h-screen mt-2 rounded-dialog shadow-lg relative flex flex-col w-full outline-none focus:outline-none"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4936D4, #6835D4)",
                  zIndex: 50, // Adjust z-index to ensure it's higher than other elements
                }}
              >
                <Image
                  src="/white-logo.png"
                  fill
                  className="px-4 pt-8.5 pb-4 opacity-5 z-0"
                  alt="logo"
                />
                <button
                  className="rounded-[50%] cursor-pointer w-10 h-10 bg-[#FFC543] absolute top-[-10px] right-[-10px] text-[#1E1E2E] flex justify-center items-center z-10"
                  onClick={onClose}
                >
                  X
                </button>
                <div className="relative p-6 flex-auto text-white">
                  <h1 className="text-center font-bold text-2xl mt-6">
                    {title}
                  </h1>
                  <div className="mt-14">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Dialog;
