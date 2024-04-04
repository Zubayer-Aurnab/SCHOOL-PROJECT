import { Outlet } from "react-router-dom"
import NavBar from "./Components/shared/Nav/NavBar"
import Footer from "./Components/shared/Footer/Footer"


function App() {


  return (
    <>
      <div className="bg-[#F7F6E7]">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
