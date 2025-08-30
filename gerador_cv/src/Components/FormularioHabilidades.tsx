import {useState} from "react";

interface Habilidade {
  id: number;  
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

Interface Props {
  onAddHabilidade: (habilidade: Habilidade) => void;
}

export function FormularioHabilidades({ onAddHabilidade }: Props) {
  const [nome, setNome] = useState("");
  const [nivel, setNivel] = useState<Habilidade["nivel"]>("Básico");

//validar se nome vazio
const handleAdicionar = () => {
    if (nome.trim() === "") {
      alert("Digite aqui sua habilidade.");
      return;
    }

    const novaHabilidade: Habilidade = {
      id: Date.now(),
      nome: nome.trim(),
      nivel: nivel 
    };

    onAddHabilidade(novaHabilidade);
    setNome("");
  };

  return (
    <div>
      <h2> Adicionar Habilidades:</h2>

      <div>
        <label>Habilidade:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: JavaScript, React, etc."
          />
      </div>

      <div>
        <label>Nível de Conhecimento:</label>
        <select 
        value={nivel} 
        onChange={(e) => setNivel(e.target.value as Habilidade["nivel"])}>
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>

      <button onClick={handleAdicionar}>
        Adicionar Habilidade
        </button>
    </div>
  ); 