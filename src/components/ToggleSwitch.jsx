export default function ToggleSwitch({ persona, setPersona }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={
          persona === "web" ? "font-bold text-blue-400" : "text-gray-400"
        }
      >
        Web Dev
      </span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={persona === "design"}
          onChange={() => setPersona(persona === "web" ? "design" : "web")}
        />
        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-pink-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
      <span
        className={
          persona === "design" ? "font-bold text-pink-400" : "text-gray-400"
        }
      >
        Designer
      </span>
    </div>
  );
}
