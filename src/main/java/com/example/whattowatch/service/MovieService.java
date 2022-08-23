package com.example.whattowatch.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.whattowatch.model.AnswerSet;
import com.example.whattowatch.model.movie;
import com.example.whattowatch.model.Repo.MovieRepo;

@Service
public class MovieService {

    private AnswerSet set;
    

    @Autowired
    private MovieRepo repo;


    public void setanswers(AnswerSet set)
    {
        this.set=set;
    }

    public movie getthemovie()
    {
    }






    
}
