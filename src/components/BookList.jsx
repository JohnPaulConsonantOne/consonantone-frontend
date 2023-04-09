import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../actions/bookUtilityAction';
import { useState } from 'react';
import UpdateBooks from './UpdateBooks';



export default function BookList() {
    const getBookRecords = useSelector(state => state.books.books)
    const [show, setShow] = useState(false);
    const [specificRecord, setspecificRecord] = useState([])
    const dispatch = useDispatch()
    const DeleteBookList = (id) => {
        dispatch(deleteBook(id))
    }
    const UpdateBookHandler = (id) => {
        setShow(true)

        // dispatch(updateBook(id))
        let filterRecord = getBookRecords.filter(bookRecord => bookRecord.id === id)
        console.log()
        setspecificRecord(filterRecord)
    }
    return (
        <>
            {getBookRecords?.map((getBook, index) => {
                let { bookTitle, id } = getBook
                return (
                    <div className='list  p-2 bg-dark text-light d-flex justify-content-between mb-2 align-items-center' key={id}>
                        <div key={index}>{bookTitle}</div>
                        <div className="options">
                            <button className='btn btn-primary' onClick={() => UpdateBookHandler(id)}>Update</button>
                            <button className='btn btn-danger' onClick={() => DeleteBookList(id)}>Delete</button>
                        </div>
                    </div>

                )
            })}
            <UpdateBooks show={show} setShow={setShow} specificRecord={specificRecord} setspecificRecord={setspecificRecord} />
        </>
    )
}
