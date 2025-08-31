import { useContext, useRef } from "react";
import { CurriculumContext } from "../context/CurriculumContext";

export default function CurriculumPreview() {
  const context = useContext(CurriculumContext);
  const printRef = useRef<HTMLDivElement>(null);

  if (!context) return null;
  const { state } = context;

  return (
    <div className="flex flex-col gap-6">
      {/* Preview do Currículo */}
      <div
        ref={printRef}
        className="p-10 bg-white shadow-lg rounded-2xl font-sans max-w-3xl mx-auto border border-gray-200"
      >
        {/* Cabeçalho */}
        <div className="flex flex-col border-b border-gray-300 pb-4">
          <h1 className="text-4xl font-bold text-gray-800">
            {state.personal.name || "Seu Nome Aqui"}
          </h1>
          <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-4">
            <span>📧 {state.personal.email || "email@exemplo.com"}</span>
            <span>📱 {state.personal.phone || "(+244) 000-000-000"}</span>
            <span>🔗 {state.personal.linkedin || "linkedin.com/in/seuperfil"}</span>
          </div>
        </div>

        {/* Resumo */}
        {state.personal.resume && (
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Resumo Profissional</h2>
            <p className="text-gray-700 leading-relaxed">{state.personal.resume}</p>
          </section>
        )}

        {/* Habilidades */}
        {state.skills.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Habilidades</h2>
            <ul className="flex flex-wrap gap-3">
              {state.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Experiências */}
        {state.experiences.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-3">Experiências</h2>
            {state.experiences.map((exp, i) => (
              <div key={i} className="mb-6 border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                <p className="text-sm text-gray-600">
                  {exp.company} | {exp.startDate} - {exp.endDate || "Atual"}
                </p>
                <p className="text-gray-700 mt-1">{exp.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
}
