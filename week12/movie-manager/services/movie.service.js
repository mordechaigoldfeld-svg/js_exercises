import {readFile,writeFile} from "./file-service.js"



async function showAllMovies() {
    try{
    const movies = await readFile()
    movies.forEach(res => {
    console.log(res.title);
    });

    }catch(e){
        console.error(e)
    }
    
}

showAllMovies()