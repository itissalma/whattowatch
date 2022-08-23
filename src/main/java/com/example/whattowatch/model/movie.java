package com.example.whattowatch.model;
import java.lang.String;
import java.util.List;

import javax.persistence.*;

import java.util.ArrayList;
@Entity
@Table(name = "movie")
public class movie {
    @Id
    @GeneratedValue 
    private long id;

    @Column
    private String name;

    @Column
    private int year;

    @Column
    private float rating;

    @Column
    private String genre1;

    @Column 
    private String genre2;

    @Column
    private String mood;

    @Column
    private String language;

    @Column
    private String setin;



public movie()
{
    name="";
    year=0;
    rating=0;
    mood="";
    language="";
    setin="";
    genre1="";
    genre2="";

}
public movie(String name,int year,float rating, String mood, String language,String setin,String genre1,String genre2)
{
    this.name=name;
    this.year=year;
    this.rating=rating;
    this.genre1=genre1;
    this.genre2=genre2;
    this.setin=setin;
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
public String getgenre1()
{
    return genre1;
}
public String getgenre2()
{
    return genre2;
}
public String getsetin()
{
    return setin;
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
