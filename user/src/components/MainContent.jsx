import QuickSearchCards from "./QuickSearchCards";
import Loader from "./Loader";
import profile from '../assets/panda.png'
import { useAppContext } from "../context/context";
import { RiGeminiFill } from "react-icons/ri";
import MarkdownRenderer from "../utils/MarkdownRenderer";

const MainContent = () => {
  const { prompt, showResult, loading, response } = useAppContext();

  return (
    <main className="p-2 md:p-6">

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
        showResult && <div className="flex px-5 md:px-20 flex-col gap-3 ">
          <div className="grid py-2 items-center text-white grid-cols-[48px_1fr] gap-2 md:gap-5">
            <img src={profile} alt="panda" className="w-10 h-10" />
            <h3 className="text-white font-semibold p-2">{prompt} </h3>
          </div>
          {
            loading ? (<Loader />) : (
              <div className="grid py-2 text-white  grid-cols-1 md:grid-cols-[48px_1fr] gap-1 md:gap-3">

                <div className="hidden md:flex justify-start">
                  <RiGeminiFill className="w-9 h-9 mt-1 rounded-full bg-gradient-to-tr from-[#ff4e50] to-[#5b5ddf] text-white flex items-center justify-center" />
                </div>
                <div className="p-2">
                  <MarkdownRenderer response={response} />
                </div>

              </div>

            )
          }
        </div>

      }
    </main >
  );
};

export default MainContent;
