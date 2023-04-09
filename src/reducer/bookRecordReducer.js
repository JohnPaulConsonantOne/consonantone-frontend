const bookRecords = {
    books: [],
    bookValues: [],
    updateBookValues: []
}

export const bookRecordReducer = (state = bookRecords, action) => {
    // console.log(state)
    switch (action.type) {
        case "BOOKRECORDS":
            return {
                ...state, books: [...state.books, { ...action.payload.books, id: action.payload.id }]
            }

        case "BOOKDETAIL":
            return { ...state, bookValues: action.payload.bookValues }

        case "DELETEBOOKRECORD":
            return { ...state, books: state.books.filter(book => book.id !== action.payload.id) }

        case "UPDATEBOOKVALUES":
            return { ...state, updateBookValues: action.payload.updateBookValues }

        case "UPDATEBOOKRECORD":
            return {
                ...state, books: state.books.filter(book => {
                    if (book.id === action.payload.id) {
                        book.bookTitle = action.payload.bookTitle
                    }
                })
            }

        default:
            return { ...state }
    }

}
