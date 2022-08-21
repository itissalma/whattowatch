import React from "react"
import Quiz from "./app/Quiz"
import Home from "./app/Home"
import {Route, Routes, BrowserRouter} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}