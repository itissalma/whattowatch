package com.example.whattowatch.model;
import java.lang.String;
import java.util.List;
import java.util.ArrayList;
public class movie {
    
    private String name;
    private int year;
    private float rating;
    private List<String> genres=new ArrayList<>();
    private String mood;
    private String language;

public movie(String name,int year,float rating,List<String> genres, String mood, String language)
{
    this.name=name;
    this.year=year;
    this.rating=rating;
    this.genres=genres;
    this.mood=mood;
    this.language=language;
}

public String getname()
{
    return name;
}
public int getyear()
{
    return year;
}
public float getrating()
{
    return rating;
}
public List<String> getgenres()
{
    return genres;
}
public String getmood()
{
    return mood;
}
public String getlanguage()
{
    return language;
}


}
