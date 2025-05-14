const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    error: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PROFILE_SUCCESS':
            return { ...state, ...action.payload, error: null };
        case 'FETCH_PROFILE_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default profileReducer;
