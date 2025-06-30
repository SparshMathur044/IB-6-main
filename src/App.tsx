import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthGuard } from './components/AuthGuard'
import { Landing } from './pages/Landing'
import { App as AppPage } from './pages/App'
import { BriefDetail } from './pages/BriefDetail'
import { Dashboard } from './pages/Dashboard'
import { Contact } from './pages/Contact'
import { Settings } from './pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/app" element={
              <AuthGuard>
                <AppPage />
              </AuthGuard>
            } />
            <Route path="/brief/:id" element={
              <AuthGuard>
                <BriefDetail />
              </AuthGuard>
            } />
            <Route path="/dashboard" element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            } />
            <Route path="/settings" element={
              <AuthGuard>
                <Settings />
              </AuthGuard>
            } />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App