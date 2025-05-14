import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../assets/style/main.css';
import '../assets/media-style/media-main.css';
import Header from "../components/Header";
import WelcomeMessage from "../components/WelcomeMessage";
import Account from "../components/Account";


const User = () => {
        const { token } = useSelector((state) => state.auth);
        const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <div>
            <Header isAuthenticated={true} username="Tony" />
            <main className="main bg-dark">
                <WelcomeMessage />
                <h2 className="sr-only">Accounts</h2>
                <Account accountTitle="Argent Bank Checking (x8349)" accountAmount="$2,082.79" accountDescription="Available Balance"/>
                <Account accountTitle="Argent Bank Savings (x6712)" accountAmount="$10,928.42" accountDescription="Available Balance"/>
                <Account accountTitle="Argent Bank Credit Card (x8349)" accountAmount="$184.30" accountDescription="Current Balance"/>
            </main>
        </div>
    );
};

export default User;
