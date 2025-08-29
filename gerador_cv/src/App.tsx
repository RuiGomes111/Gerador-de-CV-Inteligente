import { useState } from "react";
import PersonalDataForm from "./components/form/formulario";
import type { Resume } from "./types/resume";

function App() {
  const [resume, setResume] = useState<Resume>({
    personal: { name: "", email: "", phone: "", linkedin: "", summary: "" }
  });

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="overflow-y-auto p-6 border-r">
        <PersonalDataForm personal={resume.personal} setResume={setResume} />
      </div>
      <div className="overflow-y-auto p-6 bg-gray-50">
        
      </div>
    </div>
  );
}

export default App;
