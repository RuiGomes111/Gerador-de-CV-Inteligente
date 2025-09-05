import  { useState } from "react";
import { mockMelhorarTexto } from "../mockIA";
import toast from "react-hot-toast";

export default function TesteIA() {
  const [textoOriginal, setTextoOriginal] = useState("");
  const [textoMelhorado, setTextoMelhorado] = useState("");
  const [estado, setEstado] = useState<"idle" | "loading" | "sucesso" | "erro">("idle");

  const handleMelhorar = async () => {
    setEstado("loading");
    toast.loading("Processando texto...");
    try {
      const resultado = await mockMelhorarTexto(textoOriginal);
      setTextoMelhorado(resultado);
      setEstado("sucesso");
      toast.dismiss();
      toast.success("Texto melhorado com sucesso!");
      console.log("Resultado da IA:", resultado);
    } catch (erro) {
      setEstado("erro");
      toast.dismiss();
      toast.error("Erro ao melhorar o texto.");
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4 transition-all duration-300">
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Digite o texto original..."
        value={textoOriginal}
        onChange={(e) => setTextoOriginal(e.target.value)}
      />
      <button
        className={`px-4 py-2 rounded text-white ${
          estado === "loading" ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={handleMelhorar}
        disabled={estado === "loading" || textoOriginal.trim() === ""}
      >
        {estado === "loading" ? "Processando..." : "Melhorar texto"}
      </button>

      {estado === "sucesso" && (
        <div className="p-3 border rounded bg-green-50 mt-4 text-gray-800">
  <strong className="block mb-1">Texto melhorado:</strong>
  <p>{textoMelhorado}</p>
</div>

      )}
    </div>
  );
}
