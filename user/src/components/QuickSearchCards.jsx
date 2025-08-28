import { FaBook, FaCode, FaGlobe, FaLightbulb } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";

const QuickSearchCards = () => {
  const cards = [
    { id: 1, title: "Learn Concepts", icon: <FaBook className="w-7 h-7" />, desc: "Get AI-powered explanations" },
    { id: 2, title: "Code Help", icon: <FaCode className="w-7 h-7" />, desc: "Debug & generate snippets" },
    { id: 3, title: "Web Search", icon: <FaGlobe className="w-7 h-7" />, desc: "AI-assisted browsing" },
    { id: 4, title: "Ideas", icon: <FaLightbulb className="w-7 h-7" />, desc: "Get creative insights" },
    { id: 5, title: "Research", icon: <MdOutlineScience className="w-7 h-7" />, desc: "Summarize academic topics" },
    { id: 6, title: "AI Chat", icon: <AiOutlineRobot className="w-7 h-7" />, desc: "Ask anything instantly" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-white mb-6">Quick Search with AI</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <button
            key={card.id}
            className="aspect-square rounded-2xl bg-white/5 hover:bg-white/10 transition  flex flex-col items-center justify-center shadow"
          >
            <div className="text-indigo-400  mb-3">{card.icon}</div>
            <div className="text-white font-medium">{card.title}</div>
            <p className="text-xs text-gray-300 mt-1 text-center">{card.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickSearchCards;
