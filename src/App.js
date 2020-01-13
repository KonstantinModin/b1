import React from "react";

import Cover from "./Cover";
import Navbar from "./NavBar";
import Carousel from "./Carousel";
import Cards from "./Cards";
import About from "./About";
import News from "./News";
import Footer from "./Footer";

import "./App.css";

const App = () => {
    return (
        <>
            <Cover />
            <Navbar />
            <Carousel />
            <Cards />
            <About />
            <News />
            <Footer />
        </>
    );
}

export default App;