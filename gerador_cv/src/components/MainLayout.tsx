import PersonalDataForm from "./forms/PersonalDataForm";
import ExperiencesForm from "./forms/ExperiencesForm";
import FormularioHabilidades from "./forms/FormularioHabilidades";
import PreviewCV from "./PreviewCV";

export function MainLayout() {
  return (
    <div className="h-screen grid grid-cols-2 bg-gray-900">
      {/* Coluna esquerda: formulários */}
      <div className="bg-[#272727] p-8 overflow-y-auto space-y-6">
        <PersonalDataForm />
        <ExperiencesForm />
        <FormularioHabilidades />
      </div>

      {/* Coluna direita: preview */}
      <div className="bg-[#EFD09E] p-8 overflow-y-auto">
        <PreviewCV />
      </div>
    </div>
  );
}
