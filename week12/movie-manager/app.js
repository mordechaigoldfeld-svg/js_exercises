import rl from "readline-sync"
import {showById,showMenu,createMovie,deleteById,showAllMovies,updateRate,searchByName,sortByGenre,statistics} from "./services/movie.service.js"
import { getBody } from "./utils/validator.js";




async function main(){
    let choice;
    do{
        showMenu()
        choice = rl.questionInt("please enter your choice 1-9");
        switch(choice){
            case 1:
                await showAllMovies()
                break;
            case 2:
                const idToShow = rl.questionInt("Enter movie ID: ");
                const show = await showById(idToShow);
                console.log(show)
                break;
            case 3:
                await createMovie(getBody());
                break;
            case 4:
                const idToDelete = rl.questionInt("Enter movie ID to delete: ");
                await deleteById(idToDelete);
                break;
            case 5:
                const idToRate = rl.questionInt("please enter movie id to rate");
                const newRate = rl.questionInt("please enter the new rate");
                await updateRate(idToRate,newRate);
                break; 
            case 6:
                const searchName = rl.question("please enter the name or a part of the name");
                await searchByName(searchName); 
                break;
            case 7:
                const genreSearch = rl.question("please enter the genre (fiction,comedy or others):");
                await sortByGenre(genreSearch);
                break;
            case 8:
                console.log (await statistics());
                break               
            case 9:
                console.log("Goodbye! Thank you for using the movie system.");
                break;     
        }
            
        }while(choice !==9)
}

main()