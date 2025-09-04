export async function improveTextGemini(text: string, type: "resume" | "experience") {
  console.log("Chamando Gemini com texto:", text);
    const prompt =
    type === "resume"
      ? `Melhore o seguinte resumo profissional em tom formal e conciso:\n${text}`
      : `Melhore a descrição da experiência profissional, focando em verbos de ação e impacto:\n${text}`;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?" +
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
    console.log("Resposta do Gemini:", data);
  return data.candidates?.[0]?.content?.parts?.[0]?.text || text;
}
