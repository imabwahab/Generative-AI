import React, { useState } from "react";
import QuickSearchCards from "./QuickSearchCards";
import Loader from "./Loader";
import profile from '../assets/panda.png'
import { useAppContext } from "../context/context";

const MainContent = () => {
  const { prompt, showResult, loading } = useAppContext();
  

  const HandleResult = () => {

  }
  return (
    <main className="p-6">
      {!showResult && (
        <>
          <QuickSearchCards />
          <section className="mt-10">
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                Example content block
              </div>
              <div className="bg-white/5 p-4 rounded-lg">Another block</div>
            </div>
          </section>
        </>
      )}

      {
        loading && <div className="flex flex-col gap-3">
          <div className="grid py-2 items-center text-black bg-blue-300 grid-cols-[48px_1fr] gap-5">
            <img src={profile} alt="panda" className="w-10 h-10" />
            <h3 className="text-black font-bold ">{prompt} </h3>
          </div>
          <Loader />
        </div>

      }
    </main>
  );
};

export default MainContent;
