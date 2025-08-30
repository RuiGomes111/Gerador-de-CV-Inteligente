import type { CurriculumState, Skill, Experience } from "../types";

export type CurriculumAction =
  | { type: "UPDATE_PESSOAIS"; field: keyof CurriculumState["personal"]; value: string }
  | { type: "ADD_SKILL"; skill: Skill }
  | { type: "REMOVE_SKILL"; id: string }
  | { type: "UPDATE_SKILL"; id: string; field: keyof Skill; value: string }
  | { type: "ADD_EXPERIENCE"; experience: Experience }
  | { type: "REMOVE_EXPERIENCE"; id: string }
  | { type: "UPDATE_EXPERIENCE"; id: string; field: keyof Experience; value: string };

export function curriculumReducer(state: CurriculumState, action: CurriculumAction): CurriculumState {
  switch (action.type) {
    case "UPDATE_PESSOAIS":
      return {
        ...state,
        personal: {
          ...state.personal,
          [action.field]: action.value,
        },
      };

    case "ADD_SKILL":
      return { ...state, skills: [...state.skills, action.skill] };

    case "REMOVE_SKILL":
      return { ...state, skills: state.skills.filter(s => s.id !== action.id) };

    case "UPDATE_SKILL":
      return {
        ...state,
        skills: state.skills.map(s =>
          s.id === action.id ? { ...s, [action.field]: action.value } : s
        ),
      };

    case "ADD_EXPERIENCE":
      return { ...state, experiences: [...state.experiences, action.experience] };

    case "REMOVE_EXPERIENCE":
      return { ...state, experiences: state.experiences.filter(e => e.id !== action.id) };

    case "UPDATE_EXPERIENCE":
      return {
        ...state,
        experiences: state.experiences.map(e =>
          e.id === action.id ? { ...e, [action.field]: action.value } : e
        ),
      };

    default:
      return state;
  }
}
