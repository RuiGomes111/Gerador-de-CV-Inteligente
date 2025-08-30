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
    <div className="h-screen grid grid-cols-2">
      <div className="bg-[#FA8072] p-6 overflow-y-auto">
        <h1 className="text-white text-2xl font-bold mb-6">Gerador de Currículo</h1>
        
        <FormularioHabilidades
          habilidades={habilidades}
          onAdicionarHabilidade={handleAdicioanarHabilidade}
          onRemoverHabilidade={handleRemoverHabilidade}
        />
      </div>

      <div className="bg-white p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Preview do Currículo</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-700 mb-3">Habilidades:</h3>

          {habilidades.length === 0 ? (
            <p className="text-gray-600">Nenhuma habilidade adicionada.</p>
          ) : (
            <div className="space-y-2">
              {habilidades.map((hab) => (
                <div key={hab.id} className="flex justify-between items-center p-3 border border-gray-200 rounded">
                  <div>
                    <span className="font-medium text-gray-800">{hab.nome}</span> - <span className="text-gray-600">{hab.nivel}</span>
                    <span className="ml-2 text-sm text-gray-600">({hab.nivel})</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;