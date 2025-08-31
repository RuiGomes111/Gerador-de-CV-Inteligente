import { useState } from "react";
import { useCurriculum } from "../../context/useCurriculum";
import { v4 as uuidv4 } from "uuid";
import type { Skill } from "../../types";

export default function FormularioHabilidades() {
  const { dispatch } = useCurriculum();
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;

    const newSkill: Skill = {
      id: uuidv4(),
      name: skill,
      level: "Básico", // obrigatório ser "Básico" | "Intermediário" | "Avançado"
    };

    dispatch({ type: "ADD_SKILL", payload: newSkill });
    setSkill("");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Habilidades</h2>
      <div className="flex gap-2">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Digite uma habilidade"
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={addSkill}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
