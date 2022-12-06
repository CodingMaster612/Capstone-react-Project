import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./components/Auth.js"
import Body from "./components/Body.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/body" element={<Body />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App