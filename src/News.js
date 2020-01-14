import React from 'react';
import second from "./spiderweb.jpg";
import chalk from "./chalkboard.jpg";
import stars from './stars.jpg';
import { Button, Card, CardGroup } from "react-bootstrap";

const News = () => {
    return (
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
    )
}

export default News;
