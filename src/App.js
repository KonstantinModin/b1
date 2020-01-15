import React, { useRef } from "react";
 
import Cover from "./Cover";
import Navbar from "./NavBar";
import Carousel from "./Carousel";
import Cards from "./Cards";
import About from "./About";
import News from "./News";
import Footer from "./Footer";

import "./App.css";

const App = () => {
    const nav = useRef();

    const scrollButtonHandler = () => {
        window.scroll(0, nav.current.offsetTop);
    }

    return (
        <>
            <Cover scrollButtonHandler={scrollButtonHandler}/>
            <Navbar ref={nav}/>
            <Carousel />
            <Cards />
            <About />
            <News />
            <Footer />
        </>
    );
};

export default App;