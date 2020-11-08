import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { IProperty } from "../models/property.model";

type TPropertyCardProps = {
  property: IProperty;
};
const PropertyCard: React.FC<TPropertyCardProps> = ({ property }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Row>
        <Col>
          <Card.Img src={property.image} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title as="div">
              <h1>{property.name}</h1>
            </Card.Title>
            <Card.Text as="div">
              Number of bed: {property.numberOfBedrooms}
            </Card.Text>
            <Card.Text as="div">
              Address: {property.address}, {property.postcode}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Text as="div">
              <div className="my-3">
                <h3>{property.description}</h3>
              </div>
            </Card.Text>
            <Card.Text as="div">
              <h5>Is Expred? {property.expired ? "Yes" : "No"}</h5>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PropertyCard;
