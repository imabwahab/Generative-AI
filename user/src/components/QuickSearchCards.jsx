import { FaBook, FaCode, FaGlobe, FaLightbulb } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import { AiOutlineRobot } from "react-icons/ai";

const QuickSearchCards = () => {
  const cards = [
    { id: 1, title: "Learn Concepts", icon: <FaBook className="w-10 h-10 text-indigo-500" />, desc: "Get AI-powered explanations" },
    { id: 2, title: "Code Help", icon: <FaCode className="w-10 h-10 text-green-500" />, desc: "Debug & generate snippets" },
    { id: 3, title: "Web Search", icon: <FaGlobe className="w-10 h-10 text-blue-500" />, desc: "AI-assisted browsing" },
    { id: 4, title: "Ideas & Brainstorm", icon: <FaLightbulb className="w-10 h-10 text-yellow-500" />, desc: "Get creative insights" },
    { id: 5, title: "Research", icon: <MdOutlineScience className="w-10 h-10 text-purple-500" />, desc: "Summarize academic topics" },
    { id: 6, title: "AI Chat", icon: <AiOutlineRobot className="w-10 h-10 text-pink-500" />, desc: "Ask anything instantly" },
  ];

  return (
    <div className=" px-6 bg-amber-400 py-2">
      <h2 className="text-2xl font-semibold text-white mb-6">Quick Search with AI</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg cursor-pointer hover:scale-105 hover:bg-white/20 transition-transform duration-300"
          >
            {card.icon}
            <h3 className="text-lg font-medium text-white mt-3">{card.title}</h3>
            <p className="text-sm text-gray-300 mt-1 text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickSearchCards;
