

import ExperiencesForm from "./components/ExperiencesForm";
import FormularioHabilidades  from './components/FormularioHabilidades';
import CurriculumProvider  from "./context/CurriculumContext";

function App() {
  return (
    <div className="h-screen grid grid-cols-2 bg-gray-900">
      <div className="bg-[#272727] p-8">
        <ExperiencesForm />
          <FormularioHabilidades />
          <CurriculumProvider/>
      </div>
      <div className="bg-[#EFD09E]"></div>
    </div>
  );}
export default App();
