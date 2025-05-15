export const fetchUserProfile = () => async (dispatch, getState) => {
    try {
        const { token } = getState().auth;
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: data.body });
    } catch (error) {
        dispatch({ type: 'FETCH_PROFILE_FAILURE', payload: error.message });
    }
};

export const updateUserProfile = (formData) => async (dispatch, getState) => {
    try {
        const { token } = getState().auth;
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: data.body });
    } catch (error) {
        dispatch({ type: 'UPDATE_PROFILE_FAILURE', payload: error.message });
    }
};
