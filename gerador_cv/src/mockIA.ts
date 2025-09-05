export async function mockMelhorarTexto(textoOriginal: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.2;
      if (sucesso) {
        resolve(`Texto melhorado: ${textoOriginal}`);
      } else {
        reject("Erro ao melhorar o texto.");
      }
    }, 1500);
  });
}
