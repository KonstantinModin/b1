import React, { useEffect, useState } from "react";
// import { StickyContainer, Sticky } from 'react-sticky';
import { Container } from 'react-bootstrap';

import Cover from "./Cover";
import Navbar from "./NavBar";
import Carousel from "./Carousel";
import Cards from "./Cards";
import About from "./About";
import News from "./News";
import Footer from "./Footer";

import "./App.css";

const App = () => {
    // const ref = React.createRef();
    // const [sticky, setSticky] = useState(false);

    // useEffect(()=>{
    //     const scrollHandler = () => {
    //         setSticky(ref.current ? (window.scrollY >= ref.current.offsetTop) : false);
    //         // console.log(window.scrollY, ref.current.offsetTop, sticky, ref.current, window.scrollY >= ref.current.offsetTop );
    //     }

    //     window.addEventListener('scroll', scrollHandler);
    //     return () => window.removeEventListener('scroll', scrollHandler);
    // },[]);

    

    return (
        <Container 
            className="firstDiv"
            // onScroll={}
        >
            {/* <div className="system">{sticky.toString()}</div> */}
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
        </Container>
    );
}

export default App;