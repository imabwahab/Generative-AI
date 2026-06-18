import { cardsData } from "../assets/assets";
import { useAppContext } from "../context/context";

const QuickSearchCards = () => {

  const { generateContent } = useAppContext();
  const HandleQuickSearch = (prompt) => {
    generateContent(prompt);
  }

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {cardsData.map((card) => (
          <button
            key={card.id}
            onClick={() => HandleQuickSearch(card.title)}
            className="group aspect-square rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.07] transition flex flex-col items-center justify-center p-3 text-center"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-200 transition">
              <card.icon className="w-5 h-5" />
            </div>
            <div className="text-slate-100 text-sm font-medium">{card.title}</div>
            <p className="text-xs text-slate-400 mt-1 leading-snug">{card.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickSearchCards;
