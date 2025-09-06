export async function improveTextGemini(
  text: string,
  type: "resume" | "experience"
) {
  console.log("Chamando Gemini com texto:", text);

  const prompt =
    type === "resume"
      ? `Melhore o seguinte resumo profissional em tom formal e conciso, sem interações suas:\n${text}`
      : `Melhore a descrição da experiência profissional, focando em verbos de ação e impacto:\n${text}`;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
        import.meta.env.VITE_GEMINI_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro na resposta do Gemini:", data);
      throw new Error(data.error?.message || "Falha ao chamar Gemini");
    }

    console.log("Resposta do Gemini:", data);

    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Não foi possível melhorar o texto."
    );
  } catch (err) {
    console.error("Erro ao comunicar com Gemini:", err);
    return text; // fallback: retorna o texto original
  }
}