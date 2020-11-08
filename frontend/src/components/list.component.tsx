import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { IProperty } from "../models/property.model";
import PropertyCard from "./property-card.component";

const ListProperties: React.FC<{ properties: IProperty[] }> = ({
  properties,
}) => {
  return (
    <>
      {properties.map((property) => (
        <Row key={property.id} style={{ width: "80%" }}>
          <Col>
            <PropertyCard property={property} />
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ListProperties;
