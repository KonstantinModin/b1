import React from "react";

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <p>Copyright 2015 Konstantin Modin</p>
          </div>
          <div className="col-sm-3">
            <ul className="list-unstyled">
              <li><button href="">what we do</button></li>
              <li><button href="">home</button></li>
              <li><button href="">about</button></li>
              <li><button href="">latest</button></li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul className="list-unstyled">
              <li><button href="">facebook</button></li>
              <li><button href="">twitter</button></li>
              <li><button href="">youtube</button></li>
              <li><button href="">linkedin</button></li>
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
