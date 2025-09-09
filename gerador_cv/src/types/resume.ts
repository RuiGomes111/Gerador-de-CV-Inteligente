export type CurriculumState = {
  personal: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    resume: string;
  };
  skills: string[];
  experiences: { title: string; company: string }[];
};
