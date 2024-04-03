import { Outlet } from "react-router-dom"
import NavBar from "./Components/shared/Nav/NavBar"


function App() {


  return (
    <>
      <div className="bg-[#F7F6E7]">
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
