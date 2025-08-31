import { useCurriculum } from "../context/useCurriculum";

export default function PreviewCV() {
  const { state } = useCurriculum();

  return (
    <div className="text-black space-y-6">
      <header>
        <h1 className="text-2xl font-bold">{state.personal.name}</h1>
        <p>{state.personal.email}</p>
        <p>{state.personal.phone}</p>
        <p>{state.personal.linkedin}</p>
      </header>

      <section>
        <h2 className="font-semibold text-lg">Resumo</h2>
        <p>{state.personal.resume}</p>
      </section>

      <section>
        <h2 className="font-semibold text-lg">Experiências</h2>
        <ul className="list-disc pl-5">
          {state.experiences.map((exp, i) => (
            <li key={i}>{exp.title} - {exp.company}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-semibold text-lg">Habilidades</h2>
        <ul className="list-disc pl-5">
          {state.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
