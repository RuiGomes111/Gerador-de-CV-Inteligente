import { useRef, useState } from "react";
import { useCurriculum } from "../context/useCurriculum";
import PDFExporter from "./PDFExporter";

const themes = {
  classico: {
    bg: "#ffffff",
    text: "#1f2937",
    accent: "#1d4ed8",
    badgeBg: "#bfdbfe",
    badgeText: "#1e40af",
    border: "#3b82f6",
  },
  moderno: {
    bg: "#f9fafb",
    text: "#111827",
    accent: "#7e22ce",
    badgeBg: "#e9d5ff",
    badgeText: "#5b21b6",
    border: "#8b5cf6",
  },
  elegante: {
    bg: "#fdfcfb",
    text: "#111827",
    accent: "#be185d",
    badgeBg: "#fbcfe8",
    badgeText: "#9d174d",
    border: "#db2777",
  },
};

export default function CurriculumPreview() {
  const { state } = useCurriculum();
  const printRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<keyof typeof themes>("classico");

  const currentTheme = themes[theme];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Botões de tema */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {Object.keys(themes).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t as keyof typeof themes)}
            style={{
              padding: "0.25rem 0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              fontWeight: 500,
              backgroundColor: theme === t ? "#1f2937" : "#ffffff",
              color: theme === t ? "#ffffff" : "#374151",
              cursor: "pointer",
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Preview do Currículo */}
      <div
        ref={printRef}
        style={{
          backgroundColor: currentTheme.bg,
          color: currentTheme.text,
          padding: "2rem",
          maxWidth: "768px",
          margin: "0 auto",
          fontFamily: "sans-serif",
        }}
      >
        {/* Cabeçalho */}
        <div
          style={{
            borderBottom: "1px solid #d1d5db",
            paddingBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Foto de Perfil */}
          {state.personal.photo && (
            <img
              src={state.personal.photo}
              alt="Foto de perfil"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                border: `3px solid ${currentTheme.border}`,
              }}
            />
          )}

          <div>
            <h1 style={{ fontSize: "2.25rem", fontWeight: "700" }}>
              {state.personal.name || "Seu Nome Aqui"}
            </h1>
            <div
              style={{
                marginTop: "0.5rem",
                fontSize: "0.875rem",
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span>📧 {state.personal.email || "email@exemplo.com"}</span>
              <span>📱 {state.personal.phone || "(+244) 000-000-000"}</span>
              <span>
                🔗 {state.personal.linkedin || "linkedin.com/in/seuperfil"}
              </span>
            </div>
          </div>
        </div>

        {/* Resumo */}
        {state.personal.resume && (
          <section style={{ marginTop: "1.5rem" }}>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
                color: currentTheme.accent,
              }}
            >
              Resumo Profissional
            </h2>
            <p style={{ lineHeight: 1.5 }}>{state.personal.resume}</p>
          </section>
        )}

        {/* Habilidades */}
        {state.skills.length > 0 && (
          <section style={{ marginTop: "2rem" }}>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
                color: currentTheme.accent,
              }}
            >
              Habilidades
            </h2>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {state.skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    padding: "0.25rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    backgroundColor: currentTheme.badgeBg,
                    color: currentTheme.badgeText,
                  }}
                >
                  {typeof skill === "string"
                    ? skill
                    : `${skill.name} (${skill.level})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Experiências */}
        {state.experiences.length > 0 && (
          <section style={{ marginTop: "2rem" }}>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "0.75rem",
                color: currentTheme.accent,
              }}
            >
              Experiências
            </h2>
            {state.experiences.map((exp, i) => (
              <div
                key={i}
                style={{
                  borderLeft: `4px solid ${currentTheme.border}`,
                  paddingLeft: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.125rem", fontWeight: "700" }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#4b5563" }}>
                  {exp.company} | {exp.start} - {exp.end || "Atual"}
                </p>
                <p style={{ marginTop: "0.25rem" }}>{exp.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Exportar PDF */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <PDFExporter
          elementRef={printRef}
          fileName={`${
            state.personal.name?.replace(/\s+/g, "_") || "curriculo"
          }.pdf`}
        />
      </div>
    </div>
  );
}
