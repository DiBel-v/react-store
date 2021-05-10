import React from 'react';
import './app.sass';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';

const App = () => {
    return (
        <main role="main" className="app">
            <Header />
            <Main />
            <Footer />
        </main>
    );
}

export default App;
