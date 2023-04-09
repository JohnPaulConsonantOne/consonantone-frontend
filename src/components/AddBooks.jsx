import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { bookRecordAction, collectBooks } from '../actions/bookRecordAction';

export const AddBooks = () => {
    const dispatch = useDispatch()
    const getBookValue = useSelector(state => state.books.bookValues)
    const onChange = (e) => dispatch(bookRecordAction({
        [e.target.name]: e.target.value,

    }));
    const AddBookHandler = (e) => {
        e.preventDefault()
        // empArray.push(getBookValue)
        dispatch(collectBooks(getBookValue))
    }
    return (
        <Form onSubmit={AddBookHandler}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Add Books"
                    aria-label="Add Books"
                    aria-describedby="basic-addon2"
                    onChange={onChange}
                    name="bookTitle"
                />
                <Button variant="outline-secondary" id="button-addon2" type="submit">
                    Add
                </Button>

            </InputGroup >
        </Form>
    )
}
