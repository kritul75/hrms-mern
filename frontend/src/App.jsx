import { useState } from 'react'
import { Routes,Route, Navigate} from 'react-router-dom';
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>
      {/* public Route */}
      <Route path="/login" element={<Login/>}/>
      {/* protected Route */}
      <Route path="/dashboard" element=
        {
          <ProtectedRoute>
            <h1>Dashboard - Protected Content</h1>
          </ProtectedRoute>
        }
      />
      {/* redirect unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" replace/>}/>
    </Routes>
  )
}

export default App
