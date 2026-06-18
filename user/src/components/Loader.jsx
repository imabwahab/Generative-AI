// Typing indicator shown while Sage is generating a reply.
function Loader() {
  return (
    <div className="flex items-center gap-1.5 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="typing-dot h-2.5 w-2.5 rounded-full bg-indigo-400"
          style={{ animationDelay: `${i * 0.18}s` }}
        />
      ))}
    </div>
  );
}

export default Loader;
