import { useState } from "react";
import { useCurriculum } from "../../context/useCurriculum";
import AIButton from "../AIButton";


export default function PersonalDataForm() {
  const { state, dispatch } = useCurriculum();
  const [personal, setPersonal] = useState(state.personal);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const savePersonal = () => {
    dispatch({ type: "SET_PERSONAL", payload: personal });
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-white">Dados Pessoais</h2>
      <input name="name" value={personal.name} onChange={handleChange} placeholder="Nome" className="mb-2 p-2 w-full rounded"/>
      <input name="email" value={personal.email} onChange={handleChange} placeholder="Email" className="mb-2 p-2 w-full rounded"/>
      <input name="phone" value={personal.phone} onChange={handleChange} placeholder="Telefone" className="mb-2 p-2 w-full rounded"/>
      <input name="linkedin" value={personal.linkedin} onChange={handleChange} placeholder="LinkedIn" className="mb-2 p-2 w-full rounded"/>
      <div className="flex gap-2 items-start mb-2">
        <textarea name="resume" value={personal.resume} onChange={handleChange} placeholder="Resumo" className="mb-2 p-2 w-full rounded"/>
        <AIButton 
          text={personal.resume}
          onSuccess={(improved) => {
            const update = { ...personal, resume: improved };
            setPersonal(update);
            dispatch({ type: "SET_PERSONAL", payload: update});
          }}
        />
      </div>
      <button onClick={savePersonal} className="bg-blue-500 text-white px-4 py-2 rounded">Salvar</button>
    </div>
  );
}
