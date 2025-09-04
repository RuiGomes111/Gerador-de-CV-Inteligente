import { useState } from "react";
import { improveTextGemini } from "../api/gemini";


type AIButtonProps = {
    text: string;
    type?: "resume" | "experience";
    onSuccess: (improveText: string) => void;
}

export default function AIButton({ text, type = "resume", onSuccess }: AIButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError("");

    try {
      const improved = await improveTextGemini(text, type);
      onSuccess(improved);
    } catch (err) {
      console.error(err);
      setError("Erro ao melhorar o texto. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-start">
      <button
        onClick={handleClick}
        disabled={loading}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 disabled:opacity-50"
      >
        {loading ? "Melhorando..." : "Melhorar ✨"}
      </button>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}