import { useState } from "react";
import { useCurriculum } from "../../context/useCurriculum";
import { v4 as uuidv4 } from "uuid";
import type { Skill } from "../../types";

export default function FormularioHabilidades() {
  const { state, dispatch } = useCurriculum(); 
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState<"Básico" | "Intermediário" | "Avançado">("Básico");

  const addSkill = () => {
    if (!skill.trim()) return;

    const newSkill: Skill = {
      id: uuidv4(),
      name: skill,
      level,
    };

    dispatch({ type: "ADD_SKILL", payload: newSkill });
    setSkill("");
    setLevel("Básico");
  };

  const removeSkill = (id: string) => {
    dispatch({ type: "REMOVE_SKILL", payload: id });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Habilidades</h2>
      
      {/* Formulário de adicionar skill */}
      <div className="flex gap-2 mb-4">
        <input
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Digite uma habilidade"
          className="border rounded p-2 flex-1"
        />

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as "Básico" | "Intermediário" | "Avançado")}
          className="border rounded p-2 text-black"
        >
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>

        <button
          onClick={addSkill}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>

      {/* Lista de skills */}
      <ul>
        {state.skills.map((s: Skill) => (
          <li key={s.id} className="flex justify-between items-center mb-2">
            <span>
              {s.name} <span className="text-sm text-gray-300">({s.level})</span>
            </span>
            <button
              onClick={() => removeSkill(s.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
