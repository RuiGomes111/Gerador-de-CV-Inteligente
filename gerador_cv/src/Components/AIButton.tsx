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
         {loading ? (
          <>
            {/* Spinner */}
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Processando...
          </>
        ) : (
          "Melhorar ✨"
        )}
      </button>
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}