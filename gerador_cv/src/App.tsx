import { CurriculumProvider } from "./context/CurriculumContext"

function App() {
  return (
    <CurriculumProvider>
    <div className="h-screen grid grid-cols-2  bg-gray-900 ">
      <div className="bg-[#272727]"></div>
      <div className="bg-[#EFD09E]"></div>
    </div>
    </CurriculumProvider>
  )
}

export default App
