import React from "react"
import { useState } from "react"

const Movie = (props) =>{
    const {movieList} = props
    const empty = movieList.length <= 0
    const [curMovieIndex, setCurMovieIndex ]  = movieList.length ? 0 : -1
    const [curMovie, setCurMovie] = movieList.length ? movieList[0] : {}
    const getNextMovie = () =>{
        if(empty || curMovieIndex >= movieList.length-1) return;
        let curIndex = curMovieIndex +1 
        setCurMovieIndex(curIndex)
        setCurMovie(movieList[curIndex])
    }
    const getPrevMovie = () =>{
        if(empty || curMovieIndex <=0) return;
        let curIndex = curMovieIndex-1;
        setCurMovieIndex(curIndex)
        setCurMovie(movieList[curIndex])
    }
    return (
    <div>
        Movie!!!
    </div>
    )

}

export default Movie