import { Outlet } from "react-router-dom"
import Header from "./compunent/header/Header"
import Footer from "./compunent/footer/Footer"

function App() {

  return (
    <div
      className='w-full   overflow-hidden'
    >
      <Header />
      <div
        className="min-h-96"
      >
        <Outlet />
      </div>
      <Footer />

    </div>
  )
}

export default App
