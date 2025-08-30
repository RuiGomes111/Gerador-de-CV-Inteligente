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
      alert("Por favor, digite aqui sua habilidade.");
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