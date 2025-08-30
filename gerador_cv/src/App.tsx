import { useState } from 'react';
import { FormularioHabilidades } from './components/FormularioHabilidades';

interface Habilidade {
  id: number;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

function App() {

const [habilidades, setHabilidades] = useState<Habilidade[]>([]);

const handleAdicioanarHabilidade = (habilidade: Omit<Habilidade, "id">) => {
  const novaHabilidade: Habilidade = {
    ...habilidade,
    id: Date.now(),
  };
  setHabilidades([...habilidades, novaHabilidade]);
};

const handleRemoverHabilidade = (id: number) => {
  setHabilidades(habilidades.filter(hab => hab.id !== id));
};

    return (
    <div className="h-screen grid grid-cols-2  bg-gray-900 ">
     <div className="bg-[#EFD00E]">
        <FormularioHabilidades
          habilidades={habilidades}
          onAdicionarHabilidade={handleAdicioanarHabilidade}
          onRemoverHabilidade={handleRemoverHabilidade}
        />
        
        <div>
        <h2>Habilidades Adicionadas:</h2>
        {habilidades.map((hab) => (
          <div key={hab.id}>
            {hab.nome} - {hab.nivel}
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;