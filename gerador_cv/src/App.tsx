
import ExperiencesForm from "./components/ExperiencesForm";
import FormularioHabilidades  from './components/FormularioHabilidades';
function App() {
  return (
    <div className="h-screen grid grid-cols-2 bg-gray-900">
      <div className="bg-[#272727] p-8">
        <ExperiencesForm />
          <FormularioHabilidades />
      </div>
      <div className="bg-[#EFD09E]"></div>
    </div>
  );
}





export default App;