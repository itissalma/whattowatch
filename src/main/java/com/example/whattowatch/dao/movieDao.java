package com.example.whattowatch.dao;
import com.example.whattowatch.model.movie;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface movieDao {
    int insertMovie(String name, movie Movie);
    default int insertMovie(movie Movie){
        String name=Movie.getname();
        return insertMovie(name, Movie);
    }



}
