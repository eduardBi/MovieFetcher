const API_KEY:string="dba73a007a1296ead2116cc50b2c5033";


const FetchMovieList= async (API_KEY:string)=>{

    let request=await fetch('https://api.themoviedb.org/3/movie/550?api_key=dba73a007a1296ead2116cc50b2c5033')
    let responseToJson=await request.json().catch(e=>{theError:e})
    console.log(responseToJson);
}
