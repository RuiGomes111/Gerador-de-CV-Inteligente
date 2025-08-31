import { useState } from "react";
import { useCurriculum } from "../../context/useCurriculum";
import { v4 as uuidv4 } from "uuid";
import type { Experience } from "../../types";

export default function ExperiencesForm() {
  const { state, dispatch } = useCurriculum();
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [current, setCurrent] = useState(false);
  const [description, setDescription] = useState("");

  const addExperience = () => {
    if (!position || !company || !start) return;

    const newExp: Experience = {
      id: uuidv4(),
      position,
      company,
      start,
      end: current ? undefined : end,
      current,
      description,
    };

    dispatch({ type: "ADD_EXPERIENCE", payload: newExp });

    setPosition("");
    setCompany("");
    setStart("");
    setEnd("");
    setCurrent(false);
    setDescription("");
  };

  const removeExperience = (id: string) => {
    dispatch({ type: "REMOVE_EXPERIENCE", payload: id });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Experiências</h2>

      <div className="flex flex-col gap-2 mb-4">
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Empresa"
          className="p-2 w-full rounded border border-gray-300"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Cargo"
          className="p-2 w-full rounded border border-gray-300"
        />
        <input
          type="date"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="p-2 w-full rounded border border-gray-300"
        />
        {!current && (
          <input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="p-2 w-full rounded border border-gray-300"
          />
        )}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={current}
            onChange={(e) => setCurrent(e.target.checked)}
            className="border border-gray-300"
          />
          Trabalho atual
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição da atividade"
          className="p-2 w-full rounded border border-gray-300"
        />
        <button
          onClick={addExperience}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Adicionar
        </button>
      </div>

      <ul>
        {state.experiences.map((exp: Experience) => (
          <li key={exp.id} className="flex justify-between items-start mb-2 p-2 bg-gray-800 rounded border border-gray-400">
            <div>
              <p className="font-bold">{exp.position} - {exp.company}</p>
              <p>
                {exp.start} {exp.current ? " - Atual" : exp.end ? ` - ${exp.end}` : ""}
              </p>
              {exp.description && <p>{exp.description}</p>}
            </div>
            <button
              onClick={() => removeExperience(exp.id)}
              className="bg-red-500 text-white px-2 py-1 rounded h-fit"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
