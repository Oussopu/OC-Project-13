import React from 'react';
import '../assets/style/main.css';
import '../assets/media-style/media-main.css';
import Header from '../components/Header';
import Banner from "../components/Banner.jsx";
import FeaturesContainer from "../components/FeaturesContainer.jsx";

const Home = () => {
    return (
        <div>
            <Header isAuthenticated={false} />
            <main>
                <Banner />
                <FeaturesContainer />
            </main>
        </div>
    );
};

export default Home;
