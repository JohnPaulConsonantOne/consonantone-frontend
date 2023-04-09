import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateBookValues } from '../actions/bookUtilityAction';
import { useDispatch, useSelector } from 'react-redux';

export default function UpdateBooks({ show, setShow, specificRecord, setspecificRecord }) {
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const getBookValue = useSelector(state => state.books.books)
    const getBookUpdatedValue = useSelector(state => state.books.updateBookValues)
    // let selectedRecord = specificRecord[0]?.bookTitle
    // dispatch updateBookValues
    const UpdateFormValues = () => {
        setShow(false)
        specificRecord[0].bookTitle = getBookUpdatedValue
        console.log(specificRecord)
        let updatedFilterBook = getBookValue.filter(getBook => specificRecord[0].id === getBook.id)
        console.log(updatedFilterBook)
        dispatch(updateBookValues(updatedFilterBook[0]))
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Add Books"
                            aria-label="Add Books"
                            aria-describedby="basic-addon2"
                            onChange={(e) => dispatch(updateBookValues(e.target.value))}
                            name="bookTitle"
                            defaultValue={specificRecord[0]?.bookTitle}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={UpdateFormValues}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}