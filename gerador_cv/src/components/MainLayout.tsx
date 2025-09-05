import PersonalDataForm from "./form/PersonalDataForm";
import ExperiencesForm from "./form/ExperiencesForm";
import FormularioHabilidades from "./form/FormularioHabilidades";
import PreviewCV from "./PreviewCV";
import TesteIA from "./TesteIA";
import { Toaster } from "react-hot-toast";

export function MainLayout() {
  return (
    <div className="h-screen grid grid-cols-2">
      {/* Lado esquerdo: formulários */}
      <div className="bg-[#272727] p-8 overflow-y-auto text-white">
        <h2 className="text-xl font-bold mb-4">Editar Currículo</h2>
        <PersonalDataForm />
        <FormularioHabilidades />
        <ExperiencesForm />

        {/* Teste do mock da IA */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Teste de IA</h3>
          <TesteIA />
        </div>
      </div>

      {/* Lado direito: preview */}
      <div className="bg-[#F8F9FA] p-8 overflow-y-auto">
        <PreviewCV />
      </div>

      {/* Toasts globais */}
      <Toaster position="top-right" />
    </div>
  );
}
