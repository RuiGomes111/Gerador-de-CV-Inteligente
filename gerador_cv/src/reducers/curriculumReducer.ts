import type { CurriculumState, Experience, Skill } from "../types";

export type CurriculumAction =
  | { type: "SET_PERSONAL"; payload: CurriculumState["personal"] }
  | { type: "ADD_EXPERIENCE"; payload: Experience }
  | { type: "ADD_SKILL"; payload: Skill };

export function curriculumReducer(
  state: CurriculumState,
  action: CurriculumAction
): CurriculumState {
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
