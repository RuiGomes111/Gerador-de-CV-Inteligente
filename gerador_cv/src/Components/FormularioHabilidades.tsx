import {useState} from "react";

interface Habilidade {
  id: number;  
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

interface Props {
  habilidades: Habilidade[];
  onAdicionarHabilidade: (habilidade: Omit<Habilidade, 'id'>) => void;
onRemoverHabilidade: (id: number) => void;
}

export function FormularioHabilidades({
  habilidades,
  onAdicionarHabilidade,
  onRemoverHabilidade 
}: Props) {
  const [nome, setNome] = useState("");
  const [nivel, setNivel] = useState<Habilidade["nivel"]>("Básico");

  const [erro, setErro] = useState("");
//validar se nome vazio

const handleAdicionar = () => {
    if (nome.trim() === "") {
      setErro("Preencha habilidades.");
      return;
    }

    setErro("");

    onAdicionarHabilidade({
      nome: nome.trim(),
      nivel
    });

    setNome("");
  };

  const handleRemover = (id: number) => {
    onRemoverHabilidade(id);
  };

  return (
    <div>
      <h2> Gerenciar Habilidades:</h2>

      <div>
        <div>
          <label>Nome da Habilidade:</label>
  <input
    type="text"
    value={nome}
    onChange={(e) => {
      setNome(e.target.value);
      if (erro) setErro("");
    }}
    placeholder="Ex: JavaScript, React, etc."
    />

          {erro && <p>{erro}</p>}
      </div>

      <div>
        <label>Nível</label>
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
        </button >
    </div>

    <div>
      <h3>Habilidades Adicionadas:</h3>

      {habilidades.length === 0 ? (
        <p>Nenhuma habilidade adicionada.</p>
      ) : (
        <div>
          {habilidades.map((habilidade) => (
            <div key={habilidade.id}>
              <div>
                <span>{habilidade.nome}</span>
                <span>{habilidade.nivel}</span>
                </div>

              <button onClick={() => handleRemover(habilidade.id)}>
                Remover
                </button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  ); 
}