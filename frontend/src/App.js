import React from "react"
import Quiz from "./app/Quiz"
import Home from "./app/Home"
import Movie from "./app/Movie"
import {Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'

const movieList = [
  {
    id: '1',
    name: 'Inside Out',
    rating: 9.4,
    imdbLink : 'https://www.imdb.com/title/tt2096673/',
    description: 'After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.',
    genres: [
      'Action',
      'Fantasy',
      'Crime',
      'Fantasy',
      'Thriller'
    ],
    // duration: '1h 35m',
    trailerURL: 'https://www.imdb.com/video/vi203730969?playlistId=tt2096673&ref_=tt_ov_vi',
    posterURL: 'https://www.themoviedb.org/t/p/w220_and_h330_face/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg',


  }
]

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/movie" element={<Movie movies={movieList} /> }  />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}