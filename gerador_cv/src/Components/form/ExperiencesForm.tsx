import { useState } from "react";
import { useCurriculum } from "../../context/useCurriculum";
import { v4 as uuidv4 } from "uuid"; // para gerar id único

export default function ExperiencesForm() {
  const { dispatch } = useCurriculum();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");

  const addExperience = () => {
    if (!position || !company) return;

    const newExp = {
      id: uuidv4(),
      position,
      company,
      start: "",
      end: undefined,
      current: false,
      description: "",
    };

    dispatch({ type: "ADD_EXPERIENCE", payload: newExp });
    setPosition("");
    setCompany("");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Experiências</h2>
      <input
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Cargo"
        className="mb-2 p-2 w-full rounded"
      />
      <input
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Empresa"
        className="mb-2 p-2 w-full rounded"
      />
      <button
        onClick={addExperience}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Adicionar
      </button>
    </div>
  );
}
