import { rateValidation,genreValidation } from "../utils/validator.js";
import {readFile,writeFile} from "./file-service.js"




export async function showAllMovies() {
    try{
    const movies = await readFile()
    movies.forEach(res => {
    console.log(res.title);
    });

    }catch(e){
        console.error(e)
        return []
    }
    
}


    

export async function createMovie(body) {
    try{
        const movies = await readFile()
        let max = 0
        if (movies.length >0){
            max =  await movies.sort((a,b)=>b.id -a.id)[0].id}
            
        const newMovie ={
            id:max +1,
            title:body.title,
            genre:body.genre,
            year:body.year,
            rating:body.rating
        }
        movies.push(newMovie)
        writeFile(movies)
        console.log("movie created")


    }catch(e){
        console.log(e)
    }
    
}




export async function showById(id) {
    try{
        const exists = await movieExists(id);
        if (!exists){
            return `id:${id} not found`
            
        }
        const movies = await readFile()
        return movies.find((res)=>{
        return res.id === id
    })
    

    }catch(e){
        console.error(e)
        return []
    }
    
}





export function showMenu(){
    console.log("\n=============================");
    console.log("        MOVIE SYSTEM       ");
    console.log("=============================");
    console.log("1. Show all movies");
    console.log("2. Show by id");
    console.log("3. Create new movie");
    console.log("4. Delete movie");
    console.log("5. Update rate");
    console.log("6. Search by name");
    console.log("7. Sort by genre");
    console.log("8. Show statistics");
    console.log("9. Exit");
    console.log("=============================");
}



export async function deleteById(id) {
    try{
        const exists = await movieExists(id);
        if (!exists){
            console.log(`id:${id} not found`);
            return false
        }
        const movies= await readFile();
        const updateMovies = movies.filter((mov)=>  mov.id !== id);
        await writeFile(updateMovies);
        console.log("successfuly deleted")
        return true
    }catch(e){
        console.error(e)
    }
    
}







async function movieExists(id){
    try{
        const movies = await readFile();
        const exists = movies.some((movie) => movie.id === id)
        if (exists){
            return true
          
        }return false

    }catch(e){
        console.log(e)
    }

}




export async function updateRate(id,rate) {
    try{
         const exists = await movieExists(id);
        if (!exists){
            console.log(`id:${id} not found`);
            return false
        }
        if(!rateValidation(rate)){
            console.log("invalid rate.")
            return false
        }
        const movies = await readFile();
        const updated = movies.find((mov)=>mov.id===id);
        updated.rating=rate
        await writeFile(movies)
        console.log("Rate updated successfully");
        return true;

    }catch(e){
        console.log(e)
    }
    
}



export async function searchByName(name){
    try{
       const  movies = await readFile();
       const lowerSearch = name.toLowerCase().trim()
       const findedMovies = movies.filter((mov)=>{return mov.title.toLowerCase().includes(lowerSearch)})
       if(findedMovies.length === 0){
        console.log(`movie with: ${name} in the title is not found!`)
        return false
       }
       return console.log(await findedMovies)
    //    console.log(movies)


    }catch(err){
        console.log(err)
    }
}







export async function sortByGenre(genre){
    try{
        if(!genreValidation(genre)){
            console.log("invalid genre")
            return false
        }
        const movies = await readFile();
        const genreSearch = movies.filter((mov)=>{return mov.genre === genre});
        if(genreSearch.length === 0){
            console.log(`there are  ot movies with genre: ${genre}`);
            return false 
        }
        console.log(genreSearch)
        return true

}catch(err){
    console.log(err)
}
}





export async function statistics() {
    try{
        const movies = await readFile();
       
        const averageRate = movies.map((mov)=>{return mov.rating})
        .reduce((acc,rate)=>{return acc +rate})/movies.length;
        const betterRate = movies.map((mov)=>{return mov.rating})
        .sort((a,b)=>{b.rating-a.rating})[0]
        return await{
           totalMovies:movies.length,
           aveargeRate:averageRate,
           betterRate:betterRate
        }

    }catch(err){
        console.log(err)
    }
    
}


