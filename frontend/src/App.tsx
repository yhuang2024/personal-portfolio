import { useState } from 'react'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ResearchPage from './pages/ResearchPage'
import WritingPage from './pages/WritingPage'

function App() {
  const [page, setPage] = useState<'home' | 'projects' | 'research' | 'writing'>('home')

  return (
    <>
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'projects' && <ProjectsPage />}
      {page === 'research' && <ResearchPage />}
      {page === 'writing' && <WritingPage />}
    </>
  )
}

export default App