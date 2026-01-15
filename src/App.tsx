import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Index from './pages/Index'
import Match from './pages/Match'
import Palmares from './pages/Palmares'
import Pantheon from './pages/Pantheon'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/match" element={<Match />} />
        <Route path="/palmares" element={<Palmares />} />
        <Route path="/pantheon" element={<Pantheon />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
