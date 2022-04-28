import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book/Book'
import {getBooks} from '../../actions/index'
import { useSelector} from 'react-redux'
const Books = ({setCurrentId}) => {
  
  const book=useSelector((state)=>state.books)

  //console.log(book);
  return (
    <div>
      {
        book.map((book)=>(
          <div key={book._id}>
          <Book book={book} setCurrentId={setCurrentId}/>
          </div>
        ))
      }
    </div>
  )
}

export default Books