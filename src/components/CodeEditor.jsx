import { useEffect, useState } from "react";

const HobbiesCodeEditor = ({ themeColors }) => {
  const hobbies = [
    "Play Video Games",
    "Play Badminton",
    "Play Chess",
    "Visit New Places",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index >= hobbies.length) return;

    const timeout = setTimeout(() => {
      setText(hobbies[index].slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex === hobbies[index].length) {
        setTimeout(() => {
          setCharIndex(0);
          setText("");
          setIndex((prev) => (prev + 1) % hobbies.length);
        }, 1200);
      }
    }, 120);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <div className="bg-slate-900/80 border border-slate-700/50 rounded-xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="flex items-center px-4 py-2 bg-slate-800 border-b border-slate-700/50">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="text-sm text-slate-400 font-mono">myHobbies.js</span>
      </div>

      {/* Code Area */}
      <div className="p-6 font-mono text-sm text-slate-300 min-h-40">
        <span className="text-slate-500">const MyHobbies = </span>
        <span className={themeColors.text}>[</span>
        <br />
        <span className="ml-4 text-emerald-400">
          "{text}
          <span className="animate-pulse">|</span>"
        </span>
        <br />
        <span className={themeColors.text}>]</span>
      </div>
    </div>
  );
};


export default HobbiesCodeEditor;