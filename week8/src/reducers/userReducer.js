const initialState = {
    id: '',
    pw: '',
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_ID':
            return {
                ...state,
                id: action.payload
            };
        case 'UPDATE_USER_PW':
            return {
                ...state,
                pw: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
