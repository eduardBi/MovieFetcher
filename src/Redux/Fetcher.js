import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


const API_KEY="dba73a007a1296ead2116cc50b2c5033";

const SagaFetchAsyncMovie= (API_KEY,page)=>{
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`).then(res=>res.json()).catch(e=>console.log(e))

}
 
export function*  FetchMovieList(action){
    //отправка запроса 
    try {
        const data = yield call((page)=>SagaFetchAsyncMovie('dba73a007a1296ead2116cc50b2c5033',action.page));
        let arrayWithRating=[]
        data.results.map(item=>{arrayWithRating.push({...item,ratedByUser:false,howManytStars:0})})
        //добавляю в массив поля "поставил ли оценку пользыватель"
        yield put({type: "SUCCESS_MOVIES", payload: arrayWithRating});
     } catch (e) {
        yield put({type: "FAIL_MOVIES", payload:[]});
     }
     
}
export function* SagaFetchMovies() {
    yield takeEvery("REQUEST_MOVIES", FetchMovieList)
}
