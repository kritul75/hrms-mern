import { useState } from 'react'
import { Routes,Route, Navigate} from 'react-router-dom';
import Login from './pages/Login.jsx'
import Employees from './pages/Employees.jsx';
import Leaves from './pages/Leaves.jsx';
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
      <Route path="/employees" element=
        {
          <ProtectedRoute>
            <Employees />
          </ProtectedRoute>
        }
      />
      <Route path="/leaves" element=
        {
          <ProtectedRoute>
            <Leaves />
          </ProtectedRoute>
        }
      />
      {/* redirect unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" replace/>}/>
    </Routes>
  )
}

export default App
