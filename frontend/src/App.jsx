import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoutes from './components/ProtectedRoutes'
import NoteDetails from './pages/NoteDetails'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>}
      />

      <Route
        path="/notes/:noteId"
        element={
          <ProtectedRoutes>
            <NoteDetails />
          </ProtectedRoutes>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  )
}

export default App
