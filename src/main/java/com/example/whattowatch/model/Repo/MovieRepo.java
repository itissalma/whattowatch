package com.example.whattowatch.model.Repo;

import com.example.whattowatch.model.movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepo extends JpaRepository<movie, Long>{
}
