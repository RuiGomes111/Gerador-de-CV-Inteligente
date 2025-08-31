
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

export type Experience = {
    id: string;
    company: string;
    position: string;
    start: string;
    end?: string;
    current: boolean;
    description: string;
};

export type CurriculumState = {
    personal: PersonalInfo;
    skills: Skill[];
    experiences: Experience[];
}
>>>>>>> origin/estadoGlobal
