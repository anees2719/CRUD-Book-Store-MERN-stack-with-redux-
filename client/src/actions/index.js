
import * as api from '../api/index'

export const getBooks=()=>async(dispatch)=>{
    try {
        const {data}=await api.getBooks()
        dispatch({type:"getBooks",payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const createPost=(book)=>async(dispatch)=>{
    try {
        const {data}=await api.createBook(book)
        dispatch({type:'createBook',payload:data})
    } catch (error) {
        console.log(error);   
    }
}

export const updateBook=(id,book)=>async(dispatch)=>{
    try {
        const {data}=await api.updateBook(id,book)
        dispatch({type:'updateBook',payload:data})
    } catch (error) {
        console.log(error);
    }
}


export const likeBook=(id,book)=>async(dispatch)=>{
    try {
        const {data}=await api.likeBooke(id,book)
        dispatch({type:'likeBook',payload:data})
    } catch (error) {
        console.log(error);
        
    }
}


export const deleteBook=(id)=>async(dispatch)=>{
    try {
        await api.deleteBook(id)
        dispatch({type:'deleteBook',payload:id})
    } catch (error) {
        console.log(error);
    }
}