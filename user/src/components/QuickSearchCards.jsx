import { cardsData } from "../assets/assets";
import { useAppContext } from "../context/context";
const QuickSearchCards = () => {

  const { generateContent } = useAppContext();
  const HandleQuickSearch = (prompt) => {
    generateContent(prompt);
  }

  return (
    <section className="pt-4">
      <h2 className="text-2xl font-semibold text-white mb-6">Quick Search with AI</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {cardsData.map((card) => (
          <button
            key={card.id}
            onClick={() => HandleQuickSearch(card.title)}
            className="aspect-square rounded-2xl bg-white/5 hover:bg-white/10 transition  flex flex-col items-center justify-center shadow"
          >
            <div className="text-indigo-400  mb-3"><card.icon className="w-7 h-7" /></div>
            <div className="text-white font-medium">{card.title}</div>
            <p className="text-xs text-gray-300 mt-1 text-center">{card.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickSearchCards;
