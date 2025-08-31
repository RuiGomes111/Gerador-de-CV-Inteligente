import { useState } from "react";
import { useCurriculum } from "../../context/useCurriculum";
import { v4 as uuidv4 } from "uuid";
import type { Skill } from "../../types";

export default function FormularioHabilidades() {
  const { state, dispatch } = useCurriculum(); 
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;

    const newSkill: Skill = {
      id: uuidv4(),
      name: skill,
      level: "Básico",
    };

    dispatch({ type: "ADD_SKILL", payload: newSkill });
    setSkill("");
  };

  const removeSkill = (id: string) => {
    dispatch({ type: "REMOVE_SKILL", payload: id });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Habilidades</h2>
      <div className="flex gap-2 mb-4">
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

      <ul>
        {state.skills.map((s: Skill) => (
          <li key={s.id} className="flex justify-between items-center mb-2">
            <span>{s.name} ({s.level})</span>
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
