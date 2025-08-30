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
    id: habilidades.length > 0 ? habilidades[habilidades.length - 1].id + 1 : 1,
  };
  setHabilidades([...habilidades, novaHabilidade]);
};

    return (
    <div className="h-screen grid grid-cols-2  bg-gray-900 ">
     <div className="bg-[#EFD00E]">
        <FormularioHabilidades
          habilidades={habilidades}
          onAdicionarHabilidade={handleAdicioanarHabilidade}
          onRemoverHabilidade={(id: number) => setHabilidades(habilidades.filter(hab => hab.id !== id))}
        />
        </div>

      <div className="bg-[#EFD09E]">
        <div className="Habilidades">
          {habilidades.length === 0 ? (
            <p>Ainda não foram adicionadas habilidades</p>
          ) : (
            <ul>
              {habilidades.map((hab) => (
                <li key={hab.id}>
                  <strong>{hab.nome}</strong> - {hab.nivel}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;