package com.example.whattowatch.api;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.whattowatch.model.AnswerSet;
import com.example.whattowatch.model.movie;
import java.util.List;
import com.example.whattowatch.model.Repo.MovieRepo;
import com.example.whattowatch.service.MovieService;
@RestController
public class appcontroller {

   
   MovieService myservice;

   @PostMapping(value="/questions")
   public void selectanswers(AnswerSet s)
   {
    myservice.setanswers(s);
   }





    @GetMapping(value="/")
    public List<movie>homepage() {
        return 
    }
    
    
}
