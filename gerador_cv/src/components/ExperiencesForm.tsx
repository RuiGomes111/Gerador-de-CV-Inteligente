import { useState } from "react";
import type { Experience } from "../types";
import ExperienceItem from "./ExperienceItem";
import { v4 as uuidv4 } from "uuid";

export default function ExperiencesForm() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  const handleChange = (id: string, field: keyof Experience, value: string | boolean) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleAdd = () => {
    setExperiences((prev) => [
      ...prev,
      {
        id: uuidv4(),
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ]);
  };

  const handleRemove = (id: string) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Experiências Profissionais</h2>
      {experiences.map((exp) => (
        <ExperienceItem
          key={exp.id}
          exp={exp}
          onChange={handleChange}
          onRemove={handleRemove}
        />
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        + Adicionar Experiência
      </button>
    </div>
  );
}