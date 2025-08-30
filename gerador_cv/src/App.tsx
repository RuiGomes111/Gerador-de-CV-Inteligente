import { CurriculumProvider } from "./context/CurriculumContext";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <CurriculumProvider>
      <MainLayout />
    </CurriculumProvider>
  );
}

export default App;
