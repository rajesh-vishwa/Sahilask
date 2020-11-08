import React from "react";

import PropertyCard from "./property-card.component";

import { shallow } from "enzyme";
import { IProperty } from "../models/property.model";

describe("<PropertyCard />", () => {
  const propertyProps: IProperty = {
    id: 1,
    name: "Purple Bricks",
    image: "/images/airpods.jpg",
    numberOfBedrooms: 2,
    address: "Mansford Street, London E2",
    postcode: "E2Y00",
    description: "2 rooms flat for sale",
    expired: false,
  };
  const wrapper = shallow(<PropertyCard property={propertyProps} />);
  it("should match the snapshot ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should accepts property props", () => {
    expect(wrapper.props().property).not.toBeNull();
  });
});
