
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import FolhaPagamento from './pages/modules/FolhaPagamento'
import Funcionarios from './pages/modules/Funcionarios'
import NovoFuncionario from './pages/modules/NovoFuncionario'
import ProcessarFolha from './pages/modules/ProcessarFolha'
import Contabilidade from './pages/modules/Contabilidade'
import Fiscal from './pages/modules/Fiscal'
import Patrimonio from './pages/modules/Patrimonio'
import RH from './pages/modules/RH'
import Layout from './components/Layout'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="folha-pagamento" element={<FolhaPagamento />} />
            <Route path="funcionarios" element={<Funcionarios />} />
            <Route path="funcionarios/novo" element={<NovoFuncionario />} />
            <Route path="folha-pagamento/processar" element={<ProcessarFolha />} />
            <Route path="contabilidade" element={<Contabilidade />} />
            <Route path="fiscal" element={<Fiscal />} />
            <Route path="patrimonio" element={<Patrimonio />} />
            <Route path="rh" element={<RH />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
