export default function OptionButton({ label, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-6 py-4 rounded-xl shadow-sm mb-3 font-medium flex items-center gap-3 transition-all
        ${selected 
          ? "bg-blue-600 text-white shadow-md" 
          : "bg-white text-gray-800 border border-gray-200"
        }`}
    >
      {/* You can replace emoji with any icon or remove it */}
      <span className="text-xl">✔</span>
      {label}
    </button>
  );
}
