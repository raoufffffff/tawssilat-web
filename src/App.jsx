import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import Vidoe from "./components/vidoe/Vidoe"

function App() {
  return (
    <div
      className='w-full   overflow-hidden'
    >
      <Header />
      <div
        className="min-h-96"
      >
        <Vidoe />
        <Home />
        <div
          className="w-9/12 h-[0.5px] my-5 bg-[#3337] mx-auto"
        ></div>
      </div>

    </div>
  )
}

export default App
