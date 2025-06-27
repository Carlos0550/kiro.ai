import { Route, Routes } from "react-router-dom"
import "./App.css"
import Auth from "./features/auth/Auth"
import Home from "./features/home/Home"
import Layout from "./components/Layout"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>

      <Route path="/authentication" element={<Auth/>}/>
    </Routes>
  )
}

export default App