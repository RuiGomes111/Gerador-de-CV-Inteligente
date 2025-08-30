import type { Experience } from "../types";

interface ExperienceItemProps {
  exp: Experience;
  onChange: (id: string, field: keyof Experience, value: string | boolean) => void;
  onRemove: (id: string) => void;
}

export default function ExperienceItem({ exp, onChange, onRemove }: ExperienceItemProps) {
  return (
    <div className="border p-4 rounded-lg shadow mb-4 bg-white">
      <input
        type="text"
        placeholder="Empresa"
        value={exp.company}
        onChange={(e) => onChange(exp.id, "company", e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />

      <input
        type="text"
        placeholder="Cargo"
        value={exp.role}
        onChange={(e) => onChange(exp.id, "role", e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />

      <div className="flex gap-2 mb-2">
        <input
          type="date"
          value={exp.startDate}
          onChange={(e) => onChange(exp.id, "startDate", e.target.value)}
          className="border p-2 rounded"
        />

        {!exp.current && (
          <input
            type="date"
            value={exp.endDate || ""}
            onChange={(e) => onChange(exp.id, "endDate", e.target.value)}
            className="border p-2 rounded"
          />
        )}
      </div>

      <label className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          checked={exp.current}
          onChange={(e) => onChange(exp.id, "current", e.target.checked)}
        />
        Trabalho atual
      </label>

      <textarea
        placeholder="Descrição das atividades"
        value={exp.description}
        onChange={(e) => onChange(exp.id, "description", e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />

      <button
        type="button"
        onClick={() => onRemove(exp.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remover
      </button>
    </div>
  );
}