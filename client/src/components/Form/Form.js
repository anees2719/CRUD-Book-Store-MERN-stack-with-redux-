import React, { useEffect, useState } from 'react'
import {Container,TextField,Button,Typography,Box,Grid,Paper} from "@material-ui/core"
import useStyle from './style'
import axios from 'axios'
import FileBase64 from 'react-file-base64'
import {useSelector,useDispatch} from 'react-redux'
import {createPost,updateBook} from '../../actions/index'

const Form = ({currentId,setCurrentId}) => {
  const classes=useStyle()
  const dispatch=useDispatch()
  const [book,setBook]=useState({title:'',author:'',discription:'',price:'',image:''});
  const updatedBook=useSelector((state)=>currentId?state.books.find((book)=>book._id===currentId) :null)

  useEffect(()=>{
    if(updatedBook){
      setBook(updatedBook)
    }
     
  },[updatedBook])
  
  const clear=()=>{
    setCurrentId(0);
    setBook({title:'',author:'',discription:'',price:'',image:''})
  }
  
  const handleSubmit=async()=> {
    if(currentId==0){dispatch(createPost(book))}
    else{dispatch(updateBook(currentId,book))}
    clear();

  }
  return (

    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Book</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={book.title} onChange={(e) => setBook({ ...book, title: e.target.value })} />
        <TextField name="author" variant="outlined" label="Author" fullWidth value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value })} />
        <TextField name="discription" variant="outlined" label="Discription" fullWidth multiline rows={4} value={book.discription} onChange={(e) => setBook({ ...book, discription: e.target.value })} />
        <TextField name="price" variant="outlined" label="Price" fullWidth value={book.price} onChange={(e) => setBook({ ...book, price: e.target.value })} />
        <FileBase64 value={book.image} label='Select an image' onDone={({base64})=>setBook({...book,image:base64})}  />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    
  )
}

export default Form