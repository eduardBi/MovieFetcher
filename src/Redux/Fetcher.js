import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


const API_KEY="dba73a007a1296ead2116cc50b2c5033";

const SagaFetchAsyncMovie= (API_KEY,page)=>{
    //асинхронный запрос
    console.log(page)
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dba73a007a1296ead2116cc50b2c5033&page=${page}`).then(res=>res.json()).catch(e=>console.log(e))

}
 
export function*  FetchMovieList(data){
    //отправка запроса 
       console.log( data);
    try {
        const data = yield call((page)=>SagaFetchAsyncMovie('dba73a007a1296ead2116cc50b2c5033',page));
        yield put({type: "SUCCESS_MOVIES", payload: data.results});
     } catch (e) {
        yield put({type: "FAIL_MOVIES", message: e.message});
     }
     
}
export function* SagaFetchMovies() {
    yield takeEvery("REQUEST_MOVIES", FetchMovieList)
}
