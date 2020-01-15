import React from "react";

const Footer = () => {
  const expandButtonsFromArray = array => array.map((e,i)=>
    <li key={i}><button className="btn btn-sm btn-outline-info">{e}</button></li>
  )
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <p>Copyright 2015 Konstantin Modin</p>
          </div>
          <div className="col-sm-3">
            <ul className="list-unstyled d-flex flex-column align-items-center">
              {expandButtonsFromArray(['what we do','home','about','latest'])}              
            </ul>
          </div>
          <div className="col-sm-3">
            <ul className="list-unstyled d-flex flex-column align-items-center">
              {expandButtonsFromArray(['facebook','twitter','youtube','linkedin'])}
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>Tiny header</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              rerum, error asperiores expedita facilis voluptatibus doloremque
              voluptatem ab corporis qui atque nihil, magni hic cupiditate
              fugiat eligendi! Recusandae, iste? Laudantium?
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
