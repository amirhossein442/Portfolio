import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./Pages/Home"
import { NotFound } from "./Pages/NotFound"
import { Toast } from "@radix-ui/react-toast"



function App() {
  return (
    <div className="">
      <BrowserRouter >
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
