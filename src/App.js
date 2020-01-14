import React from "react";
import { StickyContainer, Sticky } from 'react-sticky';

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
            {/* <StickyContainer> */}
            {/* <Sticky> */}
                {/* {({style})=><Navbar style={style}/>} */}
            {/* </Sticky> */}
            <Navbar />
            <Carousel />
            <Cards />
            <About />
            <News />
            <Footer />
            {/* </StickyContainer> */}
        </>
    );
}

export default App;