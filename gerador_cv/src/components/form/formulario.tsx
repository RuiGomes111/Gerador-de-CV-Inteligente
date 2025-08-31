import type { Resume } from "../../types/resume";

interface Props {
  personal: Resume["personal"];
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
}

export default function PersonalDataForm({ personal, setResume }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResume(prev => ({
      ...prev,
      personal: { ...prev.personal, [name]: value }
    }));
  };

  return (
    <form className="space-y-4">
      <h2 className="text-xl font-bold">Dados Pessoais</h2>

      <input
        type="text"
        name="name"
        placeholder="Nome completo"
        value={personal.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={personal.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="phone"
        placeholder="Telefone"
        value={personal.phone}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn"
        value={personal.linkedin}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="summary"
        placeholder="Resumo profissional"
        value={personal.summary}
        onChange={handleChange}
        className="w-full p-2 border rounded min-h-[100px]"
      />
    </form>
  );
}
