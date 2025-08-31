// Tipos gerais
export type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    resume: string;
};

export type Skill = {
    id: string;
    name: string;
    level: "Básico" | "Intermediário" | "Avançado";
};

// Tipo Experience unificado
export type Experience = {
    id: string;
    company: string;
    position: string;  // substitui "role"
    start: string;     // substitui "startDate"
    end?: string;      // substitui "endDate"
    current: boolean;
    description: string;
};

// Estado completo do currículo
export type CurriculumState = {
    personal: PersonalInfo;
    skills: Skill[];
    experiences: Experience[];
};
