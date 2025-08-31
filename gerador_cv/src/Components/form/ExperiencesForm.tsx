import { useState } from "react";
import { useCurriculum } from "../../context/useCurriculum";

export default function ExperiencesForm() {
  const { dispatch } = useCurriculum();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const addExperience = () => {
    if (!title || !company) return;
    dispatch({ type: "ADD_EXPERIENCE", payload: { title, company } });
    setTitle("");
    setCompany("");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Experiências</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Cargo" className="mb-2 p-2 w-full rounded"/>
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Empresa" className="mb-2 p-2 w-full rounded"/>
      <button onClick={addExperience} className="bg-green-500 text-white px-4 py-2 rounded">Adicionar</button>
    </div>
  );
}
