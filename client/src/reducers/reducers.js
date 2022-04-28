export default(books=[],action)=>{
    switch (action.type) {
        case 'getBooks':
            return action.payload
        case 'createBook':
            return [...books,action.payload];
        case 'updateBook':
            return books.map((book)=>(book._id===action.payload._id?action.payload:book))
        case 'likeBook':
            return books.map((book)=>(book._id===action.payload._id?action.payload:book))
        case 'deleteBook':
            return books.filter((book)=>book._id!==action.payload)
            default:
                return books
            break;
    }

}