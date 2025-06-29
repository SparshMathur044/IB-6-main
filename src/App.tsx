import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { App as AppPage } from './pages/App'
import { BriefDetail } from './pages/BriefDetail'
import { Dashboard } from './pages/Dashboard'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/brief/:id" element={<BriefDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App