import express from 'express'
const router=express.Router();

import {getAllBooks,getBookById,addBook,deleteAllBooks,deleteBookById,updateBook} from '../controller/books.controller.js'

router.get('/',getAllBooks);
router.get('/:id',getBookById);
router.post('/',addBook)
router.put('/:id',updateBook)
router.delete('/',deleteAllBooks)
router.delete('/:id',deleteBookById)

export default router

