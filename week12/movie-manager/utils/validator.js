import {createMovie} from  '../services/movie.service.js'
import rl from "readline-sync"







function isValidInput(content){
    if(content){
        return true
    }return false
}


export function genreValidation(genre){
    const genres = ["comedy","fiction","others"]
    if (genres.includes(genre)){
        return true
    }return false
}


function yearValidation(year){
    if(year>1900 && year<=2026){
        return true
    }return false
}


export function rateValidation(rate){
    if (rate<=10 && rate>0){
        return true
    }return false
}


export function getBody(){
  let title;
    do {
        title = rl.question("Enter title: ");
        if (!isValidInput(title)) {
            console.log("Invalid title! Cannot enter empty. Try again.");
        }
    } while (!isValidInput(title));
  
    let genre;
    do{
        genre =rl.question("enter a genere:").toLowerCase();
        if (!genreValidation(genre)){
            console.log("iiiiinvalid genre!!! try again.")}
    }while (!genreValidation(genre));

    let year;
    do{
        year =rl.questionInt("enter the year:");
        if (!yearValidation(year)){
            console.log("invalid year,try again!")
        }
    }while (!yearValidation(year));


    let rating;
    do{
        rating = rl.questionInt("please enter the rate(1-10)");
        if(!rateValidation(rating)){
            console.log("invalid rate.")
        }
    }while (!rateValidation(rating));

    return{
        title: title,
        genre: genre,
        year: year,
        rating: rating
    };
     
        

}


