import React, { useState } from "react";
import QuickSearchCards from "./QuickSearchCards";

const MainContent = () => {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
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
    </main>
  );
};

export default MainContent;
