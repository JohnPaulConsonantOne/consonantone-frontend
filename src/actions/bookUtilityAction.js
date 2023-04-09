export const deleteBook = (id) => (dispatch) => {
    dispatch(
        {
            type: "DELETEBOOKRECORD",
            payload: {
                id
            }
        }
    )
}

export const updateBookValues = (updateBookValues) => (dispatch) => {
    dispatch(
        {
            type: "UPDATEBOOKVALUES",
            payload: {
                updateBookValues
            }
        }
    )
}