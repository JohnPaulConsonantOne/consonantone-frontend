
import { v4 as uuid } from "uuid";
export const bookRecordAction = (bookValues) => (dispatch, getState) => {
    const { recordValue } = getState()
    dispatch({
        type: 'BOOKDETAIL',
        payload: {
            bookValues: bookValues, recordValue
        }
    })
}

export const collectBooks = (books) => (dispatch, getState) => {
    let { allRecords } = getState()
    dispatch({
        type: 'BOOKRECORDS',
        payload: {
            books, allRecords, id: uuid()
        }
    })
}