export default function ProgressBar({ step }) {
  return (
    <div className="flex gap-2 w-full max-w-md mb-8 mt-3">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded-full transition-all duration-300 ${
            step >= i ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}
