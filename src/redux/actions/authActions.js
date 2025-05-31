export const loginSuccess = (token) => ({
    type: 'LOGIN_SUCCESS',
    payload: token,
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
});

export const login = (credentials) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (data.body && data.body.token) {
            dispatch(loginSuccess(data.body.token));
        } else {
            dispatch(loginFailure( 'email or password incorrect'));
        }
    } catch (error) {
        dispatch(loginFailure('an error has occurred'));
    }
};
