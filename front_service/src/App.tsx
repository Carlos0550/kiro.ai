import { Route, Routes } from "react-router-dom"
import "./App.css"
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index />
      </Route>
    </Routes>
  )
}

export default App