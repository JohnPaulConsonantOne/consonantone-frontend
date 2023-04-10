const bookRecords = {
    dashboard: []
}

export const bookRecordReducer = (state = bookRecords, action) => {
    switch (action.type) {
        case "DASHBOARD":
            return { ...state }

        default:
            return { ...state }
    }

}
