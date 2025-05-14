import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../redux/actions/profileAction.js';
import Header from '../components/Header.jsx';
import WelcomeMessage from '../components/WelcomeMessage.jsx';
import Account from '../components/Account.jsx';

const User = () => {
    const { token } = useSelector((state) => state.auth);
    const { firstName } = useSelector((state) => state.profile);
    const { lastName } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        } else {
            dispatch(fetchUserProfile());
        }
    }, [token, navigate, dispatch]);

    return (
        <div>
            <Header isAuthenticated={true} username={firstName} />
            <main className="main bg-dark">
                <WelcomeMessage firstName={firstName} lastName={lastName} />
                <h2 className="sr-only">Accounts</h2>
                <Account accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountDescription="Available Balance" />
                <Account accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountDescription="Available Balance" />
                <Account accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountDescription="Current Balance" />
            </main>
        </div>
    );
};

export default User;
