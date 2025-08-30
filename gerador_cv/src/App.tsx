import { CurriculumProvider } from "./context/CurriculumContext";

function App() {
  return (
    <CurriculumProvider>
      <div className="h-screen grid grid-cols-2 bg-gray-900">
        {/* Coluna esquerda - Formulário */}
        <div className="bg-[#272727] overflow-y-auto">
          <div className="p-6">
            <h1 className="text-white text-2xl font-bold mb-6">
              Gerador de CV
            </h1>
            {/* Conteúdo do formulário será adicionado aqui */}
          </div>
        </div>

        {/* Separador visual */}
        <div className="w-px bg-gray-600 absolute left-1/2 top-0 h-full"></div>

        {/* Coluna direita - Preview do CV */}
        <div className="bg-[#EFD09E] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-gray-800 text-2xl font-bold mb-6">
              Preview do CV
            </h2>
            {/* Preview do CV será adicionado aqui */}
          </div>
        </div>
      </div>
    </CurriculumProvider>
  );
}

export default App;
