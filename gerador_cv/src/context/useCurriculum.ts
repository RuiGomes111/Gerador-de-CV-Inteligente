import { useContext } from "react";
import { CurriculumContext } from "./CurriculumContext";

export function useCurriculum() {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error("useCurriculum deve ser usado dentro de um CurriculumProvider");
  }
  return context;
}
