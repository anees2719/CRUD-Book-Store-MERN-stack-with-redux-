import bookModel from "../model/books.model.js";

//getting all books from monogoDB

export const getAllBooks=async(req,res)=>{
    try {
        const books=await bookModel.find()
        res.status(200).json(books)
        
    } catch (error) {
        res.status(400).send(error)
        
    }
}

//get a book by ID
export const getBookById=async(req,res)=>{
    const id=req.params.id
    try {
        const newBook=await bookModel.findById(id)
        res.status(200).json(newBook)
    } catch (error) {
        res.status(401).json(error)
    
    }
}

//add a book to record
export const addBook=async(req,res)=>{
    const {title,author,discription,price,image}=req.body;
    try {
        const newBook=new bookModel({title,author,discription,price,image})
        newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(401).send(error)
    }
}


//update a book by id 
export const updateBook=async(req,res)=>{
    const id=req.params.id;
    const {title,author,discription,price,image}=req.body;
    try {
        if(id){
            await bookModel.findByIdAndUpdate(id,{title:title,author:author,discription:discription,price:price,image:image})
            res.status(200).json({id:req.params.id,title:title,author:author,discription:discription,price:price,image:image})
        }
        else{res.status(500).send('book not found agains this id')}

    } catch (error) {
        res.status(404).send(error)
        
    }
}

export const deleteBookById=async(req,res)=>{
    const id=req.params.id;
    try {
        await bookModel.findByIdAndRemove(id)
        res.status(201).send('Book deleted successfully..')
    } catch (error) {
        res.status(404).send(error)
        
    }
}

export const deleteAllBooks=async(req,res)=>{
    try {
        await bookModel.remove()
        res.status(200).send("All books deleted successfully..")
    } catch (error) {
        res.status(400).send(error)
    }
}

