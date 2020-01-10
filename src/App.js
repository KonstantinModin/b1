import React from "react";
import first from "./woman-camera.jpg";
import second from "./spiderweb.jpg";
import third from "./hearthand.jpg";
import prog from "./programming.jpg";
import chalk from "./chalkboard.jpg";
import type from "./working.jpg";
import stars from './stars.jpg';
import {
  Carousel,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Card,
  CardColumns,
  CardGroup
} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
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
            <button className="btn btn-outline-light btn-sm">&darr;</button>
          </div>
        </div>
      </section>

      {/* NavBar */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={first} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={second} alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={third} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <CardColumns className="cards">
        <Card>
          <Card.Img variant="top" src={prog} />
          <Card.Body>
            <Card.Title>Card title that wraps to a new line</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Img variant="top" src={chalk} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card bg="primary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img src={type} />
        </Card>
        <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
      <section id="about">
        <div className="section-content">
          <div className="container">
            <div className="col-md-6">
              <div className="about-text">
                <h3>About me</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem unde adipisci saepe quam animi esse doloremque
                  voluptatem distinctio et suscipit dolorem perferendis
                  blanditiis, laboriosam quas nobis! Nisi ullam ipsam ea!
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem unde adipisci saepe quam animi esse doloremque
                  voluptatem distinctio et suscipit dolorem perferendis
                  blanditiis, laboriosam quas nobis! Nisi ullam ipsam ea!
                </p>
                <h5>Folow me on the web</h5>
                <button className="btn btn-sm btn-secondary">twitter</button>
                <button className="btn btn-sm btn-secondary">facebook</button>
                <button className="btn btn-sm btn-secondary">youtube</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="title">
          <h3>Latest News</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iusto
            id exercitationem eaque qui architecto modi iure temporibus rem,
            ullam at, excepturi dolore tenetur illum? Laborum a deleniti
            adipisci mollitia.
          </p>
        </div>

        
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={second} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success">Success right Now!</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={stars} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
              <Button variant="success">Success right Now!</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={chalk} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
              <Button variant="success">Success right Now!</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </section>
      <footer className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <p>Copyright 2015 Konstantin Modin</p>
            </div>
            <div className="col-sm-3">
              <ul className="list-unstyled">
                <li><a href="">home</a></li>
                <li><a href="">what we do</a></li>
                <li><a href="">about</a></li>
                <li><a href="">latest</a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul className="list-unstyled">
                <li><a href="">facebook</a></li>
                <li><a href="">twitter</a></li>
                <li><a href="">youtube</a></li>
                <li><a href="">linkedin</a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h6>Tiny header</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rerum, error asperiores expedita facilis voluptatibus doloremque voluptatem ab corporis qui atque nihil, magni hic cupiditate fugiat eligendi! Recusandae, iste? Laudantium?</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
