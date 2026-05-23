import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Playground from './pages/playground'

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
        </Routes>
    </BrowserRouter>
}
