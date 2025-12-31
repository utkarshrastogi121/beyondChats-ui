interface Props {
  active: "original" | "updated";
  onChange: (v: "original" | "updated") => void;
}

export default function ArticlesTabs({ active, onChange }: Props) {
  return (
    <div className="flex justify-center gap-4 mb-10">
      {["original", "updated"].map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab as any)}
          className={`px-6 py-2 rounded-full font-medium transition
            ${
              active === tab
                ? "bg-indigo-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
        >
          {tab === "original" ? "Original Articles" : "Updated Articles"}
        </button>
      ))}
    </div>
  );
}
