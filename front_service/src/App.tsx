import { Route, Routes } from "react-router-dom"
import "./App.css"
import Auth from "./features/auth/Auth"
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Auth/>}/>
      </Route>
    </Routes>
  )
}

export default App