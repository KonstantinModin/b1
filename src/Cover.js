import React from 'react';

const Cover = ({ scrollButtonHandler }) => {
    return (
        <section id="cover">
        <div id="cover-caption">
          <div className="container">
            <div className="col-sm-10 offset-sm-1"></div>
            <h1 className="display-3">Welcome to Bootstrap 4</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              possimus veritatis maiores soluta ut modi illum expedita at
              impedit voluptatem accusamus officiis asperiores cum aut vitae
              vero iure. Quasi, quos?
            </p>
            <form action="" className="form-inline justify-content-center">
              <div className="form-group">
                <label className="sr-only">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="John Malcovich"
                ></input>
                <label className="sr-only">E-mail</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="john.malcovich@gmail.com"
                ></input>
              </div>
              <button className="btn btn-success btn-lg">Get it!</button>
            </form>
            <br />
            <button 
              className="btn btn-outline-light btn-sm" 
              onClick={scrollButtonHandler}
              >&darr;</button>
          </div>
        </div>
      </section>
    )
}

export default Cover;
