import { useState } from 'react';
import { FormularioHabilidades } from './components/FormularioHabilidades';

interface Habilidade {
  id: number;
  nome: string;
  nivel: "Básico" | "Intermediário" | "Avançado";
}

function App() {

  const [habilidades, setHabilidades] = useState<Habilidade[]>([]);
  const handleAdicioanarHabilidade = (habilidade: Habilidade) => {
 setHabilidades([...habilidades, habilidade]);
  };

    return (
    <div className="h-screen grid grid-cols-2  bg-gray-900 ">
     <div className="bg-[#272727]">
        <FormularioHabilidades onAdicionarHabilidade={handleAdicioanarHabilidade} />
        </div>

      <div className="bg-[#EFD09E]">
        <div className="habilidades">
          {habilidades.length === 0 ? (
            <p>Ainda não foram adicionadas Habilidades</p>
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