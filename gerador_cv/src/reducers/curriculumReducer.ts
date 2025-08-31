import type { CurriculumState } from "../types";

export type CurriculumAction =
  | { type: "SET_PERSONAL"; payload: CurriculumState["personal"] }
  | { type: "ADD_EXPERIENCE"; payload: { title: string; company: string } }
  | { type: "ADD_SKILL"; payload: string };

export function curriculumReducer(state: CurriculumState, action: CurriculumAction): CurriculumState {
  switch (action.type) {
    case "SET_PERSONAL":
      return { ...state, personal: action.payload };
    case "ADD_EXPERIENCE":
      return { ...state, experiences: [...state.experiences, action.payload] };
    case "ADD_SKILL":
      return { ...state, skills: [...state.skills, action.payload] };
    default:
      return state;
  }
}
