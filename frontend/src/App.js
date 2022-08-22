import React from "react"
import Quiz from "./app/Quiz"
import Home from "./app/Home"
import Movie from "./app/Movie"
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/movie" element={<Movie /> }  />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}