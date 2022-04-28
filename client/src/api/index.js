import axios from 'axios'
const url='http://localhost:5000' 

export const getBooks=()=>axios.get(url);
export const createBook=(post)=>axios.post(url,post);
export const updateBook=(id,post)=>axios.put(`${url}/${id}`,post);
export const deleteBook=(id)=>axios.delete(`${url}/${id}`)
export const likeBooke=(id,post)=>axios.patch(`${url}/${id}/likeBook`,post)