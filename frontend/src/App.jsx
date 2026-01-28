import { useState } from 'react'
import { Routes,Route, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx'
import Employees from './pages/Employees.jsx';
import Leaves from './pages/Leaves.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>

        {/* public Route */}
        <Route path="/login" element={<Login/>}/>
        {/* protected Route */}
      <Route path="/dashboard" element=
        {
          <ProtectedRoute>
            <Dashboard />
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
    </>
  )
}

export default App
