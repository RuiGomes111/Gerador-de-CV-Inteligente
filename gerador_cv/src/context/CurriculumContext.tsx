import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";
import type { CurriculumState } from "../types";
import {
  curriculumReducer,
  type CurriculumAction,
} from "../reducers/curriculumReducer";

// Estado inicial do currículo
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

// Tipo do contexto
type CurriculumContextType = {
  state: CurriculumState;
  dispatch: Dispatch<CurriculumAction>;
};

// Criando o contexto
export const CurriculumContext = createContext<CurriculumContextType | undefined>(
  undefined
);

// Provider do contexto
export function CurriculumProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(curriculumReducer, initialState);

  return (
    <CurriculumContext.Provider value={{ state, dispatch }}>
      {children}
    </CurriculumContext.Provider>
  );
}
