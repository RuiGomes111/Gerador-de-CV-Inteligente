import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";
import type { CurriculumState } from "../types";
import { curriculumReducer, type CurriculumAction } from "../reducers/curriculumReducer";

const initialState: CurriculumState = {
  personal: {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: "",
  },
  skills: [],
  experiences: [],
};

type CurriculumContextType = {
  state: CurriculumState;
  dispatch: Dispatch<CurriculumAction>;
};

export const CurriculumContext = createContext<CurriculumContextType | undefined>(undefined);

export function CurriculumProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(curriculumReducer, initialState);

  return (
    <CurriculumContext.Provider value={{ state, dispatch }}>
      {children}
    </CurriculumContext.Provider>
  );
}
