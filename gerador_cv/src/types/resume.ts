export type CurriculumState = {
  personal: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    resume: string;
    photo: string; // 🔹 novo
  };
  skills: {
    id: string;
    name: string;
    level: string;
  }[];
  experiences: {
    id: string;
    position: string;
    company: string;
    start: string;
    end?: string;
    description: string;
  }[];
};
