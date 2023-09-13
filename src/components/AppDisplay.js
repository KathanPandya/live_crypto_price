import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AppDisplay = ({ filteredCrypto }) => {
  return (
    <div className="appBody">
      {filteredCrypto.map((coin) => {
        return (
          <div key={coin.id}>
            <Card border="warning" bg="light">
              <Card.Header as="h5">
                <img src={coin.icon} />
              </Card.Header>
              <Card.Body>
                <Card.Title>Name: {coin.name}</Card.Title>
                <Card.Text>
                  <h3>Price: {coin.price}</h3>
                  <h3>MarketCap: {coin.marketCap}</h3>
                </Card.Text>
                <Link>
                  <Button variant="warning">Know More</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default AppDisplay;
